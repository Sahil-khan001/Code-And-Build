const express = require('express');
const problemRouter = express.Router();
const  adminMiddleware = require("../middleware/adminMiddleware");

problemRouter.post("/create", adminMiddleware , CreateProblem);
problemRouter.patch("/:id" , adminMiddleware , UpdateProblem);
problemRouter.delete("/:id" ,adminMiddleware , deleteProblem);

problemRouter.get("/:id" , getProblemById);
problemRouter.get("/" , getAllProblem);
problemRouter.get("/user" , solvedAllProblembyUser);

module.exports = problemRouter;

