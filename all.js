var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send('Hey! get api call from server 3000');
});

app.post('/',function(req,res){
	res.send('Hey! post api call from server 3000');
})

app.put('/',function(req,res){
	res.send('Hey! put api call from server 3000');
});

app.delete('/',function(req,res){
	res.send('Hey! delete api call from server 3000');
});

app.listen(3000, function(){
 console.log('Hey! server stated at http//localhost:3000');
})