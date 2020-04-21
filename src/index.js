import readlineSync from 'readline-sync';


export function welcome() {
  console.log('Welcome to the Brain Games!');
}

export function askName() {
  return readlineSync.question('May I have your name? ');
}

export function sayHello(name) {
  console.log(`Hello, ${name}`);
}

export function game(playersName, gameData) {
  console.log(gameData().description);
  let points = 0;
  const pointsToPass = 3;
  while (points < pointsToPass) {
    const { question, answer } = gameData();
    const userAnswer = readlineSync.question(`Question: ${question} \nYour answer: `);
    if (userAnswer === answer) {
      console.log('Correct!');
      points += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}". \nLets try again, ${playersName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playersName}!`);
}
