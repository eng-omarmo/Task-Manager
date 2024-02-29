const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler}= require('./middleware/ErrorHandler')
const app = express()
const connectDb = require('./db/db')

let Port=process.env.Port || 5000;

connectDb(process.env.Uri);
app.use(express.json())


app.listen(Port, () => {
    console.log(`app is running on Port ${Port}`)
})
app.use(errorHandler)
app.use(express.urlencoded({ extended: true }));


app.use('/api/tasks', require('./Route/tasksRoute'))

app.use('/api/user', require('./Route/UserRoute'))
