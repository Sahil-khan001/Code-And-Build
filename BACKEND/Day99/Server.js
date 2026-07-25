const express = require('express');
const app = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./Model/Schema');
const main = require('./Database');
const cookieParser = require("cookie-parser");
const valid = require("./validator/validation");
const auth = require("./middleware/auth");
app.use(express.json());
app.use(cookieParser());
require('dotenv').config();


app.post('/register' , async (req , res)=>{
    
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

app.post('/login' , async (req , res)=>{
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

app.get('/info' ,auth , async (req , res)=>{
    try{
        res.status(200).send(req.result);
    }catch(err){
        console.log("Error" , err.message);
    }
})

app.delete('/info' ,auth , async (req , res)=>{
    try{
   await User.deleteOne({email : req.body.email});
   res.status(200).send("Deleted Successfully");
}catch(err){
    console.log("Error" + err.message);
}


})



main()
.then(()=>{console.log("connected to db")
    app.listen(1000 , (req , res)=>{
        console.log("server is listening at port 1000")
    })
})
.catch((Err)=>{
    console.log("Error" + Err.message)
})