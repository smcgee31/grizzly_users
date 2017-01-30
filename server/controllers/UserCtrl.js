const User = require('../models/UserModel');

module.exports = {

  register: (req, res, next) => {
    User.create(req.body, (err, result) => {
      if(err) return res.status(500).send(err);
      newUser = result.toObject();
      newUser.password = null;
      res.status(200).json(newUser);
    });
  },

  read: (req, res, next) => {
    User.find(req.query, (err, result) => {
      if(err) return res.status(500).send(err);
      for (var i = 0; i < result.length; i++) {
        delete result[i].password;
      }
      res.status(200).send(result);
    });
  },

  me: (req, res, next) => {
    if (!req.user) return res.status(401).send('current user not defined');
    req.user.password = null;
    return res.status(200).json(req.user);
  },

  update: (req, res, next) => {
    User.findByIdAndUpdate(req.params._id, req.body, (err, result) => {
      if (err) next(err);
      res.status(200).send('user updated');
    });
  }

};
