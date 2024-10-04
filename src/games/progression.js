import getRandomInRange from '../help/utils.js';
import mainEngine from '../index.js';

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

const generateRound = () => {
  const numberStart = getRandomInRange(0, 50);
  const numberStep = getRandomInRange(0, 10);
  const numberIndex = getRandomInRange(0, 9) - 1;
  const progression = getProgression(numberStart, numberStep);
  const correctAnswer = String(progression[numberIndex]);
  const roundQuestion = getQuestionArr(progression, numberIndex).join(' ');

  return [roundQuestion, correctAnswer];
};

export default () => {
  const questionPhrase = 'What number is missing in the progression?';
  mainEngine(questionPhrase, generateRound);
};
