//NPM install packages...Dependencies
var express = require ('express');
var bodyParser = require('body-parser');
var path = require('path');
// var ParseServer = require('parse-server').ParseServer;

//Sets up the the express app
var app = express();

//Where all of the post information is being pushed to
//setting up the port that the server will be listening on
var PORT = process.env.PORT || 5000;

//Sets up the express app to handle parsing
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ 
	limit: '50mb',
	extended: true, 
	parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//displaying data from the home.html file
app.get('/', function(reckor,resin){
	resin.sendfile(path.join(__dirname, 'app/products/HTML/index.html'));
});

//lets the server recognize the js files
app.use('/static', express.static('app/products'));

//starts the server with the listening queue
app.listen(PORT, function(){
	console.log("Listening on port", PORT);
});