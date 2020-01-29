// Ham tra ve kieu number

function helo(a: number, b: number): number {
    return a+b;
}
console.log(helo(2,3))

// Ham tra ve kieu string

function nayxi(a: string, b: number): string {
    return a+b;
}
console.log(nayxi("Hello, Pham Minh Tuan, Age: ",21))

// Ham tra ve kieu mang

function mangso(): Array<number> {
    return [1,2,3,4,5];
}
console.log(mangso())

// Ham tra ve kieu doi tuong

function doituong(): any {
    return {
        name: "Tuan",
        age: 31,
        email: "tuanpham31798@gmail.com",
        tele: 313012414
    };
}
console.log(doituong())

//  Anonymous function

const anony = function(a: string): string {
    return `Hello ${a}, how are you?`
}
console.log(anony("Tuan"))

// arrow function

const arrowfun = (a: string): string =>{
    return `Hello ${a}, I love you?`
}
console.log(arrowfun("Quynh"))