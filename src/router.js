const handler = require("./handler.js")
const handlerJSON = require('./handlerJSON.js')

const router = (request, response) => {
const url = request.url;

if (url === "/explore") {
 handlerJSON(request, request)
} else {
  handler(request, request);
}
};

module.exports = router;

