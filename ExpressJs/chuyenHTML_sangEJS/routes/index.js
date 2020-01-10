var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index.html', function(req, res, next) {
  res.render('index', { title: 'Home' });
});

router.get('/about.html', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/post.html', function(req, res, next) {
  res.render('post', { title: 'Post' });
});

router.get('/contact.html', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});



module.exports = router;
