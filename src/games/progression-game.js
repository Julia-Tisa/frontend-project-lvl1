import engineOfGame from '../index.js';
import randomNumber from '../random-number.js';

const randomArrayofNumbers = (length, step) => {
  const randomArray = [];
  const start = randomNumber(1, 50);
  for (let i = 0; i < length; i += 1) {
    const val = start + step * i;
    randomArray.push(val);
  }
  return randomArray;
};

const missingInProgression = (randomArray, lengthArray) => {
  const lenght = lengthArray - 1;
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
    const length = randomNumber(5, 10);
    const step = randomNumber(2, 18);
    const randomArray = randomArrayofNumbers(length, step);
    const randomArrayWithMissing = missingInProgression(randomArray, randomArray.length);
    const index = randomArrayWithMissing.indexOf('..');
    const result = String(randomArray[index]);
    const question = `${randomArrayWithMissing.join(' ')}`;
    return [question, result];
  };
  engineOfGame(instructions, calculateResult);
};
export default game;
