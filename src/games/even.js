import readlineSync from 'readline-sync';

// Функция проверки на чётность (предикат)
const isEven = (number) => number % 2 === 0;

// Основная логика игры
const runEvenGame = () => {
  console.log('Welcome to the Brain Games!');

  // Запрос имени пользователя
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  let correctAnswers = 0;
  const maxCorrectAnswers = 3;

  while (correctAnswers < maxCorrectAnswers) {
    // Генерация случайного числа от 1 до 100
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ').toLowerCase();

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return; // Завершаем игру при ошибке
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runEvenGame;