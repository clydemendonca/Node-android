var Author = require('../models/authorModel');

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
            .find({ name: req.params.name.replace(/\-/g, " ") })
            .remove()
            .exec()

        return promise;

    }

}