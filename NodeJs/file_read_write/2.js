var fs = require('fs');
console.log('Start');
// Không đồng bộ => khong theo thu tu
var readFileNoSync = fs.readFile('test.txt', 'utf8', function (err, data) {
    if(err){
        console.log('Read file Failure')
    } else {
        console.log('File read: ' + data);
    }

});

console.log('End');
