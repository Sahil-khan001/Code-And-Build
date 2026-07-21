const express = require('express');

const app = express();
app.use(express.json());


app.use("/user" , (req, res , next)=>{
   console.log(`Date is ${Date.now()} Method is ${req.method} Url is ${req.url}`)
    next();
})

app.get("/user" , (req, res)=>{
   res.send("Info is there");
})

app.post("/user" , (req, res)=>{
   res.send("Info is stored");
})

app.put("/user" , (req, res)=>{
   res.send("Info is update");
})

app.delete("/user" , (req, res)=>{
   res.send("Info is delete");
})


app.listen(3000 , (req, res)=>{
   console.log('Server is running at port 3000');
})





