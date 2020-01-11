var demo = require('./ShoppingCart.js');
var ShoppingCart = {
    items:
        {
            '5de248246a76803caa3c0c9d': {item: [Object], quantity: 1, total: 2134},
            '5de2480c6a76803caa3c0c9c': {item: [Object], quantity: 1, total: 3244},
            '5de248406a76803caa3c0c9e': {item: [Object], quantity: 1, total: 8000}
        },
    totalItems: 3,
    totalPrice: 13378,
    add: [Function],
    remove: [Function],
    getItems: [Function],
    updateCart: [Function]
};
var cart = new demo(ShoppingCart);
cart.add(2, ShoppingCart);

