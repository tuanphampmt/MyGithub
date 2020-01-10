var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/index.html', function (req, res, next) {
    res.render('index', {title: 'Trang ch'});
});

router.get('/chi-tiet-san-pham/*.:IdProduct', function (req, res, next) {
    var idsp = req.params.IdProduct;
    if (!req.session.watchedProduct) {
        req.session.watchedProduct = [];
    }
    if (req.session.watchedProduct.indexOf(idsp)===-1) {
        req.session.watchedProduct.push(idsp);
    }
    res.render('chi-tiet-san-pham', {IdProduct: req.params.IdProduct, danhsach: req.session.watchedProduct});
});

router.get('/ds', function (req, res, next) {
    res.render('ds', {danhsach: req.session.watchedProduct});
});

module.exports = router;
