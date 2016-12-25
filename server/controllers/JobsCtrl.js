const User = require('../models/UserModel');
const Job = require('../models/JobsModel');

module.exports = {

  addJob: (req, res, next) => {
    const newJob = new Job(req.body);
    newJob.save((err, result) => {
      if (err) {
        res.status(500).json(err);
      } else {
        User.findByIdAndUpdate(req.user.id, { $push: { jobs: result._id } }, (err, resp) => {
          if (err) {
            res.status(500).json(err);
          } else {
            res.status(200).json(resp);
          }
        });
      }
    });
  },

};