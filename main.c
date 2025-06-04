#include "./mongoose/mongoose.h"
#include "./input/input.h"
#include "./constants/constants.h"
#include "./logger/logger.h"
#include <signal.h>
#include <stdlib.h>
#include <stdbool.h>
#include <stdio.h>
#include <unistd.h>
#include <sys/stat.h>
#include <fcntl.h>
#include <errno.h>
#include <time.h>
#include <stdarg.h>
#include <dirent.h>

static const char *s_web_root = DEFAULT_WEB_ROOT;
static struct mg_mgr mgr;  // Глобальная переменная для доступа к менеджеру соединений
static int s_sigterm_received = 0;  // Флаг получения сигнала SIGTERM
static const char *s_pid_file = DEFAULT_PID_FILE;  // Глобальная переменная для доступа к пути PID файла

// Функция для демонизации процесса
static void daemonize() {
    pid_t pid;
    int exit_code = EXIT_SUCCESS;
    bool should_exit = false;
    
    // Первый fork для отсоединения от терминала
    pid = fork();
    if (pid < 0) {
        perror("fork");
        exit_code = EXIT_FAILURE;
        should_exit = true;
    } else if (pid > 0) {
        // Если это родительский процесс, завершаем его
        should_exit = true;
    }
    
    if (should_exit) {
        exit(exit_code);
    }
    
    // Создаем новую сессию
    if (setsid() < 0) {
        perror("setsid");
        exit_code = EXIT_FAILURE;
        should_exit = true;
    }
    
    if (!should_exit) {
        // Игнорируем сигналы терминала
        signal(SIGCHLD, SIG_IGN);
        signal(SIGHUP, SIG_IGN);
        
        // Второй fork для предотвращения возможности повторного получения управляющего терминала
        pid = fork();
        if (pid < 0) {
            perror("fork");
            exit_code = EXIT_FAILURE;
            should_exit = true;
        } else if (pid > 0) {
            // Если это родительский процесс, завершаем его
            exit_code = EXIT_SUCCESS;
            should_exit = true;
        }
    }
    
    if (!should_exit) {
        // НЕ меняем рабочую директорию, чтобы сохранить доступ к файлам в текущей директории
        
        // Закрываем все открытые файловые дескрипторы, кроме дескриптора логгера
        int log_fd = -1;
        FILE *log_fp = NULL;
        
        // Получаем файловый дескриптор логгера, если возможно
        // Это нужно для сохранения логирования после демонизации
        log_fp = fopen(DEFAULT_LOG_FILE, "a");
        if (log_fp != NULL) {
            log_fd = fileno(log_fp);
            // Не закрываем файл, чтобы дескриптор остался открытым
        }
        
        for (int i = 0; i < 1024; i++) {
            if (i != log_fd) {
                close(i);
            }
        }
        
        // Перенаправляем стандартные потоки в /dev/null
        int fd = open("/dev/null", O_RDWR);
        if (fd >= 0) {
            dup2(fd, STDIN_FILENO);
            dup2(fd, STDOUT_FILENO);
            dup2(fd, STDERR_FILENO);
            if (fd > 2 && fd != log_fd) {
                close(fd);
            }
        }
        
        // Устанавливаем разрешения для создаваемых файлов
        umask(0);
    }
    
    if (should_exit) {
        exit(exit_code);
    }
}

// Функция для записи PID в файл
static void write_pid_file(const char *pid_file) {
    FILE *f = NULL;
    bool success = false;
    int exit_code = EXIT_FAILURE;
    bool should_exit = false;
    
    f = fopen(pid_file, "w");
    if (f != NULL) {
        if (fprintf(f, "%d\n", getpid()) > 0) {
            success = true;
        }
        fclose(f);
    }
    
    if (!success) {
        fprintf(stderr, "Cannot write to PID file %s: %s\n", pid_file, strerror(errno));
        logger_error("Cannot write to PID file %s: %s", pid_file, strerror(errno));
        should_exit = true;
    }
    
    if (should_exit) {
        exit(exit_code);
    }
}

// Обработчик сигнала SIGTERM
static void signal_handler(int sig_num) {
    if (sig_num == SIGTERM) {
        s_sigterm_received = 1;
        // Не используем printf в обработчике сигнала, так как это небезопасно
        // Просто устанавливаем флаг, цикл опроса проверит его
    }
}

// Функция для получения списка видео файлов
static void get_video_list(struct mg_connection *c) {
    DIR *dir;
    struct dirent *entry;
    char response[4096] = "{\"videos\":[";
    char *ptr = response + strlen(response);
    bool first = true;
    
    // Формируем полный путь к директории с видео
    char video_dir[MAX_PATH_SIZE];
    snprintf(video_dir, sizeof(video_dir), "%s/media/video", s_web_root);
    
    dir = opendir(video_dir);
    if (dir) {
        while ((entry = readdir(dir)) != NULL) {
            // Пропускаем директории и скрытые файлы
            if (!(entry->d_type == DT_DIR || entry->d_name[0] == '.')) {
                // Проверяем расширение файла (mp4 или webm)
                const char *ext = strrchr(entry->d_name, '.');
                if (ext && (strcmp(ext, ".mp4") == 0 || strcmp(ext, ".webm") == 0)) {
                    if (!first) {
                        *ptr++ = ',';
                    }
                    first = false;
                    
                    // Добавляем имя файла в JSON
                    ptr += snprintf(ptr, sizeof(response) - (ptr - response),
                                   "{\"name\":\"%s\",\"path\":\"media/video/%s\"}", 
                                   entry->d_name, entry->d_name);
                }
            }
        }
        closedir(dir);
    } else {
        // Логируем ошибку, если директория недоступна
        logger_error("Не удалось открыть директорию с видео: %s", video_dir);
    }
    
    // Завершаем JSON
    ptr += snprintf(ptr, sizeof(response) - (ptr - response), "]}");
    
    // Отправляем ответ
    mg_http_reply(c, 200, "Content-Type: application/json\r\nAccess-Control-Allow-Origin: *\r\n", "%s", response);
    
    logger_info("API запрос: получение списка видео");
}

static void ev_handler(struct mg_connection *c, int ev, void *ev_data) {
    if (ev == MG_EV_HTTP_MSG) {
        struct mg_http_message *hm = (struct mg_http_message *) ev_data;
        
        // Создаем буфер для полного пути
        char path[MAX_PATH_SIZE];
        snprintf(path, sizeof(path), "%.*s", (int)hm->uri.len, hm->uri.buf);
        
        // Логируем запрос
        logger_info("HTTP запрос: %s", path);
        
        // Проверяем, является ли запрос API-запросом для получения списка видео
        if (mg_strcmp(hm->uri, mg_str("/api/videos")) == 0) {
            get_video_list(c);
            return;
        }
        
        // Определяем MIME-тип по расширению
        const char *mime_type = get_mime_type(path);
        
        // Если это корневой URL, установим MIME-тип для HTML
        if ((hm->uri.len == 1 && hm->uri.buf[0] == '/') || 
            (mg_strcmp(hm->uri, mg_str("/index.html")) == 0)) {
            mime_type = MIME_TYPE_HTML;
        }
        
        // Формируем дополнительные заголовки
        char headers[MAX_HEADERS_SIZE];
        snprintf(headers, sizeof(headers), "Content-Type: %s\r\n", mime_type);
        
        struct mg_http_serve_opts opts = {
            .root_dir = s_web_root,
            .extra_headers = headers
        };
        
        mg_http_serve_dir(c, hm, &opts);
    }
}

// Функция для безопасной обработки сигналов
static void check_for_termination(struct mg_mgr *mgr) {
    if (s_sigterm_received) {
        // Закрываем все соединения
        struct mg_connection *c;
        for (c = mgr->conns; c != NULL; c = c->next) {
            c->is_closing = 1;
        }
    }
}

// Функция для очистки ресурсов при завершении
static void cleanup_resources() {
    // Корректно освобождаем ресурсы
    mg_mgr_free(&mgr);
    
    // Удаляем PID-файл при завершении
    unlink(s_pid_file);
    
    // Закрываем логгер
    logger_info("Сервер остановлен");
    logger_close();
}

int main(int argc, char *argv[]) {
    bool run_as_daemon = false;
    int result = EXIT_SUCCESS;
    CommandLineParams params = {0};
    bool should_exit = false;
    
    // Инициализируем параметры по умолчанию
    params.run_as_daemon = false;
    params.pid_file = DEFAULT_PID_FILE;
    params.web_root = DEFAULT_WEB_ROOT;
    params.port = DEFAULT_PORT;
    
    // Обработка аргументов командной строки
    parse_command_line_args(argc, argv, &params);
    
    // Сохраняем параметры в глобальные переменные
    run_as_daemon = params.run_as_daemon;
    s_web_root = params.web_root;
    s_pid_file = params.pid_file;
    
    // Инициализируем логгер
    if (!logger_init(DEFAULT_LOG_DIR, "server.log")) {
        fprintf(stderr, "Ошибка при инициализации логгера\n");
        result = EXIT_FAILURE;
        should_exit = true;
    }
    
    // Запускаем в режиме демона, если указан флаг и не было ошибок
    if (!should_exit && run_as_daemon) {
        logger_info("Запуск сервера в режиме демона");
        daemonize();
        
        // Переинициализируем логгер после демонизации
        logger_close();
        if (!logger_init(DEFAULT_LOG_DIR, "server.log")) {
            result = EXIT_FAILURE;
            should_exit = true;
        } else {
            logger_info("Сервер успешно демонизирован");
        }
    }
    
    // Записываем PID в файл, если не было ошибок
    if (!should_exit) {
        write_pid_file(s_pid_file);
        logger_info("PID сервера: %d", getpid());
        
        // Инициализируем менеджер соединений
        mg_mgr_init(&mgr);
        
        // Установка обработчика сигнала SIGTERM
        signal(SIGTERM, signal_handler);
        
        // Выводим информацию о запуске только если не в режиме демона
        if (!run_as_daemon) {
            printf("Starting server on http://localhost:%s\n", params.port);
            printf("PID сервера: %d\n", getpid());
        }
        
        logger_info("Starting server on http://localhost:%s", params.port);
        
        // Формируем адрес для прослушивания
        char listen_addr[64];
        snprintf(listen_addr, sizeof(listen_addr), "http://0.0.0.0:%s", params.port);
        
        // Начинаем прослушивать соединения
        struct mg_connection *conn = mg_http_listen(&mgr, listen_addr, ev_handler, NULL);
        
        if (conn == NULL) {
            if (!run_as_daemon) {
                fprintf(stderr, "Не удалось запустить сервер на %s\n", listen_addr);
            }
            logger_error("Не удалось запустить сервер на %s", listen_addr);
            result = EXIT_FAILURE;
        } else {
            logger_info("Сервер успешно запущен на %s", listen_addr);
            
            // Цикл опроса соединений
            while (!s_sigterm_received) {
                mg_mgr_poll(&mgr, 1000);
                // Проверяем флаг завершения после каждого опроса
                check_for_termination(&mgr);
            }
            
            logger_info("Получен сигнал SIGTERM, завершаем работу");
        }
        
        // Очищаем ресурсы перед выходом
        cleanup_resources();
    }
    
    return result;
}