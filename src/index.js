import readlineSync from 'readline-sync';

const sleep = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

const logicOfGame = (instructions, game) => {
  console.log('Welcome to the Brain Games!');
  console.log();
  sleep(500);
  const user = readlineSync.question('May I have your name? ');
  console.log();
  sleep(500);
  console.log(`Hello, ${user}`);
  console.log();
  console.log(instructions);
  sleep(1500);
  let counter = 0;
  while (counter < 3) {
    const [question, result] = game();
    console.log();
    console.log(`Question: ${question}`);
    sleep(1000);
    const answer = readlineSync.question('Your answer: ');
    sleep(500);

    if (answer !== result) {
      console.log();
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'. Let's try again, ${user}!`);
      return;
    }
    counter += 1;
    console.log('Correct!');
    sleep(500);
  }
  console.log();
  console.log(`Congratulations, ${user}!`);
};

export default logicOfGame;
