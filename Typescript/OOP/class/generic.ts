class Sayhello {
    static hwl<T>(hello: T): T{
        return hello
    }
}
console.log(Sayhello.hwl<Array<string>>(["Hello", "How", "are", "you?"]))


class Telephone<X,Y,Z> {
    id: X;
    name: Y;
    price: Z;
    constructor(id: X, name: Y, price: Z) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    show(): string {
        return `ID: ${this.id}, Name: ${this.name}, Price: ${this.price}`
    }
}

console.log(new Telephone<number, string, number>(1, "Samsung", 3000).show())
console.log(new Telephone<string, string, number>("5e52562egh24", "Samsung", 3000).show())
