var mongoose = require("mongoose")

var UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    alamat: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    })
var User = module.exports = mongoose.model("users", UserSchema)