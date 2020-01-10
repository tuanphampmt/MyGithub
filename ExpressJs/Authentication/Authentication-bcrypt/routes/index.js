var express = require('express');
var router = express.Router();
var User = require('../model/User');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Express'});
});

router.get('/register', function (req, res, next) {
    res.render('register', {title: 'Register'});
});
router.get('/login', function (req, res, next) {
    res.render('login', {title: 'Login'});
});

router.post('/login', function (req, res, next) {
    let logEmail = req.body.logEmail;
    let logPassword = req.body.logPassword;
    // Check password đúng thì đăng nhập thành công, lưu userId vào sesstion
    if (!(logEmail && logPassword)) {
        return next(new Error('Không tồn tại field!!!'));
    } else {
        User.authenticate(logEmail, logPassword)
            .then(user => {
                req.session.userId = user._id;
                return res.redirect('/profile');
            })
            .catch(err => next(err));
    }
});

// router.post('/login', function (req, res, next) {
//     var logEmail = req.body.logEmail;
//     var logPassword = req.body.logPassword;
//     // Check password đúng thì đăng nhập thành công, lưu userId vào sesstion
//     if (!(logEmail && logPassword)) {
//         var err = new Error('Không tồn tại field!!!');
//         err.status = 401;
//         return next(err);
//     } else {
//         User.authenticate(logEmail, logPassword, function (err, user) {
//             if (err || !user) {
//                 var err = new Error('Email hoặc mật khẩu sai!!!');
//                 err.status = 401;
//                 return next(err);
//             } else {
//                 req.session.userId = user._id;
//                 return res.redirect('/profile');
//             }
//         })
//     }
// });
router.post('/register', function (req, res, next) {
    if (req.body.password !== req.body.passwordConfirmation) {
        return next(new Error('Các mật khẩu không khớp!!!'));
    } else if (req.body.email && // đưa thông tin user vào database
        req.body.username &&
        req.body.password) {
        const userData = {
            email: req.body.email,
            username: req.body.username,
            password: req.body.password,
        };
        let data = new User(userData);
        data.save(function (err, user) {
            if (err) {
                return next(new Error('Email hoặc User đã tồn tại!!!'));
            } else {
                req.session.userId = user._id;
                return res.redirect('/profile')
            }
        })
    } else {
        return next(new Error('Không tồn tại field!!!'));
    }
});
router.get('/profile', function (req, res, next) {
    User.find({_id: req.session.userId}, function (err, data) {
        res.render('profile', {dataUser: data})
    })
});

router.get('/logout', function (req, res, next) {
    if (req.session) {
        // delete session.userId
        req.session.destroy(function (err) {
            if (err) {
                return next(err);
            } else {
                return res.redirect('/login');
            }
        });
    }
});


module.exports = router;
