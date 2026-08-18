const {Schema , mongoose} = require('mongoose');

const TwitterSchema = new Schema ({

    firstName : {
        type : String,
    },

    email : {
        type : String,
        unique : true,
        required : true
    },

    password : {
        type : String,
        required : true,
    }
})

const Users = mongoose.model("FINALDB" , TwitterSchema);

module.exports = Users;