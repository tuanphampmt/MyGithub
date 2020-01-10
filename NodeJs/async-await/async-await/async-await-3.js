let math = require('./math');

let S = async (a, b, h) => {
    try {
        let ab = await math.add(a, b);
        let abh = await math.mul(ab, h);
        let square = await math.division(abh, 2);
        return Promise.resolve(square);
    } catch (e) {
        return Promise.reject(e);
    }
};
let area = (a, b, h) => {
    return S(a, b, h).then(result => console.log(result)).catch(e => console.log(e));
};
area(2,3,2);



