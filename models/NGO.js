const mongoose = require('mongoose');


const ngoSchema = new mongoose.Schema({
name: { type: String, required: true },
description: String,
location: String,
contactEmail: String,
createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});


module.exports = mongoose.model('NGO', ngoSchema);