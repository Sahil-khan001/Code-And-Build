const {mongoose , Schema} = require('mongoose');

const studentschema = new Schema({
    _id : Number ,
    name : String,
    age : Number,
    city : String,
    marks : Number , 
    skills : Array,
    active : Boolean
})

const User = mongoose.model("StudentDetails" , studentschema);
    
module.exports = User;