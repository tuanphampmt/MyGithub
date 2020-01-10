var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/page1', function(req, res, next) {
  res.render('page1', { title: 'PAGE 1' });
});



module.exports = router;
