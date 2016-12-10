const passport      = require('passport')
    , LocalStrategy = require('passport-local').Strategy
    , User          = require('../models/UserModel')

passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password'
}, (username, password, done) => {
  User.findOne({ username: username })
  .exec((err, user) => {
    if(err) done(err);
    if(!user) return done(null, false);
    if(user.verifyPassword(password)) return done(null, user);
    return done(null, false);
  });
}));

passport.serializeUser((user, done) => {
  done(null, user._id);
});
passport.deserializeUser((_id, done) => {
  User.findById(_id, (err, user) => {
    done(err, user);
  });
});

module.exports = passport;
