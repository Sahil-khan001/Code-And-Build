const express = require('express');
const UserRouter = express.Router();
const User = require('../Model/Schema');
const auth = require('../middleware/auth');

UserRouter.get('/info' ,auth , async (req , res)=>{
    try{
        res.status(200).send(req.result);
    }catch(err){
        console.log("Error" , err.message);
    }
})

UserRouter.delete('/delete' ,auth , async (req , res)=>{
    try{
   await User.deleteOne({email : req.body.email});
   res.status(200).send("Deleted Successfully");
}catch(err){
    console.log("Error" + err.message);
}


})

module.exports = UserRouter;
