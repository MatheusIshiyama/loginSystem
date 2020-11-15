const { Schema, model } = require('mongoose');

const User = Schema({
    name: String,
    age: Number,
    email: String,
    password: String
})

module.exports = model('User', User);