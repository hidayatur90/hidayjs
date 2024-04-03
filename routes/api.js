// routes
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const AuthController = require('../controllers/auth/AuthController');
const TokenController = require('../controllers/auth/TokenController');
const authenticateToken = TokenController.authenticateToken;

// Routes Auth
router.post('/auth/register', AuthController.register);
router.post('/auth/login', AuthController.login);
router.post('/auth/logout', AuthController.logout);

// Routes User
router.get('/user', authenticateToken, UserController.index);
router.get('/user/:id', authenticateToken, UserController.show);
router.post('/user', authenticateToken, UserController.store);
router.put('/user/:id', authenticateToken, UserController.update);
router.delete('/user/:id', authenticateToken, UserController.destroy);

module.exports = router;