var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var General = /** @class */ (function () {
    function General(name, desc, skill) {
        this.name = name;
        this.desc = desc;
        this.skill = skill;
    }
    General.prototype.show = function () {
        console.log("Name: " + this.name + ", Description: " + this.desc + ", Skill: " + this.skill);
    };
    return General;
}());
var Assassins = /** @class */ (function (_super) {
    __extends(Assassins, _super);
    function Assassins(name, desc, skill, beam) {
        var _this = _super.call(this, name, desc, skill) || this;
        _this.beam = beam;
        return _this;
    }
    Assassins.prototype.run = function () {
        _super.prototype.show.call(this);
        console.log("\u0110\u1ED3n s\u00E1t th\u1EE7: " + this.beam);
    };
    return Assassins;
}(General));
var assassins = new Assassins("Nakarot", "Sat thủ đẫm máu", ["chém", "đấm", "đá"], "Chặt");
assassins.run();
