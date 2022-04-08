import readlineSync from 'readline-sync';

const engineOfGame = (instructions, calculateResult) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}`);
  console.log(instructions);
  const counter = 3;
  for (let i = 0; i < counter; i += 1) {
    const [question, result] = calculateResult();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== result) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${user}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${user}!`);
};

export default engineOfGame;
