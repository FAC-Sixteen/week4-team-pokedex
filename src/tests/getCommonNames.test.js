const test = require("tape");
const getCommonNames = require("../getCommonNames");
const fs = require("fs");
const path = require("path");

let filePath = path.join(__dirname, "..", "JSON", "plants.json");
let data = fs.readFileSync(filePath);
let json = JSON.parse(data);

const commonNames = getCommonNames(json);

test("Testing getCommonNames", t => {
  t.equals(
    Array.isArray(commonNames),
    true,
    "getCommonNames should return an array"
  );
  t.equals(
    commonNames.length,
    24698,
    "getCommonNames should return array of length 24698"
  );
  t.equals(
    commonNames.includes("‘ilima"),
    true,
    "getCommonNames should inlude all common names from the object (checking last one exists)"
  );
  t.end();
});
