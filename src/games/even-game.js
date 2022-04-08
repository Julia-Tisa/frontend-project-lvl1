import engineOfGame from '../index.js';
import randomNumber from '../random-number.js';

const isEven = (number) => {
  if (number % 2 === 0) {
    return true;
  }
  return false;
};

const game = () => {
  const instructions = 'Answer "yes" if the number is even, otherwise answer "no".';

  const calculateResult = () => {
    const number = randomNumber(0, randomNumber(100, 4576));
    const question = `${number}`;
    const result = isEven(number) ? 'yes' : 'no';
    return [question, result];
  };
  engineOfGame(instructions, calculateResult);
};
export default game;
