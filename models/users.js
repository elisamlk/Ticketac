// Modèle js users pour le signin et le signup

var mongoose = require('mongoose');

var signinSchema = mongoose.Schema({
    email: String,
    password: String,
})

var signinModel = mongoose.model('users', signinSchema)

var signupSchema = mongoose.Schema({
    name: String,
    firstname: String,
    email: String,
    password: String,
})

var signupModel = mongoose.model('users', signupSchema)

module.exports = usersModel;


// comenntaiogek;jg peùvlr