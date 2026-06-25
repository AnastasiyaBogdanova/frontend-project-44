import readlineSync from 'readline-sync';

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


const runGcdGame = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  console.log('Find the greatest common divisor of given numbers.');

  let correctAnswers = 0;
  const maxCorrectAnswers = 3;

  while (correctAnswers < maxCorrectAnswers) {

    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const correctAnswer = findGcd(num1, num2);

    console.log(`Question: ${num1} ${num2}`);
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

export default runGcdGame;