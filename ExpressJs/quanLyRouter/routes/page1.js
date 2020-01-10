var express = require('express');
var router = express.Router();

router.get('/mot.pmt', function(req, res, next) {
    res.render('mot', { title: 'MOT' });
});

router.get('/hai.pmt', function(req, res, next) {
    res.render('hai', { title: 'HAI' });
});



module.exports = router;