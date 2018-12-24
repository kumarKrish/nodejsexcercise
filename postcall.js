var express = require('express');
var app = express();
fs = require('fs');
var bodyParser =require('body-parser'); 

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
 
app.post('/',function(req,res){

fs.writeFile('y.txt',req.bodyParser,function(err){
	if(err){
			response = err;
	} else {
			response= "write successfully";
	}
	res.send(response);
	
});

})

app.listen(3000, function(){
	console.log("Hey ! server started at port no 3000");
})
exports.app = app;