import engineOfGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const generateProgression = (length, step, start) => {
  const randomArray = [];
  for (let i = 0; i < length; i += 1) {
    const val = start + step * i;
    randomArray.push(val);
  }
  return randomArray;
};

const instructions = 'What number is missing in the progression?';

const game = () => {
  const generateRoundData = () => {
    const length = generateRandomNumber(5, 10);
    const step = generateRandomNumber(2, 18);
    const start = generateRandomNumber(1, 50);
    const randomProgression = generateProgression(length, step, start);
    const missing = generateRandomNumber(0, randomProgression.length - 1);
    const correctAnswer = String(randomProgression[missing]);
    randomProgression[missing] = '..';
    const question = `${randomProgression.join(' ')}`;
    return [question, correctAnswer];
  };
  engineOfGame(instructions, generateRoundData);
};
export default game;
