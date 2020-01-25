const express = require("express");
const { check } = require("express-validator");

const Auth = require("../controllers/auth.controller");
const Password = require("../controllers/password.controller");
const validate = require("../middlewares/validate.middleware");

const router = express.Router();

router.get("/", Auth.index);
router.get("/register", Auth.getRegister);
router.post(
	"/register",
	[
		check("email")
			.isEmail()
			.withMessage("Enter a valid email address"),
		check("username")
			.not()
			.isEmpty()
			.withMessage("You username is required"),
		check("password")
			.not()
			.isEmpty()
			.isLength({ min: 6 })
			.withMessage("Must be at least 6 chars long"),
		check("firstName")
			.not()
			.isEmpty()
			.withMessage("You first name is required"),
		check("lastName")
			.not()
			.isEmpty()
			.withMessage("You last name is required")
	],
	validate,
	Auth.postRegister
);
router.get("/login", Auth.getLogin);
router.post(
	"/login",
	[
		check("email")
			.isEmail()
			.withMessage("Enter a valid email address"),
		check("password")
			.not()
			.isEmpty()
	],
	validate,
	Auth.postLogin
);

//EMAIL Verification
router.get("/verify/:token", Auth.verify);

// RESEND TOKEN
router.get("/resend", Auth.getResendToken);
router.post("/resend", Auth.postResendToken);

//Password RESET
router.get("/recover", Password.getRecover);
router.post(
	"/recover",
	[
		check("email")
			.isEmail()
			.withMessage("Enter a valid email address")
	],
	validate,
	Password.postRecover
);

router.get("/reset/:token", Password.getReset);

router.post(
	"/reset/:token",
	[
		check("password")
			.not()
			.isEmpty()
			.isLength({ min: 6 })
			.withMessage("Must be at least 6 chars long"),
		check("confirmPassword", "Passwords do not match").custom(
			(value, { req }) => value === req.body.password
		)
	],
	validate,
	Password.postReset
);

module.exports = router;
