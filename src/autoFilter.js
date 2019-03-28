const searchFilter = require("searchFilter");
const plantArr = require("plantArr");

const autoFilter = input => {
  const a = plantArr.clonePlantArr();
  if (a.length - 1 > input.length) {
    let i = a.length - 1;
    while (i > input.length) {
      plantArr.removePlantArr();
    }
  } else {
    const filtered = searchFilter(input, a[a.length - 1]);
    plantArr.addPlantArr(filtered);
  }
  const ar = plantArr.clonePlantArr();
  if (ar[ar.length - 1].length > 5) {
    return JSON.stringify(ar[ar.length - 1].slice(0, 5));
  }
  return JSON.stringify(ar[ar.length - 1]);
};

module.exports = autoFilter;
