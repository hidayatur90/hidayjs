// routes
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// Routes User
router.get('/user', UserController.showUser);


module.exports = router;