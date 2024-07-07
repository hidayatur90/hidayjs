// routes
const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");
const AuthController = require("../controllers/auth/AuthController");
const TokenController = require("../controllers/auth/TokenController");
const authenticateToken = TokenController.authenticateToken;

// Routes Auth
router.post("/auth/register", AuthController.register);
router.post("/auth/login", AuthController.login);
router.post("/auth/logout", AuthController.logout);

// Routes User
router.use(authenticateToken);
router.get("/user", UserController.index);
router.get("/user/:id", UserController.show);
router.post("/user", UserController.store);
router.put("/user/:id", UserController.update);
router.delete("/user/:id", UserController.destroy);

module.exports = router;
