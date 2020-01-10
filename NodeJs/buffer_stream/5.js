var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'application/json'});
    var user = {
        "email": "tuan@gmail.com",
        "username": "Naruto",
        "password": "f8ak33hd02mda02nd2"
    };
    res.end(JSON.stringify(user));

}).listen(3000, '127.0.0.1');
