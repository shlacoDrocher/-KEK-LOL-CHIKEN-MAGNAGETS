#ifndef CONSTANTS_H
#define CONSTANTS_H

// Порт по умолчанию для веб-сервера
#define DEFAULT_PORT "8000"

// Корневая директория для веб-файлов
#define DEFAULT_WEB_ROOT "templates"

// Путь к PID файлу по умолчанию
#define DEFAULT_PID_FILE "/tmp/server.pid"

// Путь к лог-файлу по умолчанию
#define DEFAULT_LOG_FILE "logs/server.log"

// Директория для логов
#define DEFAULT_LOG_DIR "logs"

// Максимальный размер пути к файлу
#define MAX_PATH_SIZE 256

// MIME типы для различных расширений файлов
#define MIME_TYPE_PLAIN "text/plain"
#define MIME_TYPE_HTML "text/html"
#define MIME_TYPE_CSS "text/css"
#define MIME_TYPE_JS "application/javascript"
#define MIME_TYPE_JPEG "image/jpeg"
#define MIME_TYPE_MP3 "audio/mpeg"
#define MIME_TYPE_MP4 "video/mp4"
#define MIME_TYPE_GIF "image/gif"
#define MIME_TYPE_WEBM "video/webm"

// Максимальный размер заголовков
#define MAX_HEADERS_SIZE 100

#endif // CONSTANTS_H
