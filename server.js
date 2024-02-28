const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const connectdb  = require('./db/db')
const Port = 5000 || process.env.Port

app.listen(Port, () => {
    console.log(`app is running on Port ${Port}`)
})

connectdb(process.env.Uri);
app.use(express.json())

app.use(express.urlencoded({ extended: true }));


app.use('/api/tasks', require('./Route/tasksRoute'))

app.use('/api/user', require('./Route/UserRoute'))
