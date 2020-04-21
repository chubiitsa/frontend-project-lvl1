export default function calc() {
  const data = {
    description: 'What is the result of the expression?',
  };

  const operators = ['+', '-', '*'];
  const firstNumber = Math.ceil(Math.random() * 20);
  const secondNumber = Math.ceil(Math.random() * 10);
  const operator = operators[Math.floor(Math.random() * 3)];
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
