var mongoose = require('mongoose');

var autherSchema = new mongoose.Schema({
    name:String
})

var Author = mongoose.model('Author',autherSchema);

module.exports = Author;