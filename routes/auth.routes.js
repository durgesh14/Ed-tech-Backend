const express = require("express");
const router = express.Router();

const AuthController = require("../api/auth/auth.controller");

//Register user
router.post("/register", AuthController.registerUser);

//Login user
router.post("/login", AuthController.loginUser);

module.exports = router;
