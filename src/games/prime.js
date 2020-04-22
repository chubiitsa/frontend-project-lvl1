const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return 'no';
    }
  }
  return num > 1 ? 'yes' : 'no';
};

export default function prime() {
  const data = {
    description: 'Answer "yes" if given number is prime. Otherwise answer "no".',
  };

  const maxNumber = 100;
  data.question = Math.ceil(Math.random() * maxNumber);
  data.answer = isPrime(data.question);

  return data;
}
