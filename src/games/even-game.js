import engineOfGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const instructions = 'Answer "yes" if the number is even, otherwise answer "no".';

const game = () => {
  const generateRoundData = () => {
    const number = generateRandomNumber(0, generateRandomNumber(100, 4576));
    const question = `${number}`;
    const result = isEven(number) ? 'yes' : 'no';
    return [question, result];
  };
  engineOfGame(instructions, generateRoundData);
};
export default game;
