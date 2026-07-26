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
const UserRouter = require('./Routes/UserRouter');
const AuthRouter = require('./Routes/AuthRouter');


app.use("/auth" , AuthRouter);
app.use("/user" , UserRouter);




main()
.then(()=>{console.log("connected to db")
    app.listen(1000 , (req , res)=>{
        console.log("server is listening at port 1000")
    })
})
.catch((Err)=>{
    console.log("Error" + Err.message)
})