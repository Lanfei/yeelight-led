var yeelight = require('..');

yeelight.discover(function (device) {
	console.log('Device found:', device.id);

	device.sendCommand('get_prop', 'name', function (err, result) {
		console.log('Device name:', result[0]);
	});

	device.sendCommand('toggle');
	setTimeout(function () {
		device.sendCommand('toggle');
	}, 1000);
});
