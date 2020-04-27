import getRandomNumber from '../util.js';

const description = 'Find the greatest common divisor of given numbers.';

const gcd = () => {
  const data = {};
  const maxNumber = 30;
  let firstNumber = getRandomNumber(maxNumber);
  let secondNumber = getRandomNumber(maxNumber);

  data.question = `${firstNumber} ${secondNumber}`;

  while (secondNumber !== 0) {
    secondNumber = firstNumber % (firstNumber = secondNumber);
    data.answer = firstNumber.toString();
  }
  return data;
};

export { gcd, description };
