var bodyParser = require('body-parser');

var todoSchema = new mongoose.Schema({
   item: String
})

var Todo = mongoose.model('Todo', todoSchema);

// var itemOne = Todo({item:"hello"}).save(function(err){
//     if(err) throw err ;
//     console.log('item saved')
// })


//var data = [{item:'abc'},{item:'pqr'},{item:'lmn'}];
module.exports = function (app) {

   app.get('/todo', function (req, res) {
      Todo.find({}, function (err, data) {

         if (err) throw err;
         res.send(data)

      })

   })

   app.post('/todo', function (req, res) {
      var newTodo = Todo(req.body).save(function (err, data) {
         if (err) throw err
         res.send(data)
         console.log(req.body)

      })


   })

   app.delete('/todo/:item', function (req, res) {
      Todo.find({ item: req.params.item.replace(/\-/g, " ") }).remove(function (err, data) {

         if (err) throw err
         res.send(data)
         console.log(data)
      })

   })
};