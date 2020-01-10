var express = require('express');
var router = express.Router();
var nguoidungModel = require('../model/nguoidung');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/xem', function (req, res, next) {
    nguoidungModel.find({}, function (err, dulieu) {
        if (err) {
            console.log(err);
        }
        res.render('xem', {title: 'Xem dữ liệu', data: dulieu});
    })
});
router.get('/xoa/:idDel', function (req, res, next) {
    var idDel = req.params.idDel;
    nguoidungModel.findByIdAndRemove(idDel).exec();
    res.redirect('/xem');
});

router.get('/sua/:idEdit', function (req, res, next) {
    var idEdit = req.params.idEdit;
    nguoidungModel.find({_id: idEdit}, function (err, dulieu) {
        if (err) {
            console.log(err);
        }
        res.render('sua', {title: 'Sửa mới dữ liệu ', dataEdit: dulieu});
    })
});

router.post('/sua/:idEdit', function (req, res, next) {
    var idEdit = req.params.idEdit;
    var dataNam_Age = {
        "name": req.body.name,
        "age": req.body.age
    };
    nguoidungModel.updateOne({ _id: idEdit}, { $set: dataNam_Age }, function (err, doc) {
        if (err){
            console.log(err);
        }
        res.redirect('/xem');
    });
});
router.get('/them', function (req, res, next) {
    res.render('them', {title: 'Thêm mới dữ liệu'});
});

router.post('/them', function (req, res, next) {
    var dataName_Age = {
        "name": req.body.name,
        "age": req.body.age
    };
    var data = new nguoidungModel(dataName_Age);
    data.save();
    res.redirect('/xem');
});


module.exports = router;
