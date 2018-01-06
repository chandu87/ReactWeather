var express= require('express');


//create our app

var app=express();


//which folder we are going to serve
//express.static is to which folder we are going to expose
app.use(express.static('public'));


app.listen(3000,function(){
	console.log('Express server is up on port 3000');
});
