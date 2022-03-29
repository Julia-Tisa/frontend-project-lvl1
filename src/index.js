import readlineSync from 'readline-sync';

const logicOfGame = (instructions, calculateResult) => {
  console.log('Welcome to the Brain Games!');
  console.log();
  const user = readlineSync.question('May I have your name? ');
  console.log();
  console.log(`Hello, ${user}`);
  console.log();
  console.log(instructions);
  let counter = 0;
  while (counter < 3) {
    const [question, result] = calculateResult();
    console.log();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== result) {
      console.log();
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${user}!`);
      return;
    }
    counter += 1;
    console.log('Correct!');
  }
  console.log();
  console.log(`Congratulations, ${user}!`);
};

export default logicOfGame;
