# yeelight-led
A lightweight SDK to control Yeelight smart LED devices.

## Documentation

- [API documentation](https://github.com/Lanfei/yeelight-led/blob/master/docs/API.md)
- [Simple Service Discovery Protocol](https://tools.ietf.org/html/draft-cai-ssdp-v1-03)
- [Yeelight WiFi Light Inter-Operation Specification](http://www.yeelight.com/download/Yeelight_Inter-Operation_Spec.pdf)

# Example

```js
var yeelight = require('yeelight-led');

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
```
