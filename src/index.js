import readlineSync from 'readline-sync';

const sleep = (milliseconds) => {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
};

const startGame = () => {
  console.log();
  console.log('Welcome to the Brain Games!');
  sleep(1000);
  const name = readlineSync.question('May I have your name? ');
  sleep(500);
  console.log();
  console.log(`Hello, ${name}!`);
  console.log();
  sleep(500);
  return name;
};

export { sleep, startGame };
