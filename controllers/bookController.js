var bodyParser = require('body-parser');
var mongoose = require('mongoose');
mongoose.connect('mongodb://test:test123@ds157276.mlab.com:57276/todo');

var bookSchema = mongoose.Schema({

    name:String,
    authorId:mongoose.Types.ObjectId

});

var Book = mongoose.model('Book',bookSchema);

var jsonParser = bodyParser.json();

module.exports = function(app){

app.get('/books',function(req,res){

    Book.find({},function(err,data){

        res.send(data);
        console.log(data);
    })
});

app.post('/books',jsonParser,function(req,res){

    var newBook = Book(req.body).save(function(err,data){
        if(err) throw err;
        res.send(data);
        console.log(data)

    })
});

app.delete('/books/:name',function(req,res){

    Book.find({name: req.params.name.replace(/\-/g," ")}).remove(function(err,data){
        if(err) throw err;
        res.send(data);
        console.log(data);
    })
})


}