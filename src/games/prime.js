import randomNumber from '../help/utils.js';

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

export const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => {
  const numberOne = randomNumber(1, 100);

  const roundQuestion = `${numberOne}`;
  const roundResult = isPrime(numberOne) ? 'yes' : 'no';

  return [roundQuestion, roundResult];
};
