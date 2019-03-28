const searchFilter = (input, array) => {
  // console.log(array);
  const a = array.filter(plant => plant.includes(input.toLowerCase()));
  return a;
};

module.exports = searchFilter;
