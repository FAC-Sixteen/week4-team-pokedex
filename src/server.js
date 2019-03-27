const http = require("http");
const handler = require("./handler.js");
const handlerJSON = require('./handlerJSON');

const server = http.createServer(handler);



server.listen(7000, function () {
    console.log("Server is listening on port 7000.  Ready to accept requests!");
});


module.exports = server;