import getRandomNumber from '../util.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const prime = () => {
  const data = {};

  const maxNumber = 100;
  data.question = getRandomNumber(maxNumber);
  data.answer = isPrime(data.question) ? 'yes' : 'no';

  return data;
};

export { prime, description };
