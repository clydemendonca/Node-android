var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });
var jsonParser = bodyParser.json()
var data = [{item:'abc'},{item:'pqr'},{item:'lmn'}];
module.exports = function(app){

app.get('/todo',function(req,res){
res.send(data)
})

app.post('/todo',jsonParser,function(req,res){
   console.log(req.body)
   data.push(req.body)
   res.send(data)
   
})

app.put('/todo',function(req,res){
    
})
};