import readlineSync from 'readline-sync';
import { sleep, startGame } from '../src/index.js';

const randomNumber = () => {
  const number = Math.floor(Math.random() * 10);
  return number;
};

const randomSign = () => {
  const num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return '+';
    case 1:
      return '*';
    default:
      return '-';
  }
};

const resultExpression = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return num1 - num2;
  }
};

const game = () => {
  const name = startGame();
  console.log('What is the result of the expression?');
  console.log();
  sleep(2000);
  let counter = 0;
  while (counter < 3) {
    const num1 = randomNumber();
    const num2 = randomNumber();
    const sign = randomSign();
    const result = resultExpression(num1, num2, sign);
    console.log(`Question: ${num1} ${sign} ${num2}`);
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
