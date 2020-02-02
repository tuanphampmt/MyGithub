var express = require('express');
var router = express.Router();
const Product = require('../models/product.js')
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/product', function(req, res, next) {
  res.render('product', { title: 'Express' });
});

router.get('/ajaxcall',async function(req, res, next) {
  
  const product = await Product.find({})

  console.log(product)
  res.status(200).send(product)
});
module.exports = router;
