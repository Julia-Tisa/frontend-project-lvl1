/* eslint-disable semi */
import readlineSync from 'readline-sync';

const sleep = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  sleep(2000)
  const name = readlineSync.question('May I have your name? ');
  sleep(1000)
  console.log(`Hello, ${name}!`);
  sleep(1000)
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return name;
}

const randomNumber = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  return number;
}

const game = () => {
  const name = startGame();
  sleep(2000)
  let counter = 0;
  const no = 'no';
  const yes = 'yes';
  while (counter < 3) {
    const number = randomNumber();
    sleep(2000)
    const ask = readlineSync.question('Your answer: ');
    sleep(2000)
    if ((number % 2 === 0 && ask === yes) || (number % 2 > 0 && ask === no)) {
      console.log('Correct!');
      counter += 1;
      sleep(2000)
    } else {
      if (number % 2 === 0) {
        return `'${ask}' is wrong answer ;(. Correct answer was 'yes'.
          Let's try again, ${name}!`
      }
      return `'${ask}' is wrong answer ;(. Correct answer was 'no'.
          Let's try again, ${name}!`;
    }
  }
  sleep(2000)
  return `Congratulations, ${name}!`
}
export default game;
