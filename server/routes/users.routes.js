const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

const user = new userController();

router.post("/register", user.register)

module.exports = router;
