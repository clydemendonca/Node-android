var authorController = require('../controllers/authorController');

module.exports = function (app) {

    //get Authors
    app.get('/authors', function (req, res) {

        var promise = authorController.getAuthors();

        promise
            .then(function (result) {
                res.send({
                    status: 'Success',
                    message: 'Successfully retrieved authors',
                    authors: result
                })
            })
            .catch(function (err) {
                res.send({
                    status: 'Error',
                    message: 'Some error occured'
                })
            })

    });

    //Add Author
    app.post('/authors', function (req, res) {

        var name = req.body.name;

        var reg = new RegExp(/^\s*$/, 'g');

        if (reg.test(name) || name === null || name === "") {
            res.send({
                status: 'Error',
                message: 'Name is required'
            })

        } else {

            var promise = authorController.createAuthor(name)
            promise
                .then(function (result) {
                    res.send({
                        status: 'Success',
                        message: 'Successfully Add authors',
                        authors: result
                    })

                })
                .catch(function (err) {
                    res.send({
                        status: 'Error',
                        message: 'Some error occured'
                    })
                })

        }

    });

    //Delete Author
    app.delete('/authors/:name', function (req, res) {

        var name = req.params.name;

        if (name == null) {
            res.send({
                status: 'Error',
                message: 'Name is required'
            })
        } else {

            var promise = authorController.deleteAuthor(name);

            promise
                .then(function (result) {
                    res.send({
                        status: 'Success',
                        message: 'Successfully deleted author',
                    })
                })
                .catch(function (err) {
                    res.send({
                        status: 'Error',
                        message: 'Some error occured'
                    })
                })

        }

    });


    //Delete Author with all his books
    app.delete('/deleteAuthorWithBooks/:authorId', function (req, res) {

        var authorId = req.params.authorId;
        var promise = authorController.deleteAuthorWithBooks(authorId);

        promise
            .then(function (result) {
                res.send({
                    status: 'Successful',
                    message: 'Author deleted Successfull'
                })
            })
            .catch(function (err) {

                res.send({

                    status: 'Error',
                    message: 'Some Error occured'
                })
                console.log(err)
            })




    })

}