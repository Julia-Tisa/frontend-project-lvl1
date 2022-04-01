import readlineSync from 'readline-sync';
/* Я удалила пустые console.log(), они нужны были, чтобы после почти каждой выведенной
строки были пробелы для более (на мой взгляд) приятного вида игр. Если вы
посмотрите асциинемы по играм на гитхабе, то увидите, в чем был прикол)) Также была
функция sleep() для некоторой задержки вывода строк, вопросов и ответов, но
тесты с ней проекты не проходили, пришлось ее еще раньше удалить, а мне очень
нравилось (опять же можете глянуть в асциинемам по играм, как для меня в идеале это выглядело) */

const logicOfGame = (instructions, calculateResult) => {
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

export default logicOfGame;
