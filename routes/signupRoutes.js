var signupController = require('../controllers/signupController');

module.exports = function(app){



//Create
app.post('/signUp',function(req,res){

    var username = req.body.username;  
    var password = req.body.password;
    var fullName = req.body.fullName;

    console.log(username)
    var reg = new RegExp(/^\s*$/, 'g');

    if (reg.test(username) || !username) {
        res.send({
            status: 'Error',
            message: 'Username is required'
        })

    }else  if (reg.test(password) || !password) {
        res.send({
            status: 'Error',
            message: 'Password  is required'
        })

    }
    else  if (reg.test(fullName) || !fullName) {
        res.send({
            status: 'Error',
            message: 'fullname  is required'
        })

    }
    else{
        var promise =  signupController.toSignup(req.body)
        promise
        .then(function(result){

            res.send({
                status:'Sucessfull',
                msg: 'sucessfully added User',
                User:result
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

}