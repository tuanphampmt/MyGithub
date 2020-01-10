var fs = require('fs');
var count = 0;
// var readStream = fs.createReadStream(__dirname + '/test.txt', {encoding: 'utf8'});
var readStream = fs.createReadStream(__dirname + '/test.txt');
readStream.on('data', function (chunk) {
    count++;
    console.log('READ STREAM ' + count + ':');
    console.log(chunk);
});
