#include "logger.h"
#include "../constants/constants.h"
#include <stdio.h>
#include <stdlib.h>
#include <stdarg.h>
#include <time.h>
#include <string.h>
#include <sys/stat.h>
#include <errno.h>
#include <unistd.h>

static FILE *log_fp = NULL;
static char log_file_path[MAX_PATH_SIZE];

// Строковые представления уровней логирования
static const char *log_level_strings[] = {
    "DEBUG",
    "INFO",
    "WARNING",
    "ERROR",
    "CRITICAL"
};

// Создание директории, если она не существует
static bool ensure_directory_exists(const char *dir_path) {
    struct stat st = {0};
    bool result = true;
    
    // Проверяем, существует ли директория
    if (stat(dir_path, &st) == -1) {
        // Создаем директорию с правами 0755 (rwxr-xr-x)
        if (mkdir(dir_path, 0755) == -1) {
            fprintf(stderr, "Ошибка при создании директории %s: %s\n", dir_path, strerror(errno));
            result = false;
        }
    } else if (!S_ISDIR(st.st_mode)) {
        // Путь существует, но это не директория
        fprintf(stderr, "%s существует, но не является директорией\n", dir_path);
        result = false;
    }
    
    return result;
}

// Инициализация логгера
bool logger_init(const char *log_dir, const char *log_file) {
    bool result = true;
    
    // Если логгер уже инициализирован, закрываем его
    if (log_fp != NULL) {
        fclose(log_fp);
        log_fp = NULL;
    }
    
    // Убеждаемся, что директория для логов существует
    if (result && !ensure_directory_exists(log_dir)) {
        result = false;
    }
    
    // Формируем полный путь к файлу лога
    if (result) {
        snprintf(log_file_path, sizeof(log_file_path), "%s/%s", log_dir, log_file);
        
        // Открываем файл лога для добавления записей
        log_fp = fopen(log_file_path, "a");
        if (log_fp == NULL) {
            fprintf(stderr, "Ошибка при открытии файла лога %s: %s\n", log_file_path, strerror(errno));
            result = false;
        }
    }
    
    // Логируем начало сессии
    if (result) {
        time_t now = time(NULL);
        struct tm *tm_info = localtime(&now);
        char time_str[26];
        strftime(time_str, sizeof(time_str), "%Y-%m-%d %H:%M:%S", tm_info);
        
        fprintf(log_fp, "\n[%s] [INFO] === Начало сессии логирования ===\n", time_str);
        fflush(log_fp);
    }
    
    return result;
}

// Закрытие логгера
void logger_close(void) {
    if (log_fp != NULL) {
        // Логируем окончание сессии
        time_t now = time(NULL);
        struct tm *tm_info = localtime(&now);
        char time_str[26];
        strftime(time_str, sizeof(time_str), "%Y-%m-%d %H:%M:%S", tm_info);
        
        fprintf(log_fp, "[%s] [INFO] === Окончание сессии логирования ===\n", time_str);
        
        // Закрываем файл лога
        fclose(log_fp);
        log_fp = NULL;
    }
}

// Логирование сообщения с указанным уровнем
void logger_log(LogLevel level, const char *format, ...) {
    va_list args;
    
    if (log_fp != NULL) {
        // Получаем текущее время
        time_t now = time(NULL);
        struct tm *tm_info = localtime(&now);
        char time_str[26];
        strftime(time_str, sizeof(time_str), "%Y-%m-%d %H:%M:%S", tm_info);
        
        // Выводим время и уровень логирования
        fprintf(log_fp, "[%s] [%s] ", time_str, log_level_strings[level]);
        
        // Выводим сообщение с переменными аргументами
        va_start(args, format);
        vfprintf(log_fp, format, args);
        va_end(args);
        
        // Добавляем перенос строки и сбрасываем буфер
        fprintf(log_fp, "\n");
        fflush(log_fp);
    }
}

// Вспомогательные функции для разных уровней логирования
void logger_debug(const char *format, ...) {
    va_list args;
    
    if (log_fp != NULL) {
        va_start(args, format);
        
        // Получаем текущее время
        time_t now = time(NULL);
        struct tm *tm_info = localtime(&now);
        char time_str[26];
        strftime(time_str, sizeof(time_str), "%Y-%m-%d %H:%M:%S", tm_info);
        
        // Выводим время и уровень логирования
        fprintf(log_fp, "[%s] [DEBUG] ", time_str);
        
        // Выводим сообщение
        vfprintf(log_fp, format, args);
        
        // Добавляем перенос строки и сбрасываем буфер
        fprintf(log_fp, "\n");
        fflush(log_fp);
        
        va_end(args);
    }
}

void logger_info(const char *format, ...) {
    va_list args;
    
    if (log_fp != NULL) {
        va_start(args, format);
        
        // Получаем текущее время
        time_t now = time(NULL);
        struct tm *tm_info = localtime(&now);
        char time_str[26];
        strftime(time_str, sizeof(time_str), "%Y-%m-%d %H:%M:%S", tm_info);
        
        // Выводим время и уровень логирования
        fprintf(log_fp, "[%s] [INFO] ", time_str);
        
        // Выводим сообщение
        vfprintf(log_fp, format, args);
        
        // Добавляем перенос строки и сбрасываем буфер
        fprintf(log_fp, "\n");
        fflush(log_fp);
        
        va_end(args);
    }
}

void logger_warning(const char *format, ...) {
    va_list args;
    
    if (log_fp != NULL) {
        va_start(args, format);
        
        // Получаем текущее время
        time_t now = time(NULL);
        struct tm *tm_info = localtime(&now);
        char time_str[26];
        strftime(time_str, sizeof(time_str), "%Y-%m-%d %H:%M:%S", tm_info);
        
        // Выводим время и уровень логирования
        fprintf(log_fp, "[%s] [WARNING] ", time_str);
        
        // Выводим сообщение
        vfprintf(log_fp, format, args);
        
        // Добавляем перенос строки и сбрасываем буфер
        fprintf(log_fp, "\n");
        fflush(log_fp);
        
        va_end(args);
    }
}

void logger_error(const char *format, ...) {
    va_list args;
    
    if (log_fp != NULL) {
        va_start(args, format);
        
        // Получаем текущее время
        time_t now = time(NULL);
        struct tm *tm_info = localtime(&now);
        char time_str[26];
        strftime(time_str, sizeof(time_str), "%Y-%m-%d %H:%M:%S", tm_info);
        
        // Выводим время и уровень логирования
        fprintf(log_fp, "[%s] [ERROR] ", time_str);
        
        // Выводим сообщение
        vfprintf(log_fp, format, args);
        
        // Добавляем перенос строки и сбрасываем буфер
        fprintf(log_fp, "\n");
        fflush(log_fp);
        
        va_end(args);
    }
}

void logger_critical(const char *format, ...) {
    va_list args;
    
    if (log_fp != NULL) {
        va_start(args, format);
        
        // Получаем текущее время
        time_t now = time(NULL);
        struct tm *tm_info = localtime(&now);
        char time_str[26];
        strftime(time_str, sizeof(time_str), "%Y-%m-%d %H:%M:%S", tm_info);
        
        // Выводим время и уровень логирования
        fprintf(log_fp, "[%s] [CRITICAL] ", time_str);
        
        // Выводим сообщение
        vfprintf(log_fp, format, args);
        
        // Добавляем перенос строки и сбрасываем буфер
        fprintf(log_fp, "\n");
        fflush(log_fp);
        
        va_end(args);
    }
} 