import getRandomNumber from '../util.js';
import playGame from '../index.js';

const description = 'What is the result of the expression?';

const getGameData = () => {
  const data = {};

  const maxFirstNumber = 20;
  const maxSecondNumber = 10;
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(0, maxFirstNumber);
  const secondNumber = getRandomNumber(0, maxSecondNumber);
  const operator = operators[getRandomNumber(0, operators.length - 1)];
  data.question = `${firstNumber} ${operator} ${secondNumber}`;

  let answer;

  switch (operator) {
    case '+':
      answer = (firstNumber + secondNumber);
      break;
    case '-':
      answer = (firstNumber - secondNumber);
      break;
    case '*':
      answer = (firstNumber * secondNumber);
      break;
    default: break;
  }

  data.answer = answer.toString();
  return data;
};

const startGame = () => playGame(getGameData, description);

export default startGame;
