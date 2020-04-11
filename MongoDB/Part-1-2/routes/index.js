var express = require("express");
var router = express.Router();
const Level1 = require("../models/level1");
const Level2 = require("../models/level2");
const Tintuc = require("../models/Tintuc");

/* GET home page. */
router.get("/", function(req, res, next) {
	res.render("index", { title: "Express" });
});

router.get("/level1/:name", function(req, res, next) {
	var level1 = new Level1({
		name: req.params.name,
		kids: []
	});

	level1.save(function(err) {
		if (err) {
			return res.json({ kq: 0 });
		}
		res.json({ kq: 1 });
	});
});
router.get("/level2/:idLevel1/:name", function(req, res, next) {
	var level2 = new Level2({
		name: req.params.name,
		kids: []
	});

	level2.save(function(err) {
		if (err) {
			return res.json({ message: error });
		}
		Level1.findByIdAndUpdate(
			req.params.idLevel1,
			{ $push: { kids: level2._id } },
			function(err) {
				if (err) {
					return res.json({ kq: 0 });
				}
				res.json({ kq: 1 });
			}
		);
	});
});
router.get("/tintuc/:idLevel2/:title/:desc", function(req, res, next) {
	var tintuc = new Tintuc({
		title: req.params.title,
		description: req.params.desc
	});
	tintuc.save(function(err) {
		if (err) {
			return res.json({ message: error });
		}
		Level2.findByIdAndUpdate(
			req.params.idLevel2,
			{ $push: { kids: tintuc._id } },
			function(err) {
				if (err) {
					return res.json({ kq: 0 });
				}
				res.json({ kq: 1 });
			}
		);
	});
});
router.get("/menu", function(req, res, next) {
	Level1.aggregate(
		[
			{
				$lookup: {
					from: "level2",
					localField: "kids",
					foreignField: "_id",
					as: "level2"
				}
			}
		],
		function(err, data) {
			if (err) {
				return res.json({ kq: 0 });
			}
			res.json(data);
		}
	);
});
router.get("/show", async (req, res, next) => {
	var data = await Level1.aggregate([
		{
			$lookup: {
				from: "level2",
				localField: "kids",
				foreignField: "_id",
				as: "level2"
			}
		},
		{
			$unwind: {
				path: "$level2",
				preserveNullAndEmptyArrays: true // optional
			}
		},
		{
			$lookup: {
				from: "tintucs",
				localField: "level2.kids",
				foreignField: "_id",
				as: "level2.tintucs"
			}
		},

		{
			$group: {
				_id: "$_id",
                name: {
					$first: "$name"
				},
				kids: {
					$first: "$kids"
				},
				level2: {
                    $addToSet: "$level2"
                }
			}
		}
	]);

	res.json(data);
});

module.exports = router;
