// Tính diện tích hình thang ( a + b )  * h / 2
let math = require('./math');
let S = (a, b, h) => {
    return math.add(a, b)
        .then(result => math.mul(result, h))
        .then(result => math.division(result, 2))
        .then(result => console.log(result))
        .catch(err => console.log(err.toString()));
};
S(2, 3, 4);
