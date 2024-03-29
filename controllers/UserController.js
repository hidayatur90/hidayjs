// Import model
const User = require('../models/user');

// Show all users
exports.showUser = async (req, res) => {
    try {
        const users = await User.findAll();

        return res.status(200).json({
            users,
            message: 'Get all users data successfully!'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Server Error!'
        });
    }
};