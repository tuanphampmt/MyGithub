const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var FacebookStrategy = require('passport-facebook').Strategy;
const configAuth = require('./auth.js');
const User = require('../models/User');
const bcrypt = require('bcrypt');
module.exports = function (passport) {
    const authenticateUserSignUp = async (req, email, password, done) => {
        try {
            // kiểm tra người dùng chưa đăng nhập
            if (!req.user) {
                // tìm trong db xem có user nào đã sử dụng google id này chưa
                const user = await User.findOne({'local.email': email});

                if (user) {
                    if (!user.local.email) {
                        user.local = {
                            email: email,
                            password: User.generateHash(password)
                        }
                    }
                    await user.save();
                    done(null, user);
                } else {
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
                }
            } else {

                // người dùng đã đăng nhập, chúng ta tiến hình kết nối tài khoản facebook
                var user = req.user; // lấy đối tượng người dùng trong session
                // cập nhật thông tin facebook cho tài khoản hiện tại
                user.local = {
                    email: email,
                    password: bcrypt.hashSync(password, bcrypt.genSaltSync(10), null)
                };
                // lưu lại thông tin người dùng
                await user.save();
                done(null, user);
            }
        } catch (err) {
            console.log(err);
            done(err, false)
        }

        // try {
        //     // Tìm một user theo email và lưu vào biến user
        //     const user = await User.findOne({'local.email': email});
        //     // chúng ta kiểm tra xem user đã tồn tại hay không
        //     if (user) {
        //         return done(null, false, req.flash('signupMessage', 'Email dã tồn tại!!.'));
        //     }
        //     if (req.body.password !== req.body.passwordConf) {
        //         return done(null, false, req.flash('signupMessage', 'Hai mật Khẩu không khớp!!'))
        //     }
        //     // Nếu chưa user nào sử dụng email này
        //     // tạo mới user
        //     var newUser = new User();
        //     // lưu thông tin cho tài khoản local
        //     newUser.local.email = email;
        //     newUser.local.password = newUser.generateHash(password);
        //     // lưu user
        //     await newUser.save();
        //     // Nếu tất cả đều thoả yêu cầu thì cho user đăng ký
        //     done(null, newUser);
        // } catch (e) {
        //     console.log(e);
        //     done(e, false);
        // }


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

    const authenticateUserGoogle = async (req, token, refreshToken, profile, done) => {
        try {
            // kiểm tra người dùng chưa đăng nhập
            if (!req.user) {
                // tìm trong db xem có user nào đã sử dụng google id này chưa
                const user = await User.findOne({'google.id': profile.id});

                if (user) {
                    if (!user.google.token) {
                        user.google = {
                            id: profile.id,
                            name: profile.name.givenName + ' ' + profile.name.familyName,
                            email: profile.emails[0].value
                        }
                    }
                    user.google.token = token; // alway update user token to user service fb provider
                    await user.save();
                    done(null, user);
                } else {
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
                }
            } else {
                // người dùng đã đăng nhập, chúng ta tiến hình kết nối tài khoản facebook
                var user = req.user; // lấy đối tượng người dùng trong session
                // cập nhật thông tin facebook cho tài khoản hiện tại
                user.google = {
                    id: profile.id,
                    token: token,
                    name: profile.name.givenName + ' ' + profile.name.familyName,
                    email: profile.emails[0].value
                };
                // lưu lại thông tin người dùng
                await user.save();
                done(null, user);
            }
        } catch (err) {
            console.log(err);
            done(err, false)
        }

    };

    // Facebook sẽ gửi lại chuối token và thông tin profile của user
    const authenticateUserFacebook = async (req, token, refreshToken, profile, done) => {
        // Facebook sẽ gửi lại chuối token và thông tin profile của user
        // đối tượng req được chuyển từ route
        // asynchronous
        try {
            // kiểm tra người dùng chưa đăng nhập
            if (!req.user) {
                // tìm trong db xem có user nào đã sử dụng facebook id này chưa
                const user = await User.findOne({'facebook.id': profile.id});

                // Nếu tìm thấy user, cho họ đăng nhập
                if (user) {
                    if (!user.facebook.token) {
                        user.facebook = {
                            id: profile.id,
                            name: profile.name.givenName + ' ' + profile.name.familyName,
                            email: profile.emails[0].value
                        };
                    }
                    user.facebook.token = token; // alway update user token to user service fb provider
                    await user.save();
                    done(null, user);
                } else {
                    // nếu chưa có, tạo mới user
                    var newUser = new User();
                    // lưu các thông tin cho user
                    newUser.facebook.id = profile.id;
                    newUser.facebook.token = token;
                    newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName; // bạn có thể log đối tượng profile để xem cấu trúc
                    newUser.facebook.email = profile.emails[0].value; // fb có thể trả lại nhiều email, chúng ta lấy cái đầu tiền
                    // lưu vào db
                    await newUser.save();
                    done(null, newUser);
                }
            } else {
                // người dùng đã đăng nhập, chúng ta tiến hình kết nối tài khoản facebook
                var user = req.user; // lấy đối tượng người dùng trong session
                // cập nhật thông tin facebook cho tài khoản hiện tại
                user.facebook = {
                    id: profile.id,
                    token: token,
                    name: profile.name.givenName + ' ' + profile.name.familyName,
                    email: profile.emails[0].value
                };
                // lưu lại thông tin người dùng
                await user.save();
                done(null, user);
            }
        } catch (err) {
            console.log(err);
            done(err, false)
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
        callbackURL: configAuth.googleAuth.callbackURL,
        passReqToCallback: true, // cho phép chúng ta chuyển đối tượng "req" từ route (cho phép kiểm tra người dùng
        //đã đăng nhập hay chưa)
    }, authenticateUserGoogle));

    passport.use(new FacebookStrategy({
        // điền thông tin để xác thực với Facebook.
        // những thông tin này đã được điền ở file auth.js
        clientID: configAuth.facebookAuth.clientID,
        clientSecret: configAuth.facebookAuth.clientSecret,
        callbackURL: configAuth.facebookAuth.callbackURL,
        passReqToCallback: true, // cho phép chúng ta chuyển đối tượng "req" từ route (cho phép kiểm tra người dùng
        //đã đăng nhập hay chưa)
        profileFields: [
            'id',
            'displayName',
            'email',
            'first_name',
            'last_name',
            'middle_name'
        ]
    }, authenticateUserFacebook));


};
