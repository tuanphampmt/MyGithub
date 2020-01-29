const User = require('../models/User');
module.exports = function (app, passport) {
    // =====================================
    // HOME PAGE (Với những link đăng nhập) ========
    // =====================================
    // LOGIN ===============================
    // =====================================
    // Hiển thị form login
    app.get('/login', function (req, res) {
        // Hiển thị trang và truyển lại những tin nhắn từ phía server nếu có
        res.render('login.ejs', {message: req.flash('loginMessage')});
    });
    // Xử lý thông tin khi có người thực hiện đăng nhập
    // passport.authenticate: middleware giúp ta gắn kịch bản local vào route.
    app.post('/login', passport.authenticate('local-login', {
        successRedirect: '/profile',
        failureRedirect: '/',
        failureFlash: true
    }));

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // Hiển thị trang đăng ký
    app.get('/register', function (req, res) {
        res.render('register', {message: req.flash('signupMessage')});
    });
    // Xử lý thông tin khi có người đăng ký
    // passport.authenticate: middleware giúp ta gắn kịch bản local vào route.
    app.post('/register', passport.authenticate('local-signup', {
        successRedirect: '/profile', // chuyển hướng tới trang được bảo vệ
        failureRedirect: '/', // trở lại trang đăng ký nếu có lỗi
        failureFlash: true // allow flash messages
    }));

    // =====================================
    // GOOGLE ROUTES =======================
    // =====================================
    // Gửi đến google để thực hiện xác thực
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));
    // the callback after google has authenticated the user
    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));

    // FACEBOOK ROUTES =====================
    // =====================================
    // yêu cầu xác thực bằng facebook
    app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));
    // xử lý sau khi user cho phép xác thực với facebook
    app.get('/auth/facebook/callback',
        passport.authenticate('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        })
    );


    // =============================================================================
// AUTHORIZE (ALREADY LOGGED IN / CONNECTING OTHER SOCIAL ACCOUNT) =============
// =============================================================================
    // locally --------------------------------
    app.get('/connect/local', function (req, res) {
        res.render('connect-local.ejs', {message: req.flash('loginMessage')});
    });
    app.post('/connect/local', passport.authenticate('local-signup', {
        successRedirect: '/profile', // redirect to the secure profile section
        failureRedirect: '/connect/local', // redirect back to the signup page if there is an error
        failureFlash: true // allow flash messages
    }));
    // facebook -------------------------------
    // send to facebook to do the authentication
    app.get('/connect/facebook', passport.authorize('facebook', {scope: 'email'}));
    // handle the callback after facebook has authorized the user
    app.get('/connect/facebook/callback',
        passport.authorize('facebook', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));

    // google ---------------------------------
    // send to google to do the authentication
    app.get('/connect/google', passport.authorize('google', {scope: ['profile', 'email']}));
    // the callback after google has authorized the user
    app.get('/connect/google/callback',
        passport.authorize('google', {
            successRedirect: '/profile',
            failureRedirect: '/'
        }));


    // local -----------------------------------
    app.get('/unlink/local', function (req, res) {
        var user = req.user;
        user.local.email = undefined;
        user.local.password = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

    // facebook -------------------------------
    app.get('/unlink/facebook', function (req, res) {
        var user = req.user;
        user.facebook.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });

    // google ---------------------------------
    app.get('/unlink/google', (req, res) => {
        var user = req.user;
        user.google.token = undefined;
        user.save(function (err) {
            res.redirect('/profile');
        });
    });
    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // Đây là trang sẽ được bảo vệ, chỉ những người đã đăng nhập mới có thể xem được
    // Chúng ta sẽ sử dụng route middleware để kiểm tra xem người đó đã đăng nhập chưa
    // hàm isLoggedIn sẽ làm việc đó.
    app.get('/profile', checkAuthenticated, function (req, res) {
        res.render('profile.ejs', {
            user: req.user // Lấy thông tin user trong session và truyền nó qua template
        });
    });
    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function (req, res) {
        req.logout();
        res.redirect('/login');
    });
};

// route middleware để kiểm tra một user đã đăng nhập hay chưa?
function checkAuthenticated(req, res, next) {
    // Nếu một user đã xác thực, cho đi tiếp
    if (req.isAuthenticated())
        return next();
    // Nếu chưa, đưa về trang chủ
    res.redirect('/');
}
