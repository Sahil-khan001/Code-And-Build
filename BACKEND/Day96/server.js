const express = require('express');
const User = require("./Model/insta");
const main = require("./database");

const app = express();
app.use(express.json());







main()
.then(()=>{console.log("Db is connecting to Server")
app.listen(9000 , (req , res)=>{
    console.log("Server is listening at port 9000");
})
})
.catch((err)=>{
    console.log("error" + err.message);
})
