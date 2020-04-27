import getRandomNumber from '../util.js';

const description = 'What number is missing in the progression?';

const progression = () => {
  const data = {};

  const maxNumber = 100;
  const maxStep = 10;
  const length = 10;
  let number = getRandomNumber(maxNumber);
  const step = getRandomNumber(maxStep);
  const indexOfMissingNumber = getRandomNumber(length, false);
  const array = [];

  for (let i = 0; i < length; i += 1) {
    array.push(number);
    if (i === indexOfMissingNumber) {
      array[i] = '..';
      data.answer = number.toString();
    }
    number += step;
  }

  data.question = array.join(' ');

  return data;
};

export { progression, description };
