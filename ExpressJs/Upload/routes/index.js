var express = require('express');
var router = express.Router();
var multer = require('multer');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/public/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname)
    }
});

// Check upload
function checkFileUpload(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|png|gif|jpeg)$/)) {
        cb(new Error('Ban hay upload file anh'));
    } else {
        cb(null, true);
    }
}
var upload = multer({storage: storage, fileFilter: checkFileUpload});
/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});
router.post('/', upload.single('anhsp'), function (req, res, next) {
    var tieude = req.body.tdsp;
    res.send("Hello " + tieude)
});
module.exports = router;
