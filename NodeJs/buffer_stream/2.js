var fs = require('fs');
var count = 0;
var readStream = fs.createReadStream(__dirname + '/test.txt', {encoding: 'utf8'});
var writeStream = fs.createWriteStream(__dirname + '/data.txt');
readStream.on('data', function (chunk) {
    count++;
    console.log('WRITE STREAM ' + count + ':');
    writeStream.write(chunk);
});
