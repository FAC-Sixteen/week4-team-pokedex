const test = require("tape");
const plantArr = require("../plantArr");

const arr = plantArr.clonePlantArr();
const testArray = ["test", "testing"];
const testArray2 = ["testing", "test"];
const ex3 = [testArray, testArray2, testArray2, testArray, testArray];
const ex4 = [testArray, testArray2, testArray2, testArray];

test("testing plantArr", t => {
  t.deepEquals(arr, [], "plantArr should return empty array at start");
  plantArr.addPlantArr(testArray);
  const arr2 = plantArr.clonePlantArr();
  t.deepEquals(
    arr2,
    [testArray],
    "plantArr should return an array containing an array"
  );
  plantArr.addPlantArr(testArray2);
  plantArr.addPlantArr(testArray2);
  plantArr.addPlantArr(testArray);
  plantArr.addPlantArr(testArray);
  const arr3 = plantArr.clonePlantArr();
  t.deepEquals(arr3, ex3, "plantArr should return big array of arrays");
  plantArr.removePlantArr();
  const arr4 = plantArr.clonePlantArr();
  t.deepEquals(arr4, ex4, "plantArr should be able to delete the end value");
  t.end();
});
