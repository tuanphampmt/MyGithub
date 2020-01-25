const User = require("../models/user.model");

const nodemailer = require("nodemailer");

//Tiến hành gửi mail, nếu có gì đó bạn có thể xử lý trước khi gửi mail
var transporter = nodemailer.createTransport({
	// config mail server
	service: 'gmail',
	host: "smtp.gmail.com",
	secure: true,
	auth: {
		user: process.env.NODEMAILER_USER, //Tài khoản gmail vừa tạo
		pass: process.env.NODEMAILER_PW //Mật khẩu tài khoản gmail vừa tạo
	},
	tls: {
		// do not fail on invalid certs
		rejectUnauthorized: false
	}
});

module.exports = {
	getRecover: (req, res) => {
		res.render("recover");
	},
	postRecover: async (req, res) => {
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
			// If sVerified === false	
			if (!user.isVerified)
				return res.status(401).json({
					type: "not-verified",
					message: "Your account has not been verified."
				});	
			//Generate and set password reset token
			user.generatePasswordReset();

			// Save the updated user object
			await user.save();
			let link =
				"https://authentication-api-jwt-mailer.herokuapp.com/api/auth/reset/" + user.resetPasswordToken;
			var content = "";
			content += `
							<div style="padding: 10px; background-color: #003375">
								<div style="padding: 10px; background-color: white;">
									<h1 style="color: #0085ff">Hi ${user.username}</h1>
									<p style="color: black">Please click on the following link ${link} to reset your password. \n\n 
									If you did not request this, please ignore this email and your password will remain unchanged.\n</p>
								</div>
							</div>
						`;
			var mainOptions = {
				to: user.email,
				from: process.env.NODEMAILER_USER,
				subject: "Password change request",
				html: content
			};
			transporter.sendMail(mainOptions, function(err, info) {
				if (err)
					return res.status(500).json({
						message: err.message
					});
				res.status(200).json({
					message: "A reset email has been sent to " + user.email + "."
				});
			});
		} catch (error) {
			res.status(500).json({
				message: error.message
			});
		}
	},

	getReset: async (req, res) => {
		try {
			const { token } = req.params;

			const user = await User.findOne({
				resetPasswordToken: token,
				resetPasswordExpires: {
					$gt: Date.now()
				}
			});

			if (!user)
				return res.status(401).json({
					message: "Password reset token is invalid or has expired."
				});

			//Redirect user to form with the email address
			res.render("reset", {
				user: user
			});
		} catch (error) {
			res.status(500).json({
				message: error.message
			});
		}
	},

	postReset: async (req, res) => {
		try {
			const user = await User.findOne({
				resetPasswordToken: req.params.token,
				resetPasswordExpires: {
					$gt: Date.now()
				}
			});
			if (!user)
				return res.status(401).json({
					message: "Password reset token is invalid or has expired."
				});

			//Set the new password
			user.password = req.body.password;
			user.resetPasswordToken = undefined;
			user.resetPasswordExpires = undefined;
			user.isVerified = true;

			// Save
			await user.save();
			var content = "";
			content += `
							<div style="padding: 10px; background-color: #003375">
								<div style="padding: 10px; background-color: white;">
									<h1 style="color: #0085ff">Hi ${user.username}</h1>
									<p style="color: black">
									This is a confirmation that the password for your account ${user.email} has just been changed.\n</p>
								</div>
							</div>
						`;
			var mainOptions = {
				to: user.email,
				from: process.env.NODEMAILER_USER,
				subject: "Your password has been changed",
				html: content
			};
			transporter.sendMail(mainOptions, function(err, info) {
				if (err)
					return res.status(500).json({
						message: err.message
					});
				res.status(200).json({
					message: "Your password has been updated."
				});
			});
		} catch (error) {
			res.status(500).json({
				message: error.message
			});
		}
	}
};
