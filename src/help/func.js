const checkEven = (num) => (num % 2 === 0 ? 'yes' : 'no');

const randomNumber = (max = 0, min = 100) => (Math.floor(Math.random() * (max - min + 1)) + min);

const showGameRules = (rules) => console.log(rules);

const answerYesNo = (answer) => (answer === true ? 'yes' : 'no');

export {
  checkEven,
  randomNumber,
  showGameRules,
  answerYesNo,
};
