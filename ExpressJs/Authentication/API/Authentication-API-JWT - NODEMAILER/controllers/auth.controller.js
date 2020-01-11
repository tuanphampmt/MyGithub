const User = require("../models/user.model");

const nodemailer = require("nodemailer");

const Token = require("../models/token.model");

module.exports = {
	index: (req, res) => {
		res.status(200).json({
			message:
				"You are in the Auth Endpoint. Register or Login to test Authentication."
		});
	},
	getRegister: (req, res) => {
		res.render("register");
	},
	postRegister: async (req, res) => {
		try {
			const { email } = req.body;

			// Make sure this account doesn't already exist
			const user = await User.findOne({
				email
			});

			if (user)
				return res.status(401).json({
					message:
						"The email address you have entered is already associated with another account."
				});

			const newUser = new User({
				...req.body,
				role: "basic"
			});

			const user_ = await newUser.save();
			sendEmail(user_, req, res);
			res.status(200).json({
				message: "A verification email has been sent to " + user_.email + "."
			});
		} catch (error) {
			console.log(error);
			res.status(500).json({
				success: false,
				message: error.message
			});
		}
	},
	getLogin: (req, res) => {
		res.render("login");
	},
	postLogin: async (req, res) => {
		try {
			const { email, password } = req.body;

			const user = await User.findOne({
				email
			});

			if (!user)
				return res.status(401).json({
					msg:
						"The email address " +
						email +
						" is not associated with any account. Double-check your email address and try again."
				});

			//validate password
			if (!user.comparePassword(password))
				return res.status(401).json({
					message: "Invalid email or password"
				});

			// Make sure the user has been verified
			if (!user.isVerified)
				return res.status(401).json({
					type: "not-verified",
					message: "Your account has not been verified."
				});

			// Login successful, write token, and send back user
			res.status(200).json({
				token: user.generateJWT(),
				user: user
			});
		} catch (error) {
			res.status(500).json({
				message: error.message
			});
		}
	},
	verify: async (req, res) => {
		if (!req.params.token)
			return res.status(400).json({
				message: "We were unable to find a user for this token."
			});

		try {
			// Find a matching token
			const token = await Token.findOne({
				token: req.params.token
			});

			if (!token)
				return res.status(400).json({
					message:
						"We were unable to find a valid token. Your token my have expired."
				});

			// If we found a token, find a matching user
			const user = await User.findOne({
				_id: token.userId
			});

			if (!user)
				return res.status(400).json({
					message: "We were unable to find a user for this token."
				});

			if (user.isVerified)
				return res.status(400).json({
					message: "This user has already been verified."
				});

			// Verify and save the user
			user.isVerified = true;
			user.save(function(err) {
				if (err)
					return res.status(500).json({
						message: err.message
					});

				res.status(200).send("The account has been verified. Please log in.");
			});
		} catch (error) {
			res.status(500).json({
				message: error.message
			});
		}
	},
	resendToken: async (req, res) => {
		try {
			const { email } = req.body;

			const user = await User.findOne({
				email
			});

			if (!user)
				return res.status(401).json({
					message:
						"The email address " +
						req.body.email +
						" is not associated with any account. Double-check your email address and try again."
				});

			if (user.isVerified)
				return res.status(400).json({
					message: "This account has already been verified. Please log in."
				});

			sendEmail(user, req, res);
		} catch (error) {
			res.status(500).json({
				message: error.message
			});
		}
	}
};

function sendEmail(user, req, res) {
	const token = user.generateVerificationToken();

	// Save the verification token
	token.save(function(err) {
		if (err)
			return res.status(500).json({
				message: err.message
			});

		//Tiến hành gửi mail, nếu có gì đó bạn có thể xử lý trước khi gửi mail
		var transporter = nodemailer.createTransport({
			// config mail server
			host: "smtp.gmail.com",
			port: 465,
			secure: true,
			auth: {
				user: "phamminhtuan31798@gmail.com", //Tài khoản gmail vừa tạo
				pass: "tuanvip12" //Mật khẩu tài khoản gmail vừa tạo
			},
			tls: {
				// do not fail on invalid certs
				rejectUnauthorized: false
			}
		});

		let link = "http://" + req.headers.host + "/api/auth/verify/" + token.token;
		var content = "";
		content += `
							<div style="padding: 10px; background-color: #003375">
								<div style="padding: 10px; background-color: white;">
									<h1 style="color: #0085ff">Hi ${user.username}</h1>
									<p style="color: black">Please click on the following link ${link} to verify your account. \n\n 
									If you did not request this, please ignore this email.\n</p>
								</div>
							</div>
						`;

		var mainOptions = {
			to: user.email,
			from: "phamminhtuan31798@gmail.com",
			subject: "Account Verification Token",
			html: content
		};
		transporter.sendMail(mainOptions, function(err, info) {
			if (error)
				return res.status(500).json({
					message: error.message
				});
		});
	});
}
