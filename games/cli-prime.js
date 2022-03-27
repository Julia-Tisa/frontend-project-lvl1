import readlineSync from 'readline-sync';
import { sleep, startGame } from '../src/index.js';

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100 + 1);
  return number;
};

const isPrime = (number) => {
  const num = number;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const name = startGame();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  console.log();
  sleep(1500);
  let counter = 0;
  const no = 'no';
  const yes = 'yes';
  while (counter < 3) {
    const number = randomNumber();
    const isPrimeNumber = isPrime(number);
    console.log(`Question: ${number}`);
    sleep(1000);
    const ask = readlineSync.question('Your answer: ');
    sleep(1000);
    if ((isPrimeNumber && ask === yes) || (!isPrimeNumber && ask === no)) {
      console.log('Correct!');
      console.log();
      counter += 1;
      sleep(500);
    } else {
      if (isPrimeNumber) {
        console.log();
        return `'${ask}' is wrong answer ;(. Correct answer was 'yes'.
            Let's try again, ${name}!`;
      }
      console.log();
      return `'${ask}' is wrong answer ;(. Correct answer was 'no'.
            Let's try again, ${name}!`;
    }
  }
  sleep(500);
  return `Congratulations, ${name}!`;
};
export default game;
