let math = require('./math');

let S = async (a, b, h, cb) => {
    try {
        let ab = await math.add(a, b);
        let abh = await math.mul(ab, h);
        let square = await math.division(abh, 2);
        cb(undefined, square);
    } catch (e) {
        cb(e);
    }
};
S(2, 3, 2, (err, result) => {
    if (err) return console.log(err.toString());
    console.log(result);
});

