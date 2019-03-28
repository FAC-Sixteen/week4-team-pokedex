

let plantArr = [];



const clonePlantArr = () => {
  return [...plantArr];
};

const addPlantArr = x => {
  plantArr.push(x);
};

const removePlantArr = () => {
  plantArr.pop();
};

module.exports = {
  clonePlantArr,
  addPlantArr,
  removePlantArr
};
