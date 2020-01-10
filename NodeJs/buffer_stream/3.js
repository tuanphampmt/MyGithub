var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    var readStream = fs.createReadStream(__dirname + '/test.txt', {encoding: 'utf8'});
    readStream.pipe(res);
}).listen(1234, '127.0.0.1');

