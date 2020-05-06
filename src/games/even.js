import getRandomNumber from '../util.js';
import playGame from '../index.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const getGameData = () => {
  const data = {};

  const maxNumber = 100;
  data.question = getRandomNumber(0, maxNumber);
  data.answer = isEven(data.question) ? 'yes' : 'no';
  return data;
};

const startGame = () => playGame(getGameData, description);

export default startGame;
