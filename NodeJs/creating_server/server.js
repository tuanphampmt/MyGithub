// Bước 1: Import module http
var http = require('http');

// Bước 2: Khởi tạo server
http.createServer(function (req, res) {
    // Biến request: là biến lưu trữ dữ liệu từ client gửi lên server
    // Biến response: là biến lưu trữ dữ liệu server trả về cho client

    // Thiết lập Header
    res.writeHead(200, {
        "Context-type": "text/html; charset=utf-8"
    });

    // Show thông tin
    res.write('<h1>Hello World</h1>');

    // Kết thúc
    res.end();
}).listen(1234); // mở cổng 1234
