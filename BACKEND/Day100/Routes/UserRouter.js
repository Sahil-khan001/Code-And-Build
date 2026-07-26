const express = require('express');
const User = require('../Model/collection');
const auth = require('../middleware/auth')
const jwt = require('jsonwebtoken');

const UserRouter = express.Router();


UserRouter.get("/info" ,auth , async (req , res)=>{
try{
    res.status(200).send(req.result);
}catch(err){
    console.log("Error " + err.message)
}
})

module.exports = UserRouter;