import { randomNumber } from '../help/func.js';

export const config = {
  rounds: 3,
  rule: 'What is the result of the expression?',
};

const calcOperands = ['+', '-', '*'];

const getCalcOperator = () => {
  const operandsLength = calcOperands.length;
  const index = randomNumber(1, operandsLength);

  return calcOperands[index - 1];
};

const calcOperation = (a, b, op) => {
  let result = null;

  switch (op) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    case '*':
      result = a * b;
      break;
    case '/':
      result = a / b;
      break;
    default:
      result = null;
      break;
  }

  return String(result);
};

export default () => {
  const numberOne = randomNumber(1, 100);
  const numberTwo = randomNumber(1, 100);
  const calcOperand = getCalcOperator();
  const roundQuestion = `${numberOne} ${calcOperand} ${numberTwo}`;
  const roundResult = calcOperation(numberOne, numberTwo, calcOperand);

  return [roundQuestion, roundResult];
};
