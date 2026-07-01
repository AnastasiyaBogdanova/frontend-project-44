import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

// Функция проверки на простое число (предикат)
const isPrime = (number) => {
  if (number < 2) return false;

  // Проверяем делители от 2 до квадратного корня из числа
  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};

// Основная логика игры
const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(randomNumber) ? 'yes' : 'no';

  return {
    question: String(randomNumber),
    correctAnswer,
  };
};

const runPrimeGame = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  runGame(description, getQuestionAndAnswer);
};

export default runPrimeGame;