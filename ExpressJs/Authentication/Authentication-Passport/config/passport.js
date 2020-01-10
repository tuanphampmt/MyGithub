const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const configAuth = require('./auth.js');
const User = require('../models/User');
module.exports = function (passport) {
    const authenticateUserSignUp = async (req, email, password, done) => {
        try {
            // Tìm một user theo email và lưu vào biến user
            const user = await User.findOne({'local.email': email});
            // chúng ta kiểm tra xem user đã tồn tại hay không
            if (user) {
                return done(null, false, req.flash('signupMessage', 'Email dã tồn tại!!.'));
            }
            if (req.body.password !== req.body.passwordConf) {
                return done(null, false, req.flash('signupMessage', 'Hai mật Khẩu không khớp!!'))
            }
            // Nếu chưa user nào sử dụng email này
            // tạo mới user
            var newUser = new User();
            // lưu thông tin cho tài khoản local
            newUser.local.email = email;
            newUser.local.password = newUser.generateHash(password);
            // lưu user
            await newUser.save();
            // Nếu tất cả đều thoả yêu cầu thì cho user đăng ký
            done(null, newUser);
        } catch (e) {
            console.log(e);
            done(e, false);
        }


    };
    const authenticateUserLogin = async (req, email, password, done) => { // callback với email và password từ html form
        try {
            // Tìm một user theo email và lưu vào biến user
            const user = await User.findOne({'local.email': email});
            // Kiểm tra password trong database với password lấy từ form và lưu kết quả vào biến
            // Nếu không tìm thấy user thì thông báo
            if (!user)
                return done(null, false, req.flash('loginMessage', 'Không tìm thấy email!!'));
            // Nếu kiểm tra password không hợp lệ thì thông báo
            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', 'Mật khẩu sai!!')); // thông báo lỗi chỉ này chỉ dùng khi dev
            // Nếu tất cả đều thoả yêu cầu thì cho user đăng nhập
            done(null, user);
        } catch (e) {
            console.log(e);
            done(e, false)
        }
    };

    const authenticateUserGoogle = async (token , refreshToken, profile, done) => {
        try {
            // tìm trong db xem có user nào đã sử dụng google id này chưa
            const user = await User.findOne({'google.id': profile.id});
            // Nếu tìm thấy user thì cho phép đăng nhập
            if(user){
                return done(null, user);
            }
            // Nếu người dùng không có trong db, hãy tạo một user mới
            var newUser = new User();
            // Thêm các thông tin vào newUser
            newUser.google.id = profile.id;
            newUser.google.token = token;
            newUser.google.name = profile.displayName;
            newUser.google.email = profile.emails[0].value;
            // lưu user
            await newUser.save();
            // Nếu tất cả đều thoả yêu cầu thì cho user đăng ký
            done(null, newUser);
        } catch (e) {
            console.log(e);
            done(e, false)
        }

    };
    // Hàm được gọi khi xác thực thành công để lưu thông tin user vào session
    passport.serializeUser((user, done) => done(null, user.id));
    // Hàm được gọi bởi passport.session. Giúp ta lấy dữ liệu user dựa vào thông tin lưu trên session và gắn vào req.user
    passport.deserializeUser(async (id, done) => {
            const user = await User.findById(id);
            done(null, user)
        }
    );

    // LOCAL SIGNUP ============================================================
    passport.use('local-signup', new LocalStrategy({
        // mặc định local strategy sử dụng username và password,
        // chúng ta cần cấu hình lại
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true // cho phép chúng ta gửi reqest lại hàm callback
    }, authenticateUserSignUp));

    // LOCAL LOGIN =============================================================
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    }, authenticateUserLogin));

    passport.use(new GoogleStrategy({
        clientID: configAuth.googleAuth.clientID,
        clientSecret: configAuth.googleAuth.clientSecret,
        callbackURL: configAuth.googleAuth.callbackURL
    }, authenticateUserGoogle))
};
