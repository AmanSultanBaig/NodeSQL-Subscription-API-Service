const express = require("express");
const router = express.Router();

router.use("/api", require("./users.routes"));

module.exports = router;