const {mongoose , Schema} = require('mongoose');

const instaSchema = new Schema({
    firstName : {
        type : String,
    },
    lastName : {
           type : String,
    },
    age : {
         type : Number,
    },
    gender :{
     type : String
    },
    email : {
        type : String
    }
})

const User = mongoose.model("user" , instaSchema);

module.exports = User;