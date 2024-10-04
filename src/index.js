import readlineSync from 'readline-sync';
import welcomeMessage from './cli.js';

const roundsCount = 3;

const runEngine = (questionPhrase, generateRound) => {
  const userName = welcomeMessage();
  console.log(questionPhrase);

  for (let i = 0; i < roundsCount; i += 1) {
    const [question, correctAnswer] = generateRound();

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
