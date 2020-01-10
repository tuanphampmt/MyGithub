let math = require('./math');
let P = (a, b, c, cb) => {
    math.mul(a - b, b - c, (err, result) => {
        if (err) return console.log(err);
        math.mul(result, c - a, (err, result) => {
            if (err) return console.log(err);
            math.mul(result, 1 / (a + b + c), (err, result) => {
                if (err) return console.log(err);
                cb(undefined, result);
            })
        })
    })
};

P(2, 4, 6, (err, result) => {
    if (err) return console.log(err.toString());
    console.log(' P = ' + result);
});

