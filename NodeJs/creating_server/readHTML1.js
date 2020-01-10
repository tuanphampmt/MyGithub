var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    res.writeHead(200, {
        "Context-type": "text/html; charset=utf-8"
    });
    fs.ReadStream("index.html").pipe(res);

}).listen(1234);
