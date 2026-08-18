const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const redisClient = require('../Config/Redis');

const auth = async (req , res , next)=>{

    const token = req.cookies.tokenn;
    if(!token){
        throw new Error("Invalid token");
    }

    const isBlocked = await redisClient.exists(`token : ${token}`);
    if(isBlocked){
        throw new Error("Already exists in redis so it is blocked")
    }

    const payload = jwt.verify(token , process.env.SECRET_KEY );
    if(!payload){
        throw new Error("Invalid Credentails");
    }

    req.result = payload;

    next();
}

module.exports = auth;