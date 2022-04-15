import engineOfGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const operands = ['+', '-', '*'];

const calculateExpression = (num1, num2, operand) => {
  switch (operand) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    case '-':
      return num1 - num2;
    default:
      throw new Error(`Unknown ${operand}!`);
  }
};

const instructions = 'What is the result of the expression?';

const game = () => {
  const generateRoundData = () => {
    const num1 = generateRandomNumber(0, 100);
    const num2 = generateRandomNumber(0, 100);
    const operand = operands[generateRandomNumber(0, 2)];
    const result = String(calculateExpression(num1, num2, operand));
    const question = `${num1} ${operand} ${num2}`;
    return [question, result];
  };
  engineOfGame(instructions, generateRoundData);
};
export default game;
