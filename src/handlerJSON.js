const fs = require('fs');
// const path = require('path');
// const objJSON = require('/JSON/plants.json');

function handlerJSON(request, response){
    const endpoint = request.url;
    if (endpoint === '/asd'){
    fs.readFile(__dirname + '/JSON/plants.json',function(error, file){
        if (error) {
            console.log(error);
            return;
            
        }
        response.end(JSON.parse(file));
    })
    }
}

module.exports = handlerJSON;