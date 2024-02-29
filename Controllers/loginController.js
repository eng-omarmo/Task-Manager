const bcrypt = require('bcrypt');

const jwt = require('jsonwebtoken');

const User = require('../model/userModel');

const loginUser = async (req, res) => {

    const { username, email, password } = req.body;

    try {

        const user = await User.findOne({ $or: [{ username }, { email }] });

        if (!user) {
            return res.status(401).json({ message: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: 'Incorrect password' });
        }

        const token = generateToken(user._id);

        res.status(200).json({ success: true, token });


    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

function generateToken(userId) {
    return jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '1h' });
}


module.exports = loginUser
