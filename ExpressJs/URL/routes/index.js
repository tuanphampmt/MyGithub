var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/tuan?pham', function(req, res, next) {  // Dau ? : Truoc dau ? co hoac khong deu duoc
  res.send('Hello');
});

router.get('/hello*world', function(req, res, next) {  // Dấu * : giữa dấu  * có bao nhiêu kí tư đều
  res.send('Hello');
});

module.exports = router;
