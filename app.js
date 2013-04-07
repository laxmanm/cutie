var express = require('express');
var app = express();
var server = require('http').createServer(app);
var io = require('socket.io').listen(server);
var mysql = require("mysql");

server.listen(8000);

var total = 0;
var previous = 0;

app.use("/", express.static(__dirname + '/public'));
io.sockets.on('connection', doAction);

function doAction(){
	setTimeout(function(){
		var connection = mysql.createConnection({ 
		   user: "root", 
		   password: "james", 
		   database: "dashboard"
		}); 
		connection.query('select * from sales',
		function(err, result, fields) {
		    if (err) throw err;
		    else {
		    	total = 0;
		        for (var i in result) {
		            var user = result[i];
		            total += user.amount;
		        }
		    }
		});
		if(total!=previous){
			io.sockets.emit('new', { msg: total });
			previous = total;
		}
		
		doAction();
	}, 1000);
}