const mongoose = require('mongoose');
const config = require('jobsConfig');
const objectId = mongoose.Schema.Types.ObjectId;

const Jobs = new mongoose.Schema({
      jobDate:               { type: String, required: true }
    , custName:              { type: String, required: true }
    , custPhone:             { type: String, required: true, index: true, trim: true  }
    , install_primaryHopper: { type: Number, min: 0, max: config.newInstPrimaryHopper }
    , install_addlHopper:    { type: Number, min: 0, max: config.install_addHopper }
    , install_joeys:         { type: Number, min: 0, max: config.install_joeys }
    , install_primaryVip:    { type: Number, min: 0, max: config.install_primaryVip }
    , install_addlVip:       { type: Number, min: 0, max: config.install_addVip }
    , install_dishNet:       { type: Number, min: 0, max: config.install_dishNet }
    , upgrade_primaryHopper: { type: Number, min: 0, max: config.upgrade_primaryHopper }
    , upgrade_addlHopper:    { type: Number, min: 0, max: config.upgrade_addHopper }
    , upgrade_addlJoey:      { type: Number, min: 0, max: config.upgrade_addJoey }
    , upgrade_primaryVip:    { type: Number, min: 0, max: config.upgrade_primaryVip }
    , upgrade_addlVip:       { type: Number, min: 0, max: config.upgrade_addVip }
    , upgrade_dishKit:       { type: Number, min: 0, max: config.upgrade_dishKit }
    , troubleCall:           { type: Number, min: 0, max: config.troubleCall }
    , serviceCall:           { type: Number, min: 0, max: config.serviceCall }
    , serviceInstall:        { type: Number, min: 0, max: config.serviceInstall }

    , user: { type: objectId, ref: 'User' }
});

module.exports = mongoose.model('Jobs', Jobs);