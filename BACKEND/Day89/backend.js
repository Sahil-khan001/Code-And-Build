const express = require('express');

const app = express();
app.use(express.json());

// app.use('/user' , (req , res , next)=>{
//     console.log("first");
//     next();
// })
// app.use('/user' , (req , res , next)=>{
//     console.log("second");
//     next();
   
// })
// app.use("/user" , (req , res)=>{
//     console.log("third");
//     res.send('hey thanks for the request i am third');
// })




app.listen(3000 , (req, res)=>{
    console.log('Server is running at port 3000');
})





