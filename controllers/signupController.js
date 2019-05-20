var SignUp = require('../models/signupModel')

module.exports = {


    toSignup:function(signupObj){

        var promise = SignUp.create(signupObj)

        return promise;


    }
}