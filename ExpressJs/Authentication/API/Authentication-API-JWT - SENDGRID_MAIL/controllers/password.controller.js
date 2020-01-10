const User = require("../models/user.model");

const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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

			//Generate and set password reset token
			user.generatePasswordReset();

			// Save the updated user object
			await user.save();
			// send email
			let link =
				"http://" +
				req.headers.host +
				"/api/auth/reset/" +
				user.resetPasswordToken;
			const mailOptions = {
				to: user.email,
				from: process.env.FROM_EMAIL,
				subject: "Password change request",
				text: `Hi ${user.username} \n 
                        Please click on the following link ${link} to reset your password. \n\n 
                        If you did not request this, please ignore this email and your password will remain unchanged.\n`
			};

			sgMail.send(mailOptions, (error, result) => {
				if (error)
					return res.status(500).json({
						message: error.message
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

			// send email
			const mailOptions = {
				to: user.email,
				from: process.env.FROM_EMAIL,
				subject: "Your password has been changed",
				text: `Hi ${user.username} \n 
							This is a confirmation that the password for your account ${user.email} has just been changed.\n`
			};

			sgMail.send(mailOptions, (error, result) => {
				if (error)
					return res.status(500).json({
						message: error.message
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
