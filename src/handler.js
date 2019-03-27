const fs = require('fs');
const path = require('path');

function handler(request, response) {
    const endpoint = request.url;
    const types = {
        html: 'text/html',
        css: 'text/css',
        js: 'applications/javascript'
    }

    if (request.method === 'GET') {
        if (endpoint === '/') {
            response.writeHead(200, { 'Content-Type': 'text/html' });
            fs.readFile(__dirname + '/../index.html', function(error, file){
                if (error) {
                    console.log(error);
                    return;
                }
                response.end(file);
            })
        }
    }
}



module.exports = handler;