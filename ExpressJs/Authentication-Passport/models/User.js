var mongoose = require("mongoose");
var bcrypt = require("bcrypt");
// định nghĩ cấu trúc user model
var userSchema = mongoose.Schema(
	{
		local: {
			username: String,
			email: String,
			password: String
		},
		facebook: {
			id: String,
			token: String,
			email: String,
			name: String
		},
		twitter: {
			id: String,
			token: String,
			displayName: String,
			username: String
		},
		google: {
			id: String,
			token: String,
			email: String,
			name: String
		}
	},
	{ collection: "users" }
);
// phương thực sinh chuỗi hash
userSchema.methods.generateHash = function(password) {
	return bcrypt.hashSync(password, bcrypt.genSaltSync(10), null);
};
// kiểm tra password có hợp lệ không
userSchema.methods.validPassword = function(password) {
	return bcrypt.compareSync(password, this.local.password);
};
module.exports = mongoose.model("User", userSchema);
