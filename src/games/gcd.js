import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const findGcd = (a, b) => {
  let num1 = Math.abs(a);
  let num2 = Math.abs(b);

  while (num2 !== 0) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return num1;
};


const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 100);
  const num2 = getRandomNumber(1, 100);
  const correctAnswer = String(findGcd(num1, num2));

  return {
    question: `${num1} ${num2}`,
    correctAnswer,
  };
};

const runGcdGame = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  runGame(description, getQuestionAndAnswer);
};

export default runGcdGame;