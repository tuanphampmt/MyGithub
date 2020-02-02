const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
	{
		id: Number,
		name: String,
		price: Number,
		desc: String,
		status: Boolean,
		pathImages: String
	},
	{ collection: "products" }
);

module.exports = mongoose.model("Product", productSchema);
