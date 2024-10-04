import getRandomInRange from '../help/utils.js';
import mainEngine from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRound = () => {
  const firstNumber = getRandomInRange(1, 100);
  const roundQuestion = `${firstNumber}`;
  const correctAnswer = isPrime(firstNumber) ? 'yes' : 'no';

  return [roundQuestion, correctAnswer];
};

export default () => {
  const questionPhrase = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  mainEngine(questionPhrase, generateRound);
};
