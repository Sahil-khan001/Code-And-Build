
const express = require('express');
const valid = require('../validator/validation');
const bcrypt = require('bcrypt');
const Users = require('../Model/Collection');
const jwt = require('jsonwebtoken');
const AuthRouter = express.Router();
const auth = require('../Middleware/auth');
const cookieParser =require('cookie-parser');
const redisClient = require('../Config/Redis');

AuthRouter.post("/register" , async (req , res)=>{

    try{
        valid(req.body);
      
        req.body.password = await bcrypt.hash(req.body.password , 10);
      
        await Users.create(req.body);
        res.status(201).send("Registered Successfully");
    }catch(err){
        console.log("error " + err.message);
    }
})

AuthRouter.post("/login" , async (req , res)=>{

    try{
        const check = await Users.findOne({email : req.body.email});
     
        if(!check){
         throw new Error("Invalid Email");
        }
        
        const checkPass = await bcrypt.compare(req.body.password , check.password);
        
        if(!checkPass){
         throw new Error("Invalid Password");
        }
     
        const token = jwt.sign({id : check._id , firstName : check.firstName} , process.env.SECRET_KEY);
        res.cookie("tokenn" , token);
     
        res.status(201).send("Login Successfully");
    }catch(err){
        console.log("error " + err.message);
    }

})

AuthRouter.get("/logout" , auth , async (req , res)=>{

  try{
     const token = req.cookies.tokenn;
     const payload  = jwt.decode(token);

    await redisClient.set(`token : ${token}` , "blocked");
     await redisClient.expireAt(`token : ${token}` , payload.exp);

    res.cookie("token" , null , {expires : new Date(Date.now())});
    // res.clearCookie("tokenn");
    res.status(200).send("Logout Successfully");
  }catch(err){
    console.log("error " + err.message);
  }

})
module.exports = AuthRouter;



