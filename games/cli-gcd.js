import logicOfGame from '../src/index.js';
import randomNumber from '../src/helper.js';

const nod = (x, y) => {
  if (y > x) return nod(y, x);
  if (!y) return x;
  return nod(y, x % y);
};

const game = () => {
  const instructions = 'Find the greatest common divisor of given numbers.';

  const calculateResult = () => {
    const num1 = randomNumber(1, 50);
    const num2 = randomNumber(20, 100);
    const result = String(nod(num1, num2));
    const question = `${num1} ${num2}`;
    return [question, result];
  };
  logicOfGame(instructions, calculateResult);
};
export default game;
