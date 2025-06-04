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