const express = require('express');
const problemRouter = express.Router();
const  adminMiddleware = require("../middleware/adminMiddleware");
const CreateProblem = require("../Controllers/userProblem");

problemRouter.post("/create", adminMiddleware , CreateProblem);
problemRouter.patch("/update/:id" , adminMiddleware , UpdateProblem);
problemRouter.delete("/delete/:id" ,adminMiddleware , deleteProblem);

problemRouter.get("/problemById/:id" , getProblemById);
problemRouter.get("/getAllProblem" , getAllProblem);
problemRouter.get("/problemSolvedByUser" , solvedAllProblembyUser);

module.exports = problemRouter;

