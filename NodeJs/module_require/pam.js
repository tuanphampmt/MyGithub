var sayHello = () => {
    console.log('hello word')
};
var sayGoodBye = () => {
    console.log('Good bye !!')
};

// way 1
// module.exports.sayHello = sayHello;
// module.exports.sayGoodBye = sayGoodBye;

// way 2
module.exports = {
    sayHello: sayHello(),
    sayGoodBye: sayGoodBye()
};
