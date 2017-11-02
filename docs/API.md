<a name="Yeelight"></a>

## Yeelight
**Kind**: global class  

* [Yeelight](#Yeelight)
    * [new Yeelight(id, port, host, methods)](#new_Yeelight_new)
    * _instance_
        * [.sendCommand(method, [params], [callback])](#Yeelight+sendCommand)
    * _static_
        * [.discover(callback)](#Yeelight.discover)
        * [.stopDiscovering()](#Yeelight.stopDiscovering)
        * [.addDevice(device)](#Yeelight.addDevice) ⇒ <code>Boolean</code>
        * [.removeDevice(device)](#Yeelight.removeDevice) ⇒ <code>Boolean</code>
        * [.removeAllDevices()](#Yeelight.removeAllDevices)
        * [.getDevices()](#Yeelight.getDevices) ⇒ [<code>Array.&lt;Yeelight&gt;</code>](#Yeelight)
        * [.getDeviceById(id)](#Yeelight.getDeviceById) ⇒ [<code>Yeelight</code>](#Yeelight)

<a name="new_Yeelight_new"></a>

### new Yeelight(id, port, host, methods)
Yeelight constructor.


| Param | Type |
| --- | --- |
| id | <code>String</code> | 
| port | <code>Number</code> | 
| host | <code>String</code> | 
| methods | <code>Array</code> | 

<a name="Yeelight+sendCommand"></a>

### yeelight.sendCommand(method, [params], [callback])
Send command to Yeelight device.

**Kind**: instance method of [<code>Yeelight</code>](#Yeelight)  
**See**: http://www.yeelight.com/download/Yeelight_Inter-Operation_Spec.pdf  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>String</code> | Method of command |
| [params] | <code>Array</code> \| <code>String</code> | Parameters |
| [callback] | <code>function</code> | Callback function |

<a name="Yeelight.discover"></a>

### Yeelight.discover(callback)
Discover Yeelight LED devices by SSDP(Simple Service Discovery Protocol).

**Kind**: static method of [<code>Yeelight</code>](#Yeelight)  
**See**: https://tools.ietf.org/html/draft-cai-ssdp-v1-03  

| Param | Type |
| --- | --- |
| callback | <code>function</code> | 

<a name="Yeelight.stopDiscovering"></a>

### Yeelight.stopDiscovering()
Stop discovering devices.

**Kind**: static method of [<code>Yeelight</code>](#Yeelight)  
<a name="Yeelight.addDevice"></a>

### Yeelight.addDevice(device) ⇒ <code>Boolean</code>
Add a Yeelight device.

**Kind**: static method of [<code>Yeelight</code>](#Yeelight)  
**Returns**: <code>Boolean</code> - If the device is added  

| Param | Type |
| --- | --- |
| device | [<code>Yeelight</code>](#Yeelight) | 

<a name="Yeelight.removeDevice"></a>

### Yeelight.removeDevice(device) ⇒ <code>Boolean</code>
Remove a Yeelight device.

**Kind**: static method of [<code>Yeelight</code>](#Yeelight)  
**Returns**: <code>Boolean</code> - If the device is removed  

| Param | Type |
| --- | --- |
| device | [<code>Yeelight</code>](#Yeelight) | 

<a name="Yeelight.removeAllDevices"></a>

### Yeelight.removeAllDevices()
Remove all Yeelight devices.

**Kind**: static method of [<code>Yeelight</code>](#Yeelight)  
<a name="Yeelight.getDevices"></a>

### Yeelight.getDevices() ⇒ [<code>Array.&lt;Yeelight&gt;</code>](#Yeelight)
Get all Yeelight devices.

**Kind**: static method of [<code>Yeelight</code>](#Yeelight)  
**Returns**: [<code>Array.&lt;Yeelight&gt;</code>](#Yeelight) - Yeelight devices  
<a name="Yeelight.getDeviceById"></a>

### Yeelight.getDeviceById(id) ⇒ [<code>Yeelight</code>](#Yeelight)
Get Yeelight device by id.

**Kind**: static method of [<code>Yeelight</code>](#Yeelight)  
**Returns**: [<code>Yeelight</code>](#Yeelight) - The Yeelight device  

| Param | Type |
| --- | --- |
| id | <code>String</code> | 

