import getRandomInRange from '../help/utils.js';
import mainEngine from '../index.js';

const checkEven = (num) => num % 2 === 0;

const generateRound = () => {
  const firstNumber = getRandomInRange();
  const roundQuestion = `${firstNumber}`;
  const correctAnswer = checkEven(firstNumber) ? 'yes' : 'no';
  return [roundQuestion, correctAnswer];
};

export default () => {
  const questionPhrase = 'Answer "yes" if the number is even, otherwise answer "no".';
  mainEngine(questionPhrase, generateRound);
};
