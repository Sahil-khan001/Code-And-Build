const {Schema , mongoose} = require('mongoose');
const { type } = require('node:os');
const { stringify } = require('node:querystring');

const instaSchema =  new Schema({
    firstName : {
        type : String,
        required : true,
        minLength : 3,
        maxLength : 20,
    },
    lastName : {
        type : String,
    },
    age : {
        type : Number,
        min : 18,
        max : 70,
    },
    gender : {
    type : String,
    enum : ["male" , "female" , "others"],
    validate(values){
        if(!["male" , "female" , "others"].includes(values)){
            throw new Error("Invalid Gender");
        }
    }
    },
    email : {
      type : String,
      required : true,
      unique : true,
      trim : true,
      lowercase : true,
      immutable : true,
    }
    , 
    password : {
        type : String
    }
} , {timestamps : true})


const User = mongoose.model("user" , instaSchema);

module.exports = User;