const test = require("tape");
const fs = require("fs");
const path = require("path");
const getCommonNames = require("../getCommonNames");
const sliceVegetables = require("../sliceVegetables");

let filePath = path.join(__dirname, "..", "JSON", "plants.json");
let data = fs.readFileSync(filePath);
let json = JSON.parse(data);

const commonNames = getCommonNames(json);
const sliced = sliceVegetables("fox", commonNames);

test("testing sliceVegetables", t => {
  t.equals(
    Array.isArray(sliced),
    true,
    "sliceVegetables should return an array"
  );
  t.notEquals(
    sliced.length,
    commonNames.length,
    "sliceVegetables should return an array of differing length to given"
  );
  t.notDeepEquals(
    sliced,
    [],
    "sliceVegetables should not return an empty array for current input"
  );
  t.deepEquals(
    sliceVegetables("sdkfsdf", commonNames),
    [],
    "sliceVegetables should return empty array when given gibberish"
  );
  t.end();
});
