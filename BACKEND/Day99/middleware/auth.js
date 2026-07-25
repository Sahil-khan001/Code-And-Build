const jwt = require('jsonwebtoken');
const User = require('../Model/Schema');

const auth = async (req , res , next)=>{

const token = req.cookies.token;
    if(!token){
        throw new Error("no token found");
    }
    const payload = jwt.verify(token , process.env.SECRET_KEY);
    const id = payload.id;
    if(!id){
        throw new Error("no id is found");
    }
    const result =  await User.findById(id);
     if(!result){
        throw new Error("result is not found");
    }
    req.result = result;

    next();
            }

    module.exports = auth;


