const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(4000);

app.use(express.static('public'));

io.on('connection', socket => {
	socket.on('printer-ready', () => {
		socket.join('printer');
	});
	socket.on('shake', () => {
		console.log('shake');
		socket.broadcast.to('printer').emit('spin');
	});
});
