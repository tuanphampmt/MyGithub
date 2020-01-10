// Tính diện tích hình thang S = (a + b ) * h / 2
const math = require('./math');




let S = (a, b, h, callback) => {
    math.add(a, b, (err, result) => {
        if (err) return console.log(err);
        math.mul(result, h, (err, result) => {
            if (err) return console.log(err);
            math.division(result, 2, (err, result) => {
                if (err) return console.log(err);
                callback(undefined, result);
            })
        })
    })
};
S(2, 3, 2, (err, result) => {
    if (err) return console.log(err.toString());
    console.log('Area is S = ' + result);
});
