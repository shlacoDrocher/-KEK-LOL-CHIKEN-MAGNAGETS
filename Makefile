CC = gcc
CFLAGS = -W -Wall -Wextra -O2 -g
LDFLAGS = -pthread

TARGET = server
SRCDIR = .
OBJDIR = obj
MONGOOSE_DIR = mongoose
INPUT_DIR = input
CONSTANTS_DIR = constants
LOGGER_DIR = logger

# Исходные файлы
SRCS = $(SRCDIR)/main.c \
       $(MONGOOSE_DIR)/mongoose.c \
       $(INPUT_DIR)/input.c \
       $(LOGGER_DIR)/logger.c

# Заголовочные файлы
HEADERS = $(MONGOOSE_DIR)/mongoose.h \
          $(INPUT_DIR)/input.h \
          $(CONSTANTS_DIR)/constants.h \
          $(LOGGER_DIR)/logger.h

# Объектные файлы
OBJS = $(patsubst $(SRCDIR)/%.c,$(OBJDIR)/%.o,$(SRCS))

# Директории для поиска заголовочных файлов
INCLUDES = -I$(SRCDIR) -I$(MONGOOSE_DIR) -I$(INPUT_DIR) -I$(CONSTANTS_DIR) -I$(LOGGER_DIR)

# Создание директорий для объектных файлов
OBJDIRS = $(sort $(dir $(OBJS)))

.PHONY: all clean run debug install uninstall help

all: $(TARGET)

# Правило для создания директорий объектных файлов
$(OBJDIRS):
	mkdir -p $@

# Правило для компиляции объектных файлов
$(OBJDIR)/%.o: $(SRCDIR)/%.c $(HEADERS) | $(OBJDIRS)
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

$(OBJDIR)/$(MONGOOSE_DIR)/%.o: $(MONGOOSE_DIR)/%.c $(HEADERS) | $(OBJDIRS)
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

$(OBJDIR)/$(INPUT_DIR)/%.o: $(INPUT_DIR)/%.c $(HEADERS) | $(OBJDIRS)
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

$(OBJDIR)/$(LOGGER_DIR)/%.o: $(LOGGER_DIR)/%.c $(HEADERS) | $(OBJDIRS)
	$(CC) $(CFLAGS) $(INCLUDES) -c $< -o $@

# Правило для сборки исполняемого файла
$(TARGET): $(OBJS)
	$(CC) $(CFLAGS) -o $@ $^ $(LDFLAGS)

# Правило для очистки сборки
clean:
	rm -rf $(OBJDIR) $(TARGET)

# Правило для запуска сервера
run: $(TARGET)
	./$(TARGET)

# Правило для запуска сервера в фоновом режиме
daemon: $(TARGET)
	./$(TARGET) -d

# Правило для запуска сервера с отладочной информацией
debug: CFLAGS += -DDEBUG
debug: clean all

# Правило для установки сервера
install: $(TARGET)
	mkdir -p /usr/local/bin
	cp $(TARGET) /usr/local/bin/
	chmod +x /usr/local/bin/$(TARGET)

# Правило для удаления установленного сервера
uninstall:
	rm -f /usr/local/bin/$(TARGET)

# Правило для остановки сервера
stop:
	@if [ -f /tmp/server.pid ]; then \
		echo "Stopping server with PID $$(cat /tmp/server.pid)"; \
		kill -TERM $$(cat /tmp/server.pid); \
	else \
		echo "Server PID file not found"; \
	fi

# Правило для вывода справки
help:
	@echo "Доступные команды:"
	@echo "  make        - Сборка сервера"
	@echo "  make clean  - Очистка сборки"
	@echo "  make run    - Запуск сервера в обычном режиме"
	@echo "  make daemon - Запуск сервера в фоновом режиме"
	@echo "  make debug  - Сборка с отладочной информацией"
	@echo "  make stop   - Остановка запущенного сервера"
	@echo "  make install - Установка сервера в систему"
	@echo "  make uninstall - Удаление сервера из системы"