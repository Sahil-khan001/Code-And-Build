const express = require('express');
const { log } = require('node:console');
const main = require("./database");
const User = require("./Model/collection");
const valid = require("./Utils/validator");
const bcrypt = require('bcrypt');

const app = express();
app.use(express.json());


app.post("/register" , async (req , res)=>{

    try{
        //validate the user first
        valid(req.body);

        //convert password into hashcode
        req.body.password = await bcrypt.hash(req.body.password , 10);

        await User.create(req.body);
        res.status(201).send("Data is stored in Database");
    }catch(err){
        console.log("error" + err.message);
    }
})

app.post("/login" , async (req , res)=>{
    
      try{
          const people = await User.findOne({email : req.body.email});
      
          if(!(req.body.email === people.email))
              throw new Error("Invalid Credentials");
      
   const isAllowed = await bcrypt.compare(req.body.password , people.password);

   if(!isAllowed){
    throw new Error("Invalid credentials");
   }

          res.status(201).send("Login Succeed");
      }catch(err){
        console.log("error " + err.message);
      }
})


main()
.then(()=>{console.log("Db is connected")
    app.listen(5000 , (req , res)=>{
    console.log("Server is listening at port 5000");
})
})
.catch((err)=>{console.log("error" + err.message)})

