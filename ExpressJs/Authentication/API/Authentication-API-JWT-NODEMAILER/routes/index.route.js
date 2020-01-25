const auth = require("./auth.route");

module.exports = (app) => {
	app.get("/", (req, res) => {
		res.render("index");
	});

	app.use("/api/auth", auth);
};
