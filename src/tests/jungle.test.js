const test = require("tape");
const jungle = require("../jungle");

const initialJungle = jungle.exploreJungle();
const testArray = ["test", "testing"];
const testArray2 = ["testing", "test"];
const ex3 = [testArray, testArray2, testArray2, testArray, testArray];
const ex4 = [testArray, testArray2, testArray2, testArray];

test("testing jungle.js", t => {
  t.deepEquals(initialJungle, [], "jungle should return empty array at start");
  jungle.growJungle(testArray);
  const junglev2 = jungle.exploreJungle();
  t.deepEquals(
    junglev2,
    [testArray],
    "jungle should return an array containing an array"
  );
  jungle.growJungle(testArray2);
  jungle.growJungle(testArray2);
  jungle.growJungle(testArray);
  jungle.growJungle(testArray);
  const junglev3 = jungle.exploreJungle();
  t.deepEquals(junglev3, ex3, "jungle should return big array of arrays");
  jungle.pruneJungle();
  const junglev4 = jungle.exploreJungle();
  t.deepEquals(junglev4, ex4, "jungle should be able to delete the end value");
  t.end();
});
