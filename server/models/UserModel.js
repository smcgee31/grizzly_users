const mongoose  = require('mongoose')
    , bcrypt    = require('bcryptjs')

const User = new mongoose.Schema({
    name    : { type: String, required: true }
  , email   : { type: String, required: true, unique: true }
  , phone   : { type: String, required: true, index : true, trim: true }
  , username: { type: String, required: true, unique: true }
  , password: { type: String, required: true }
});

User.pre('save', function(next) {
	let user = this;
	if (!user.isModified('password'))	return next();
  let salt = bcrypt.genSaltSync(10);
  let hash = bcrypt.hashSync(user.password, salt);
  user.password = hash;
  return next(null, user);
});

User.methods.verifyPassword = function(reqBodyPassword) {
  let user = this;
  return bcrypt.compareSync(reqBodyPassword, user.password);
};

module.exports = mongoose.model('User', User);
