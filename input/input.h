#ifndef INPUT_H
#define INPUT_H

#include <stdbool.h>

/**
 * @brief Структура для хранения параметров командной строки
 */
typedef struct {
    bool run_as_daemon;      // Флаг запуска в режиме демона
    const char *pid_file;    // Путь к PID файлу
    const char *web_root;    // Корневая директория для веб-файлов
    const char *port;        // Порт для веб-сервера
} CommandLineParams;

/**
 * @brief Парсит аргументы командной строки
 * 
 * @param argc Количество аргументов
 * @param argv Массив аргументов
 * @param params Указатель на структуру для сохранения параметров
 */
void parse_command_line_args(int argc, char *argv[], CommandLineParams *params);

/**
 * @brief Выводит справку по использованию программы
 */
void print_usage(const char *program_name);

/**
 * @brief Проверяет существование директории
 * 
 * @param directory Путь к директории
 * @return true если директория существует, false в противном случае
 */
bool check_directory_exists(const char *directory);

/**
 * @brief Определяет MIME-тип по расширению файла
 * 
 * @param path Путь к файлу
 * @return Строка с MIME-типом
 */
const char *get_mime_type(const char *path);

#endif // INPUT_H
