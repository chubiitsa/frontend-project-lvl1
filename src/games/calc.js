import getRandomNumber from '../util.js';

const description = 'What is the result of the expression?';

const calc = () => {
  const data = {};

  const maxFirstNumber = 20;
  const maxSecondNumber = 10;
  const operators = ['+', '-', '*'];
  const firstNumber = getRandomNumber(maxFirstNumber);
  const secondNumber = getRandomNumber(maxSecondNumber);
  const operator = operators[getRandomNumber(operators.length, false)];
  data.question = `${firstNumber} ${operator} ${secondNumber}`;

  switch (operator) {
    case '+':
      data.answer = (firstNumber + secondNumber).toString();
      break;
    case '-':
      data.answer = (firstNumber - secondNumber).toString();
      break;
    case '*':
      data.answer = (firstNumber * secondNumber).toString();
      break;
    default: break;
  }
  return data;
};

export { calc, description };
