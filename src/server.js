const http = require("http");
const router = require("./router")

const server = http.createServer(router);

const port = process.env.PORT || 7000;

server.listen(port, function() {
  console.log(
    `Server is listening on port ${port}.  Ready to accept requests!`
  );
});

module.exports = server;
