const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const TokenController = require('./TokenController');
const BlacklistController = require('./BlacklistController');

// Register
exports.register = async (req, res) => {
    try {
        const { full_name, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const token = TokenController.generateAccessToken({ username: req.body.username });

        const user = await User.create({
            full_name,
            username,
            password: hashedPassword
        });

        res.status(201).json({
            user,
            token: token
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

// Login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username } });

        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid password' });
        }

        const token = TokenController.generateAccessToken({ username: req.body.username });

        res.status(200).json({
            user,
            token: token
        });
    } catch (error) {
        res.status(500).json({
            error: error.message
        });
    }
}

// Logout
exports.logout = async (req, res) => {
    try {
        const authHeader = req.headers['authorization'];
        const token = authHeader.split(' ')[1];
        BlacklistController.blacklistToken(token);
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};