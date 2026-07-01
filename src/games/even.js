import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const isEven = (number) => number % 2 === 0;

const getQuestionAndAnswer = () => {
  const randomNumber = getRandomNumber(1, 100);
  const question = String(randomNumber);
  const correctAnswer = isEven(randomNumber) ? 'yes' : 'no';

  return { question, correctAnswer };
};

const runEvenGame = () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  runGame(description, getQuestionAndAnswer);
};

export default runEvenGame;