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


