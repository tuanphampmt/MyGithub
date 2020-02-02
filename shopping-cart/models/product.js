const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
	name: String,
	image: String,
	summary: String,
	price: Number,
	canBuy: Boolean

}, {collection: "products"})

module.exports = mongoose.model('Product', productSchema);

