const getRandomNumber = (max, up = true) => {
  const num = Math.random() * max;
  if (up) {
    return Math.ceil(num);
  }
  return Math.floor(num);
};

export { getRandomNumber as default };
