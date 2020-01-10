let aPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Thanh cong');
        reject(new Error('That bai'));
    }, 500)
});
aPromise.then((msg) => console.log('Da thuc thi: ' + msg), (errMsg) => console.log(errMsg.toString()));
