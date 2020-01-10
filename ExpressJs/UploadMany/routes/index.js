var express = require('express');
var router = express.Router();
var userModel = require('../model/thaotac');

var images = [];
var multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './upload')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

var upload = multer({storage: storage});
router.post('/upload', upload.any(), function (req, res, next) {
    res.status(200).send(req.files);
    images.push(req.files[0].path);
});

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'})
});

router.post('/uploadProduct', function (req, res, next) {
    var dataProduct = {
        'nameProduct':req.body.nameProduct,
        'priceProduct':req.body.priceProduct,
        'pathImages':images
    };
   // console.log(images);
    console.log(dataProduct);
    var data = new userModel(dataProduct);
    data.save();
    res.send('Up anh cong roi')
});
router.get('/xem', function (req, res, next) {
    userModel.find({}, function (err, dulieu) {
        if (err) {
            console.log(err);
        }
        res.render('xem', {title: 'Xem dữ liệu', data: dulieu});
    })
});

module.exports = router;
