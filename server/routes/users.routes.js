const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");

const user = new userController();

router.post("/register", user.register)
router.post("/login", user.login)
router.post("/logout", user.logout)

module.exports = router;
