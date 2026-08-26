require('dotenv').config();
const express = require('express');
const app = express();
const main = require('./config/Database');
var cookieParser = require('cookie-parser')
const userRouter = require('./Routes/userAuth');
const redisClient = require('./config/redis');

app.use(express.json());
app.use(cookieParser());

app.use('/user' , userRouter);

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
