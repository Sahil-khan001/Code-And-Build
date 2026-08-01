const express = require('express');
const cookieParser =require('cookie-parser');
const app = express();
app.use(express.json());
app.use(cookieParser());
const AuthRouter = require('./Routes/AuthRouter');
const UserRouter = require('./Routes/UserRouter');
const valid = require("./validation/validation");
const main = require('./database');
const redisClient = require('./config/redis');
require('dotenv').config();

app.use("/auth" , AuthRouter);
app.use("/user" , UserRouter);


const initializeConnection = async ()=>{

    try{
   await Promise.all([redisClient.connect() , main()]);

    app.listen(1000 , (req , res)=>{
         console.log("server is listening at port 1000");
    })
    }catch(err){
        console.log("error " , err.message);
    }
}
initializeConnection();