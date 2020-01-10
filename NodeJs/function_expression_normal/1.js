function callFunc(func) {
    func();
}
// Normal function
function sayHello() {
    console.log('Hello World');
}
callFunc(sayHello);

// => Gọi ở đâu cũng được

