import logicOfGame from '../src/index.js';
import randomNumber from '../src/helper.js';

const game = () => {
  const instructions = 'Answer "yes" if the number is even, otherwise answer "no".';

  const calculateResult = () => {
    const no = 'no';
    const yes = 'yes';
    const number = randomNumber(0, randomNumber(100, 4576));
    const question = `${number}`;
    let result = no;
    if (number % 2 === 0) {
      result = yes;
    }
    return [question, result];
  };
  logicOfGame(instructions, calculateResult);
};
export default game;
