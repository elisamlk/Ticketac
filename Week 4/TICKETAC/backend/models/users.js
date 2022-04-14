// contenir le schéma et le modèle du signup form
var mongoose = require('mongoose');

var signupSchema = mongoose.Schema({
    name: String,
    firstname: String,
    email: String,
    password: String,
})

var usersModel = mongoose.model('users', usersSchema)

var signinSchema = mongoose.Schema({
    email: String,
    password: String,
})

module.exports = usersModel;