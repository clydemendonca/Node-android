var Book = require('../models/bookModel')


module.exports = {

getBooks: function(){

    var promise = Book.find({}).exec();
    return promise;
}
,
createBook: function(BookObj)
{
    var promise = Book.create(BookObj)

    return promise;
}
,

deleteBook: function(id){

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