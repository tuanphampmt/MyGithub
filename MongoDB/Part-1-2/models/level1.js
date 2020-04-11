const mongoose = require("mongoose");
const level1Schema = new mongoose.Schema({
    name: String,
    kids: [{type: mongoose.Schema.Types.ObjectId}]
})
module.exports = mongoose.model("Level1", level1Schema)
