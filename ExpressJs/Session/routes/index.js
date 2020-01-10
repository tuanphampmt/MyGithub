var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/taoSession', function(req, res, next) {
  req.session.monan = "Bun mam";
  res.send("Tao Session");
});

router.get('/laySession', function(req, res, next) {
  res.send("Toi muon an " + req.session.monan);
});

router.get('/xoaSession', function(req, res, next) {
  req.session.destroy(function (err) {});
  res.send("Da xoa roi");
});
module.exports = router;
