export default function gcd() {
  const data = {
    description: 'Find the greatest common divisor of given numbers.',
  };
  const maxNumber = 30;
  let firstNumber = Math.ceil(Math.random() * maxNumber);
  let secondNumber = Math.ceil(Math.random() * maxNumber);

  data.question = `${firstNumber} ${secondNumber}`;

  while (secondNumber !== 0) {
    secondNumber = firstNumber % (firstNumber = secondNumber);
    data.answer = firstNumber.toString();
  }
  return data;
}
