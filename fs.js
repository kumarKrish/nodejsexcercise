var fs = require("fs");

var callback = function(err,data){
     if(err){
	  return console.log(err);
	 }else{
	      console.log(data.toString());
	 }
}
fs.readFile('y.txt',callback);