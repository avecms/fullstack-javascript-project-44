import getRandomInRange from '../help/utils.js';
import mainEngine from '../index.js';

const getGcd = (a, b) => {
  let num1 = a;
  let num2 = b;

  while (num2) {
    const temp = num2;
    num2 = num1 % num2;
    num1 = temp;
  }

  return String(num1);
};

const generateRound = () => {
  const firstNumber = getRandomInRange(1, 100);
  const secondNumber = getRandomInRange(1, 100);
  const roundQuestion = `${firstNumber} ${secondNumber}`;
  const correctAnswer = getGcd(firstNumber, secondNumber);

  return [roundQuestion, correctAnswer];
};

export default () => {
  const questionPhrase = 'Find the greatest common divisor of given numbers.';
  mainEngine(questionPhrase, generateRound);
};
