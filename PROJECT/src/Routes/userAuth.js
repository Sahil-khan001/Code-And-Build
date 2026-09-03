const express = require('express');
const userRouter = express.Router();
const {register , login , logout , getProfile , adminRegister , deleteProfile} = require('../Controllers/userAuthen');
const auth = require('../middleware/userMiddleware');
const adminMiddleware = require("../middleware/adminMiddleware");
const userMiddleware = require('../middleware/userMiddleware');

userRouter.post('/register' , register);
userRouter.post('/login', login);
userRouter.get('/logout', logout);
userRouter.post('/admin/register' , adminMiddleware , adminRegister);
userRouter.get('/getProfile' , userMiddleware , getProfile);
userRouter.delete('/deleteProfile' , userMiddleware , deleteProfile);

module.exports = userRouter;