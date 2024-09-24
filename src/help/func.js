const randomNumber = (max = 0, min = 100) => (Math.floor(Math.random() * (max - min + 1)) + min);
const showGameRules = (rules) => console.log(rules);
const showCongratulation = (name) => console.log(`Congratulations, ${name}!`);
const showQuestion = (question) => console.log(`Question: ${question}`);
const showCorrect = () => console.log('Correct!');
const answerYesNo = (answer) => (answer === true ? 'yes' : 'no');
const showWrong = (answer, result, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log(`Let's try again, ${name}!`);
};

export {
  randomNumber,
  showGameRules,
  showCongratulation,
  showQuestion,
  showCorrect,
  showWrong,
  answerYesNo,
};
