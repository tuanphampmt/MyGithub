// Tính giá trị của P = (a - b) * (b - c) * (c - a) / (a + b + c)
let math = require('./math');
let P = (a, b, c) => {
    return Promise.all([math.sub(a, b), math.sub(b, c), math.sub(c, a), math.add(a, b + c)])
        .then(arr => {
            let s = 1;
            for (let i = 0; i < arr.length; i++) {
                if (i === (arr.length - 1)) {
                    s = s / arr[i];
                } else {
                    s = s * arr[i];
                }
            }
            console.log(s)
        })
        .catch(err => console.log(err.toString()));
};
P(2, 4, 6);

