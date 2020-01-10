var mongoose = require('mongoose');
var nguoidung = new mongoose.Schema({name: 'string', age: 'number'}, {collection: 'nguoidung'});
module.exports = mongoose.model('nguoidung', nguoidung);