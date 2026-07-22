const {Schema, default: mongoose} = require('mongoose');


const Twitterschema = new Schema({
    firstName : {
        type : String,
        // required : true,
    },
    email : {
        type : String,
        required : true,
        unique : true ,
    },
    password : {
        type : String,
        required : true,
        unique : true,
    }
} , {timestamps : true});


const User = mongoose.model("user" , Twitterschema);

module.exports= User;