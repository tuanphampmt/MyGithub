console.log("Hello World");

let isBoolean: boolean = true;
let isNumber: number = 2020;
let isString: string = "Pham Minh Tuan";
if (isString) {
	let full: string = `Hello, ${isString} ${isNumber}`;
	console.log(full);
}
let fullname: Array<string> = ["Tuan", "Vu", "Nguyen"];

fullname.forEach(name => console.log(name))

let numberFu: Array<number> = [1, 2, 3];

numberFu.forEach(nu => console.log(nu))

// any tra gan kieu gi cung duoc
let how: any;
how = 5 * 4
console.log(how)

// void khong co tra ve gia tri , neu return thi loi
function nextHi(): void {
	console.log("day la ham gia tri kieu void")
}
nextHi();

//ep kieu 

let naylo: any = "Hello I love you 3000";
console.log((naylo as Array<string>).length)