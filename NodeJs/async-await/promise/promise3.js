let fs = require('fs');
let readFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(filename, 'utf8', (err, data) => {
            if (err) return reject(err);
            resolve(data);
        })
    })
};
readFile('test.txt').then(data => console.log(data), err => console.log(err.toString()));
