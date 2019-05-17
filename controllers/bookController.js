var Book = require('../models/bookModel')
var Author = require('../models/authorModel');
var Q = require('q')



module.exports = {

    getBooks: function () {

        var myBooks;
        return Book.find({}).exec()
            .then(function (books) {
                myBooks = books;
                var promises = [];
                books.forEach(function (book) {

                    var promise = Author.findById(book.authorId).exec();

                    promises.push(promise);


                });
                var promiseForResult = Q.all(promises);
                return promiseForResult;


            })
            .then(function (authors) {

                var result = [];
                for (var i = 0; i < authors.length; i++) {
                    result.push({
                        book_id: myBooks[i]._id,
                        book_name: myBooks[i].name,
                        author_name: authors[i].name


                    })
                }

                console.log(authors)
            return result;


            })
            .catch(function (err) {
                console.log(err)

            })
    }
    ,
    createBook: function (BookObj) {
        var promise = Book.create(BookObj)

        return promise;
    }
    ,

    deleteBook: function (id) {

        var promise = Book
            .findByIdAndDelete(id)
            .exec()

        return promise;

    }

    // app.post('/books',function(req,res){

    //     var newBook = Book(req.body).save(function(err,data){
    //         if(err) throw err;
    //         res.send(data);
    //         console.log(data)

    //     })
    // });

    // app.delete('/books/:name',function(req,res){

    //     Book.find({name: req.params.name.replace(/\-/g," ")}).remove(function(err,data){
    //         if(err) throw err;
    //         res.send(data);
    //         console.log(data);
    //     })
    // })


}