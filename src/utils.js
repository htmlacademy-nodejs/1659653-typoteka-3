const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);

  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const shuffle = (someArray) => {
  const array = [...someArray];
  for (let i = array.length - 1; i > 0; i--) {
    const randomPosition = getRandomInt(0, i);
    [array[i], array[randomPosition]] = [array[randomPosition], array[i]];
  }
  return array;
};

module.exports = {
  getRandomInt,
  shuffle,
}
