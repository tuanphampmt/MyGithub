var mongoose = require('mongoose');
var product = new mongoose.Schema({
    name: String,
    price: Number,
    description: String,
    availability: String,
    offer: Number,
    qty: Number,
    code: Number,
    title: String
}, {collection: 'product'});
module.exports = mongoose.model('Product', product);
