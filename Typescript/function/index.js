// Ham tra ve kieu number
function helo(a, b) {
    return a + b;
}
console.log(helo(2, 3));
// Ham tra ve kieu string
function nayxi(a, b) {
    return a + b;
}
console.log(nayxi("Hello, Pham Minh Tuan, Age: ", 21));
// Ham tra ve kieu mang
function mangso() {
    return [1, 2, 3, 4, 5];
}
console.log(mangso());
// Ham tra ve kieu doi tuong
function doituong() {
    return {
        name: "Tuan",
        age: 31,
        email: "tuanpham31798@gmail.com",
        tele: 313012414
    };
}
console.log(doituong());
//  Anonymous function
var anony = function (a) {
    return "Hello " + a + ", how are you?";
};
console.log(anony("Tuan"));
// arrow function
var arrowfun = function (a) {
    return "Hello " + a + ", I love you?";
};
console.log(arrowfun("Quynh"));
