import readlineSync from 'readline-sync';
import { sleep, startGame } from '../src/index.js';

const randomNumber = () => {
  const number = Math.floor(Math.random() * 10 + 1);
  return number;
};

const nod = (x, y) => {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
};

const game = () => {
  const name = startGame();
  console.log('Find the greatest common divisor of given numbers.');
  console.log();
  sleep(2000);
  let counter = 0;
  while (counter < 3) {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const result = nod(num1, num2);
    console.log(`Question: ${num1} ${num2}`);
    sleep(500);
    const ask = readlineSync.question('Your answer: ');
    sleep(1000);
    if (ask !== String(result)) {
      console.log();
      return `'${ask}' is wrong answer ;(. Correct answer was '${result}'.
        Let's try again, ${name}!`;
    }
    counter += 1;
    console.log('Correct!');
    console.log();
    sleep(500);
  }
  sleep(500);
  return `Congratulations, ${name}!`;
};
export default game;
