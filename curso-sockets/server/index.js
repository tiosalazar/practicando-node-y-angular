'use strict'

var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);

app.use(express.static('client'));

var messages= [{
   id:1,
   text: 'Bienvenido al Chat Privado de Socket.io y Node.js',
   nickname: 'Info'

}];

io.on('connection', (socket) =>{
	console.log("El cliente con IP : " + socket.handshake.address+" se ha conectado ...");
	socket.emit('messages', messages);

	socket.on('add-message', (data)=>{
         messages.push(data);
         io.sockets.emit('messages',messages );
	});


});

server.listen(3001,() =>{
 console.log('servidor está funcionando en el puerto 3001');
});
