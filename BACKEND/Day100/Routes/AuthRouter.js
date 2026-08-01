const express = require('express');
const AuthRouter = express.Router();
const User = require("../Model/collection");
const bcrypt = require('bcrypt');
const valid = require('../validation/validation');
const jwt = require('jsonwebtoken');
const redisClient = require("../config/redis");

AuthRouter.post("/register" , async (req , res)=>{
try {
    valid(req.body);

    req.body.password = await bcrypt.hash(req.body.password , 10);

    await User.create(req.body);
    res.status(200).send("Registered Succesfully");
} catch (error) {
    console.log("Error " + err.message)
}
})

AuthRouter.post("/login" , async (req , res)=>{

    try {
        const people =   await User.findOne({email : req.body.email});

     if(!people){
        throw new Error("invalid Email");
    }
    
    const isMatch = await bcrypt.compare(req.body.password , people.password);
    
    if(!(isMatch)){
       throw new Error("invalid passowrd");
   }


   //jwt 
   const token = jwt.sign({id : people._id  , email : people.email} , process.env.SECRET_KEY);
    res.cookie("token" , token);

   res.status(200).send("Login Successfully");
    } catch (err) {
        console.log("Error " + err.message)
    }
})

AuthRouter.get("/logout" , async (req, res)=>{
    try{
        //token access
        const token = req.cookies.token;

        //creation and expiry time from token 
        const payload = jwt.decode(token);
        console.log(payload);

        //store token in redis in key value pair
        await redisClient.set(`token : ${token}` , "blocked");

        //set expiry in redis db to remove ontime from 1 jan 1970
        await redisClient.expireAt(`token : ${token}`, payload.exp);

        //send new cookie with instant expiry two option use clearCookie or expires time
        res.cookie("token" , null , {expires : new Date(Date.now())});

       //  or 2nd option using ClearCookie
        // res.clearCookie("token");
        
      res.status(200).send("Logout Successfully");
    }catch(err){
        console.log("Error" + err.message);
    }
})

module.exports = AuthRouter;