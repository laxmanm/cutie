var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var mysql = require("mysql");

var connection = mysql.createConnection({ 
   user: "root", 
   password: "james", 
   database: "dashboard"
}); 

server.listen(8000);

var total = 0;
var previous = 0;

app.use("/", express.static(__dirname));
io.sockets.on('connection', doAction);

function doAction(){
	setTimeout(function(){
		connection.query('select name, amount from sales',
		function(err, result, fields) {
		    if (err) throw err;
		    else {
				io.sockets.emit('new', { msg: JSON.stringify(result) });
		    }
		});
		connection.destroy;
		
		doAction();
	}, 1000);
}