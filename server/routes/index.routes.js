const express = require("express");
const router = express.Router();

router.use("/api", require("./users.routes"));
router.use("/api", require("./subscription.routes"));

module.exports = router;