import getRandomInRange from '../help/utils.js';
import mainEngine from '../index.js';

const getRandomOperator = () => {
  const operators = ['+', '-', '*'];
  return operators[getRandomInRange(0, operators.length - 1)];
};

const calculation = (leftOperand, rightOperand, operator) => {
  switch (operator) {
    case '+':
      return leftOperand + rightOperand;
    case '-':
      return leftOperand - rightOperand;
    case '*':
      return leftOperand * rightOperand;
    default:
      throw new Error(`Invalid operator - ${operator}`);
  }
};

const generateRound = () => {
  const firstNumber = getRandomInRange();
  const secondNumber = getRandomInRange();
  const operator = getRandomOperator();
  const roundQuestion = `${firstNumber} ${operator} ${secondNumber}`;
  const correctAnswer = String(calculation(firstNumber, secondNumber, operator));
  return [roundQuestion, correctAnswer];
};

export default () => {
  const questionPhrase = 'What is the result of the expression?';
  mainEngine(questionPhrase, generateRound);
};
