import runGame from '../index.js';
import { getRandomNumber } from '../utils.js';

const generateProgression = (start, step, length, hiddenIndex) => {
  const progression = [];

  for (let i = 0; i < length; i++) {
    const element = start + i * step;
    progression.push(element);
  }

  progression[hiddenIndex] = '..';

  return progression;
};

const getQuestionAndAnswer = () => {
  const length = getRandomNumber(5, 10);
  const start = getRandomNumber(1, 20);
  const step = getRandomNumber(1, 10);
  const hiddenIndex = getRandomNumber(0, length - 1);

  const correctAnswer = String(start + hiddenIndex * step);
  const progression = generateProgression(start, step, length, hiddenIndex);

  return {
    question: progression.join(' '),
    correctAnswer,
  };
};

const runProgressionGame = () => {
  const description = 'What number is missing in the progression?';
  runGame(description, getQuestionAndAnswer);
};

export default runProgressionGame;