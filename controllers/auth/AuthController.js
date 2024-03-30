const User = require('../../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Register
exports.register = async (req, res) => {
    try {
        const { full_name, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ full_name, username, password: hashedPassword });
        res.status(201).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
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

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Midleware