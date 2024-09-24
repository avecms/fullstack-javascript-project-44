import readlineSync from 'readline-sync';
import { checkEven, randomNumber, showGameRules } from '../help/func.js';
import welcomeMessage from '../cli.js';

const gameRule = 'Answer "yes" if the number is even, otherwise answer "no".';

export default () => {
  const name = welcomeMessage();

  showGameRules(gameRule);

  let questionsLeft = 3;

  while (questionsLeft > 0) {
    const num = randomNumber(1, 100);
    console.log(`Question: ${num}`);

    const response = readlineSync.question('Your answer: ');

    if (!response || response !== checkEven(num)) {
      console.log(`'${response}' is wrong answer ;(. Correct answer was '${checkEven(num)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    } else {
      console.log('Correct!');
    }

    questionsLeft -= 1;
  }

  if (questionsLeft <= 0) {
    console.log(`Congratulations, ${name}!`);
  }
};
