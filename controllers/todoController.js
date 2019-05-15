var bodyParser = require('body-parser');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){

app.get('/todo',function(req,res){
res.send('hii')
})

app.post('/todo',urlencodedParser,function(req,res){
    
})

app.put('/todo',function(req,res){
    
})
};