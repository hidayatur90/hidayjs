// Import model
const User = require('../models/user');
const bcrypt = require('bcryptjs');

// Display a listing of the resource.
exports.index = async (req, res) => {
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

// Store a newly created resource in storage.
exports.store = async (req, res) => {
    try {
        const { full_name, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({
            full_name,
            username,
            password: hashedPassword
        });

        return res.status(201).json({
            user,
            message: 'User created successfully!'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Server Error!'
        });
    }
};

// Display the specified resource.
exports.show = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found!'
            });
        }

        return res.status(200).json({
            user,
            message: `Get data user id ${id} successfully!`
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Server Error!'
        });
    }
};

// Update the specified resource in storage.
exports.update = async (req, res) => {
    try {
        const { id } = req.params;
        const { full_name, username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found!'
            });
        }

        const updatedUser = await user.update({
            full_name,
            username,
            password: hashedPassword
        });

        return res.status(200).json({
            updatedUser,
            message: 'User updated successfully'
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            message: 'Server Error!'
        });
    }
};

// Remove the specified resource from storage.
exports.destroy = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByPk(id);

        if (!user) {
            return res.status(404).json({
                message: 'User not found!'
            });
        }

        await user.destroy();
        return res.json({
            message: `Success delete user with id : ${id}`
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: 'Server Error!' });
    }
};