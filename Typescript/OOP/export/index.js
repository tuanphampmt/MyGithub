var Passport;
(function (Passport) {
    var Sayhello = /** @class */ (function () {
        function Sayhello() {
        }
        Sayhello.prototype.show = function () {
            return "Hello World";
        };
        return Sayhello;
    }());
    Passport.Sayhello = Sayhello;
})(Passport || (Passport = {}));
var sayhello = new Passport.Sayhello();
console.log(sayhello.show());
