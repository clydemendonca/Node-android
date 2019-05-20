var bookController = require('../controllers/bookController')

module.exports = function(app){

    //get
    app.get('/books',function(req,res){

    var promise = bookController.getBooks();

    promise
    .then(function(result){

        res.send({
            status:'Sucessfull',
            msg: 'sucessfully retrive Books',
            book:result

        })

    })
    .catch(function(err){
        res.send({
            status:'Error',
            msg: 'Some Error found',

        })

    })


    });

//Create
    app.post('/books',function(req,res){

        var name = req.body.name;
        var authorId = req.body.authorId

        var reg = new RegExp(/^\s*$/, 'g');

        if (reg.test(name) || name === null || name === "") {
            res.send({
                status: 'Error',
                message: 'Name is required'
            })

        }else  if (reg.test(authorId) || authorId === null || authorId === "") {
            res.send({
                status: 'Error',
                message: 'Author id is required'
            })

        }
        else{
            var promise =  bookController.createBook(req.body)
            promise
            .then(function(result){

                res.send({
                    status:'Sucessfull',
                    msg: 'sucessfully added Books',
                    books:result
                 })
            })
            .catch(function (err) {
                console.log(err)
                res.send({
                    status: 'Error',
                    message: 'Some error occured'
                })
            })

        }
       

    });

//Delete
    app.delete('/books/:_id',function(req,res){

        var id = req.params._id;


        var reg = new RegExp(/^\s*$/, 'g');

        if (reg.test(id) || id === null || id === "") {
            res.send({
                status: 'Error',
                message: 'ID is required'
            })

        }
        else{
                var promise = bookController.deleteBook(id);
                promise
                .then(function(result){

                    promise
                    .then(function (result) {
                        res.send({
                            status: 'Success',
                            message: 'Successfully deleted book',
                        })
                    })
                    .catch(function (err) {
                        res.send({
                            status: 'Error',
                            message: 'Some error occured'
                        })
                    })
    

                })


        }




    })


}