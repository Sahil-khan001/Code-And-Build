const valid = require("../utils/validator");
const User = require("../Model/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const redisClient = require("../config/redis");
const Submission = require("../Model/submission");
require('dotenv').config();

const register = async (req , res)=>{

    try{
        valid(req.body);

    const {firstName , emailId , password} = req.body;

    req.body.password = await bcrypt.hash(password , 10);
    req.body.role = 'user';

    await User.create(req.body);
   
    res.status(201).send("User Registered Successfully");
     
    }catch(err){
        res.status(400).send("error " + err.message);
    }

}

const login = async (req , res)=>{

try {

    const {emailId , password} = req.body;

    if(!emailId)
        throw new Error("Invalid emailId");

    if(!password)
        throw new Error("Invalid Password");

    const check = await User.findOne({emailId});
    
    if(!check){
        throw new Error("invalid Credentials");
    }
    const compare = await bcrypt.compare(password , check.password);
    if(!compare){
        throw new Error("invalid Credentials");
    }

    const token = jwt.sign({_id : check._id , emailId: check.emailId , role : check.role} , process.env.JWT_KEY , {expiresIn : 3600})
    res.cookie("token" , token , {maxAge : 60*60*1000});

    res.status(200).send("User Login Successfully");  

}catch(err) {
    res.status(400).send("err "+ err.message);
}

}

const logout  = async (req , res)=>{

    try{
        const token = req.cookies.token;
        const payload = jwt.decode(token);
    
        redisClient.set(`token : ${token}` , "blocked");
        redisClient.expireAt(`token : ${token}`, payload.exp);
        res.cookie('token' , null , {expires : new Date(Date.now())});
    //  res.clearCookie("token");
    res.status(200).send("Logout Successfully");
    }catch(err){
        res.status(503).send("error "+ err.message);
    }
}

const getProfile = async (req , res) => {
    try{
        res.status(200).send(req.result);
    }catch(err){
        console.log("error " + err.message);
    }
}

const adminRegister = async (req , res)=>{
   
    try{
        valid(req.body);

    const {firstName , emailId , password} = req.body;

    req.body.password = await bcrypt.hash(password , 10);
    req.body.role = 'admin';

    await User.create(req.body);
   
    res.status(201).send("User Registered Successfully");
     
    }catch(err){
        res.status(400).send("error " + err.message);
    }
}

const deleteProfile =async (req , res)=>{
   try{
       const userId = req.result._id;
      
    // userSchema delete
    await User.findByIdAndDelete(userId);

    // Submission se bhi delete karo...
    
    // await Submission.deleteMany({userId});
    
    res.status(200).send("Deleted Successfully");

    }
    catch(err){
      
        res.status(500).send("Internal Server Error");
    }
}


module.exports= {register , login , logout , getProfile , adminRegister , deleteProfile};