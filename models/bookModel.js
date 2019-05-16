var mongoose = require('mongoose');

var bookSchema = mongoose.Schema({

    name:String,
    authorId:mongoose.Types.ObjectId

});

var Book = mongoose.model('Book',bookSchema);

module.exports = Book