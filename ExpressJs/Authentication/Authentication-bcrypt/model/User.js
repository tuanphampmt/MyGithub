var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var login = new mongoose.Schema({
    email: {
        type: String,
        unique: true, // khuông được trùng
        required: true, //cần thiết
    },
    username: {
        type: String,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    }
}, {collection: 'users'});

// Xác thực tài khoản dựa trên database
login.statics.authenticate = async (email, password) => {
    return new Promise((resolve, reject) => {
        User.findOne({email: email})
            .exec((err, user) => {
                if (err) return reject(new Error('Lỗi!!!'));
                else if (!user) return reject(new Error('Email hoặc mật khẩu sai!!!'));
                bcrypt.compare(password, user.password, function (err, result) {
                    if (result) {
                        return resolve(user);
                    }
                    reject(new  Error('Email hoặc mật khẩu sai!!!'));
                })
            });
    })
};

// mã hoá password trước khi đưa vào database
login.pre('save', function (next) {
    // hàm pre ở đây là một trạng thái trong vòng đời của một đối tượng mongoose
    // trước khi đối tượng đó được lưu trữ vào database.
    let user = this;
    bcrypt.hash(user.password, 10, function (err, hashedPassword) {
        if (err) {
            return next(err);
        }
        user.password = hashedPassword;
        next();
    })
});

var User = mongoose.model('User', login);
module.exports = User;
