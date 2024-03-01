const Task = require("../model/taskModel");
const asyncHandler = require("express-async-handler");

//desc  get specific tasks
//route get :api/tasks
//access private
const getTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  if (!tasks.length) {
    return res
      .status(404)
      .json({ message: `No tasks found for ${req.userId}` });
  }
  res.status(200).json({ tasks });
  console.error("Error getting task:", error);
  res.status(500).json({ message: "Internal Server Error" });
});

//desc Create new task
//route  post: api/tasks
//access private
const createTask = asyncHandler(async (req, res) => {
  const { title, description, dueDate, priority, status } = req.body;
  // Input validation
  if (!title || !description || !dueDate || !priority || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }
  // Create a new task
  const newTask = await Task.create({
    title,
    description,
    dueDate,
    priority,
    status,
    userId: req.userId,
  });
  res.status(201).json({ message: "Task created successfully", task: newTask });
});

//desc  update
//route  Put: api/tasks/:id
//access private
const updateTask = asyncHandler(async (req, res) => {
  const taskId = req.prams.id;
  const { title, description, dueDate, priority, status } = req.body;
  // Input validation
  if (!title || !description || !dueDate || !priority || !status) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const updatedTask = await Task.findByIdAndUpdate(
    taskId,
    {
      title,
      description,
      dueDate,
      priority,
      status,
    },
    {
      new: true,
    }
  );
  if (!updatedTask.length) {
    return res
      .status(404)
      .json({ message: `no task found for this user ${taskId}` });
  }
  return res.status(200).json({ message: "Successfully updated" });
});
//desc  delete
//route  delete: api/tasks/:id
//access private
const deleteTask = asyncHandler(async (req, res) => {
  const deletedTask = await Task.findByIdAndDelete(req.prams.id);
  if (!deletedTask) {
    res.status(404).json({
      message: `No tasks found for this ${req.params.id} to delete`,
    });
  }
  res.status(200).json({ message: `${req.params.id} is deleted successfully` });
});

module.exports = {
  getTask,
  createTask,
  updateTask,
  deleteTask,
};
