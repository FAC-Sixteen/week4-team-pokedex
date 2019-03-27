const getCommonNames = json => {
  let array = [];
  for (let i = 0; i < json.length; i++) {
    array.push(json[i].common_name);
  }
  return array;
};

module.exports = getCommonNames;
