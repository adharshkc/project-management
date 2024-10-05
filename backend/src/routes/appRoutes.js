const express = require("express");
const { registerUser, loginUser } = require("../controllers/authController");
const verifyUser = require("../middlewares/verifyUser");
const {
  createProject,
  getProjects,
  getSingleProject,
} = require("../controllers/projectController");
const { createTodo, getTodos } = require("../controllers/TodoController");
const router = express.Router();

router.get("/");

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/projects", verifyUser, createProject);
router.get("/projects", verifyUser, getProjects);
router.get("/project/:projectId", verifyUser, getSingleProject);
router.post("/project/:projectId/todos", verifyUser, createTodo)
router.get("/project/:projectId/todos", verifyUser, getTodos)

module.exports = router;
