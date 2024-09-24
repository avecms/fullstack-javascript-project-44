import { randomNumber, answerYesNo } from '../help/func.js';

export const config = {
  rounds: 3,
  rule: 'Answer "yes" if given number is prime. Otherwise answer "no".',
};

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

export default () => {
  const numberOne = randomNumber(1, 100);

  const roundQuestion = `${numberOne}`;
  const roundResult = answerYesNo(isPrime(numberOne));

  return [roundQuestion, roundResult];
};
