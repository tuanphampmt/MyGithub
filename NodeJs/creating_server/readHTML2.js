var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
    fs.readFile(__dirname + "/index.html", "utf8", function (err, content) {
        if (err) {
            console.log(err);
        } else {
            res.writeHead(200, {"Context-type": "text/html"});
            res.write(content);
            res.end();
        }
    })
}).listen(1234);
