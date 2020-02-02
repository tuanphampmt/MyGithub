var Product = /** @class */ (function () {
    function Product(id, name, price, desc, status, pathImages) {
        this._id = id;
        this._name = name;
        this._price = price;
        this._desc = desc;
        this._status = status;
    }
    Object.defineProperty(Product.prototype, "id", {
        get: function () {
            return this._id;
        },
        set: function (id) {
            this._id = id;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (desc) {
            this._desc = desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "status", {
        get: function () {
            return this._status;
        },
        set: function (status) {
            this._status = status;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "pathImages", {
        get: function () {
            return this._pathImages;
        },
        set: function (pathImages) {
            this._pathImages = pathImages;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
export { Product };
