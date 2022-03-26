/* eslint-disable semi */
import readlineSync from 'readline-sync';
import { sleep, startGame } from '../src/index.js';

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  return number;
}

const game = () => {
  const name = startGame();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  console.log();
  sleep(3000);
  let counter = 0;
  const no = 'no';
  const yes = 'yes';
  while (counter < 3) {
    const number = randomNumber();
    sleep(500);
    const ask = readlineSync.question('Your answer: ');
    sleep(1000);
    if ((number % 2 === 0 && ask === yes) || (number % 2 > 0 && ask === no)) {
      console.log('Correct!');
      console.log();
      counter += 1;
      sleep(500);
    } else {
      if (number % 2 === 0) {
        console.log();
        return `'${ask}' is wrong answer ;(. Correct answer was 'yes'.
          Let's try again, ${name}!`
      }
      console.log();
      return `'${ask}' is wrong answer ;(. Correct answer was 'no'.
          Let's try again, ${name}!`;
    }
  }
  sleep(500);
  return `Congratulations, ${name}!`
}
export default game;
