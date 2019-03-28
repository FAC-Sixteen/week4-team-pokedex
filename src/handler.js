const fs = require("fs");
const path = require("path");

function handler(request, response) {
  const endpoint = request.url;
  const types = {
    html: "text/html",
    css: "text/css",
    js: "applications/javascript",
    ico: "image/x-icon",
    json: "application/json"
  };
  const extension = endpoint.split(".")[1];
  if (endpoint === "/") {
    response.writeHead(200, { "Content-Type": "text/html" });
    fs.readFile(__dirname + "/../index.html", function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.end(file);
    });
  } else {
    const filePath = path.join(__dirname, "..", "public", endpoint);
    fs.readFile(filePath, function(error, file) {
      if (error) {
        console.log(error);
        return;
      }
      response.writeHead(200, { "Content-Type": types[extension] });
      response.end(file);
    });
  }
}

module.exports = handler;
