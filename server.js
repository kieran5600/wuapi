
'use strict'

//sets better standards of error control
//calls in functions and or modules
var express=require('express');
// var partial = require('express-partial');
var app=express();


//allows to connect to pictures, css, ect. 
app.use(express.static(__dirname + '/public'));

//This connects to our router, that is for reason important
require('./router/main')(app);

//This connects to html and or ejs
app.set('views',__dirname + '/views');

//sets templete to ejs
app.set('view engine', 'ejs');

//renders html through ejs
app.engine('html', require('ejs').renderFile);

//Sets our server to localhost:3000 and prints function
var server = app.listen(3000,function(){
console.log("Express is running on port 3000");
});