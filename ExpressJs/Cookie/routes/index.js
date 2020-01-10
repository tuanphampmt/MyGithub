var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/tuanpham/:id', function(req, res, next) {
  res.cookie('ID', req.params.id);
  res.send('Hello ' + req.params.id);
});
/*
  router.get('/tuanpham/:id', function(req, res, next) {
  res.cookie('ID', req.params.id, {maxAge:9000}); // maxAge:9000 - Thời gian sống
  res.send('Hello ' + req.params.id);
});
 */
router.get('/khachhang', function(req, res, next) {
  res.send('Hello ' + req.cookies.ID);
});

router.get('/xoa', function(req, res, next) {
  res.clearCookie('ID');
  res.send('Da xoa ID roi');
});

module.exports = router;
