import readlineSync from 'readline-sync';

const playGame = (gameData, gameDesc) => {
  console.log('Welcome to the Brain Games!');
  const playersName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playersName}`);
  console.log(gameDesc);
  const pointsToPass = 3;
  let userPoints = 0;
  while (userPoints < pointsToPass) {
    const { question, answer } = gameData();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    if (userAnswer === answer) {
      console.log('Correct!');
      userPoints += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${answer}".`);
      console.log(`Lets try again, ${playersName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${playersName}!`);
};

export default playGame;
