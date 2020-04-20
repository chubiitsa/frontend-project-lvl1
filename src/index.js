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

export function even(name) {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let points = 0;
  const pointsToPass = 3;
  while (points < pointsToPass) {
    const number = Math.floor(Math.random() * 100);
    const userAnswer = readlineSync.question(`Question: ${number} \nYour answer: `);
    const correctAnswer = number % 2 === 0 ? 'yes' : 'no';

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
      points += 1;
    } else {
      console.log(`"${userAnswer}" is wrong answer ;(. Correct answer was "${correctAnswer}". \nLets try again, ${name}!`);
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
}
