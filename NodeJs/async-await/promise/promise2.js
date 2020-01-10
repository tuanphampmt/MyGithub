let add = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof a != 'number' || typeof b != 'number') {
                return reject(new Error('That bai'));
            }
            resolve(a + b);
        }, 500)
    })
};
add(4, 5).then(result => console.log(result), err => console.log(err.toString()));
