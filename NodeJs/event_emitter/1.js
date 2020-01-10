var events = require('events');
var test = new events.EventEmitter();

test.on('TuanPham', (msg) => {
    console.log(msg);
});
test.emit('TuanPham', 'Hello World, How are you?');
