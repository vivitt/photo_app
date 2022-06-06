const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type: String,
        // required: true,
        message : "Please enter you name"
    },
    email:{
        type: String,
        unique: true,
        required: true,
        match: [/^\S+@\S+\.\S+$/, "This is not an email format"]
    },
    password:{
        type: String,
        required: true,
        minlength: 6,
    },

    shouldWear: [{
        type: String,
        default : []
    }]
})


module.exports = new mongoose.model("User", userSchema)