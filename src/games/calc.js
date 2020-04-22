export default function calc() {
  const data = {
    description: 'What is the result of the expression?',
  };

  const maxFirstNumber = 20;
  const maxSecondNumber = 10;
  const operators = ['+', '-', '*'];
  const firstNumber = Math.ceil(Math.random() * maxFirstNumber);
  const secondNumber = Math.ceil(Math.random() * maxSecondNumber);
  const operator = operators[Math.floor(Math.random() * operators.length)];
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
}
