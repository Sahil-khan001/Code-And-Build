const express = require('express');
const problemRouter = express.Router();
const  adminMiddleware = require("../middleware/adminMiddleware");
const {CreateProblem, UpdateProblem , DeleteProblem , getProblemById , getAllProblem , solvedAllProblembyUser} = require("../Controllers/userProblem");
const userMiddleware = require("../middleware/userMiddleware");

problemRouter.post("/create", adminMiddleware , CreateProblem);
problemRouter.put("/update/:id" , adminMiddleware , UpdateProblem);
problemRouter.delete("/delete/:id" ,adminMiddleware , DeleteProblem);

problemRouter.get("/problemById/:id" ,userMiddleware, getProblemById);
problemRouter.get("/getAllProblem" ,userMiddleware, getAllProblem);
problemRouter.get("/problemSolvedByUser", userMiddleware , solvedAllProblembyUser);

module.exports = problemRouter;


