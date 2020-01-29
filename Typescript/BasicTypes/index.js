console.log("Hello World");
var isBoolean = true;
var isNumber = 2020;
var isString = "Pham Minh Tuan";
if (isString) {
    var full = "Hello, " + isString + " " + isNumber;
    console.log(full);
}
var fullname = ["Tuan", "Vu", "Nguyen"];
fullname.forEach(function (name) { return console.log(name); });
var numberFu = [1, 2, 3];
numberFu.forEach(function (nu) { return console.log(nu); });
// any tra gan kieu gi cung duoc
var how;
how = 5 * 4;
console.log(how);
// void khong co tra ve gia tri , neu return thi loi
function nextHi() {
    console.log("day la ham gia tri kieu void");
}
nextHi();
//ep kieu 
var naylo = "Hello I love you 3000";
console.log(naylo.length);
