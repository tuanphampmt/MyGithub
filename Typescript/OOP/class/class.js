var Character = /** @class */ (function () {
    function Character(characterName, slogan, blood) {
        this.characterName = characterName;
        this.slogan = slogan;
        this.blood = blood;
    }
    Character.prototype.show = function () {
        return "Name: " + this.characterName + ", Slovenan: " + this.slogan + ", Blood: " + this.blood;
    };
    return Character;
}());
var character = new Character("Natalyta", "Ý chí của ma thuật", 450);
console.log(character.show());
var Telephone = /** @class */ (function () {
    function Telephone(telephoneName, price, star, color) {
        (this.telephoneName = telephoneName), (this.price = price);
        this.star = star;
        this.color = color;
    }
    Telephone.prototype.show = function () {
        return " Name: " + this.telephoneName + ", Price: " + this.price + ", Star: " + this.star + ", Color: " + this.color;
    };
    return Telephone;
}());
var telephone = new Telephone("Iphone X", 12000, 5, [
    "black",
    "pink",
    "red",
    "green"
]);
console.log(telephone.show());
var state;
(function (state) {
    state[state["start"] = 1] = "start";
    state[state["processing"] = 2] = "processing";
    state[state["finish"] = 3] = "finish";
})(state || (state = {}));
var Work = /** @class */ (function () {
    function Work(id, workName, status) {
        this.id = id;
        this.workName = workName;
        this.status = status;
    }
    Work.prototype.show = function () {
        return " ID: " + this.id + ", Name: " + this.workName + ", Status: " + this.status;
    };
    Work.run = function () {
        return "Test static";
    };
    return Work;
}());
var work = new Work("54df2h3j42k44432", "Learn Nodejs", state.finish);
console.log(work.show());
console.log(Work.run()); // Goi method khong can new doi tuong 
