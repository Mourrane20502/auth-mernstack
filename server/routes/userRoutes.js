const express = require("express");
const { getDashboard } = require("../controller/dashboardController");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.get("/", verifyToken, getDashboard);

module.exports = router;
