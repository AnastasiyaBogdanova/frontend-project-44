import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operator: ${operator}`);
  }
};


const getQuestionAndAnswer = () => {
  const num1 = getRandomNumber(1, 20);
  const num2 = getRandomNumber(1, 20);
  const operators = ['+', '-', '*'];
  const operator = operators[getRandomNumber(0, operators.length - 1)];

  const question = `${num1} ${operator} ${num2}`;
  const correctAnswer = String(calculate(num1, num2, operator));

  return { question, correctAnswer };
};

const runCalcGame = () => {
  const description = 'What is the result of the expression?';
  runGame(description, getQuestionAndAnswer);
};

export default runCalcGame;