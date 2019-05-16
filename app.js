var express = require('express')
var todoController = require('./controllers/todoController')
var authorController = require('./controllers/authorController')
var bookController = require('./controllers/bookController')

var app = express()

// app.get('/',function(req,res){
//     res.send("Hello world")
// })

// app.get('/profile/:id',function(req,res)
// {
//     res.send('req for id '+ req.params.id)
// })

//fire controller
todoController(app);
authorController(app);
bookController(app);

app.listen(2000)
