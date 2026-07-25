const {Schema , mongoose} = require('mongoose');
const bcrypt =require('bcrypt');
const jwt = require('jsonwebtoken');

const InstaSchema = new Schema({
    firstName : {
        type : String,
        min : 3,
        max : 20
    },

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
} , {timestamps : true})


InstaSchema.methods.verifyPassword = function (userPassword){
  const ans = bcrypt.compare(userPassword , this.password);
  return ans;
}

InstaSchema.methods.Sign = function (){
   const ans2 = jwt.sign({id : this._id , email : this.email}, process.env.SECRET_KEY);
   return ans2;
}


const User = mongoose.model("user" , InstaSchema);

module.exports = User;