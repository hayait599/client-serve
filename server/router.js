const auth = require('./controller/auth');

module.exports = (app) => {
  app.post('/signup', auth.signup );
}