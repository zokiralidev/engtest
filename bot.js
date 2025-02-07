const { Telegraf, Markup } = require('telegraf');
const bot = new Telegraf('7891501247:AAEwCkq6ojOOFZS7mAI0pcVXSvRNfcaYkRk');

// Mock ma'lumotlar bazasi (aslida MongoDB, PostgreSQL yoki boshqa DB ulanadi)
const questionsDB = [
  {
    "id": 1,
    "text": "How many eyes do humans have?",
    "options": { "A": "1", "B": "3", "C": "2", "D": "4" },
    "correctAnswer": "C"
  },
  {
    "id": 2,
    "text": "I ___ a student.",
    "options": { "A": "am", "B": "is", "C": "are", "D": "be" },
    "correctAnswer": "A"
  },
  {
    "id": 3,
    "text": "What do you use to cut paper?",
    "options": { "A": "Glue", "B": "Pen", "C": "Ruler", "D": "Scissors" },
    "correctAnswer": "D"
  },
  {
    "id": 4,
    "text": "How many days are in a week?",
    "options": { "A": "5", "B": "7", "C": "6", "D": "8" },
    "correctAnswer": "B"
  },
  {
    "id": 5,
    "text": "Which tastes sweet?",
    "options": { "A": "Salt", "B": "Sugar", "C": "Lemon", "D": "Coffee" },
    "correctAnswer": "B"
  },
  {
    "id": 6,
    "text": "What do you wear on your feet?",
    "options": { "A": "Shoes", "B": "Hat", "C": "Shirt", "D": "Gloves" },
    "correctAnswer": "A"
  },
  {
    "id": 7,
    "text": "The book is ___ the table.",
    "options": { "A": "under", "B": "inside", "C": "on", "D": "behind" },
    "correctAnswer": "C"
  },
  {
    "id": 8,
    "text": "Who teaches students?",
    "options": { "A": "Doctor", "B": "Teacher", "C": "Driver", "D": "Chef" },
    "correctAnswer": "B"
  },
  {
    "id": 9,
    "text": "What do you use when it rains?",
    "options": { "A": "Sunglasses", "B": "Fan", "C": "Scarf", "D": "Umbrella" },
    "correctAnswer": "D"
  },
  {
    "id": 10,
    "text": "Your father's father is your...",
    "options": { "A": "Grandfather", "B": "Uncle", "C": "Cousin", "D": "Nephew" },
    "correctAnswer": "A"
  },
  {
    "id": 11,
    "text": "What color is a banana?",
    "options": { "A": "Blue", "B": "Yellow", "C": "Red", "D": "Black" },
    "correctAnswer": "B"
  },
  {
    "id": 12,
    "text": "Where do you sleep?",
    "options": { "A": "Chair", "B": "Bed", "C": "Table", "D": "Floor" },
    "correctAnswer": "B"
  },
  {
    "id": 13,
    "text": "Which animal can fly?",
    "options": { "A": "Elephant", "B": "Fish", "C": "Bird", "D": "Dog" },
    "correctAnswer": "C"
  },
  {
    "id": 14,
    "text": "How many hours in a day?",
    "options": { "A": "12", "B": "48", "C": "24", "D": "60" },
    "correctAnswer": "C"
  },
  {
    "id": 15,
    "text": "What do you drink in the morning?",
    "options": { "A": "Tea", "B": "Bread", "C": "Shoe", "D": "Tree" },
    "correctAnswer": "A"
  },
  {
    "id": 16,
    "text": "Which is a vegetable?",
    "options": { "A": "Apple", "B": "Tomato", "C": "Chocolate", "D": "Water" },
    "correctAnswer": "B"
  },
  {
    "id": 17,
    "text": "Your mother's sister is your...",
    "options": { "A": "Grandmother", "B": "Aunt", "C": "Cousin", "D": "Niece" },
    "correctAnswer": "B"
  },
  {
    "id": 18,
    "text": "What do you use to open a door?",
    "options": { "A": "Key", "B": "Spoon", "C": "Paper", "D": "Water" },
    "correctAnswer": "A"
  },
  {
    "id": 19,
    "text": "Which is cold?",
    "options": { "A": "Fire", "B": "Ice", "C": "Sun", "D": "Coffee" },
    "correctAnswer": "B"
  },
  {
    "id": 20,
    "text": "How many letters in 'CAT'?",
    "options": { "A": "2", "B": "3", "C": "4", "D": "5" },
    "correctAnswer": "B"
  },
  // 21-30
  {
    "id": 21,
    "text": "What do you wear on your hands?",
    "options": { "A": "Socks", "B": "Gloves", "C": "Hat", "D": "Belt" },
    "correctAnswer": "B"
  },
  {
    "id": 22,
    "text": "Which is a transport?",
    "options": { "A": "Book", "B": "Car", "C": "Apple", "D": "Chair" },
    "correctAnswer": "B"
  },
  {
    "id": 23,
    "text": "The sun rises in the...",
    "options": { "A": "West", "B": "North", "C": "East", "D": "South" },
    "correctAnswer": "C"
  },
  {
    "id": 24,
    "text": "What do you write with on a blackboard?",
    "options": { "A": "Pen", "B": "Chalk", "C": "Pencil", "D": "Marker" },
    "correctAnswer": "B"
  },
  {
    "id": 25,
    "text": "Which is a color?",
    "options": { "A": "Dog", "B": "Tree", "C": "Red", "D": "Stone" },
    "correctAnswer": "C"
  },
  {
    "id": 26,
    "text": "How many months in a year?",
    "options": { "A": "6", "B": "12", "C": "9", "D": "3" },
    "correctAnswer": "B"
  },
  {
    "id": 27,
    "text": "Opposite of 'slow'?",
    "options": { "A": "Fast", "B": "Small", "C": "Quiet", "D": "Cold" },
    "correctAnswer": "A"
  },
  {
    "id": 28,
    "text": "The book is ___ the bag.",
    "options": { "A": "on", "B": "under", "C": "in", "D": "behind" },
    "correctAnswer": "C"
  },
  {
    "id": 29,
    "text": "Which is a drink?",
    "options": { "A": "Bread", "B": "Apple", "C": "Water", "D": "Chair" },
    "correctAnswer": "C"
  },
  {
    "id": 30,
    "text": "What do you use to take photos?",
    "options": { "A": "Spoon", "B": "Camera", "C": "Paper", "D": "Door" },
    "correctAnswer": "B"
  },
  {
    "id": 31,
    "text": "Which is a part of the face?",
    "options": { "A": "Knee", "B": "Nose", "C": "Foot", "D": "Hand" },
    "correctAnswer": "B"
  },
  {
    "id": 32,
    "text": "She ___ to music every day.",
    "options": { "A": "listen", "B": "listens", "C": "listening", "D": "listened" },
    "correctAnswer": "B"
  },
  {
    "id": 33,
    "text": "What do you call a baby cat?",
    "options": { "A": "Puppy", "B": "Cub", "C": "Kitten", "D": "Chick" },
    "correctAnswer": "C"
  },
  {
    "id": 34,
    "text": "Which is a school subject?",
    "options": { "A": "Mathematics", "B": "Television", "C": "Refrigerator", "D": "Shoe" },
    "correctAnswer": "A"
  },
  {
    "id": 35,
    "text": "What season is cold?",
    "options": { "A": "Summer", "B": "Spring", "C": "Winter", "D": "Autumn" },
    "correctAnswer": "C"
  },
  {
    "id": 36,
    "text": "How do you spell 'mother'?",
    "options": { "A": "M-O-T-H-E-R", "B": "M-O-T-H-R", "C": "M-O-T-H-E-R-R", "D": "M-O-T-E-R" },
    "correctAnswer": "A"
  },
  {
    "id": 37,
    "text": "Which is not a fruit?",
    "options": { "A": "Potato", "B": "Mango", "C": "Banana", "D": "Orange" },
    "correctAnswer": "A"
  },
  {
    "id": 38,
    "text": "What time is midday?",
    "options": { "A": "9 AM", "B": "12 PM", "C": "3 PM", "D": "6 AM" },
    "correctAnswer": "B"
  },
  {
    "id": 39,
    "text": "Where do you cook food?",
    "options": { "A": "Bedroom", "B": "Kitchen", "C": "Bathroom", "D": "Garden" },
    "correctAnswer": "B"
  },
  {
    "id": 40,
    "text": "Which is a wild animal?",
    "options": { "A": "Cow", "B": "Lion", "C": "Chicken", "D": "Goat" },
    "correctAnswer": "B"
  },
  {
    "id": 41,
    "text": "What do you use to brush teeth?",
    "options": { "A": "Soap", "B": "Toothbrush", "C": "Comb", "D": "Towel" },
    "correctAnswer": "B"
  },
  {
    "id": 42,
    "text": "How many legs does a spider have?",
    "options": { "A": "6", "B": "8", "C": "4", "D": "10" },
    "correctAnswer": "B"
  },
  {
    "id": 43,
    "text": "Which is a job?",
    "options": { "A": "Table", "B": "Doctor", "C": "Window", "D": "Water" },
    "correctAnswer": "B"
  },
  {
    "id": 44,
    "text": "What is the color of coal?",
    "options": { "A": "White", "B": "Black", "C": "Blue", "D": "Green" },
    "correctAnswer": "B"
  },
  {
    "id": 45,
    "text": "Which is a room in a house?",
    "options": { "A": "Tree", "B": "Car", "C": "Bedroom", "D": "Mountain" },
    "correctAnswer": "C"
  },
  {
    "id": 46,
    "text": "What do you wear in winter?",
    "options": { "A": "Coat", "B": "T-shirt", "C": "Sandals", "D": "Shorts" },
    "correctAnswer": "A"
  },
  {
    "id": 47,
    "text": "Which is a sweet food?",
    "options": { "A": "Salt", "B": "Ice cream", "C": "Pepper", "D": "Vinegar" },
    "correctAnswer": "B"
  },
  {
    "id": 48,
    "text": "What do you read?",
    "options": { "A": "Shoes", "B": "Book", "C": "Water", "D": "Stone" },
    "correctAnswer": "B"
  },
  {
    "id": 49,
    "text": "Which is a body part?",
    "options": { "A": "Chair", "B": "Ear", "C": "Cloud", "D": "River" },
    "correctAnswer": "B"
  },
  {
    "id": 50,
    "text": "What do you use to see time?",
    "options": { "A": "Watch", "B": "Spoon", "C": "Door", "D": "Paper" },
    "correctAnswer": "A"
  },
  {
    "id": 51,
    "text": "What sound does a dog make?",
    "options": { "A": "Meow", "B": "Moo", "C": "Quack", "D": "Bark" },
    "correctAnswer": "D"
  },
  {
    "id": 52,
    "text": "We ___ playing football.",
    "options": { "A": "am", "B": "is", "C": "are", "D": "be" },
    "correctAnswer": "C"
  },
  {
    "id": 53,
    "text": "Which is a kitchen tool?",
    "options": { "A": "Knife", "B": "Pillow", "C": "Shoe", "D": "Tree" },
    "correctAnswer": "A"
  },
  {
    "id": 54,
    "text": "How many sides does a triangle have?",
    "options": { "A": "2", "B": "3", "C": "4", "D": "5" },
    "correctAnswer": "B"
  },
  {
    "id": 55,
    "text": "What do you use to clean teeth?",
    "options": { "A": "Soap", "B": "Toothpaste", "C": "Shampoo", "D": "Comb" },
    "correctAnswer": "B"
  },
  {
    "id": 56,
    "text": "Which is a mode of transport?",
    "options": { "A": "Bicycle", "B": "Table", "C": "Apple", "D": "Book" },
    "correctAnswer": "A"
  },
  {
    "id": 57,
    "text": "The cat is sitting ___ the roof.",
    "options": { "A": "under", "B": "inside", "C": "on", "D": "behind" },
    "correctAnswer": "C"
  },
  {
    "id": 58,
    "text": "Which is a dairy product?",
    "options": { "A": "Bread", "B": "Cheese", "C": "Carrot", "D": "Fish" },
    "correctAnswer": "B"
  },
  {
    "id": 59,
    "text": "What do you call a young cow?",
    "options": { "A": "Puppy", "B": "Kitten", "C": "Calf", "D": "Chick" },
    "correctAnswer": "C"
  },
  {
    "id": 60,
    "text": "How many minutes in an hour?",
    "options": { "A": "30", "B": "60", "C": "100", "D": "45" },
    "correctAnswer": "B"
  },
  {
    "id": 61,
    "text": "Which is a red fruit?",
    "options": { "A": "Banana", "B": "Apple", "C": "Grape", "D": "Lemon" },
    "correctAnswer": "B"
  },
  {
    "id": 62,
    "text": "What do you use to carry books?",
    "options": { "A": "Bag", "B": "Spoon", "C": "Chair", "D": "Plate" },
    "correctAnswer": "A"
  },
  {
    "id": 63,
    "text": "Opposite of 'empty'?",
    "options": { "A": "Full", "B": "Big", "C": "Cold", "D": "Slow" },
    "correctAnswer": "A"
  },
  {
    "id": 64,
    "text": "Which is a part of a tree?",
    "options": { "A": "Root", "B": "Wheel", "C": "Door", "D": "Shoe" },
    "correctAnswer": "A"
  },
  {
    "id": 65,
    "text": "What do you drink from a bottle?",
    "options": { "A": "Shirt", "B": "Water", "C": "Chair", "D": "Stone" },
    "correctAnswer": "B"
  },
  {
    "id": 66,
    "text": "Which is a musical instrument?",
    "options": { "A": "Guitar", "B": "Table", "C": "Pen", "D": "Shoe" },
    "correctAnswer": "A"
  },
  {
    "id": 67,
    "text": "Your brother's daughter is your...",
    "options": { "A": "Niece", "B": "Nephew", "C": "Cousin", "D": "Aunt" },
    "correctAnswer": "A"
  },
  {
    "id": 68,
    "text": "Which is used for rain protection?",
    "options": { "A": "Umbrella", "B": "Fan", "C": "Lamp", "D": "Mirror" },
    "correctAnswer": "A"
  },
  {
    "id": 69,
    "text": "What do you call morning meal?",
    "options": { "A": "Lunch", "B": "Dinner", "C": "Breakfast", "D": "Snack" },
    "correctAnswer": "C"
  },
  {
    "id": 70,
    "text": "Which is a green vegetable?",
    "options": { "A": "Carrot", "B": "Broccoli", "C": "Potato", "D": "Onion" },
    "correctAnswer": "B"
  },
  {
    "id": 71,
    "text": "What do you write with on paper?",
    "options": { "A": "Eraser", "B": "Pencil", "C": "Book", "D": "Chair" },
    "correctAnswer": "B"
  },
  {
    "id": 72,
    "text": "How many colors in a rainbow?",
    "options": { "A": "3", "B": "5", "C": "7", "D": "9" },
    "correctAnswer": "C"
  },
  {
    "id": 73,
    "text": "Which is a winter month?",
    "options": { "A": "June", "B": "December", "C": "April", "D": "August" },
    "correctAnswer": "B"
  },
  {
    "id": 74,
    "text": "What do you use to call someone?",
    "options": { "A": "Phone", "B": "Spoon", "C": "Chair", "D": "Paper" },
    "correctAnswer": "A"
  },
  {
    "id": 75,
    "text": "Which is a hot drink?",
    "options": { "A": "Ice", "B": "Tea", "C": "Juice", "D": "Water" },
    "correctAnswer": "B"
  },
  {
    "id": 76,
    "text": "What falls from the sky when it rains?",
    "options": { "A": "Rain", "B": "Snow", "C": "Leaves", "D": "Stones" },
    "correctAnswer": "A"
  },
  {
    "id": 77,
    "text": "Which is a direction?",
    "options": { "A": "Left", "B": "Table", "C": "Water", "D": "Sugar" },
    "correctAnswer": "A"
  },
  {
    "id": 78,
    "text": "He ___ breakfast at 7 AM.",
    "options": { "A": "eat", "B": "eats", "C": "eating", "D": "ate" },
    "correctAnswer": "B"
  },
  {
    "id": 79,
    "text": "What do you wear on your head?",
    "options": { "A": "Hat", "B": "Socks", "C": "Belt", "D": "Watch" },
    "correctAnswer": "A"
  },
  {
    "id": 80,
    "text": "Which is a farm animal?",
    "options": { "A": "Sheep", "B": "Lion", "C": "Shark", "D": "Eagle" },
    "correctAnswer": "A"
  },
  {
    "id": 81,
    "text": "How many wheels on a car?",
    "options": { "A": "2", "B": "3", "C": "4", "D": "5" },
    "correctAnswer": "C"
  },
  {
    "id": 82,
    "text": "Opposite of 'day'?",
    "options": { "A": "Night", "B": "Morning", "C": "Evening", "D": "Noon" },
    "correctAnswer": "A"
  },
  {
    "id": 83,
    "text": "Where do you keep clothes?",
    "options": { "A": "Fridge", "B": "Wardrobe", "C": "Oven", "D": "Sink" },
    "correctAnswer": "B"
  },
  {
    "id": 84,
    "text": "Which is a metal?",
    "options": { "A": "Iron", "B": "Wood", "C": "Plastic", "D": "Paper" },
    "correctAnswer": "A"
  },
  {
    "id": 85,
    "text": "What do you use to wash dishes?",
    "options": { "A": "Soap", "B": "Comb", "C": "Pen", "D": "Book" },
    "correctAnswer": "A"
  },
  {
    "id": 86,
    "text": "Which is a bird?",
    "options": { "A": "Elephant", "B": "Sparrow", "C": "Snake", "D": "Fish" },
    "correctAnswer": "B"
  },
  {
    "id": 87,
    "text": "Your sister's son is your...",
    "options": { "A": "Nephew", "B": "Niece", "C": "Cousin", "D": "Uncle" },
    "correctAnswer": "A"
  },
  {
    "id": 88,
    "text": "What do you use to measure length?",
    "options": { "A": "Ruler", "B": "Clock", "C": "Thermometer", "D": "Spoon" },
    "correctAnswer": "A"
  },
  {
    "id": 89,
    "text": "Which is a city?",
    "options": { "A": "Mountain", "B": "Paris", "C": "River", "D": "Forest" },
    "correctAnswer": "B"
  },
  {
    "id": 90,
    "text": "What do you call a baby dog?",
    "options": { "A": "Kitten", "B": "Cub", "C": "Puppy", "D": "Chick" },
    "correctAnswer": "C"
  },
  {
    "id": 91,
    "text": "How many continents are there?",
    "options": { "A": "5", "B": "6", "C": "7", "D": "8" },
    "correctAnswer": "C"
  },
  {
    "id": 92,
    "text": "Which is a sea animal?",
    "options": { "A": "Dolphin", "B": "Elephant", "C": "Lion", "D": "Eagle" },
    "correctAnswer": "A"
  },
  {
    "id": 93,
    "text": "What do you use to clean the floor?",
    "options": { "A": "Broom", "B": "Toothbrush", "C": "Knife", "D": "Plate" },
    "correctAnswer": "A"
  },
  {
    "id": 94,
    "text": "Which is a verb?",
    "options": { "A": "Run", "B": "Blue", "C": "Table", "D": "Sweet" },
    "correctAnswer": "A"
  },
  {
    "id": 95,
    "text": "What is the color of blood?",
    "options": { "A": "Red", "B": "Green", "C": "Yellow", "D": "Black" },
    "correctAnswer": "A"
  },
  {
    "id": 96,
    "text": "Where do birds live?",
    "options": { "A": "Nest", "B": "Car", "C": "Refrigerator", "D": "Shoe" },
    "correctAnswer": "A"
  },
  {
    "id": 97,
    "text": "Which is a planet?",
    "options": { "A": "Moon", "B": "Mars", "C": "Sun", "D": "Star" },
    "correctAnswer": "B"
  },
  {
    "id": 98,
    "text": "What do you use to eat soup?",
    "options": { "A": "Fork", "B": "Spoon", "C": "Knife", "D": "Hand" },
    "correctAnswer": "B"
  },
  {
    "id": 99,
    "text": "Which is a shape?",
    "options": { "A": "Square", "B": "Stone", "C": "Water", "D": "Air" },
    "correctAnswer": "A"
  },
  {
    "id": 100,
    "text": "What do you say when you meet someone?",
    "options": { "A": "Hello", "B": "Goodbye", "C": "Sleep", "D": "Eat" },
    "correctAnswer": "A"
  },
];

// Foydalanuvchi sessiyalari
const userSessions = {};

bot.start((ctx) => {
  return ctx.reply('Assalomu alaykum! Ushbu bot yordamida siz Ingliz tili boshlangʻich darajasi uchun 100 dan ortiq turli mavzulardagi ingliz tili test savollarini yechib, oʻz bilimingizni yanada mustahkamlashingiz mumkin. Ushbu bot A1 darajadagi savollar bilan boyitilgan. Testlarda omad tilayman. Testni boshlash uchun /newtest buyrugʻini yuboring.');
});

bot.command('newtest', async (ctx) => {
  const chatId = ctx.chat.id;
  
  // 25 ta tasodifiy savol tanlash
  const randomQuestions = questionsDB
    .sort(() => 0.5 - Math.random())
    .slice(0, 25);

  userSessions[chatId] = {
    questions: randomQuestions,
    currentQuestionIndex: 0,
    score: 0
  };

  await sendNextQuestion(ctx);
});

async function sendNextQuestion(ctx) {
  const chatId = ctx.chat.id;
  const session = userSessions[chatId];

  if (session.currentQuestionIndex >= session.questions.length) {
    return ctx.reply(`Test yakunlandi! Siz 25ta savoldan ${session.score} tasiga to'g'ri javob berdingiz. Yangi testni boshlash uchun /newtest buyrugʻini tanlang`);
  }

  const question = session.questions[session.currentQuestionIndex];
  const buttons = Object.entries(question.options).map(([key, value]) => 
    Markup.button.callback(`${key}: ${value}`, `answer_${question.id}_${key}`)
  );

  await ctx.reply(
    `Savol ${session.currentQuestionIndex + 1}/${session.questions.length}\n${question.text}`,
    Markup.inlineKeyboard(buttons, { columns: 2 })
  );
}

bot.action(/answer_(\d+)_(\w+)/, async (ctx) => {
  const chatId = ctx.chat.id;
  const [_, questionId, selectedAnswer] = ctx.match;
  const session = userSessions[chatId];
  const question = session.questions.find(q => q.id === parseInt(questionId));

  // Tugmalarni yangilash
  const updatedButtons = Object.entries(question.options).map(([key, value]) => {
    const isCorrect = key === question.correctAnswer;
    const isSelected = key === selectedAnswer;
    let emoji = '';
    
    if (isSelected) {
      emoji = isCorrect ? ' ✅' : ' ❌';
    } else if (isCorrect) {
      emoji = ' ✅';
    }

    return Markup.button.callback(
      `${key}: ${value}${emoji}`,
      `ignored_${ctx.match[0]}`//,
      //!isCorrect && isSelected // Faqat noto'g'ri javoblarni disable qilish
    );
  });

  await ctx.editMessageReplyMarkup({
    inline_keyboard: Markup.inlineKeyboard(updatedButtons, { columns: 2 }).reply_markup.inline_keyboard
  });

  // Hisobni yangilash
  if (selectedAnswer === question.correctAnswer) {
    session.score++;
  }

  // 3 soniya kutish
  setTimeout(async () => {
    session.currentQuestionIndex++;
    await sendNextQuestion(ctx);
  }, 2500);
});

bot.launch();
console.log('Bot started...');