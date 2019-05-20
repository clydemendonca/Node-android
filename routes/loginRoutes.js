var loginController = require('../controllers/loginController');

module.exports = function (app) {


    app.post('/login', function (req, res) {

        var username = req.body.username;
        var password = req.body.password;

        console.log(username)
        var reg = new RegExp(/^\s*$/, 'g');

        if (reg.test(username) || !username) {
            res.send({
                status: 'Error',
                message: 'Username is required'
            })

        } else if (reg.test(password) || !password) {
            res.send({
                status: 'Error',
                message: 'Password  is required'
            })

        } else {
            var promise = loginController.toLogin(req.body)
            promise
                .then(function (result) {
console.log("login"+result)
                    if(result != undefined){
                    res.send({
                        status: 'Sucessfull',
                        msg: 'sucessfully Login User',
                        User: result
                    })
                }else{

                    res.send({
                        status: 'Error',
                        msg: 'Failure to Login User',
                       
                    })
                }
                })
                .catch(function (err) {
                    console.log(err)
                    res.send({
                        status: 'Error',
                        message: 'Some error occured'
                    })
                })

        }



    })
}