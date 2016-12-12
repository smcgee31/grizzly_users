const mongoose = require('mongoose');
const objectId = mongoose.Schema.Types.ObjectId;

const Jobs = new mongoose.Schema({
    custName   : {type: String, required: true, maxlength: 20},
    custPhone   : {type: Number, required: true, min      : 0},
    base   : {type: Number, required: true, min      : 0},
    balance: {type: Number, required: true, min      : 0},
    user   : {type: objectId, ref   : 'User'}
});

module.exports = mongoose.model('Jobs', Jobs);