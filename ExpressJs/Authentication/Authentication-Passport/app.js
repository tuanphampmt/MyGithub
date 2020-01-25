require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

require('./config/passport')(passport); // pass passport for configuration

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize()); // middleware được gọi ở từng request, kiểm tra session lấy ra passport.user nếu chưa có thì tạo rỗng.
app.use(passport.session()); // middleware sử dụng kịch bản Passport , sử dụng session lấy thông tin user rồi gắn vào req.user.
app.use(flash()); // use connect-flash for flash messages stored in session
// các cài đặt cần thiết cho passport
require('./routes/admin.js')(app, passport); // Load routes truyền vào app và passport đã config ở trên

app.use(function(req, res, next) {
  res.locals.session = req.session;
  next();
});




app.use(express.static(path.join(__dirname, 'public')));

mongoose.promise = global.Promise;
mongoose.connect(
    'mongodb+srv://tuanpham31798:' + process.env.MONGODB_ATLS_PW + '@tuanpham31798-zt6uf.mongodb.net/' + process.env.MONGODB_ATLS_DATABASE + '?retryWrites=true&w=majority', {
        keepAlive: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
const connection = mongoose.connection;
connection.once('open', () => console.log('MongoDB --  Kết nối cơ sở dữ liệu thành công!'));
connection.on('error', (err) => {
    console.log("MongoDB lỗi kết nối. Hãy đảm bảo rằng mongodb đang chạy. " + err);
    process.exit();
});
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
