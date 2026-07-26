const jwt = require('jsonwebtoken');
const User = require('../Model/collection')
  const auth =  async (req, res , next)=>{
 const token = req.cookies.token;
    if(!token){
        throw new Error("token is not found");
    }
   const payload =  jwt.verify(req.cookies.token , process.env.SECRET_KEY);

   const id = payload.id;
   if(!id){
      throw new Error("id is not found");
   }

 const result = await User.findById(id);
 if(!result){
    throw new Error(" no result");
 }
 req.result = result ;

 next();

  }   

  module.exports = auth;