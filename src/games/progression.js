import randomNumber from '../help/utils.js';

export const config = {
  rounds: 3,
  rule: 'What number is missing in the progression?',
};

const getProgression = (num, step) => {
  let arr = [];
  let summ = num;

  for (let i = 0; i < 10; i += 1) {
    summ += step;
    arr = [...arr, summ];
  }

  return arr;
};

const getQuestionArr = (arr, ind) => {
  const newArr = arr;
  newArr[ind] = '..';
  return newArr;
};

export default () => {
  const numberStart = randomNumber(0, 50);
  const numberStep = randomNumber(0, 10);
  const numberIndex = randomNumber(0, 9) - 1;
  const progression = getProgression(numberStart, numberStep);
  const roundResult = String(progression[numberIndex]);
  const roundQuestion = getQuestionArr(progression, numberIndex).join(' ');

  return [roundQuestion, roundResult];
};
