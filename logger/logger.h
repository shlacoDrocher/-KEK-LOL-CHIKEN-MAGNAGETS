#ifndef LOGGER_H
#define LOGGER_H

#include <stdbool.h>

// Уровни логирования
typedef enum {
    LOG_LEVEL_DEBUG,
    LOG_LEVEL_INFO,
    LOG_LEVEL_WARNING,
    LOG_LEVEL_ERROR,
    LOG_LEVEL_CRITICAL
} LogLevel;

// Инициализация логгера
bool logger_init(const char *log_dir, const char *log_file);

// Закрытие логгера
void logger_close(void);

// Логирование сообщения с указанным уровнем
void logger_log(LogLevel level, const char *format, ...);

// Вспомогательные функции для разных уровней логирования
void logger_debug(const char *format, ...);
void logger_info(const char *format, ...);
void logger_warning(const char *format, ...);
void logger_error(const char *format, ...);
void logger_critical(const char *format, ...);

#endif // LOGGER_H 