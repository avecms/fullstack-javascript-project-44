import readlineSync from 'readline-sync';
import welcomeMessage from './cli.js';

const runEngine = (rules, makeRound) => {
  const roundsCount = 3;
  const userName = welcomeMessage();
  console.log(rules);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = makeRound();

    console.log(`Question: ${question}`);

    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
};

export default runEngine;
