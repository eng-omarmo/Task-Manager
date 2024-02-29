const express = require('express')
const verifyToken=require('../middleware/verifyToken')
const route = express.Router()
const { getTasks, createTask, deleteTask, updateTask } = require('../Controllers/TaskController')



route.get('/',verifyToken, getTasks).post('/', verifyToken,createTask)

route.put('/:id',verifyToken, updateTask).delete('/:id',verifyToken, deleteTask)

module.exports = route