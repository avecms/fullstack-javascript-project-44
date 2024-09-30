import readlineSync from 'readline-sync';
import welcomeMessage from './cli.js';

const showGameRules = (rules) => console.log(rules);
const showCongratulation = (name) => console.log(`Congratulations, ${name}!`);
const showQuestion = (question) => console.log(`Question: ${question}`);
const showCorrect = () => console.log('Correct!');
const showYesNo = (result) => {
  if (typeof result === 'boolean') {
    return result === true ? 'yes' : 'no';
  }
  return result;
};
const showWrong = (answer, result, name) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  console.log(`Let's try again, ${name}!`);
};

export default (config, getRound) => {
  const userName = welcomeMessage();
  showGameRules(config.rule);

  let roundCount = config.rounds;

  while (roundCount > 0) {
    const [question, result] = getRound();

    showQuestion(question);

    const answer = readlineSync.question('Your answer: ');

    if (answer === showYesNo(result)) {
      showCorrect();
    } else {
      showWrong(answer, showYesNo(result), userName);
      break;
    }

    roundCount -= 1;
  }

  if (roundCount <= 0) {
    showCongratulation(userName);
  }
};
