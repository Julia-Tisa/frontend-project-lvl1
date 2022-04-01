import logicOfGame from '../index.js';
import randomNumber from '../random-number.js';

const randomArrayofNumbers = () => {
  const length = randomNumber(5, 10);
  const step = randomNumber(2, 18);
  const randomArray = [];
  let a = randomNumber(1, 50);
  for (let i = 0; i < length; i += 1) {
    randomArray.push(a);
    a += step;
  }
  return randomArray;
};

const missingProgression = (randomArray, lenghtArray) => {
  const lenght = lenghtArray - 1;
  const missing = randomNumber(0, lenght);
  const randomArrayWithMissing = [];
  for (let i = 0; i < randomArray.length; i += 1) {
    randomArrayWithMissing.push(randomArray[i]);
  }
  randomArrayWithMissing[missing] = '..';
  return randomArrayWithMissing;
};

const game = () => {
  const instructions = 'What number is missing in the progression?';

  const calculateResult = () => {
    const randomArray = randomArrayofNumbers();
    const randomArrayWithMissing = missingProgression(randomArray, randomArray.length);
    const index = randomArrayWithMissing.indexOf('..');
    const result = String(randomArray[index]);
    const question = `${randomArrayWithMissing.join(' ')}`;
    return [question, result];
  };
  logicOfGame(instructions, calculateResult);
};
export default game;
