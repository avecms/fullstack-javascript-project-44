import { randomNumber } from '../help/func.js';

export const config = {
  rounds: 3,
  rule: 'Find the greatest common divisor of given numbers.',
};

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

export default () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const roundQuestion = `${numberOne} ${numberTwo}`;
  const roundResult = getGcd(numberOne, numberTwo);

  return [roundQuestion, roundResult];
};
