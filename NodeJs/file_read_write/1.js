var fs = require('fs');
// Đồng bộ
// Read File
var readFile = fs.readFileSync('test.txt', 'utf8');
console.log(readFile);
// Write File
var write = fs.writeFileSync('hello.txt', readFile);
