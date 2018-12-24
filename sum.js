var add = function(a,b){return a+b;}
var total = add (2,1);
console.log(total);
var add = function(a,b,callb){callb(a+b);}
add(1,2,function(result){console.log(result+5);});

      