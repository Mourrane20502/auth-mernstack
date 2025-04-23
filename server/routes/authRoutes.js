const express = require("express");
const router = express.Router();

const { Register, Login, GetUser } = require("../controller/authController");

router.route("/register").post(Register);
router.route("/login").post(Login);
router.route("/user").get(GetUser);

module.exports = router;
