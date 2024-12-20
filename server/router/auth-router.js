const express = require("express");
const router = express.Router();
const authcontollers = require("../controllers/auth-controller");
const validate = require("../middleWare/validate-middleware");
const signupSchema = require("../validators/auth-validator");

router.route("/").get(authcontollers.home);
router.route("/register").post(validate(signupSchema), authcontollers.register);
router.route("/login").post(authcontollers.login);

module.exports = router;
