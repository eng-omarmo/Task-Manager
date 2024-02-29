const express = require('express');
const loginUser = require('../Controllers/loginController');
const router = express.Router();

// Define the POST route for login
router.post('/', loginUser);

// Export the router instance
module.exports = router;
