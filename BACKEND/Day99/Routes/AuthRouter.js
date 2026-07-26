const valid = require("../validator/validation");
const bcrypt = require('bcrypt');
const User = require('../Model/Schema');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const {Schema , mongoose} = require('mongoose');


const express = require('express');
const AuthRouter = express.Router();


AuthRouter.post('/register' , async (req , res)=>{
    
    try{
        //validate the data first 
    valid(req.body);
    
    req.body.password = await bcrypt.hash(req.body.password , 10);
    await User.create(req.body);
    
    res.status(201).send("Registered Successfully");
    }catch(err){
        console.log(err.message + "error");
    }
})

AuthRouter.post('/login' , async (req , res)=>{
    try{
        const people = await User.findOne({email : req.body.email});
        
        if(!req.body.email === people.email){
            throw new Error("Invalid Email");
        }
        
        const verifypass = people.verifyPassword(req.body.password);
        
        if(!req.body.password === people.password){
            throw new Error("Invalid password");
        }
        
        const token = people.Sign();
        res.cookie("token" , token);
        
        res.status(201).send("LOGIN SUCCESSFULLY");
    }catch(err){
        console.log("Error" + err.message);
    }
})

module.exports = AuthRouter;