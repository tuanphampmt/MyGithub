let getFunc = num => {
    if (num > 0) return () => console.log('Positive number');
    return () => console.log('Negative number ')
};
getFunc(-1)();
