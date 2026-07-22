const express = require('express');
const main = require('./Database');
const User = require('./model/collection');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const valid  = require('./validation/validator');
const jwt = require('jsonwebtoken');

const app= express();
app.use(express.json());  
app.use(cookieParser());



app.post("/register" , async (req , res)=>{
    
    try{
        valid(req.body);

        req.body.password = await bcrypt.hash(req.body.password , 10);
        
        await User.create(req.body);

        res.status(201).send("User Registered Successfully");
        

    }catch(err){
        console.log("Error" , err.message);
    }

})

app.post('/login' , async (req , res)=>{
    try{
        const people =  await User.findOne({email : req.body.email});

    if(!(req.body.email === people.email)){
        throw new Error("invalid Credentials");
    }
    
    const isAllowed = await bcrypt.compare(req.body.password , people.password);
    if(!(isAllowed)){
        throw new Error("invalid Credentials");
    }
    //send token 
    const token = jwt.sign({_id : people._id  , email : people.email} , "secretkey121");
    res.cookie("token_name" , token);

    res.status(201).send("Login Successfully");
    }catch(err){
        console.log("error" + err.message);
    }

   
    
})

app.get('/user' , async (req , res)=>{
    const payload = jwt.verify(req.cookies.token_name , "secretkey121" , { expiresIn: "15s" });

    try{
       const result =  await User.findById(payload._id);
        res.status(200).send(result);
    }catch(err){
        console.log("Error" , err.message);
    }
})



main()
.then(()=>{console.log("connected to Db")
app.listen(1000 , (req , res)=>{
console.log("server is listening at port 1000");
})
})
.catch((err)=>{console.log(err + err.message)});

