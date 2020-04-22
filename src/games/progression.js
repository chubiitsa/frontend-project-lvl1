export default function progression() {
  const data = {
    description: 'What number is missing in the progression?',
  };

  const maxNumber = 100;
  const maxStep = 10;
  const length = 10;
  let number = Math.ceil(Math.random() * maxNumber);
  const step = Math.ceil(Math.random() * maxStep);
  const indexOfMissingNumber = Math.floor(Math.random() * length);
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
}
