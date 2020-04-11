const mongoose = require("mongoose");
const newsTypeSchema = new mongoose.Schema({
    title: String,
    pathImages: Array,
    summary: String,
    content: String,
    homepage: Boolean,
    position: Number,
    createdAt: Date 
})

module.exports = mongoose.model("News", newsTypeSchema);