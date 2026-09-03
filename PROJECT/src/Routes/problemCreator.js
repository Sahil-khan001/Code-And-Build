const express = require('express');
const problemRouter = express.Router();
const  adminMiddleware = require("../middleware/adminMiddleware");
const {CreateProblem, UpdateProblem , DeleteProblem , getProblemById , getAllProblem , solvedAllProblembyUser , submittedProblem} = require("../Controllers/userProblem");
const userMiddleware = require("../middleware/userMiddleware");
const submitCodeRateLimiter = require("../middleware/userRateLimiter");


problemRouter.post("/create", adminMiddleware , CreateProblem);
problemRouter.put("/update/:id" , adminMiddleware , UpdateProblem);
problemRouter.delete("/delete/:id" ,adminMiddleware , DeleteProblem);

problemRouter.get("/problemById/:id" ,userMiddleware, getProblemById);
problemRouter.get("/getAllProblem" ,userMiddleware, getAllProblem);
problemRouter.get("/problemSolvedByUser", userMiddleware , solvedAllProblembyUser);
problemRouter.get("/submittedProblem/:id",  userMiddleware ,submitCodeRateLimiter, submittedProblem);

module.exports = problemRouter;


