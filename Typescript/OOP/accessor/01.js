var fullNameMaxLength = 10;
var Employee = /** @class */ (function () {
    function Employee() {
    }
    Object.defineProperty(Employee.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (fullName) {
            if (fullName && fullName.length > fullNameMaxLength) {
                throw new Error("fullName has a max length of " + fullNameMaxLength);
            }
            this._fullName = fullName;
        },
        enumerable: true,
        configurable: true
    });
    return Employee;
}());
var employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}
