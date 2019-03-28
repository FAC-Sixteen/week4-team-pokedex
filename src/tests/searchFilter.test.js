const test = require("tape");
const fs = require("fs");
const path = require("path");
const getCommonNames = require("../getCommonNames");
const searchFilter = require("../searchFilter");

let filePath = path.join(__dirname, "..", "JSON", "plants.json");
let data = fs.readFileSync(filePath);
let json = JSON.parse(data);

const commonNames = getCommonNames(json);
const sliced = searchFilter("fox", commonNames);

test("testing searchFilter", t => {
  t.equals(Array.isArray(sliced), true, "searchFilter should return an array");
  t.notEquals(
    sliced.length,
    commonNames.length,
    "searchFilter should return an array of differing length to given"
  );
  t.notDeepEquals(
    sliced,
    [],
    "searchFilter should not return an empty array for current input"
  );
  t.deepEquals(
    searchFilter("sdkfsdf", commonNames),
    [],
    "searchFilter should return empty array when given gibberish"
  );
  t.end();
});
