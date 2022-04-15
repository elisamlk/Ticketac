// Modèle js users pour le signin et le signup

var mongoose = require('mongoose');

var usersSchema = mongoose.Schema({
    name: String,
    firstname: String,
    email: String,
    password: String,
})

var usersModel = mongoose.model('users', usersSchema)

module.exports = usersModel;
