const express = require("express");

const app = express();


app.get("/user" , (req, res)=>{
    res.send("hey i am from server thanks for using the GET request");
})

app.post("/contact", (req, res)=>{
    console.log(req.body);
    res.send("ur request is here and data is submitted");
})

app.listen(4000 , ()=>{
    console.log("Server is listening at 4000...");
})


