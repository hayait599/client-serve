const User = require('./../model/user');

exports.signup = (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  User.findOne({ email }, (error, result) => {
    if(!email || !password) {
      return res.status(422).send({ error: 'please ented email or password' });
    }
    if(error) {
      return next(error);
    }
    if (result) {
      return res.status(422).send({ error: 'email already used' });
    }
    const user = new User({
      email,
      password
    });
    user.save((error) => {
      if (error) {
        return next(error);
      }
      res.json(user);
    });
  });
};
