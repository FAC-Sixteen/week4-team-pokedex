const searchFilter = require("./searchFilter");
const plantArr = require("./plantArr");

const autoFilter = input => {
  const a = plantArr.clonePlantArr();
  console.log("length of a ", a.length);
  console.log("length of input ", input.length);
  if (a.length - 1 > input.length) {
    plantArr.removePlantArr();
    autoFilter(input);
  } else {
    const filtered = searchFilter(input, a[a.length - 1]);
    plantArr.addPlantArr(filtered);
  }
  const ar = plantArr.clonePlantArr();
  //console.log(JSON.stringify(ar[ar.length - 1].slice(0, 5)));
  return JSON.stringify(ar[ar.length - 1].slice(0, 5));
};

module.exports = autoFilter;
