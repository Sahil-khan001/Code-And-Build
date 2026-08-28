require('dotenv').config();
const express = require('express');
const app = express();
const main = require('./config/Database');
const cookieParser = require('cookie-parser')
const userRouter = require('./Routes/userAuth');
const redisClient = require('./config/redis');
const problemRouter = require("./Routes/problemCreator");

app.use(express.json());
app.use(cookieParser());

app.use('/user' , userRouter);
app.use('/problem' , problemRouter);

const initializeConnection = async ()=>{

    try{
   await Promise.all([redisClient.connect() , main()]);

    app.listen( process.env.PORT, (req , res)=>{
         console.log("server is listening at port no : 3000");
    })
    }catch(err){
        console.log("error " , err.message);
    }
}
initializeConnection();
