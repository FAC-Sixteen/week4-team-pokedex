const sliceVegetables = (input, array) => {
  const a = array.filter(plant => plant.includes(input.toLowerCase()));
  return a;
};

module.exports = sliceVegetables;
