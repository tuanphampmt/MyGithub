const mongoose = require("mongoose");
const level2Schema = new mongoose.Schema({
	name: String,
	kids: [{type: mongoose.Schema.Types.ObjectId}]
});

module.exports = mongoose.model("Level2", level2Schema)
