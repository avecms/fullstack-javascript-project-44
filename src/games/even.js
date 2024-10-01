import randomNumber from '../help/utils.js';

const checkEven = (num) => num % 2 === 0;

export const rules = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const numberOne = randomNumber(1, 100);

  const roundQuestion = `${numberOne}`;
  const roundResult = checkEven(numberOne) ? 'yes' : 'no';

  return [roundQuestion, roundResult];
};
