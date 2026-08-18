const validator = require('validator');


function valid(data){

    if(!validator.isEmail(data.email)){
        throw new Error("Invalid Email");
    }

    if(!validator.isStrongPassword(data.password)){
        throw new Error("Invalid Password");
    }
}

module.exports = valid;