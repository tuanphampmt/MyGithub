var Sayhello = /** @class */ (function () {
    function Sayhello() {
    }
    Sayhello.hwl = function (hello) {
        return hello;
    };
    return Sayhello;
}());
console.log(Sayhello.hwl(["Hello", "How", "are", "you?"]));
var Telephone = /** @class */ (function () {
    function Telephone(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Telephone.prototype.show = function () {
        return "ID: " + this.id + ", Name: " + this.name + ", Price: " + this.price;
    };
    return Telephone;
}());
console.log(new Telephone(1, "Samsung", 3000).show());
console.log(new Telephone("5e52562egh24", "Samsung", 3000).show());
