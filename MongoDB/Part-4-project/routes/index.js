var express = require("express");
var router = express.Router();
const NewsType = require("../models/newstype");
const News = require("../models/news");
const multer = require("multer");
var pathImages = [];
var storage = multer.diskStorage({
	destination: function(req, file, cb) {
		cb(null, "./upload");
	},
	filename: function(req, file, cb) {
		cb(null, Date.now() + "-" + file.originalname);
	}
});
var upload = multer({ storage: storage });

router.get("/admin/loaitin", function(req, res, next) {
	res.render("adloaitin");
});

router.post("/admin/loaitin", function(req, res, next) {
	var newstype = new NewsType({
		name: req.body.name,
		position: req.body.position,
		kids: []
	});
	newstype.save(function(err) {
		if (err) {
			return res.json({ message: err });
		}
		res.json(newstype);
	});
});
router.get("/admin/tin", async (req, res, next) => {
	var data = await NewsType.find({});
	res.render("adtin", { newstype: data });
});
router.post("/upload", upload.any(), function(req, res, next) {
	res.status(200).send(req.file);
	pathImages.push(req.files[0].path);
});
router.post("/admin/tin", function(req, res, next) {
	var news = new News({
		title: req.body.title,
		summary: req.body.summary,
		content: req.body.content,
		position: req.body.position,
		homepage: req.body.homepage,
		createdAt: new Date(),
		pathImages: pathImages
	});
	news.save(function(err) {
		if (err) {
			return res.json({ message: err });
		}

		NewsType.findByIdAndUpdate(
			req.body.iDnewstype,
			{ $push: { kids: news._id } },
			function(err) {
				if (err) {
					res.json({ message: err });
				}
				res.json("successfully");
			}
		);
	});
});
router.get("/", async (req, res, next) => {
	// var data = await NewsType.find({});
	var data = await NewsType.aggregate([
		{
			$lookup: {
				from: "news",
				localField: "kids",
				foreignField: "_id",
				as: "news"
			}
		}
	]);
	// res.json(newstype)
	res.render("index", { newstype: data});
});
router.get("/World/:id", async (req, res, next) => {
	var arr = []
	var data = await NewsType.find({});
	var dt = await NewsType.findById(req.params.id);
	
	for(var i = 0; i < dt.kids.length; i++) {
		var item = await News.findOne({_id: dt.kids[i]})
		arr.push(item)
	}

	res.render("World", {newstype: data, news: arr });
});
router.get("/Business/:id", async (req, res, next) => {
	var arr = []
	var data = await NewsType.find({});
	var dt = await NewsType.findById(req.params.id);
	
	for(var i = 0; i < dt.kids.length; i++) {
		var item = await News.findOne({_id: dt.kids[i]})
		arr.push(item)
	}

	res.render("Business", {newstype: data, news: arr });
});
router.get("/Health/:id", async (req, res, next) => {
	var arr = []
	var data = await NewsType.find({});
	var dt = await NewsType.findById(req.params.id);
	
	for(var i = 0; i < dt.kids.length; i++) {
		var item = await News.findOne({_id: dt.kids[i]})
		arr.push(item)
	}

	res.render("Health", {newstype: data, news: arr });
});
router.get("/Entertainment/:id", async (req, res, next) => {
	var arr = []
	var data = await NewsType.find({});
	var dt = await NewsType.findById(req.params.id);
	
	for(var i = 0; i < dt.kids.length; i++) {
		var item = await News.findOne({_id: dt.kids[i]})
		arr.push(item)
	}

	res.render("Entertainment", {newstype: data, news: arr });
});
module.exports = router;
