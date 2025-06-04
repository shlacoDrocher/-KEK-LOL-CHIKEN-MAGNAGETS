#include "input.h"
#include "../constants/constants.h"
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <sys/stat.h>
#include <unistd.h>

void parse_command_line_args(int argc, char *argv[], CommandLineParams *params) {
    // Устанавливаем значения по умолчанию
    params->run_as_daemon = false;
    params->pid_file = DEFAULT_PID_FILE;
    params->web_root = DEFAULT_WEB_ROOT;
    params->port = DEFAULT_PORT;
    
    bool should_exit = false;
    int exit_code = EXIT_SUCCESS;
    
    // Парсим аргументы командной строки
    for (int i = 1; i < argc && !should_exit; i++) {
        if (strcmp(argv[i], "-d") == 0 || strcmp(argv[i], "--daemon") == 0) {
            params->run_as_daemon = true;
        } else if ((strcmp(argv[i], "-p") == 0 || strcmp(argv[i], "--pid") == 0) && i + 1 < argc) {
            params->pid_file = argv[++i];
        } else if ((strcmp(argv[i], "-r") == 0 || strcmp(argv[i], "--root") == 0) && i + 1 < argc) {
            params->web_root = argv[++i];
        } else if ((strcmp(argv[i], "-P") == 0 || strcmp(argv[i], "--port") == 0) && i + 1 < argc) {
            params->port = argv[++i];
        } else if (strcmp(argv[i], "-h") == 0 || strcmp(argv[i], "--help") == 0) {
            print_usage(argv[0]);
            should_exit = true;
        }
    }
    
    // Проверяем существование директории с веб-файлами
    if (!should_exit && !check_directory_exists(params->web_root)) {
        fprintf(stderr, "Ошибка: директория '%s' не существует\n", params->web_root);
        should_exit = true;
        exit_code = EXIT_FAILURE;
    }
    
    if (should_exit) {
        exit(exit_code);
    }
}

void print_usage(const char *program_name) {
    printf("Использование: %s [ОПЦИИ]\n", program_name);
    printf("Опции:\n");
    printf("  -d, --daemon           Запустить как демон\n");
    printf("  -p, --pid FILE         Путь к PID файлу (по умолчанию: %s)\n", DEFAULT_PID_FILE);
    printf("  -r, --root DIR         Корневая директория для веб-файлов (по умолчанию: %s)\n", DEFAULT_WEB_ROOT);
    printf("  -P, --port PORT        Порт для веб-сервера (по умолчанию: %s)\n", DEFAULT_PORT);
    printf("  -h, --help             Показать эту справку и выйти\n");
}

bool check_directory_exists(const char *directory) {
    struct stat st;
    bool exists = false;
    
    if (stat(directory, &st) == 0 && S_ISDIR(st.st_mode)) {
        exists = true;
    }
    
    return exists;
}

const char *get_mime_type(const char *path) {
    const char *mime_type = MIME_TYPE_PLAIN;
    
    // Определяем MIME-тип по расширению файла
    if (strstr(path, ".jpg") || strstr(path, ".jpeg")) {
        mime_type = MIME_TYPE_JPEG;
    } else if (strstr(path, ".mp3")) {
        mime_type = MIME_TYPE_MP3;
    } else if (strstr(path, ".mp4")) {
        mime_type = MIME_TYPE_MP4;
    } else if (strstr(path, ".gif")) {
        mime_type = MIME_TYPE_GIF;
    } else if (strstr(path, ".webm")) {
        mime_type = MIME_TYPE_WEBM;
    } else if (strstr(path, ".html")) {
        mime_type = MIME_TYPE_HTML;
    } else if (strstr(path, ".css")) {
        mime_type = MIME_TYPE_CSS;
    } else if (strstr(path, ".js")) {
        mime_type = MIME_TYPE_JS;
    }
    
    return mime_type;
}
