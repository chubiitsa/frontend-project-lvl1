export default function progression() {
  const data = {
    description: 'What number is missing in the progression?',
  };

  let number = Math.ceil(Math.random() * 100);
  const step = Math.ceil(Math.random() * 10);
  const indexOfMissingNumber = Math.floor(Math.random() * 10);
  const length = 10;
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
