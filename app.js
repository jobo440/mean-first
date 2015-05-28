var express = require('express');
var path = require('path');
var app = express();

// configure app

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// use middleware

// define routes
app.listen(1337, function() {
  console.log('ready on port 1337');
});

app.get('/', function(req, res) {
 res.render('index'); 
});










//var http = require('http');
//http.createServer(function (req, res) {
//  res.writeHead(200, {'Content-Type': 'text/plain'});
//  res.end('Hello World\n');
//}).listen(1337, '127.0.0.1');
//console.log('Server running at http://127.0.0.1:1337/');