const express = require("express");

const app = express();
app.use(express.json());

app.get("/user" , (req, res)=>{
    res.send("hey i am from server thanks for using the GET request here is ur DATA");
})

app.post("/contact", (req, res)=>{
    console.log(req.body);
    res.send("we got ur data and it is submitted");
})

app.listen(4000 , ()=>{
    console.log("Server is listening at 4000...");
})



