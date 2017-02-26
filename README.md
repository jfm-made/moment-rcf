# moment-rcf

This is a plugin for [moment.js](https://momentjs.com). It implements the methods round(), ceil() and floor() which can be used for hours, minutes, seconds and milliseconds.

## Usage

``` javascript
var moment = require("moment");
require("moment-rcf");

var m = moment('25.02.2017 02:52:26.142','DD.MM.YYYY HH:mm:ss.SSS');
m.round(5, "Minutes").format('DD.MM.YYYY HH:mm:ss.SSS') ); // 25.02.2017 02:50:00.000
m.ceil( 5, "Minutes").format('DD.MM.YYYY HH:mm:ss.SSS') ); // 25.02.2017 02:55:00.000
m.floor(5, "Minutes").format('DD.MM.YYYY HH:mm:ss.SSS') ); // 25.02.2017 02:50:00.000
m.round(5, "Hours"  ).format('DD.MM.YYYY HH:mm:ss.SSS') ); // 25.02.2017 05:00:00.000
```

## Installation
``` console
npm install moment-rcf
```

## Testing
``` console
npm test
```
# License

[MIT](LICENSE)
