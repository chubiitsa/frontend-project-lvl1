import getRandomNumber from '../util.js';
import playGame from '../index.js';

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i < num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const getGameData = () => {
  const data = {};

  const maxNumber = 100;
  data.question = getRandomNumber(0, maxNumber);
  data.answer = isPrime(data.question) ? 'yes' : 'no';

  return data;
};

const startGame = () => playGame(getGameData, description);

export default startGame;
