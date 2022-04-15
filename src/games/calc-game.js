import engineOfGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const randomSign = (num) => {
  const sign = ['+', '-', '*'];
  return sign[num];
};

const resultExpression = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Unknown ${sign}!`);
  }
};

const game = () => {
  const instructions = 'What is the result of the expression?';

  const calculateResult = () => {
    const num1 = generateRandomNumber(0, 100);
    const num2 = generateRandomNumber(0, 100);
    const sign = randomSign(generateRandomNumber(0, 2));
    const result = String(resultExpression(num1, num2, sign));
    const question = `${num1} ${sign} ${num2}`;
    return [question, result];
  };
  engineOfGame(instructions, calculateResult);
};
export default game;
