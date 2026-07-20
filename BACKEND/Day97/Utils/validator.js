const validator = require('validator');

function valid(data){

    if(!validator.isEmail(data.email))
        throw new Error("Invalid Email");

    if(!validator.isStrongPassword(data.password))
        throw new Error("invalid Password");

    if(!validator.isLength(data.firstName , {min : 3 , max : 20}))
        throw new Error("invalid firstName");
}

module.exports = valid;

