var socket = io();
socket.on('connect', () => {
	console.log('Connected to Server...');

	socket.emit('createEmail', {
		to: 'ahmed@owllog.ml',
		message: 'Hello, I see your message...',
		createAt: new Date(1524624610 * 1000).toDateString()
	});
});

socket.on('disconnect', () => {
	console.log('Disconnected from Server...');
});

socket.on('newEmail', (email) => {
	console.log('New Email');
	console.log(email)
});