'use strict';

var moment = require("moment");
require("./src/moment-rcf");

var m = moment('25.02.2017 02:52:26.142','DD.MM.YYYY HH:mm:ss.SSS');

console.log( m.format('DD.MM.YYYY HH:mm:ss.SSS') );
console.log( m.round(5,"Minutes").format('DD.MM.YYYY HH:mm:ss.SSS') ); // 25.02.2017 02:50:00.000
console.log( m.ceil(5,"Minutes").format('DD.MM.YYYY HH:mm:ss.SSS') );  // 25.02.2017 02:55:00.000
console.log( m.floor(5,"Minutes").format('DD.MM.YYYY HH:mm:ss.SSS') ); // 25.02.2017 02:50:00.000
console.log( m.round(5,"Hours").format('DD.MM.YYYY HH:mm:ss.SSS') ); // 25.02.2017 05:00:00.000
