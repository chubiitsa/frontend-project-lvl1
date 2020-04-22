export default function even() {
  const data = {
    description: 'Answer "yes" if the number is even, otherwise answer "no"',
  };

  const maxNumber = 100;
  data.question = Math.ceil(Math.random() * maxNumber);
  data.answer = data.question % 2 === 0 ? 'yes' : 'no';
  return data;
}
