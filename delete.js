var express = require('express');
var app = express();
const fs = require('fs');
const filePath = 'number.txt';
fs.access(filePath, error => {
    if (!error) {
        fs.unlink(filePath,function(error){
            console.log(error);
        });
    } else {
        console.log(error);
    }
});
app.listen(3000,function(){
	console.log('Hey! server started at http//localhost:3000');
})

