const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
	console.log('New User Connected...');

	socket.emit('newEmail', {
		from: 'support@owllog.ml',
		message: 'Hello, This is my message...',
		createdAt: new Date(1524624600 * 1000).toDateString()
	});

	socket.on('createMessage', (message) => {
		console.log('Create Message', message)
	});

	socket.emit('newMessage', {
		to: 'client@owllog',
		message: 'are it arrived',
		createdAt: new Date(1524624600 * 1000).toDateString()
	});

	socket.on('disconnect', () => {
		console.log('User was Disconnected...');
	});
});

server.listen(port, () => {
	console.log(`Server is runing on port ${port}`);
});