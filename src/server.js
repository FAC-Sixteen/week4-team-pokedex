const http = require("http");
const handler = require("./handler.js");
const handlerJSON = require("./handlerJSON");

const server = http.createServer(handler);

const port = process.env.PORT || 7000;

server.listen(port, function() {
  console.log(
    `Server is listening on port ${port}.  Ready to accept requests!`
  );
});

module.exports = server;
