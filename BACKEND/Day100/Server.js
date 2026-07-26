const express = require('express');
const cookieParser =require('cookie-parser');
const app = express();
app.use(express.json());
app.use(cookieParser());
const AuthRouter = require('./Routes/AuthRouter');
const UserRouter = require('./Routes/UserRouter');
const valid = require("./validation/validation");
const main = require('./database');
require('dotenv').config();

app.use("/auth" , AuthRouter);
app.use("/user" , UserRouter);


main()
.then(()=>{console.log("Connected to DB")
    app.listen(2000 , (req , res)=>{
        console.log("Server is listening at PORT no : 2000");
    })
}).catch((err)=>{
    console.log("Error " + err.message);
})