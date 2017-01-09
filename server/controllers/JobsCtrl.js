const User = require('../models/UserModel');
const Job = require('../models/JobModel');

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

  getJobsByPhone: (req, res, next) => {
    Jobs.findOne(req.job.phone, (err, resp) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(resp);
      }
    });
  },

// Probably won't want to get ALL jobs, but for a specific time frame.
// Otherwise it may be too much for even the user to try to sort through.
  getJobs: (req, res, next) => {
    Jobs.find().exec((err, resp) => {
      if (err) {
        res.status(500).json(err);
      } else {
        res.status(200).json(resp);
      }
    });
  }

};