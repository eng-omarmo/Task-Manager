const express = require('express');
const dotenv = require('dotenv').config();
const { errorHandler } = require('./middleware/ErrorHandler');
// const verifyToken = require('./middleware/verifyToken');
const app = express();

const connectDb = require('./db/db');

let Port = process.env.Port || 5000;

connectDb(process.env.Uri);
app.use(express.json());

app.listen(Port, () => {
    console.log(`app is running on Port ${Port}`);
});

// Error handler middleware
app.use(errorHandler);

// // Verify token middleware
// app.use(verifyToken);

app.use(express.urlencoded({ extended: true }));

// Routes requiring authentication
app.use('/api/tasks', require('./Route/tasksRoute'));
app.use('/api/user', require('./Route/UserRoute'));

// Login route (does not require authentication)
app.use('/api/login',require('./Route/loginRoute'));
