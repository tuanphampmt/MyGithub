const auth = require('./auth.route');
const user = require('./user.route');

const authenticate = require('../middlewares/authenticate.middleware');

module.exports = app => {
  app.get('/', (req, res) => {
    res.render('index')
  });

  app.use('/api/auth', auth);
  app.use('/api/user', authenticate, user);
};
