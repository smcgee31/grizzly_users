const mongoose = require('mongoose');
const max   = require('jobMaximums');
const objectId = mongoose.Schema.Types.ObjectId;

const Jobs = new mongoose.Schema({
      jobDate:               { type: String, required: true }
    , custName:              { type: String, required: true }
    , custPhone:             { type: String, required: true, index: true, trim: true  }
    , install_primaryHopper: { type: Number, min: 0, max: max.newInstPrimaryHopper }
    , install_addlHopper:    { type: Number, min: 0, max: max.install_addHopper }
    , install_joeys:         { type: Number, min: 0, max: max.install_joeys }
    , install_primaryVip:    { type: Number, min: 0, max: max.install_primaryVip }
    , install_addlVip:       { type: Number, min: 0, max: max.install_addVip }
    , install_dishNet:       { type: Number, min: 0, max: max.install_dishNet }
    , upgrade_primaryHopper: { type: Number, min: 0, max: max.upgrade_primaryHopper }
    , upgrade_addlHopper:    { type: Number, min: 0, max: max.upgrade_addHopper }
    , upgrade_addlJoey:      { type: Number, min: 0, max: max.upgrade_addJoey }
    , upgrade_primaryVip:    { type: Number, min: 0, max: max.upgrade_primaryVip }
    , upgrade_addlVip:       { type: Number, min: 0, max: max.upgrade_addVip }
    , upgrade_dishKit:       { type: Number, min: 0, max: max.upgrade_dishKit }
    , troubleCall:           { type: Number, min: 0, max: max.troubleCall }
    , serviceCall:           { type: Number, min: 0, max: max.serviceCall }
    , serviceInstall:        { type: Number, min: 0, max: max.serviceInstall }

    , user: { type: objectId, ref: 'User' }
});

module.exports = mongoose.model('Jobs', Jobs);