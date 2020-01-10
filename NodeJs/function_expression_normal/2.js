function callFunc(func) {
    func();
}

// Expression Function
var sayHello = () =>{
    console.log('Hello World');
};

callFunc(sayHello);

// => Chỉ được gọi ở dưới function
