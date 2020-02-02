var express = require('express');
var router = express.Router();
const Product = require('../models/product.js')
/* GET home page. */
router.get('/', async (req, res, next) =>{
    res.render('index')
});

router.get('/product', async (req, res, next) =>{
  const product = await Product.find({})
  res.status(200).send(product)
});
module.exports = router;
