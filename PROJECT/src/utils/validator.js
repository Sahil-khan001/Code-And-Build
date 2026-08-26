const validator = require('validator');

function valid(data){

  if(!validator.isEmail(data.emailId)){
    throw new Error("invalid Email");
  }

  if(!validator.isStrongPassword(data.password)){
    throw new Error("invalid Password");
  }
}

module.exports = valid;