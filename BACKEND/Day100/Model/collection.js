const {Schema , mongoose} = require('mongoose');

const DataSchema = new Schema({
    email : {
        type : String,
        unique : true,
        required : true,
    },
    password : {
        type : String,
        unique : true,
        required : true
    }
}, {timestamps : true})


const User = mongoose.model("user", DataSchema);

module.exports = User;