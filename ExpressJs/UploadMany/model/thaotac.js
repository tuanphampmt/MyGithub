var mongoose = require('mongoose');
var user = new mongoose.Schema({nameProduct: {type:String}, priceProduct: {type:Number}, pathImages: {type:Array}}, {collection: 'user'});
module.exports = mongoose.model('user', user);


