export default function even() {
  const data = {
    description: 'Answer "yes" if the number is even, otherwise answer "no"',
  };

  data.question = Math.floor(Math.random() * 100);
  data.answer = data.question % 2 === 0 ? 'yes' : 'no';
  return data;
}
