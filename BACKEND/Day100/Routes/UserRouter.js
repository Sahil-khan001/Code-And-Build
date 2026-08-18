const express = require('express');
const UserRouter = express.Router();

const auth = require("../Middleware/auth");

UserRouter.get("/info" , auth , async (req , res)=>{
    try{
    res.status(200).send(req.result);

    }catch(err){
        console.log("error " + err.message);
    }

})

module.exports = UserRouter;