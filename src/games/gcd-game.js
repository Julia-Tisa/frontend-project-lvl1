import engineOfGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const nod = (x, y) => {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
};

const instructions = 'Find the greatest common divisor of given numbers.';

const game = () => {
  const generateRoundData = () => {
    const num1 = generateRandomNumber(1, 50);
    const num2 = generateRandomNumber(20, 100);
    const correctAnswer = String(nod(num1, num2));
    const question = `${num1} ${num2}`;
    return [question, correctAnswer];
  };
  engineOfGame(instructions, generateRoundData);
};
export default game;
