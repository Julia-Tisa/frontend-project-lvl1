import logicOfGame from '../index.js';
import randomNumber from '../random-number.js';

const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

  const calculateResult = () => {
    const number = randomNumber(1, randomNumber(100, 997));
    const isPrimeNumber = isPrime(number);
    const question = `${number}`;
    const result = isPrimeNumber ? 'yes' : 'no';
    return [question, result];
  };
  logicOfGame(instructions, calculateResult);
};
export default game;
