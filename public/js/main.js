(() => {
	const socket = io.connect('http://207.154.232.181:4000');
	const send = document.querySelector('#send');
	send.onclick = () => {
		socket.emit('shake');
	};
	const shakeEvent = new Shake({ threshold: 15 });
	shakeEvent.start();
	window.addEventListener(
		'shake',
		() => {
			socket.emit('shake');
		},
		false
	);
	if (!('ondevicemotion' in window)) {
		alert('Not Supported');
	}
})();
