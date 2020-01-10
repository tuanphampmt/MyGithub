var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function(req, res, next) {
  var tieude = req.body.tdsp;
  res.send("Tieu de la " + tieude); // hien thi bien tieu de la undefined vi co enctype
});
module.exports = router;
