const express = require('express');
const main =  require("./Database");
const Users = require('./Model/Collection');
const valid = require('./validator/validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const auth = require('./Middleware/auth');
const AuthRouter = require('./Routes/AuthRouter');
const UserRouter = require('./Routes/UserRouter');
const redisClient = require('./Config/Redis');
const rateLimiter = require('./Middleware/ratelimiter');
require('dotenv').config();


const app =  express();
app.use(express.json());
app.use(cookieParser());

app.use(rateLimiter); //whenever any request come first ratelimiter check in the redis DB
app.use("/auth" , AuthRouter);
app.use("/user" , UserRouter);

const initializeConnection = async ()=>{

    try{
   await Promise.all([redisClient.connect() , main()]);

    app.listen(3000 , (req , res)=>{
         console.log("server is listening at port 1000");
    })
    }catch(err){
        console.log("error " , err.message);
    }
}
initializeConnection();


