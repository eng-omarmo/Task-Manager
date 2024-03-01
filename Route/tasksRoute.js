const express = require("express")
const verifyToken = require("../middleware/verifyToken")
const route = express.Router()
const {
  getTask,
  createTask,
  deleteTask,
  updateTask,
} = require("../Controllers/TaskController")

route
  .put("/:id", verifyToken, updateTask)
  .delete("/:id", verifyToken, deleteTask)
  .get("/:id", verifyToken, getTask)
  .post("/:id", verifyToken, createTask)

module.exports = route