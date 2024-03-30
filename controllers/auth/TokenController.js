const express = require('express');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// Generate Token
exports.generateAccessToken = (username) => {
    const SECRET_KEY = process.env.SECRET_KEY;
    const expiresIn = 60 * 60 * 1;

    return jwt.sign(username, SECRET_KEY, { expiresIn: expiresIn });
}

// Midleware
exports.authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];

    if (!authHeader) {
        return res.status(401).json({
            message: 'Token needed!'
        });
    }

    const token = authHeader.split(' ')[1];
    const SECRET_KEY = process.env.SECRET_KEY;

    try {
        const jwtDecode = jwt.verify(token, SECRET_KEY);
        req.user = jwtDecode;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Unauthorized!'
        });
    }
};