var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/tin-tuc', function(req, res, next) {
  res.render('tin-tuc', { title: 'Tin ' });
});

router.get('/tuanpham', function(req, res, next) {
  var data = { name: ["Tuan", "Vu", "Nguyen"]};
  res.render('tuanpham', { danhsach: data});
});



module.exports = router;
