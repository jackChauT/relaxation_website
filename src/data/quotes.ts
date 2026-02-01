export interface Quote {
  id: number;
  excerpt: {
    en: string;
    'zh': string;
    ja: string;
  };
  fullText: {
    en: string;
    'zh': string;
    ja: string;
  };
  author: string;
  book: {
    en: string;
    'zh': string;
    ja: string;
  };
  page: number;
  tags: string[];
}

export const quotesData: Quote[] = [
  {
    "id": 1,
    "excerpt": {
      "en": "The present moment is the only time over which we have dominion...",
      "zh": "當下是我們唯一能掌控的時刻...",
      "ja": "今この瞬間だけが、私たちが支配できる時間です..."
    },
    "fullText": {
      "en": "The present moment is the only time over which we have dominion. The most important thing is to live in the present moment, to live consciously in the now.",
      "zh": "當下是我們唯一能掌控的時刻。最重要的是活在當下，有意識地活在此時此刻。",
      "ja": "今この瞬間だけが、私たちが支配できる時間です。最も大切なことは、今この瞬間を生きること、意識的に今を生きることです。"
    },
    "author": "Thích Nhất Hạnh",
    "book": {
      "en": "The Miracle of Mindfulness",
      "zh": "正念的奇蹟",
      "ja": "マインドフルネスの奇跡"
    },
    "page": 12,
    "tags": ["mindfulness", "awareness"]
  },
  {
    "id": 2,
    "excerpt": {
      "en": "Peace comes from within. Do not seek it without...",
      "zh": "平靜來自內心。不要向外尋求...",
      "ja": "平和は内側から来る。外に求めてはならない..."
    },
    "fullText": {
      "en": "Peace comes from within. Do not seek it without. You yourself, as much as anybody in the entire universe, deserve your love and affection.",
      "zh": "平靜來自內心。不要向外尋求。你自己，如同宇宙中的任何人一樣，值得你的愛與關懷。",
      "ja": "平和は内側から来る。外に求めてはならない。あなた自身も、宇宙の誰もと同じように、あなたの愛と思いやりを受けるに値します。"
    },
    "author": "Buddha",
    "book": {
      "en": "The Dhammapada",
      "zh": "法句經",
      "ja": "ダンマパダ"
    },
    "page": 45,
    "tags": ["peace", "self", "awareness"]
  },
  {
    "id": 3,
    "excerpt": {
      "en": "Between stimulus and response there is a space...",
      "zh": "在刺激和反應之間有一個空間...",
      "ja": "刺激と反応の間には空間がある..."
    },
    "fullText": {
      "en": "Between stimulus and response there is a space. In that space is our power to choose our response. In our response lies our growth and our freedom.",
      "zh": "在刺激和反應之間有一個空間。在那個空間裡，存在著我們選擇回應的力量。在我們的回應中，蘊含著我們的成長和自由。",
      "ja": "刺激と反応の間には空間がある。その空間に、私たちが反応を選ぶ力がある。その反応の中に、私たちの成長と自由がある。"
    },
    "author": "Viktor E. Frankl",
    "book": {
      "en": "Man's Search for Meaning",
      "zh": "活出意義來",
      "ja": "夜と霧"
    },
    "page": 86,
    "tags": ["awareness", "growth", "self"]
  },
  {
    "id": 4,
    "excerpt": {
      "en": "The soul always knows what to do to heal itself...",
      "zh": "靈魂總是知道如何療癒自己...",
      "ja": "魂は常に自分自身を癒す方法を知っている..."
    },
    "fullText": {
      "en": "The soul always knows what to do to heal itself. The challenge is to silence the mind and listen to the wisdom of your heart.",
      "zh": "靈魂總是知道如何療癒自己。挑戰在於讓心智安靜下來，傾聽你內心的智慧。",
      "ja": "魂は常に自分自身を癒す方法を知っている。挑戦は心を静め、あなたの心の知恵に耳を傾けることです。"
    },
    "author": "Caroline Myss",
    "book": {
      "en": "Anatomy of the Spirit",
      "zh": "靈性的解剖",
      "ja": "魂の解剖学"
    },
    "page": 34,
    "tags": ["wisdom", "self", "awareness"]
  },
  {
    "id": 5,
    "excerpt": {
      "en": "Feelings come and go like clouds in a windy sky...",
      "zh": "感受來來去去，如同風中的雲朵...",
      "ja": "感情は風の中の雲のように来ては去る..."
    },
    "fullText": {
      "en": "Feelings come and go like clouds in a windy sky. Conscious breathing is my anchor. Breathing in, I calm my body. Breathing out, I smile.",
      "zh": "感受來來去去，如同風中的雲朵。有意識的呼吸是我的錨。吸氣時，我讓身體平靜。呼氣時，我微笑。",
      "ja": "感情は風の中の雲のように来ては去る。意識的な呼吸が私の錨です。息を吸って、体を落ち着かせる。息を吐いて、微笑む。"
    },
    "author": "Thích Nhất Hạnh",
    "book": {
      "en": "Being Peace",
      "zh": "生命即和平",
      "ja": "平和であること"
    },
    "page": 23,
    "tags": ["mindfulness", "peace", "awareness"]
  },
  {
    "id": 6,
    "excerpt": {
      "en": "You are the sky. Everything else is just the weather...",
      "zh": "你是天空。其他一切只是天氣...",
      "ja": "あなたは空です。他のすべては天気にすぎない..."
    },
    "fullText": {
      "en": "You are the sky. Everything else is just the weather. Clouds of emotion, storms of thought - they come and they go, but you remain unchanged.",
      "zh": "你是天空。其他一切只是天氣。情緒的雲朵、思想的風暴——它們來了又去，但你始終不變。",
      "ja": "あなたは空です。他のすべては天気にすぎない。感情の雲、思考の嵐 - それらは来ては去るが、あなたは変わらない。"
    },
    "author": "Pema Chödrön",
    "book": {
      "en": "When Things Fall Apart",
      "zh": "當生命陷落時",
      "ja": "不安でいっぱいの時に"
    },
    "page": 67,
    "tags": ["awareness", "self", "peace"]
  },
  {
    "id": 7,
    "excerpt": {
      "en": "The quieter you become, the more you can hear...",
      "zh": "你越安靜，就能聽到越多...",
      "ja": "静かになればなるほど、聞こえてくる..."
    },
    "fullText": {
      "en": "The quieter you become, the more you can hear. In silence, we find the answers we've been seeking all along.",
      "zh": "你越安靜，就能聽到越多。在寂靜中，我們找到一直在尋找的答案。",
      "ja": "静かになればなるほど、聞こえてくる。沈黙の中に、ずっと探し求めていた答えを見つけるのです。"
    },
    "author": "Ram Dass",
    "book": {
      "en": "Be Here Now",
      "zh": "活在當下",
      "ja": "ビー・ヒア・ナウ"
    },
    "page": 102,
    "tags": ["mindfulness", "awareness", "wisdom"]
  },
  {
    "id": 8,
    "excerpt": {
      "en": "Nature does not hurry, yet everything is accomplished...",
      "zh": "大自然不急不徐，卻萬事皆成...",
      "ja": "自然は急がないが、すべてが成し遂げられる..."
    },
    "fullText": {
      "en": "Nature does not hurry, yet everything is accomplished. Be content with what you have; rejoice in the way things are. When you realize there is nothing lacking, the whole world belongs to you.",
      "zh": "大自然不急不徐，卻萬事皆成。知足常樂；欣然接受事物的本來面目。當你意識到一切都不匱乏時，整個世界都屬於你。",
      "ja": "自然は急がないが、すべてが成し遂げられる。持っているものに満足し、物事のありのままを喜ぶ。何も欠けていないことに気づいた時、全世界があなたのものになる。"
    },
    "author": "Lao Tzu",
    "book": {
      "en": "Tao Te Ching",
      "zh": "道德經",
      "ja": "老子道徳経"
    },
    "page": 15,
    "tags": ["dao", "wisdom", "peace"]
  },
  {
    "id": 16,
    "excerpt": {
      "en": "What shapes your mood and well-being is your own mind, never others...",
      "zh": "左右你心情好壞的本源...",
      "ja": "あなたの気分や在り方を決めている本当の源は..."
    },
    "fullText": {
      "en": "What shapes your mood and well-being is your own mind, not other people, and not the environment you are in.",
      "zh": "左右著你心情好壞的本源，是你的心智，而不是別人，更不是你所在的環境。",
      "ja": "あなたの気分や在り方を決めている本当の源は、他人でも環境でもなく、自分自身の心である。"
    },
    "author": "Dan Millman",
    "book": {
      "en": "Way of the Peaceful Warrior",
      "zh": "深夜加油站遇見蘇格拉底",
      "ja": "深夜特急のソクラテス"
    },
    "page": 64,
    "tags": ["mindfulness", "self", "awareness"]
  },
  {
    "id": 17,
    "excerpt": {
      "en": "Be yourself completely because every other role has already been taken...",
      "zh": "做你自己吧因為其他...",
      "ja": "自分らしく生きなさい。他の役割はすでに..."
    },
    "fullText": {
      "en": "Be yourself; everyone else is already taken.",
      "zh": "做你自己吧，因為其他角色都已經有人扮演了。",
      "ja": "自分らしくいなさい。他の誰かになる席は、もうすべて埋まっているのだから。"
    },
    "author": "Oscar Wilde",
    "book": { "en": "", "zh": "", "ja": "" },
    "page": 0,
    "tags": ["self", "wisdom"]
  },
  {
    "id": 18,
    "excerpt": {
      "en": "Be who you are and speak honestly without fear of judgment...",
      "zh": "做你自己說出感受...",
      "ja": "自分らしくあり感じたことを語りなさい..."
    },
    "fullText": {
      "en": "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
      "zh": "做你自己，說出你的感受，因為在意的人其實不重要，而重要的人不會介意。",
      "ja": "自分らしくあり、感じたことを語りなさい。気にする人は重要ではなく、重要な人は気にしないのだから。"
    },
    "author": "Bernard M. Baruch",
    "book": { "en": "", "zh": "", "ja": "" },
    "page": 0,
    "tags": ["self", "wisdom", "peace"]
  },
  {
    "id": 19,
    "excerpt": {
      "en": "You only live once but living rightly makes one life enough...",
      "zh": "人生只活一次但...",
      "ja": "人生は一度きりだが正しく生きれば..."
    },
    "fullText": {
      "en": "You only live once, but if you do it right, once is enough.",
      "zh": "人生只活一次，但如果活得正確，一次就足夠了。",
      "ja": "人生は一度きりだが、正しく生きれば、その一度で十分だ。"
    },
    "author": "Mae West",
    "book": { "en": "", "zh": "", "ja": "" },
    "page": 0,
    "tags": ["wisdom", "self"]
  },
  {
    "id": 20,
    "excerpt": {
      "en": "Live as if tomorrow were your last and keep learning endlessly...",
      "zh": "活著要像明天...",
      "ja": "明日死ぬかのように生き..."
    },
    "fullText": {
      "en": "Live as if you were to die tomorrow. Learn as if you were to live forever.",
      "zh": "活著要像明天就會死去一樣；學習要像永遠都會活著一樣。",
      "ja": "明日死ぬかのように生き、永遠に生きるかのように学びなさい。"
    },
    "author": "Mahatma Gandhi",
    "book": { "en": "", "zh": "", "ja": "" },
    "page": 0,
    "tags": ["impermanence", "growth", "wisdom"]
  },
  {
    "id": 21,
    "excerpt": {
      "en": "I want to love you without control judgment or hidden demand...",
      "zh": "我想愛你而不...",
      "ja": "私は執着せずにあなたを愛し..."
    },
    "fullText": {
      "en": "I want to love you without clutching, appreciate you without judging, join you without invading, invite you without demanding, leave you without guilt, criticize you without blaming, and help you without insulting. If I can have the same from you, then we can truly meet and enrich each other.",
      "zh": "我想愛你而不佔有，欣賞你而不評斷，與你同行而不侵入，邀請你而不要求，離開你而不內疚，批評你而不指責，幫助你而不羞辱。如果我也能從你那裡得到同樣的對待，我們才能真正相遇，彼此滋養。",
      "ja": "私は、執着せずにあなたを愛し、裁かずにあなたを尊重し、侵さずに共に歩み、強要せずに招き、罪悪感なく離れ、責めずに批評し、侮辱せずに助けたい。同じことをあなたからも受け取れたなら、私たちは本当に出会い、互いを豊かにできるだろう。"
    },
    "author": "Virginia Satir",
    "book": { "en": "", "zh": "", "ja": "" },
    "page": 0,
    "tags": ["love", "wisdom", "self"]
  },
  {
    "id": 22,
    "excerpt": {
      "en": "Life is not as it should be but exactly as it is...",
      "zh": "人生並不總是...",
      "ja": "人生は思い通りではなく..."
    },
    "fullText": {
      "en": "Life is not the way it's supposed to be, it's the way it is. The way you cope with it is what makes the difference.",
      "zh": "人生並不總是如你所期望的樣子，它只是它本來的樣子；而你如何去面對，才真正造成差別。",
      "ja": "人生は思い通りになるものではない。それが現実だ。その現実にどう向き合うかが、すべての違いを生む。"
    },
    "author": "Virginia Satir",
    "book": { "en": "", "zh": "", "ja": "" },
    "page": 0,
    "tags": ["wisdom", "growth", "peace"]
  },
  {
    "id": 23,
    "excerpt": {
      "en": "We must never allow the limited views of others to define us...",
      "zh": "不可讓他人的觀點...",
      "ja": "他人の限界が自分を定義することを..."
    },
    "fullText": {
      "en": "We must not allow other people’s limited perceptions to define us.",
      "zh": "我們不應該讓他人有限的觀點來定義我們。",
      "ja": "他人の限られた認識によって、自分を定義させてはならない。"
    },
    "author": "Virginia Satir",
    "book": { "en": "", "zh": "", "ja": "" },
    "page": 0,
    "tags": ["self", "wisdom"]
  },
  {
    "id": 24,
    "excerpt": {
      "en": "The Lord is my shepherd and I shall not be in want...",
      "zh": "耶和華是我的牧者...",
      "ja": "主は私の羊飼いであり..."
    },
    "fullText": {
      "en": "The Lord is my shepherd; I shall not want.",
      "zh": "耶和華是我的牧者，我必不致缺乏。",
      "ja": "主は私の羊飼い。私は乏しいことがない。"
    },
    "author": "King David",
    "book": { "en": "Psalms", "zh": "詩篇", "ja": "詩編" },
    "page": 0,
    "tags": ["faith", "peace", "trust"]
  },
  {
    "id": 25,
    "excerpt": {
      "en": "I can do all things through the strength given to me...",
      "zh": "我靠著那加給我力量的...",
      "ja": "私を強くしてくださる方によって..."
    },
    "fullText": {
      "en": "I can do all things through Christ who strengthens me.",
      "zh": "我靠著那加給我力量的，凡事都能做。",
      "ja": "私を強くしてくださる方によって、私はどんなことでもできる。"
    },
    "author": "Paul the Apostle",
    "book": { "en": "Philippians", "zh": "腓立比書", "ja": "フィリピ人への手紙" },
    "page": 0,
    "tags": ["faith", "growth", "trust"]
  },
  {
    "id": 26,
    "excerpt": {
      "en": "For God so loved the world that He gave His only Son...",
      "zh": "神愛世人甚至...",
      "ja": "神はそのひとり子を与えるほどに..."
    },
    "fullText": {
      "en": "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.",
      "zh": "神愛世人，甚至將他的獨生子賜給他們，叫一切信他的，不至滅亡，反得永生。",
      "ja": "神は、そのひとり子を与えるほどに世を愛された。それは御子を信じる者が滅びることなく、永遠の命を得るためである。"
    },
    "author": "John the Apostle",
    "book": { "en": "John", "zh": "約翰福音", "ja": "ヨハネによる福音書" },
    "page": 0,
    "tags": ["love", "faith"]
  },
  {
    "id": 27,
    "excerpt": {
      "en": "Trust in the Lord with all your heart and rely not on yourself...",
      "zh": "你要專心仰賴耶和華...",
      "ja": "心を尽くして主に信頼し..."
    },
    "fullText": {
      "en": "Trust in the Lord with all your heart and lean not on your own understanding.",
      "zh": "你要專心仰賴耶和華，不可倚靠自己的聰明。",
      "ja": "心を尽くして主に信頼せよ。自分の悟りに頼るな。"
    },
    "author": "Solomon",
    "book": { "en": "Proverbs", "zh": "箴言", "ja": "箴言" },
    "page": 0,
    "tags": ["faith", "wisdom", "trust"]
  },
  {
    "id": 28,
    "excerpt": {
      "en": "Do not be anxious about anything but bring everything to God...",
      "zh": "應當一無掛慮...",
      "ja": "何も思い煩わずに..."
    },
    "fullText": {
      "en": "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.",
      "zh": "應當一無掛慮，只要凡事藉著禱告、祈求和感謝，將你們所要的告訴神。",
      "ja": "何も思い煩わないで、あらゆる場合に、感謝をもって祈りと願いを神にささげなさい。"
    },
    "author": "Paul the Apostle",
    "book": { "en": "Philippians", "zh": "腓立比書", "ja": "フィリピ人への手紙" },
    "page": 0,
    "tags": ["faith", "peace", "trust"]
  },
  {
    "id": 29,
    "excerpt": {
      "en": "Come to me all who are weary and burdened...",
      "zh": "凡勞苦擔重擔的人...",
      "ja": "疲れた者、重荷を負う者は皆..."
    },
    "fullText": {
      "en": "Come to me, all you who are weary and burdened, and I will give you rest.",
      "zh": "凡勞苦擔重擔的人，可以到我這裡來，我就使你們得安息。",
      "ja": "疲れた者、重荷を負う者は皆、私のもとに来なさい。休ませてあげよう。"
    },
    "author": "Jesus Christ",
    "book": { "en": "Matthew", "zh": "馬太福音", "ja": "マタイによる福音書" },
    "page": 0,
    "tags": ["faith", "peace", "love"]
  },
  {
    "id": 30,
    "excerpt": {
      "en": "Be still and know deeply that I am God...",
      "zh": "你們要休息要知道...",
      "ja": "静まって、私は神であると知れ..."
    },
    "fullText": {
      "en": "Be still, and know that I am God.",
      "zh": "你們要休息，要知道我是神。",
      "ja": "静まれ。私は神である。"
    },
    "author": "Sons of Korah",
    "book": { "en": "Psalms", "zh": "詩篇", "ja": "詩編" },
    "page": 0,
    "tags": ["faith", "mindfulness", "peace"]
  },
  {
    "id": 31,
    "excerpt": {
      "en": "The Lord is close to the brokenhearted and saves the crushed...",
      "zh": "耶和華靠近傷心的人...",
      "ja": "主は心の打ち砕かれた者に近く..."
    },
    "fullText": {
      "en": "The Lord is close to the brokenhearted and saves those who are crushed in spirit.",
      "zh": "耶和華靠近傷心的人，拯救靈性痛悔的人。",
      "ja": "主は心の打ち砕かれた者に近く、霊の砕かれた者を救われる。"
    },
    "author": "King David",
    "book": { "en": "Psalms", "zh": "詩篇", "ja": "詩編" },
    "page": 0,
    "tags": ["faith", "love", "peace"]
  },
  {
    "id": 32,
    "excerpt": {
      "en": "For I know the plans I have prepared for you...",
      "zh": "我知道我向你們所懷的意念...",
      "ja": "私はあなたたちのための計画を知っている..."
    },
    "fullText": {
      "en": "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.",
      "zh": "耶和華說：我知道我向你們所懷的意念，是賜平安的意念，不是降災禍的意念，要叫你們末後有指望。",
      "ja": "主のことば。私はあなたたちのために立てた計画をよく知っている。それは平安を与え、将来と希望を与える計画である。"
    },
    "author": "Jeremiah",
    "book": { "en": "Jeremiah", "zh": "耶利米書", "ja": "エレミヤ書" },
    "page": 0,
    "tags": ["faith", "peace", "growth"]
  },
  {
    "id": 33,
    "excerpt": {
      "en": "Love is patient and kind without envy or pride...",
      "zh": "愛是恆久忍耐又有恩慈...",
      "ja": "愛は忍耐強く、情け深い..."
    },
    "fullText": {
      "en": "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.",
      "zh": "愛是恆久忍耐，又有恩慈；愛是不嫉妒，不自誇，不張狂。",
      "ja": "愛は忍耐強く、情け深い。ねたまず、自慢せず、高ぶらない。"
    },
    "author": "Paul the Apostle",
    "book": { "en": "1 Corinthians", "zh": "哥林多前書", "ja": "コリント人への第一の手紙" },
    "page": 0,
    "tags": ["love", "wisdom", "peace"]
  },
  {
    "id": 34,
    "excerpt": {
      "en": "The Tao that can be spoken is not the eternal Tao...",
      "zh": "道可道，非常道...",
      "ja": "語ることのできる道は、永遠の道ではない..."
    },
    "fullText": {
      "en": "The Tao that can be spoken is not the eternal Tao.",
      "zh": "道可道，非常道。",
      "ja": "語ることのできる道は、永遠の道ではない。"
    },
    "author": "Laozi",
    "book": { "en": "Tao Te Ching", "zh": "道德經", "ja": "道徳経" },
    "page": 0,
    "tags": ["dao", "wisdom", "awareness"]
  },
  {
    "id": 35,
    "excerpt": {
      "en": "Knowing others is intelligence but knowing yourself is true wisdom...",
      "zh": "知人者智，自知者明...",
      "ja": "人を知る者は智、自らを知る者は明..."
    },
    "fullText": {
      "en": "Knowing others is intelligence; knowing yourself is true wisdom.",
      "zh": "知人者智，自知者明。",
      "ja": "人を知る者は智であり、自らを知る者は明である。"
    },
    "author": "Laozi",
    "book": { "en": "Tao Te Ching", "zh": "道德經", "ja": "道徳経" },
    "page": 0,
    "tags": ["wisdom", "self", "awareness"]
  },
  {
    "id": 36,
    "excerpt": {
      "en": "The soft overcomes the hard and the gentle overcomes the rigid...",
      "zh": "柔弱勝剛強...",
      "ja": "柔らかいものは、剛いものに勝つ..."
    },
    "fullText": {
      "en": "The soft overcomes the hard; the gentle overcomes the rigid.",
      "zh": "柔弱勝剛強。",
      "ja": "柔らかいものは、剛いものに勝つ。"
    },
    "author": "Laozi",
    "book": { "en": "Tao Te Ching", "zh": "道德經", "ja": "道徳経" },
    "page": 0,
    "tags": ["dao", "wisdom", "peace"]
  },
  {
    "id": 37,
    "excerpt": {
      "en": "The sage does nothing yet nothing is left undone...",
      "zh": "聖人無為而無不為...",
      "ja": "聖人は無為にして、なさざることはない..."
    },
    "fullText": {
      "en": "The sage does nothing, yet nothing is left undone.",
      "zh": "聖人無為，而無不為。",
      "ja": "聖人は無為にして、なさざることはない。"
    },
    "author": "Laozi",
    "book": { "en": "Tao Te Ching", "zh": "道德經", "ja": "道徳経" },
    "page": 0,
    "tags": ["dao", "wisdom", "awareness"]
  },
  {
    "id": 38,
    "excerpt": {
      "en": "Once Zhuang Zhou dreamed he was a butterfly, free and unknowing...",
      "zh": "昔者莊周夢為胡蝶...",
      "ja": "昔、荘周は夢に蝶となり..."
    },
    "fullText": {
      "en": "Once Zhuang Zhou dreamed he was a butterfly, fluttering freely, unaware of being Zhou.",
      "zh": "昔者莊周夢為胡蝶，栩栩然胡蝶也，不知周也。",
      "ja": "昔、荘周は夢に蝶となり、ひらひらと舞っていて、自分が周であることを知らなかった。"
    },
    "author": "Zhuangzi",
    "book": { "en": "Zhuangzi", "zh": "莊子", "ja": "荘子" },
    "page": 0,
    "tags": ["awareness", "self", "dao"]
  },
  {
    "id": 39,
    "excerpt": {
      "en": "Heaven and earth were born with me and all things are one...",
      "zh": "天地與我並生...",
      "ja": "天地は我とともに生じ..."
    },
    "fullText": {
      "en": "Heaven and earth were born with me, and all things are one with me.",
      "zh": "天地與我並生，而萬物與我為一。",
      "ja": "天地は我とともに生じ、万物は我と一体である。"
    },
    "author": "Zhuangzi",
    "book": { "en": "Zhuangzi", "zh": "莊子", "ja": "荘子" },
    "page": 0,
    "tags": ["dao", "awareness", "wisdom"]
  },
  {
    "id": 40,
    "excerpt": {
      "en": "Where there is life there is death and where death exists life returns...",
      "zh": "方生方死，方死方生...",
      "ja": "生あるところに死があり..."
    },
    "fullText": {
      "en": "Where there is life, there is death; where there is death, there is life.",
      "zh": "方生方死，方死方生。",
      "ja": "生あるところに死があり、死あるところに生がある。"
    },
    "author": "Zhuangzi",
    "book": { "en": "Zhuangzi", "zh": "莊子", "ja": "荘子" },
    "page": 0,
    "tags": ["impermanence", "dao", "wisdom"]
  },
  {
    "id": 41,
    "excerpt": {
      "en": "The perfected person has no self and the sage has no name...",
      "zh": "至人無己，神人無功...",
      "ja": "至人は己なく、神人は功なく..."
    },
    "fullText": {
      "en": "The perfected person has no self; the spiritual person has no achievement; the true sage has no name.",
      "zh": "至人無己，神人無功，聖人無名。",
      "ja": "至人は己なく、神人は功なく、聖人は名を持たない。"
    },
    "author": "Zhuangzi",
    "book": { "en": "Zhuangzi", "zh": "莊子", "ja": "荘子" },
    "page": 0,
    "tags": ["self", "wisdom", "dao"]
  },
  {
    "id": 42,
    "excerpt": {
      "en": "Great wisdom appears foolish and great eloquence sounds awkward...",
      "zh": "大智若愚，大辯若訥...",
      "ja": "大いなる知は愚かに見え..."
    },
    "fullText": {
      "en": "Great wisdom appears foolish; great eloquence sounds awkward.",
      "zh": "大智若愚，大辯若訥。",
      "ja": "大いなる知は愚かに見え、大いなる弁舌は不器用に聞こえる。"
    },
    "author": "Laozi",
    "book": { "en": "Tao Te Ching", "zh": "道德經", "ja": "道徳経" },
    "page": 0,
    "tags": ["wisdom", "dao", "self"]
  },
  {
    "id": 43,
    "excerpt": {
      "en": "Act in accordance with things and in doing so forget the self...",
      "zh": "行事之情而忘其身...",
      "ja": "事の成り行きに従って行い..."
    },
    "fullText": {
      "en": "Act in accordance with the nature of things, and in doing so, forget the self.",
      "zh": "行事之情而忘其身。",
      "ja": "事の成り行きに従って行い、その中で自己を忘れる。"
    },
    "author": "Zhuangzi",
    "book": { "en": "Zhuangzi", "zh": "莊子", "ja": "荘子" },
    "page": 0,
    "tags": ["dao", "self", "wisdom"]
  },
  {
    "id": 44,
    "excerpt": {
      "en": "To study the Way is to study the self and to forget it...",
      "zh": "學道就是學自己...",
      "ja": "仏道をならうというは..."
    },
    "fullText": {
      "en": "To study the Way is to study the self. To study the self is to forget the self.",
      "zh": "學道就是學自己；學自己，就是忘卻自己。",
      "ja": "仏道をならうというは、自己をならうなり。自己をならうというは、自己を忘るるなり。"
    },
    "author": "Dōgen",
    "book": { "en": "Shōbōgenzō", "zh": "正法眼藏", "ja": "正法眼蔵" },
    "page": 0,
    "tags": ["mindfulness", "self", "wisdom"]
  },
  {
    "id": 45,
    "excerpt": {
      "en": "Think lightly of yourself and deeply of the world...",
      "zh": "少思己身，多思天下...",
      "ja": "我が身を軽く思い..."
    },
    "fullText": {
      "en": "Think lightly of yourself and deeply of the world.",
      "zh": "少思己身，多思天下。",
      "ja": "我が身を軽く思い、世の中を深く思え。"
    },
    "author": "Miyamoto Musashi",
    "book": { "en": "The Book of Five Rings", "zh": "五輪書", "ja": "五輪書" },
    "page": 0,
    "tags": ["self", "wisdom", "growth"]
  },
  {
    "id": 46,
    "excerpt": {
      "en": "True reality is realized not apart from experience but within awareness...",
      "zh": "真正的實在並非...",
      "ja": "真の実在とは..."
    },
    "fullText": {
      "en": "True reality is not something that exists apart from our experience; it is realized in direct awareness.",
      "zh": "真正的實在並非脫離我們的經驗而存在，而是在直接的覺知中被體現。",
      "ja": "真の実在とは、経験から離れて存在するものではなく、直接的な自覚のうちに実現されるものである。"
    },
    "author": "Nishida Kitarō",
    "book": { "en": "An Inquiry into the Good", "zh": "善的研究", "ja": "善の研究" },
    "page": 0,
    "tags": ["awareness", "wisdom", "self"]
  },
  {
    "id": 47,
    "excerpt": {
      "en": "The self becomes itself through self-negation and returns to the world...",
      "zh": "自我在否定中成為自己...",
      "ja": "自己は否定を通して..."
    },
    "fullText": {
      "en": "The self becomes itself through self-negation and returns to the world.",
      "zh": "自我是在自我否定之中成為自己，並回歸世界。",
      "ja": "自己は自己否定を通して自己となり、世界へと帰っていく。"
    },
    "author": "Nishitani Keiji",
    "book": { "en": "Religion and Nothingness", "zh": "宗教與虛無", "ja": "宗教とは何か" },
    "page": 0,
    "tags": ["self", "wisdom", "impermanence"]
  },
  {
    "id": 48,
    "excerpt": {
      "en": "When one truly understands impermanence the mind becomes calm...",
      "zh": "當人真正理解無常...",
      "ja": "無常を真に理解するとき..."
    },
    "fullText": {
      "en": "When one truly understands the impermanence of all things, the mind becomes calm.",
      "zh": "當人真正理解萬物無常之時，內心便會歸於平靜。",
      "ja": "万物の無常を真に理解したとき、心は静まる。"
    },
    "author": "Kitarō Nishida",
    "book": { "en": "Fundamental Problems of Philosophy", "zh": "哲學的根本問題", "ja": "哲学の根本問題" },
    "page": 0,
    "tags": ["impermanence", "peace", "wisdom"]
  },
  {
    "id": 49,
    "excerpt": {
      "en": "To forget the self is to be illuminated by all things...",
      "zh": "忘卻自己，萬法現前...",
      "ja": "自己を忘れるとき、万法に照らされる..."
    },
    "fullText": {
      "en": "To forget the self is to be illuminated by all things.",
      "zh": "忘卻自己，萬法現前。",
      "ja": "自己を忘れるとき、万法に照らされる。"
    },
    "author": "Dōgen",
    "book": { "en": "Shōbōgenzō", "zh": "正法眼藏", "ja": "正法眼蔵" },
    "page": 0,
    "tags": ["mindfulness", "self", "awareness"]
  }
];

export function getQuoteById(id: number): Quote | undefined {
  return quotesData.find((quote) => quote.id === id);
}

export function getAllTags(): string[] {
  const allTags = quotesData.flatMap(quote => quote.tags);
  return Array.from(new Set(allTags)).sort();
}