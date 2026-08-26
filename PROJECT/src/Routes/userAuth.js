const express = require('express');
const userRouter = express.Router();
const {register , login , logout , getProfile , adminRegister} = require('../Controllers/userAuthen');
const auth = require('../middleware/auth');
const adminMiddleware = require("../middleware/adminMiddleware");

userRouter.post('/register' , register);
userRouter.post('/login', login);
userRouter.get('/logout', logout);
userRouter.post('/admin/register' , adminMiddleware , adminRegister);
userRouter.get('/getProfile' , auth , getProfile);

module.exports = userRouter;