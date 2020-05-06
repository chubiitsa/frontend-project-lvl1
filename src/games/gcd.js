import getRandomNumber from '../util.js';
import playGame from '../index.js';

const description = 'Find the greatest common divisor of given numbers.';

const findGcd = (num1, num2) => {
  let x = num1;
  let y = num2;
  while (y !== 0) {
    y = x % (x = y);
  }
  return x;
};

const getGameData = () => {
  const data = {};
  const maxNumber = 30;
  const firstNumber = getRandomNumber(0, maxNumber);
  const secondNumber = getRandomNumber(0, maxNumber);

  data.question = `${firstNumber} ${secondNumber}`;
  data.answer = findGcd(firstNumber, secondNumber).toString();

  return data;
};

const startGame = () => playGame(getGameData, description);

export default startGame;
