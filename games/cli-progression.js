import readlineSync from 'readline-sync';
import { sleep, startGame } from '../src/index.js';

const randomNumber = () => {
  const number = Math.floor(Math.random() * 10);
  return number;
};

const randomNumberForMissing = (randomLenght) => {
  const number = Math.floor(Math.random() * randomLenght);
  return number;
};

const randomLenght = () => {
  const number = Math.floor(Math.random() * 10 + 5);
  return number;
};

const randomArrayofNumbers = () => {
  const length = randomLenght();
  const step = randomNumber() + 2;
  const randomArray = [];
  let a = randomNumber();
  for (let i = 0; i < length; i += 1) {
    randomArray.push(a);
    a += step;
  }
  return randomArray;
};

const missingProgression = (randomArray, lenght) => {
  const missing = randomNumberForMissing(lenght);
  const randomArrayWithMissing = [];
  for (let i = 0; i < randomArray.length; i += 1) {
    randomArrayWithMissing.push(randomArray[i]);
  }
  randomArrayWithMissing[missing] = '..';
  return randomArrayWithMissing;
};

const game = () => {
  const name = startGame();
  console.log('What number is missing in the progression?');
  console.log();
  sleep(1000);
  let counter = 0;
  while (counter < 3) {
    const randomArray = randomArrayofNumbers();
    const randomArrayWithMissing = missingProgression(randomArray, randomArray.length);
    const index = randomArrayWithMissing.indexOf('..');
    const rightNumber = randomArray[index];
    console.log(`Question: ${randomArrayWithMissing.join(' ')}`);
    sleep(2000);
    const ask = readlineSync.question('Your answer: ');
    sleep(1000);
    if (ask !== String(rightNumber)) {
      console.log();
      return `'${ask}' is wrong answer ;(. Correct answer was '${rightNumber}'.
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
