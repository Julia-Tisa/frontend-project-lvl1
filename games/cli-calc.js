import logicOfGame from '../src/index.js';
import randomNumber from '../src/helper.js';

const randomSign = () => {
  const num = Math.floor(Math.random() * 3);
  switch (num) {
    case 0:
      return '+';
    case 1:
      return '*';
    default:
      return '-';
  }
};

const resultExpression = (num1, num2, sign) => {
  switch (sign) {
    case '+':
      return num1 + num2;
    case '*':
      return num1 * num2;
    default:
      return num1 - num2;
  }
};

const game = () => {
  const instructions = 'What is the result of the expression?';

  const calculateResult = () => {
    const num1 = randomNumber(0, 100);
    const num2 = randomNumber(0, 100);
    const sign = randomSign();
    const result = String(resultExpression(num1, num2, sign));
    const question = `${num1} ${sign} ${num2}`;
    return [question, result];
  };
  logicOfGame(instructions, calculateResult);
};
export default game;
