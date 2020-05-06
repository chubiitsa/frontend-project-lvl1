import getRandomNumber from '../util.js';
import playGame from '../index.js';

const description = 'What number is missing in the progression?';

const getGameData = () => {
  const data = {};
  const maxNumber = 100;
  const maxStep = 10;
  const length = 10;
  const startNumber = getRandomNumber(0, maxNumber);
  const step = getRandomNumber(1, maxStep);
  const indexOfMissingNumber = getRandomNumber(0, length);
  const array = [];

  for (let i = 0; i < length; i += 1) {
    array.push(startNumber + step * i);
  }

  data.answer = array[indexOfMissingNumber].toString();
  array[indexOfMissingNumber] = '..';
  data.question = array.join(' ');

  return data;
};

const startGame = () => playGame(getGameData, description);

export default startGame;
