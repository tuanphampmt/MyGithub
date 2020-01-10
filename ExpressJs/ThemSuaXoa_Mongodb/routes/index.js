var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');
const url = 'mongodb://localhost:27017';
const dbName = 'contact';

router.get('/them', function (req, res, next) {
    res.render('them', {title: 'Thêm mới dữ liệu'});
});

router.post('/them', function (req, res, next) {
    var dataName_Phone = {
        "Name": req.body.name,
        "Phone": req.body.phone
    };

    const insertDocuments = function (db, callback) {
        const collection = db.collection('nguoidung');
        collection.insert(dataName_Phone, function (err, result) {
            assert.equal(err, null);
            console.log("Hello World");
            callback(result);
        });
    };

    MongoClient.connect(url, function (err, client) {
        assert.equal(null, err);
        const db = client.db(dbName);
        insertDocuments(db, function () {
            res.redirect('/them');
            client.close();
        });
    });
});

router.get('/xem', function (req, res, next) {
    const findDocuments = function (db, callback) {
        const collection = db.collection('nguoidung');
        collection.find({}).toArray(function (err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    };
    MongoClient.connect(
        url,
        {useNewUrlParser: true, useUnifiedTopology: true},
        (err, client) => {
            assert.equal(null, err);
            const db = client.db(dbName);
            findDocuments(db, function (dulieu) {
                res.render('xem', {title: 'Xem dữ liệu', data: dulieu});
                client.close();
            });
        }
    );
});
var moveObjectId = require('mongodb').ObjectID;
router.get('/xoa/:idDel', function (req, res, next) {
    var idDel = moveObjectId(req.params.idDel);

    const removeDocument = function (db, callback) {
        const collection = db.collection('nguoidung');

        collection.deleteOne({_id: idDel}, function (err, result) {
            assert.equal(err, null);
            callback(result);
        });
    };
    MongoClient.connect(
        url,
        {useNewUrlParser: true, useUnifiedTopology: true},
        (err, client) => {
            assert.equal(null, err);
            const db = client.db(dbName);
            removeDocument(db, function () {
                res.redirect('/xem');
                client.close();
            });
        }
    );

});
router.get('/sua/:idRepair', function (req, res, next) {
    var idRepair = moveObjectId(req.params.idRepair);

    const findDocuments = function (db, callback) {
        const collection = db.collection('nguoidung');

        collection.find({_id: idRepair}).toArray(function (err, docs) {
            assert.equal(err, null);
            callback(docs);
        });
    };

    MongoClient.connect(
        url,
        {useNewUrlParser: true, useUnifiedTopology: true},
        (err, client) => {
            assert.equal(null, err);
            const db = client.db(dbName);
            findDocuments(db, function (dulieu) {
                res.render('sua', {title: 'Sửa mới dữ liệu', dataEdit: dulieu});
                client.close();
            });
        }
    );
});

router.post('/sua/:idRepair', function (req, res, next) {
    var idRepair = moveObjectId(req.params.idRepair);
    var dataName_Phone = {
        "Name": req.body.name,
        "Phone": req.body.phone
    };

    const updateDocument = function (db, callback) {
        const collection = db.collection('nguoidung');

        collection.updateOne({_id: idRepair}
            , {$set: dataName_Phone}, function (err, result) {
                assert.equal(err, null);
                callback(result);
            });
    };

    MongoClient.connect(
        url,
        {useNewUrlParser: true, useUnifiedTopology: true},
        (err, client) => {
            assert.equal(null, err);
            const db = client.db(dbName);
            updateDocument(db, function () {
                res.redirect('/xem');
                client.close();
            });
        }
    );
});
module.exports = router;
