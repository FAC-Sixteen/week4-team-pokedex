const fs = require('fs');
const path = require('path');
const objJSON = require('./JSON')

function handlerJSON(request, response){
    const endpoint = request.url

    
    fs.readFile(, function(error, file){
        if (error) {
            console.log(error);
            return;
        }
        response.end(file);
    })
}