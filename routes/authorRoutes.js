var authorController = require('../controllers/authorController');

module.exports = function (app) {

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

    app.post('/authors', function (req, res) {

        var name = req.body.name;

        if (name === null) {
            res.send({
                status: 'Error',
                message: 'Name is required'
            })
        } else {

            var promise = authorController.createAuthor(name)

        }

    });

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

}