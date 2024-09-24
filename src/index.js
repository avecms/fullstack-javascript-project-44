import readlineSync from 'readline-sync';
import welcomeMessage from './cli.js';
import {
  showGameRules,
  showCongratulation,
  showQuestion,
  showCorrect,
  showWrong,
} from './help/func.js';

export default (config, getRound) => {
  const userName = welcomeMessage();
  showGameRules(config.rule);

  let roundCount = config.rounds;

  while (roundCount > 0) {
    const [question, result] = getRound();
    showQuestion(question);

    const answer = readlineSync.question('Your answer: ');

    if (answer === result) {
      showCorrect();
    } else {
      showWrong(answer, result, userName);
      break;
    }

    roundCount -= 1;
  }

  if (roundCount <= 0) {
    showCongratulation(userName);
  }
};
