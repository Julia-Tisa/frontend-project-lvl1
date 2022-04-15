import readlineSync from 'readline-sync';

const counter = 3;

const engineOfGame = (instructions, calculateResult) => {
  console.log('Welcome to the Brain Games!');
  const user = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${user}`);
  console.log(instructions);
  for (let i = 0; i < counter; i += 1) {
    const [question, correctAnswer] = calculateResult();
    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer !== correctAnswer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'. Let's try again, ${user}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${user}!`);
};

export default engineOfGame;
