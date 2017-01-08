const User = require('../models/UserModel');
const Jobs = require('../models/JobsModel');

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

  getOneJob: (req, res, next) => {
    Jobs.findOne(req.jobs.custPhone, (err, resp) => {
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