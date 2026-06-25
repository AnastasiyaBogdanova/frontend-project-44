import readlineSync from 'readline-sync';

const generateProgression = (start, step, length, hiddenIndex) => {
  const progression = [];

  for (let i = 0; i < length; i++) {
    const element = start + i * step;
    progression.push(element);
  }

  progression[hiddenIndex] = '..';

  return progression;
};

const runProgressionGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('What number is missing in the progression?');

  let correctAnswers = 0;
  const maxCorrectAnswers = 3;

  while (correctAnswers < maxCorrectAnswers) {
    const length = Math.floor(Math.random() * 6) + 5;
    const start = Math.floor(Math.random() * 20) + 1;
    const step = Math.floor(Math.random() * 10) + 1;
    const hiddenIndex = Math.floor(Math.random() * length); // случайная позиция

    const correctAnswer = start + hiddenIndex * step;

    const progression = generateProgression(start, step, length, hiddenIndex);

    console.log(`Question: ${progression.join(' ')}`);
    const userAnswer = parseInt(readlineSync.question('Your answer: '), 10);

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      correctAnswers++;
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
};

export default runProgressionGame;