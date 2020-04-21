export default function gcd() {
  const data = {
    description: 'Find the greatest common divisor of given numbers.',
  };

  let firstNumber = Math.ceil(Math.random() * 30);
  let secondNumber = Math.ceil(Math.random() * 20);

  data.question = `${firstNumber} ${secondNumber}`;

  while (secondNumber !== 0) {
    secondNumber = firstNumber % (firstNumber = secondNumber);
    data.answer = firstNumber.toString();
  }
  return data;
}
