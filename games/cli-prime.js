import logicOfGame from '../src/index.js';
import randomNumber from '../src/helper.js';

const isPrime = (number) => {
  const num = number;
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const calc = () => {
  const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const game = () => {
    const no = 'no';
    const yes = 'yes';
    const number = randomNumber(1, randomNumber(100, 997));
    const isPrimeNumber = isPrime(number);
    const question = `${number}`;
    let result = no;
    if (isPrimeNumber) {
      result = yes;
    }
    return [question, result];
  };
  logicOfGame(instructions, game);
};
export default calc;
