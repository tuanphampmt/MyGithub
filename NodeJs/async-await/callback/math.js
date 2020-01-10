let add = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error('Not typeof number'))
        }

        callback(undefined, a + b);
    }, 5)
};
let sub = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error('Not typeof number'))
        }
        callback(undefined, a - b);
    }, 5)
};

let mul = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error('Not typeof number'))
        }
        callback(undefined, a * b);
    }, 5)
};

let division = (a, b, callback) => {
    setTimeout(() => {
        if (typeof a != 'number' || typeof b != 'number') {
            return callback(new Error('Not typeof number'))
        }
        if (b === 0) {
            return callback(new Error('division undefined'))
        }
        callback(undefined, a / b);
    }, 5)
};
module.exports.add= add;
module.exports.sub= sub;
module.exports.mul= mul;
module.exports.division= division;
