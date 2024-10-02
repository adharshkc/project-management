const express = require("express");
const { registerUser } = require("../controllers/loginController");
const router = express.Router();

router.get("/", );

router.post("/register", registerUser);

module.exports = router;