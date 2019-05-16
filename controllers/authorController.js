var autherSchema = new mongoose.Schema({
    name:String
})

var Author = mongoose.model('Author',autherSchema);

module.exports = function(app){
    
    app.get('/authors',function(req,res){
        Author.find({},function(err,data){

            if (err) throw err;
            res.send(data);

        })
     });

     app.post('/authors', function(req,res){

        var newAuthor = Author(req.body).save(function(err,data){
            if (err) throw err;
            res.send(data)
            console.log(data)
        })
     });

     app.delete('/authors/:name',function(req,res){

        Author.find({name: req.params.name.replace(/\-/g," ")}).remove(function(err,data){

            if (err) throw err 
            res.send(data)
            console.log(data)
     })
});

}