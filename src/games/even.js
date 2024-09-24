import { randomNumber, answerYesNo } from '../help/func.js';

const checkEven = (num) => answerYesNo(num % 2 === 0);

export const config = {
  rounds: 3,
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
};

export default () => {
  const numberOne = randomNumber(1, 100);

  const roundQuestion = `${numberOne}`;
  const roundResult = checkEven(numberOne);

  return [roundQuestion, roundResult];
};
