let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') return reject(new Error('Not typeof number'))
            resolve(a + b);
        }, 500)
    })
};
let sub = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') return reject(new Error('Not typeof number'))
            resolve(a - b);
        }, 500)
    })
};
let mul = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') return reject(new Error('Not typeof number'))
            resolve(a * b);
        }, 500)
    })
};
let division = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') return reject(new Error('Not typeof number'));
            if (b === 0) return reject(new Error('division undefined'));
            resolve(a / b);
        }, 500)
    })
};
module.exports.add= add;
module.exports.sub= sub;
module.exports.mul= mul;
module.exports.division= division;
