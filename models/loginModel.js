var mongoose = require('mongoose');

var loginSchema = mongoose.Schema({

    username:String,
    password:String

});

var Login = mongoose.model('Login',loginSchema);

module.exports = Login