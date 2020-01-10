// Tính giá trị của biểu thức: P = (a - b) * (b - c) * (c - a)/(a + b + c)
const math = require('./math');
// P = (a - b) * (b - c) * (c - a)/(a + b + c)
let P = (a, b, c, callback) => {
    math.sub(a, b, (err, sub1) => {
        if (err) return console.log(err);
        math.sub(b, c, (err, sub2) => {
            if (err) return console.log(err);
            math.mul(sub1, sub2, (err, mul1) => {
                if (err) return console.log(err);
                math.sub(c, a, (err, sub3) => {
                    if (err) return console.log(err);
                    math.mul(mul1, sub3, (err, mul2) => {
                        if (err) return console.log(err);
                        math.add(a, b, (err, add1) => {
                            if (err) return console.log(err);
                            math.add(add1, c, (err, add2) => {
                                if (err) return console.log(err);
                                math.division(mul2, add2, (err, result) => {
                                    if (err) return console.log(err);
                                    callback(undefined, result);
                                })
                            })
                        })
                    })
                })
            })
        })
    })
};
P(2, 4, 6, (err, result) => {
    if (err) return console.log(err.toString());
    console.log(' P = ' + result);
});
