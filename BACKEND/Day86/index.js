const express = require('express');


const app = express();

app.use("/Home" , (req, res)=>{
    res.send("Home page");
})

app.use("/Abo*t" , (req, res)=>{
    res.send("this is about page");
})

app.use("/Contact/:id" , (req, res)=>{
    console.log(req.params);
    res.send("this is Contact page");
})

app.use("/" , (req, res)=>{
    res.send("this is default page");
})



app.listen(4000 , ()=>{
    console.log("Server is listening at 4000...")
})