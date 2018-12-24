var express = require('express');
var app = express();
fs = require('fs');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());

app.put('/',function(req,res){
	 fs.writeFile('y.txt',req.body,function(err){
		 if(err) {
			response = err;
		 }else{
			 response="writesuccessfully";
		 }
		 res.send(response);
	 });
	
})

app.listen(3000,function(){
	console.log("Hey server started at 3000 htttp://localhost:3000");
})
exports.app = app;