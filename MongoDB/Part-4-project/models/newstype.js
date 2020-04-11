const mongoose = require("mongoose");
const newsTypeSchema = new mongoose.Schema({
    name: String,
    position: Number,
    kids: [{type: mongoose.Schema.Types.ObjectId}]
})

module.exports = mongoose.model("NewsType", newsTypeSchema);