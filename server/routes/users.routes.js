const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/authenticate.middleware");

const user = new userController();

router.post("/register", user.register);
router.post("/login", user.login);
router.get("/profile", authenticate, user.userProfile);
router.get("/logout", authenticate, user.logout);

module.exports = router;
