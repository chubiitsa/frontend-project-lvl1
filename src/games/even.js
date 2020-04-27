import getRandomNumber from '../util.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no"';

const isEven = (num) => num % 2 === 0;

const even = () => {
  const data = {};

  const maxNumber = 100;
  data.question = getRandomNumber(maxNumber);
  data.answer = isEven(data.question) ? 'yes' : 'no';
  return data;
};

export { description, even };
