const express = require('express')

const app = express();

app.use((req, res)=>{
    res.send("hey this message is from server side , hey this is 2nd time , hey this is 3rd time");
})


app.listen(4000 , ()=>{
    console.log("Server is listening at 4000...")
})