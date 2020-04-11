const mongoose = require("mongoose");
const tintucSchema = new mongoose.Schema({
	title: String,
	description: String
});

module.exports = mongoose.model("TinTuc", tintucSchema)