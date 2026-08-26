const jwt = require('jsonwebtoken');
const redisClient = require('../config/redis');
require('dotenv').config()


const auth = async (req , res , next)=>{
    try{
        const token = req.cookies.token;
        if(!token){
            throw new Error("Invalid token");
        }
        //check whether the token is present is in the block list of redis or not 
        const isBlocked = await redisClient.exists(`token : ${token}`);
        if(isBlocked)
            throw new Error("Invalid token Already in Redis block list");
        
        const payload = jwt.verify(token , process.env.JWT_KEY);
        if(!payload){
            throw new Error("Invalid credentials");
        }
        req.result = payload;
        next();
    }catch(err){
        res.status(401).send("error " + err.message);
    }
}

module.exports = auth;