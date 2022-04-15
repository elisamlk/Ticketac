var mongoose = require('mongoose')

<<<<<<< HEAD
var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    name: String,
    firstname: String,
=======
var userSchema = mongoose.Schema({
    username: String,
>>>>>>> 66f844f66e461ea19b64033abf05e14ea81a36c4
    email: String,
    password: String,
})

<<<<<<< HEAD
var usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel;
=======
var userModel = mongoose.model('users', userSchema)

module.exports = userModel;
>>>>>>> 66f844f66e461ea19b64033abf05e14ea81a36c4
