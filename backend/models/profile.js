const mongoose = require('mongoose');

const profileScheme = mongoose.Schema({
    name: {type: String, require: true},
    email: {type: String, require: true},
    telephone: String,
    occupation: String,
    industry: String,
    location: String,
    orginization: {type: String, require: true},
    chapter: {type: String, require: true},
    whoiknow: String,
    businessname: String,
    businesswebsite: String,
    businessdescription: String,
    info: String
});

module.exports = mongoose.model('Profile', profileScheme)
