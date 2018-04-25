var socket = io();
socket.on('connect', () => {
	console.log('Connected to Server...');

	socket.emit('createMessage', {
		to: 'client@owllog.ml',
		message: 'It\'s working for me...',
		createAt: new Date(1524624610 * 1000).toDateString()
	});
});

socket.on('disconnect', () => {
	console.log('Disconnected from Server...');
});

socket.on('newMessage', (message) => {
	console.log('New Message From The Clinet...', message);
});