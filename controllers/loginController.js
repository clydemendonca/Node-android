var Login = require('../models/loginModel');
var Signup = require('../models/signupModel')

module.exports = {

    toLogin: function (loginObj) {

        //     var myUser;
        //   return  Login.create(loginObj)
        //         .then(function (result) {
        //             myUser = result;
        //             var promiseUser = Signup.findOne({ username: result.username }).exec();
        //             return promiseUser;

        //         })
        //     .then(function (user) {
        //         if (myUser.password === user.password) {

        //             return user;
        //         }

        //     })
        //         .catch()


        return Signup.findOne({ username: loginObj.username }).exec()
            .then(function (result) {
                if (loginObj.password === result.password) {
                    return result;

                }
            })
            .catch()


    }

}