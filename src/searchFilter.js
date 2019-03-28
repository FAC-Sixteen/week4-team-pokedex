const searchFilter = (input, array) => {
  //console.log(array);
  const a = array.filter(plant => {
    const p = plant.split(" ");
    for (let i = 0; i < p.length; i++) {
      let b = p[i].includes(input.toLowerCase(), 0);
      if (b == true) {
        return true;
      }
    }
  });
  console.log(a);
  return a;
};

module.exports = searchFilter;
