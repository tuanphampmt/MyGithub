var fs = require('fs');
fs.mkdir('public', function () {
    fs.readFile('test.txt', 'utf8', function (err, data) {
        fs.writeFileSync('./public/hello.txt', data);
    })
});
