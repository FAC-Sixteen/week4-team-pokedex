const fs = require("fs");
// const path = require('path');
// const objJSON = require('/JSON/plants.json');
const autoFilter = require("./autoFilter");
const plantArr = require("./plantArr");
const getCommonNames = require("./getCommonNames");

function handlerJSON(request, response) {
  const input = request.url.split("=")[1];
  //console.log(input);
  if (plantArr.clonePlantArr().length === 0) {
    fs.readFile(__dirname + "/JSON/plants.json", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      const json = JSON.parse(file);
      plantArr.addPlantArr(getCommonNames(json));
      const autoComplete = autoFilter(input);
      //console.log(autoComplete);
      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(autoComplete);
    });
  } else {
    const autoComplete = autoFilter(input);

    response.writeHead(200, { "Content-Type": "application/json" });
    response.end(autoComplete);
  }
}

module.exports = handlerJSON;
