var mongoose = require('mongoose');

var signupSchema = mongoose.Schema({

    username:String,
    password:String,
    fullName:String

});

var Signup = mongoose.model('SignUp',signupSchema);

module.exports = Signup