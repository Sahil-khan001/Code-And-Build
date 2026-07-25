const validator = require('validator');

function valid(data){

    if(!(validator.isEmail(data.email))){
      throw new Error("invalid email");
    }
      
      
      if(!validator.isStrongPassword(data.password)){
        throw new Error("invalid password");
      }
}


module.exports = valid ;