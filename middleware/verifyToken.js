const jwt = require('jsonwebtoken');

module.exports =  verifyToken = (req, res, next) => {
    // Extract the token from the request headers
    const token = req.header('Authorization');

    // Check if the token exists
    if (!token) {
        return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    try {
        
        const decoded = jwt.verify(token, process.env.JWT_SECRET);


        req.userId = decoded.userId;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token.' });
    }
};

