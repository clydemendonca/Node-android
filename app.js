var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

var authorRoutes = require('./routes/authorRoutes');
var bookRoutes = require('./routes/bookRoutes')

var app = express();
app.use(bodyParser.json())

// app.get('/',function(req,res){
//     res.send("Hello world")
// })

// app.get('/profile/:id',function(req,res)
// {
//     res.send('req for id '+ req.params.id)
// })

//fire controller
//todoController(app);
authorRoutes(app);
bookRoutes(app);

mongoose.connect('mongodb://test:test123@ds157276.mlab.com:57276/todo');

app.listen(2000)
