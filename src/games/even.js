import randomNumber from '../help/utils.js';

export const config = {
  rounds: 3,
  rule: 'Answer "yes" if the number is even, otherwise answer "no".',
};

const checkEven = (num) => num % 2 === 0;

export default () => {
  const numberOne = randomNumber(1, 100);

  const roundQuestion = `${numberOne}`;
  const roundResult = checkEven(numberOne);

  return [roundQuestion, roundResult];
};
