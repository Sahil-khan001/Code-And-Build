const express = require('express');

const app = express();

app.use('/user' , (req , res)=>{
    
    res.send('hey thanks for the request ur data is here')
})



app.listen(3000 , (req, res)=>{
    console.log('Server is running at port 3000');
})