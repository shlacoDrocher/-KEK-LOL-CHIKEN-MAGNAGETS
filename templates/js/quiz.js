const questions = [
    {
    text: 'Ты просыпаешься утром. Что ты первым делом делаешь?',
    options: [
      { text: 'Ору «бип буп бип» и падаю с кровати', value: 'boneka' },
      { text: 'Завариваю эспрессо на фоне оперы', value: 'ballerina' },
      { text: 'Надеваю меховую шляпу и выхожу бороться с гусеницами', value: 'gussini' },
      { text: 'Кричу «БАРАБУМ!» и танцую с холодильником', value: 'tungtung' },
    ]
  },
  {
    text: 'Выбери еду, которая больше всего отражает твою душу:',
    options: [
      { text: 'Пельмени в карамели', value: 'tripi' },
      { text: 'Суши из носков', value: 'bobrito' },
      { text: 'Банан, который требует адвоката перед очисткой', value: 'orangutini' },
      { text: 'Пицца со смыслом жизни', value: 'glorbo' },
    ]
  },
  {
    text: 'Какой звук ты бы издал на вечеринке?',
    options: [
      { text: 'Брррр патапим!', value: 'brrbrr' },
      { text: 'Та-та-та Сахууур', value: 'tungtung' },
      { text: 'Гарамараман мадудунгдунг!', value: 'garamaram' },
      { text: 'ААААА! Мои носки беременны тройняшками!', value: 'tralalero' },
    ]
  },
  {
    text: 'Какой твой стиль передвижения по городу?',
    options: [
      { text: 'На крокодиле', value: 'bombardilo' },
      { text: 'На ходулях, жонглируя багетом', value: 'boneka' },
      { text: 'Мчусь как ветер с бананом в руке', value: 'orangutini' },
      { text: 'Телепортируюсь через кофейные зёрна', value: 'ballerina' },
    ]
  },
  {
    text: 'Выбери свой жизненный девиз:',
    options: [
      { text: 'Тик-так, бум-бум — и я в деле', value: 'bombardilo' },
      { text: 'Каждый день — как капучино в цирке', value: 'assassino' },
      { text: 'Я не спотыкаюсь — я танцую с асфальтом.', value: 'gussini' },
      { text: 'Если жизнь — это бурбалони, танцуй с лулиоли', value: 'burballoni' },
    ]
  },
  {
    text: 'Твоё настроение в 3 часа ночи:',
    options: [
      { text: 'Бомбомбини ищет смысл в макаронах', value: 'gussini' },
      { text: 'Я разговариваю с лампой как с другом', value: 'lirili' },
      { text: 'Строю план по захвату детской площадки', value: 'yudin' },
      { text: 'Пишу оперу на латыни про шимпанзе', value: 'chimpanzini' },
    ]
  },
  {
    text: 'Ты идёшь по улице, и внезапно из кустов выходит музыкальный гусь. Что ты делаешь?',
    options: [
      { text: 'Жёстко его отжариваю', value: 'garamaram' },
      { text: 'Кричу «НЕ В ЭТОТ РАЗ, ГРИША!» и убегаю', value: 'kokofanto' },
      { text: 'Кормлю его булочкой с начинкой', value: 'chimpanzini' },
      { text: 'Делаю селфи и выкладываю в "Гуссограм"', value: 'spioniro' },
    ]
  },
  {
    text: 'Твой лучший способ расслабиться:',
    options: [
      { text: 'Гладить ананас против шерсти', value: 'orangutini' },
      { text: 'Смотреть, как чайник спорит с тостером', value: 'frigo' },
      { text: 'Танцевать с трёхлитровой банкой компота', value: 'burballoni' },
      { text: 'Кричать в коробку, пока она не ответит', value: 'brrbrr' },
    ]
  },
  {
    text: 'Что ты берёшь с собой в путешествие по пустыне?',
    options: [
      { text: 'Самораскладывающийся диван для внезапных философских пауз', value: 'bobrito' },
      { text: 'Будильник, который кричит мотивационные фразы', value: 'brrbrr' },
      { text: 'Камень, который уверен, что он хлеб', value: 'glorbo' },
      { text: 'Плюшевого генерала Пельменя', value: 'tripi' },
    ]
  },
  {
    text: 'Какой комплимент тебе бы точно запомнился?',
    options: [
      { text: 'Ты как пельмень в океане — потерянный, но невероятно вкусный', value: 'glorbo' },
      { text: 'Твои вибрации как у будильника в тазике — невозможно игнорировать', value: 'lirili' },
      { text: 'Ты обладаешь харизмой мокрой салфетки. В хорошем смысле!', value: 'spioniro' },
      { text: 'С тобой даже швабра чувствует себя любимой', value: 'tungtung' },
    ]
  },
  {
    text: 'Ты внезапно становишься знаменитостью. Кто ты?',
    options: [
      { text: 'Амбассадор тишины в общественных туалетах', value: 'bobrito' },
      { text: 'Звезда рекламы подгузников', value: 'frigo' },
      { text: 'Звезда реалити-шоу "Жизнь под диваном"', value: 'bombardilo' },
      { text: 'Новое лицо рекламы шампуня для лысых.', value: 'yudin' },
    ]
  },
  {
    text: 'Как бы тебя назвали в мультсериале?',
    options: [
      { text: 'Пупсик Гравитации', value: 'tralalero' },
      { text: 'Макарониус Печальнини', value: 'chimpanzini' },
      { text: 'Джамп-Джамп Пельмениус', value: 'burballoni' },
      { text: 'Лорд Капучино Пятый', value: 'assassino' },
    ]
  },
  {
    text: 'Ты попал в параллельную реальность. Что первым делом?',
    options: [
      { text: 'Проверяю, не женат ли я на женщине', value: 'spioniro' },
      { text: 'Объявляю себя Императором Недоваренной Лапши', value: 'yudin' },
      { text: 'Создаю группу поддержки для заблудших чайников', value: 'lirili' },
      { text: 'Присоединяюсь к обществу любителей пельменей', value: 'kokofanto' },
    ]
  },
  {
    text: 'Как ты ведёшь себя в очереди?',
    options: [
      { text: 'Показываю очереди какие на мне сейчас трусы', value: 'garamaram' },
      { text: 'Поддерживаю морально кассира песнями', value: 'tralalero' },
      { text: 'Импровизирую балет между тележками', value: 'ballerina' },
      { text: 'Сравниваю себя с кассовой лентой', value: 'frigo' },
    ]
  },
  {
    text: 'Твоя суперспособность в фантастическом мире:',
    options: [
      { text: 'Кричать “ДА Я СКОВОРОДА” и начинать летать по спирали', value: 'boneka' },
      { text: 'Вызывать шквальный пельмень-шторм с ором “ЛОВИ СИБИРСКИЙ ЦУНАМИ”', value: 'kokofanto' },
      { text: 'Перешептываться с кофемашинами и устраивать переворот в Starbucks', value: 'assassino' },
      { text: 'Включать стелс так, что тебя забывает даже твоя мама', value: 'tripi' },
    ]
  }
  ];

  // Результаты с изображениями и звуком
  const resultMap = {
  frigo: { 
    name: 'Фриго Камело', 
    desc: '🧊 ты холоден снаружи, но внутри — ледяной чай из эмоций.', 
    image: 'media/image/frigo.jpg', 
    audio: 'media/audio/frigo.mp3' 
},
  ballerina: { 
    name: 'Балерина Капучино', 
    desc: '☕ ты изящен, ароматен и вспениваешься при первом намёке на стресс.', 
    image: 'media/image/ballerina.jpg', 
    audio: 'media/audio/ballerina.mp3' 
},
  bobrito: { 
    name: 'Бобрито Бандито', 
    desc: '🌯 ты тёплый, но опасный. Где-то внутри тебя спрятана фасоль ярости.', 
    image: 'media/image/bobrito.jpg', 
    audio: 'media/audio/bobrito.mp3' 
},
  bombardilo: { 
    name: 'Бомбардиро Крокодило', 
    desc: '🐊 ты двигаешься молча, но оставляешь взрывной след.', 
    image: 'media/image/bombardilo.jpg', 
    audio: 'media/audio/bombardilo.mp3' 
},
  gussini: { 
    name: 'Бомбомбини Гусини', 
    desc: '🐛 ты — парадокс. Гусеница и фейерверк одновременно.', 
    image: 'media/image/gussini.jpg', 
    audio: 'media/audio/gussini.mp3' 
},
  boneka: { 
    name: 'Бонека Амбалабу', 
    desc: '💪 сила, грация и немного непонятный танец.', 
    image: 'media/image/boneka.jpg', 
    audio: 'media/audio/boneka.mp3' 
},
  brrbrr: { 
    name: 'Брр брр Патапим', 
    desc: '🥁 каждый твой шаг — это фанфары. Даже если идёшь в туалет.', 
    image: 'media/image/brrbrr.jpg', 
    audio: 'media/audio/brrbrr.mp3' 
},
  burballoni: { 
    name: 'Бурбалони Лулиоли', 
    desc: '💃 ты живёшь, как будто вокруг — вечный фестиваль.', 
    image: 'media/image/burballoni.jpg', 
    audio: 'media/audio/burballoni.mp3' 
},
  garamaram: { 
    name: 'Гарамараман и Мадудунгдунг', 
    desc: '🥁 ты — не человек. Ты — концертный тур по Вселенной.', 
    image: 'media/image/garamaram.jpg', 
    audio: 'media/audio/garamaram.mp3' 
},
  glorbo: { 
    name: 'Глорбо Фруттодрилло', 
    desc: '🍓 ты фрукт. Ты дрель. Ты непредсказуем.', 
    image: 'media/image/glorbo.jpg', 
    audio: 'media/audio/glorbo.mp3' 
},
  assassino: { 
    name: 'Капучино Ассассино', 
    desc: '🔪 за сладким ароматом прячется опасность.', 
    image: 'media/image/assassino.jpg', 
    audio: 'media/audio/assassino.mp3' 
},
  kokofanto: { 
    name: 'Кокофанто Элефанто', 
    desc: '🐘 ты — какао и разрушение в одном.', 
    image: 'media/image/kokofanto.jpg', 
    audio: 'media/audio/kokofanto.mp3' 
},
  lirili: { 
    name: 'Лирили Ларила', 
    desc: '🎶 ты — песня, которую никто не может забыть. Даже если хочет.', 
    image: 'media/image/lirili.jpg', 
    audio: 'media/audio/lirili.mp3' 
},
  orangutini: { 
    name: 'Орангутини Ананасини', 
    desc: '🍍 ты дик и сладок. Особенно в салате.', 
    image: 'media/image/orangutini.jpg', 
    audio: 'media/audio/orangutini.mp3' 
},
  tralalero: { 
    name: 'Тралалеро Тралала', 
    desc: '🎵 ты не говоришь — ты поёшь. Даже налоговую декларацию.', 
    image: 'media/image/tralalero.jpg', 
    audio: 'media/audio/tralalero.mp3' 
},
  tungtung: { 
    name: 'Тунг-Тунг-Тунг Сахур', 
    desc: '🥁 ты барабан, который звучит даже в тишине.', 
    image: 'media/image/tungtung.jpg', 
    audio: 'media/audio/tungtung.mp3' 
},
  chimpanzini: { 
    name: 'Шимпанзини Бананини', 
    desc: '🍌 ты — хаос в мехе. Но очарователен безмерно.', 
    image: 'media/image/chimpanzini.jpg', 
    audio: 'media/audio/chimpanzini.mp3' 
},
  spioniro: { 
    name: 'Шпиониро Голубиро', 
    desc: '🕶️ ты — тайна, за которой следят, пока ты следишь за другими.', 
    image: 'media/image/spioniro.jpg', 
    audio: 'media/audio/spioniro.mp3' 
},
  yudin: { 
    name: 'Ю-Дин-Дин-Дин-Дюн Ма-Дин-Дин-Дин-Дюн', 
    desc: '🎶 ты ритм, ты музыка, ты безумие в чистом виде.', 
    image: 'media/image/yudin.jpg', 
    audio: 'media/audio/yudin.mp3' 
},
tripi: {
  name: 'Триппи Троппи', 
  desc: '🚿 ты шумный, бодрый и немного влажный.', 
  image: 'media/image/tripi.jpg', 
  audio: 'media/audio/tripi.mp3'
}
  };
// Элементы DOM
const startText1 = document.getElementById('start-text1');
const startText2 = document.getElementById('start-text2');
const startBtn = document.getElementById('start-btn');
const quizFrame = document.getElementById('quiz-frame');
const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const resultContainer = document.getElementById('result-container');
const resultName = document.getElementById('result-name');
const resultImg = document.getElementById('result-img');
const loadingText = document.getElementById('loading-text');
const progressBar = document.getElementById('progress-bar');
const progressFill = document.getElementById('progress-fill');
const restartBtn = document.getElementById('restart-btn');
const restartBtnBg = document.getElementById('restart-btn-bg');
const backgroundVideo = document.getElementById('background-video');
const soundToggle = document.getElementById('sound-toggle');

// Состояния
let currentQuestion = 0;
let score = {};
let selectedValue = null;
let resultAudio = null;
let isSoundOn = false;
let wasSoundOnBeforeResult = false;
let isResultPlaying = false;

// Загрузочные фразы
const loadingPhrases = [
    'Нюхаем твои трусы...',
    'Запрашиваем базу данных арбузов...',
    'Перекапываем огород бабушки...',
    'Достаём сковородку для жарки...',
    'Подслушиваем разговоры соседей...',
    'Проверяем твою историю браузера...',
    'Консультируемся с гадалкой...',
    'Подсчитываем ваши результаты...'
];

// Глобальные переменные для работы с видео
let videoModal = null;
let videoSelectBtn = null;
let closeBtn = null;
let videoList = null;
let currentVideoPath = 'media/video/zlolo.mp4';
let availableVideos = [];

// Функция для загрузки списка доступных видео
function loadAvailableVideos() {
    // Резервный список видео в случае ошибки API
    const fallbackVideos = [
        { name: 'zlolo.mp4', path: 'media/video/zlolo.mp4' }
    ];
    
    // Устанавливаем таймаут для запроса
    const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Превышено время ожидания API')), 5000);
    });
    
    // Выполняем запрос с таймаутом
    Promise.race([
        fetch('/api/videos'),
        timeoutPromise
    ])
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка HTTP: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            if (data && data.videos && Array.isArray(data.videos) && data.videos.length > 0) {
                availableVideos = data.videos;
                console.log('Успешно загружен список видео:', availableVideos.length);
            } else {
                throw new Error('Получен пустой или некорректный список видео');
            }
            renderVideoList();
        })
        .catch(error => {
            console.error('Ошибка при загрузке списка видео:', error);
            
            // Используем резервный список видео
            console.log('Используем резервный список видео');
            availableVideos = fallbackVideos;
            renderVideoList();
            
            // Отображаем уведомление о проблеме
            const videoSelectBtn = document.getElementById('video-select-btn');
            if (videoSelectBtn) {
                videoSelectBtn.title = 'Ограниченный выбор видео из-за ошибки сервера';
                videoSelectBtn.style.opacity = '0.7';
            }
        });
}

// Функция для отображения списка видео в модальном окне
function renderVideoList() {
    if (!videoList) return;
    
    videoList.innerHTML = '';
    
    // Показываем индикатор загрузки в модальном окне
    const loadingDiv = document.createElement('div');
    loadingDiv.className = 'loading-indicator';
    loadingDiv.textContent = 'Загрузка видео...';
    videoList.appendChild(loadingDiv);
    
    // Проверяем доступность каждого видео перед добавлением в список
    const validVideos = [];
    const videoPromises = availableVideos.map((video, index) => {
        return new Promise((resolve) => {
            const tempVideo = document.createElement('video');
            tempVideo.muted = true;
            
            // Устанавливаем таймаут для проверки
            const timeout = setTimeout(() => {
                console.warn(`Видео ${video.path} недоступно (таймаут)`);
                resolve();
            }, 3000);
            
            // Обработчики событий для проверки доступности видео
            tempVideo.onloadeddata = () => {
                clearTimeout(timeout);
                validVideos.push(video);
                resolve();
            };
            
            tempVideo.onerror = () => {
                clearTimeout(timeout);
                console.warn(`Видео ${video.path} недоступно (ошибка загрузки)`);
                resolve();
            };
            
            // Начинаем загрузку метаданных видео
            tempVideo.src = video.path;
            tempVideo.preload = 'metadata';
        });
    });
    
    // После проверки всех видео отображаем только доступные
    Promise.all(videoPromises).then(() => {
        // Удаляем индикатор загрузки
        videoList.innerHTML = '';
        
        if (validVideos.length === 0) {
            const noVideoDiv = document.createElement('div');
            noVideoDiv.className = 'no-videos-message';
            noVideoDiv.textContent = 'Доступных видео не найдено';
            videoList.appendChild(noVideoDiv);
            return;
        }
        
        validVideos.forEach(video => {
            const videoItem = document.createElement('div');
            videoItem.className = 'video-item';
            if (video.path === currentVideoPath) {
                videoItem.classList.add('active');
            }
            
            // Создаем миниатюру видео
            const thumbnail = document.createElement('video');
            thumbnail.className = 'video-thumbnail';
            thumbnail.src = video.path;
            thumbnail.muted = true;
            thumbnail.preload = 'metadata';
            
            // Создаем подпись с названием видео
            const videoName = document.createElement('div');
            videoName.className = 'video-name';
            videoName.textContent = video.name;
            
            // Добавляем обработчик клика
            videoItem.addEventListener('click', () => {
                changeBackgroundVideo(video.path);
                
                // Обновляем активный элемент
                document.querySelectorAll('.video-item').forEach(item => {
                    item.classList.remove('active');
                });
                videoItem.classList.add('active');
                
                // Закрываем модальное окно
                videoModal.style.display = 'none';
            });
            
            videoItem.appendChild(thumbnail);
            videoItem.appendChild(videoName);
            videoList.appendChild(videoItem);
        });
    });
}

// Функция для изменения фонового видео
function changeBackgroundVideo(videoPath) {
    if (currentVideoPath === videoPath) return;
    
    // Сохраняем предыдущий путь для отката в случае ошибки
    const previousVideoPath = currentVideoPath;
    
    currentVideoPath = videoPath;
    const video = document.getElementById('background-video');
    const source = video.querySelector('source');
    
    // Запоминаем текущее состояние звука
    const wasMuted = video.muted;
    
    // Обновляем источник видео
    source.src = videoPath;
    
    // Определяем тип видео
    const fileExtension = videoPath.split('.').pop().toLowerCase();
    const videoType = fileExtension === 'mp4' ? 'video/mp4' : 
                     fileExtension === 'webm' ? 'video/webm' : 'video/mp4';
    source.type = videoType;
    
    // Устанавливаем обработчик ошибок перед загрузкой
    const handleError = function() {
        console.error("Ошибка загрузки видео:", videoPath);
        
        // Откатываемся к предыдущему видео
        source.src = previousVideoPath;
        const prevExtension = previousVideoPath.split('.').pop().toLowerCase();
        const prevType = prevExtension === 'mp4' ? 'video/mp4' : 
                        prevExtension === 'webm' ? 'video/webm' : 'video/mp4';
        source.type = prevType;
        
        // Восстанавливаем предыдущий путь
        currentVideoPath = previousVideoPath;
        
        // Перезагружаем и запускаем видео
        video.load();
        video.muted = wasMuted;
        video.play().catch(e => {
            console.error("Не удалось восстановить предыдущее видео:", e);
        });
        
        // Удаляем обработчик ошибок
        video.removeEventListener('error', handleError);
    };
    
    // Добавляем обработчик ошибок
    video.addEventListener('error', handleError, { once: true });
    
    // Перезагружаем видео
    video.load();
    
    // Восстанавливаем состояние звука и запускаем воспроизведение
    video.muted = wasMuted;
    
    // Запускаем воспроизведение и обрабатываем ошибки
    video.onloadedmetadata = function() {
        video.play().catch(e => {
            console.error("Ошибка воспроизведения видео:", e);
            // Обработчик ошибок handleError будет вызван автоматически
        });
    };
    
    // Сохраняем выбор в localStorage только при успешной загрузке
    video.oncanplay = function() {
        localStorage.setItem('selectedVideo', videoPath);
        
        // Удаляем обработчик ошибок, так как видео успешно загружено
        video.removeEventListener('error', handleError);
    };
}

// Функция для инициализации модального окна
function initVideoModal() {
    videoModal = document.getElementById('video-modal');
    videoSelectBtn = document.getElementById('video-select-btn');
    closeBtn = document.querySelector('.close-btn');
    videoList = document.getElementById('video-list');
    
    // Делаем кнопку выбора видео видимой
    videoSelectBtn.style.display = 'flex';
    
    // Загружаем сохраненный выбор видео
    const savedVideo = localStorage.getItem('selectedVideo');
    if (savedVideo) {
        changeBackgroundVideo(savedVideo);
    }
    
    // Добавляем обработчики событий
    videoSelectBtn.addEventListener('click', () => {
        videoModal.style.display = 'block';
    });
    
    closeBtn.addEventListener('click', () => {
        videoModal.style.display = 'none';
    });
    
    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener('click', (event) => {
        if (event.target === videoModal) {
            videoModal.style.display = 'none';
        }
    });
    
    // Загружаем список доступных видео
    loadAvailableVideos();
}

// Обновление кнопки звука
function updateSoundButton() {
    if (isSoundOn) {
        soundToggle.textContent = "🔊";
        soundToggle.classList.replace('sound-off', 'sound-on');
    } else {
        soundToggle.textContent = "🔇";
        soundToggle.classList.replace('sound-on', 'sound-off');
    }
}

// Переключение звука
function toggleSound() {
    if (isResultPlaying) return;
    
    isSoundOn = !isSoundOn;
    backgroundVideo.muted = !isSoundOn;
    updateSoundButton();
}

// Автовоспроизведение фонового видео
function initBackgroundVideo() {
    // Установка начального состояния звука
    backgroundVideo.muted = true;
    isSoundOn = false;
    updateSoundButton();
    
    // Пытаемся запустить видео
    backgroundVideo.play().catch(e => {
        console.log("Автовоспроизведение видео заблокировано. Видео будет запущено при взаимодействии.");
        
        document.addEventListener('click', function firstInteraction() {
            backgroundVideo.play();
            document.removeEventListener('click', firstInteraction);
        });
    });
    
    backgroundVideo.addEventListener('error', function() {
        console.error("Ошибка загрузки видео, пробуем перезагрузить");
        backgroundVideo.load();
    });
}

// Запуск интро-анимации
function runIntro() {
    // Показываем кнопку звука почти сразу (через 0.5 секунды)
    setTimeout(() => {
        soundToggle.style.display = 'block';
        soundToggle.style.animation = 'fadeIn 1s forwards';
    }, 500);
    
    setTimeout(() => {
    startText1.style.opacity = 0;
    startText1.style.display = 'block';
    startText1.style.animation = 'fadeIn 2s forwards';
    }, 1400);
    setTimeout(() => {
        startText1.style.animation = 'fadeOut 1.5s forwards';
    }, 3500);

    setTimeout(() => {
        startText1.style.display = 'none';
        startText2.style.display = 'block';
        startText2.style.opacity = 0;
        startText2.style.animation = 'fadeIn 2s forwards';
    }, 5000);

    setTimeout(() => {
        startBtn.style.display = 'inline-block';
        startBtn.style.opacity = 0;
        startBtn.style.animation = 'fadeIn 1.5s forwards';
    }, 7000);
}

// Показать вопрос
function showQuestion() {
  nextBtn.disabled = true;
  selectedValue = null;

  // Отображение номера вопроса
  const questionCounter = document.getElementById('question-counter');
  if (questionCounter) {
    questionCounter.textContent = `Вопрос ${currentQuestion + 1} из ${questions.length}`;
  }

  // Отображение текста вопроса
  questionEl.textContent = questions[currentQuestion].text;

  // Очистка и заполнение вариантов ответа
  answersEl.innerHTML = '';
  questions[currentQuestion].options.forEach(ans => {
    const button = document.createElement('button');
    button.className = 'answer-btn';
    button.textContent = ans.text;
    button.addEventListener('click', () => {
      document.querySelectorAll('.answer-btn').forEach(btn => {
        btn.classList.remove('selected');
      });
      button.classList.add('selected');
      nextBtn.disabled = false;
      selectedValue = ans.value;
    });
    answersEl.appendChild(button);
  });
}

// Показать результат
function showResult() {
    const maxPoints = Math.max(...Object.values(score));
    const winner = Object.keys(score).find(c => score[c] === maxPoints);

    // Скрываем элементы вопроса
    document.getElementById('question').style.display = 'none';
    document.getElementById('answers').style.display = 'none';
    nextBtn.style.display = 'none';

    document.getElementById('question-counter').style.display = 'none';
    
    // Показываем контейнер результата
    resultContainer.style.display = 'flex';
    resultName.style.display = 'none';
    resultImg.style.display = 'none';
    
    // Скрываем кнопку перезапуска
    restartBtn.classList.remove('visible');
    restartBtnBg.classList.remove('visible');

    // Показываем загрузочные сообщения
    loadingText.style.display = 'block';
    progressBar.style.display = 'block';
    progressFill.style.width = '0%';

    let currentPhraseIndex = 0;
    const totalPhrases = loadingPhrases.length;
    const phraseDuration = 1000;
    
    function showNextPhrase() {
        if (currentPhraseIndex < totalPhrases) {
            loadingText.textContent = loadingPhrases[currentPhraseIndex];
            progressFill.style.width = `${((currentPhraseIndex + 1) / totalPhrases) * 100}%`;
            currentPhraseIndex++;
            setTimeout(showNextPhrase, phraseDuration);
        } else {
            // Прямой показ результата без взрыва
            showResultAfterExplosion(winner);
        }
    }
    
    showNextPhrase();
}

// Функция показа результата (без взрыва)
function showResultAfterExplosion(winner) {
    // Устанавливаем флаг, что началось воспроизведение результата
    isResultPlaying = true;
    
    // Скрываем загрузочные сообщения
    loadingText.style.display = 'none';
    progressBar.style.display = 'none';

    // Запоминаем состояние звука перед воспроизведением результата
    wasSoundOnBeforeResult = isSoundOn;
    
    // Выключаем звук фонового видео
    backgroundVideo.muted = true;
    
    // Блокируем кнопку звука
    soundToggle.disabled = true;
    soundToggle.classList.add('disabled');
    
    // Показываем название результата
    resultName.textContent = `Ты — ${resultMap[winner].name}!\n${resultMap[winner].desc}`;
    resultName.style.display = 'block';
    resultName.style.opacity = '0';
    resultName.style.animation = 'fadeIn 1s forwards';
    
    // Создаем новое изображение для предварительной загрузки
    const preloadImg = new Image();
    preloadImg.src = resultMap[winner].image;
    
    // Ждем полной загрузки изображения
    preloadImg.onload = () => {
        // Только после загрузки устанавливаем источник и запускаем анимацию
        resultImg.src = resultMap[winner].image;
        resultImg.style.display = 'block';
        resultImg.style.opacity = '0';
        resultImg.style.animation = 'emergeFromFire 1.5s forwards';
        
        // Запускаем звук результата через 500 мс
        setTimeout(() => {
            if (resultMap[winner]?.audio) {
                // Останавливаем предыдущий звук, если он есть
                if (resultAudio) {
                    resultAudio.pause();
                    resultAudio.currentTime = 0;
                }
                
                resultAudio = new Audio(resultMap[winner].audio);
                resultAudio.play().catch(e => console.error("Ошибка воспроизведения звука:", e));
                
                resultAudio.onended = function() {
                    // Восстанавливаем звук фона после завершения звука результата
                    backgroundVideo.muted = !wasSoundOnBeforeResult;
                    
                    // Разблокируем кнопку звука
                    soundToggle.disabled = false;
                    soundToggle.classList.remove('disabled');
                    
                    // Сбрасываем флаг воспроизведения
                    isResultPlaying = false;
                    
                    showRestartButton();
                };
            } else {
                // Восстанавливаем звук фона
                backgroundVideo.muted = !wasSoundOnBeforeResult;
                
                // Разблокируем кнопку звука
                soundToggle.disabled = false;
                soundToggle.classList.remove('disabled');
                
                // Сбрасываем флаг воспроизведения
                isResultPlaying = false;
                
                showRestartButton();
            }
        }, 500);
    };
    
    // Обработка ошибки загрузки изображения
    preloadImg.onerror = () => {
        console.error('Ошибка загрузки изображения:', resultMap[winner].image);
        // Все равно пытаемся показать изображение
        resultImg.src = resultMap[winner].image;
        resultImg.style.display = 'block';
        resultImg.style.opacity = '0';
        resultImg.style.animation = 'emergeFromFire 1.5s forwards';
        
        // Запускаем звук результата
        setTimeout(() => {
            if (resultMap[winner]?.audio) {
                // Останавливаем предыдущий звук, если он есть
                if (resultAudio) {
                    resultAudio.pause();
                    resultAudio.currentTime = 0;
                }
                
                resultAudio = new Audio(resultMap[winner].audio);
                resultAudio.play().catch(e => console.error("Ошибка воспроизведения звука:", e));
                
                resultAudio.onended = function() {
                    // Восстанавливаем звук фона после завершения звука результата
                    backgroundVideo.muted = !wasSoundOnBeforeResult;
                    
                    // Разблокируем кнопку звука
                    soundToggle.disabled = false;
                    soundToggle.classList.remove('disabled');
                    
                    // Сбрасываем флаг воспроизведения
                    isResultPlaying = false;
                    
                    showRestartButton();
                };
            } else {
                // Восстанавливаем звук фона
                backgroundVideo.muted = !wasSoundOnBeforeResult;
                
                // Разблокируем кнопку звука
                soundToggle.disabled = false;
                soundToggle.classList.remove('disabled');
                
                // Сбрасываем флаг воспроизведения
                isResultPlaying = false;
                
                showRestartButton();
            }
        }, 500);
    };
}

// Показать кнопку перезапуска
function showRestartButton() {
    restartBtn.classList.add('visible');
    restartBtnBg.classList.add('visible');
    restartBtn.style.animation = 'fadeIn 0.8s forwards';
}

// Инициализация
function init() {
    // Инициализируем модальное окно для выбора видео в самом начале
    initVideoModal();
    
    initBackgroundVideo();
    runIntro();
    
    // Настройка кнопки звука
    soundToggle.addEventListener('click', toggleSound);
    soundToggle.style.display = 'none'; // Скрываем до появления кнопки старта
    updateSoundButton();
    
    // Клик по старту
    startBtn.addEventListener('click', () => {
        // Выключаем звук фонового видео
        backgroundVideo.muted = true;
        isSoundOn = false;
        updateSoundButton();
        
        document.getElementById('start-screen').style.display = 'none';
        quizFrame.classList.add('visible');
        showQuestion();
    });

    // Клик по кнопке Далее
    nextBtn.addEventListener('click', () => {
        if (!selectedValue) return;

        score[selectedValue] = (score[selectedValue] || 0) + 1;
        currentQuestion++;
        selectedValue = null;

        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    // Перезапуск теста
restartBtn.addEventListener('click', function() {
    // Восстанавливаем звук фона в соответствии с текущей настройкой
    backgroundVideo.muted = !isSoundOn;
    
    // УБИРАЕМ ПЕРЕМОТКУ В НАЧАЛО
    // backgroundVideo.currentTime = 0; // Эту строку удаляем
    
    // УБИРАЕМ ПРИНУДИТЕЛЬНЫЙ ЗАПУСК ВИДЕО
    // backgroundVideo.play().catch(...); // Эту строку удаляем
    
    // Скрываем кнопку и подложку
    restartBtn.classList.remove('visible');
    restartBtnBg.classList.remove('visible');
    
    // Сбрасываем состояние
    currentQuestion = 0;
    score = {};
    selectedValue = null;

    document.getElementById('question-counter').style.display = 'block';
    
    // Скрываем контейнер результата
    resultContainer.style.display = 'none';
    
    // Показываем элементы вопроса
    document.getElementById('question').style.display = 'block';
    document.getElementById('answers').style.display = 'block';
    nextBtn.style.display = 'inline-block';
    nextBtn.disabled = true;
    
    // Сбрасываем стили рамки теста
    quizFrame.classList.add('visible');
    quizFrame.style.opacity = '1';
    quizFrame.style.transform = 'translateY(0)';
    
    // Перезапускаем с первого вопроса
    showQuestion();
});
}

// Запускаем инициализацию при загрузке страницы
document.addEventListener('DOMContentLoaded', init);