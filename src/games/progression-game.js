import engineOfGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const randomArrayofNumbers = (length, step) => {
  const randomArray = [];
  const start = generateRandomNumber(1, 50);
  for (let i = 0; i < length; i += 1) {
    const val = start + step * i;
    randomArray.push(val);
  }
  return randomArray;
};

const missingInProgression = (randomArray, lengthArray) => {
  const lenght = lengthArray - 1;
  const missing = generateRandomNumber(0, lenght);
  const randomArrayWithMissing = [];
  for (let i = 0; i < randomArray.length; i += 1) {
    randomArrayWithMissing.push(randomArray[i]);
  }
  randomArrayWithMissing[missing] = '..';
  return randomArrayWithMissing;
};

const instructions = 'What number is missing in the progression?';

const game = () => {
  const generateRoundData = () => {
    const length = generateRandomNumber(5, 10);
    const step = generateRandomNumber(2, 18);
    const randomArray = randomArrayofNumbers(length, step);
    const randomArrayWithMissing = missingInProgression(randomArray, randomArray.length);
    const index = randomArrayWithMissing.indexOf('..');
    const result = String(randomArray[index]);
    const question = `${randomArrayWithMissing.join(' ')}`;
    return [question, result];
  };
  engineOfGame(instructions, generateRoundData);
};
export default game;
