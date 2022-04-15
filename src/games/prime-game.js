import engineOfGame from '../index.js';
import generateRandomNumber from '../generate-random-number.js';

const isPrime = (num) => {
  if (num < 2) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const game = () => {
  const generateRoundData = () => {
    const number = generateRandomNumber(1, generateRandomNumber(100, 997));
    const isPrimeNumber = isPrime(number);
    const question = `${number}`;
    const result = isPrimeNumber ? 'yes' : 'no';
    return [question, result];
  };
  engineOfGame(instructions, generateRoundData);
};
export default game;
