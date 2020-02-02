var Cart = /** @class */ (function () {
    function Cart(product, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.product = product;
        this.quantity = quantity;
    }
    Cart.prototype.total = function () {
        return;
    };
    Cart.prototype.showProductCart = function () {
        return;
    };
    return Cart;
}());
export { Cart };
