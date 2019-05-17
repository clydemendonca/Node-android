var Author = require('../models/authorModel');
var Book = require('../models/bookModel');
var Q = require('q');

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
            .find({ name: name.replace(/\-/g, " ") })
            .remove()
            .exec()

        return promise;

    },

    deleteAuthorWithBooks: function (authorId) {

       return Book.find({ authorId: authorId }).exec()
            .then(function (books) {

                var promises = [];

                books.forEach(function (book) {

                    var promise = Book.findByIdAndDelete(book._id);
                    promises.push(promise);

                });

                var promiseResult = Q.all(promises);

                return promiseResult;

            })
            .then(function (results) {

                return Author.findByIdAndDelete(authorId);

            })
            


    }

}