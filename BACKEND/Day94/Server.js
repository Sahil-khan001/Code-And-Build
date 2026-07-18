const express = require('express');
const main = require('./mongodatabase');
const User = require('./Model/BookStore');


const app = express();
app.use(express.json());

app.get("/info" , async (req , res)=>{
    const info = await User.find({});
    res.send(info);
})

app.post("/info" , async (req, res)=>{
   try{
    await User.create(req.body);
    res.status(201).send("Successfully saved in Db");

}catch(err){
     res.status(500).send("error is there");
}
})



main()
.then(()=>{console.log("Connected with Db")
app.listen(5000 , (req , res)=>{
console.log("Server Listening at port 3000");
})
})
.catch((err)=>{console.log(err)});



