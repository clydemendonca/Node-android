var Author = require('../models/authorModel');
var Book = require('../models/bookModel');

module.exports = {

    createAuthor: function (nameValue) {

        var promise = Author.create({
            name: nameValue
        })

        return promise;

    },

    getAuthors: function () {

        var promise = Author.find({}).exec();
        return promise;

    },

    deleteAuthor: function (name) {

        var promise = Author
            .find({name:name.replace(/\-/g, " ") })
            .remove()
            .exec()

        return promise;

    }
,
    deleteAuthorWithBooks: function(authorId){

     var promise = Book.findByIdAndDelete({authorId:authorId}).exec();
     return promise ;


    }

}