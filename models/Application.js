const mongoose = require('mongoose');


const applicationSchema = new mongoose.Schema({
event: { type: mongoose.Schema.Types.ObjectId, ref: 'Event', required: true },
user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
});


module.exports = mongoose.model('Application', applicationSchema);