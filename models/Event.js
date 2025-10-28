const mongoose = require('mongoose');


const eventSchema = new mongoose.Schema({
title: { type: String, required: true },
description: String,
date: { type: Date, required: true },
location: String,
image: String,
ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'NGO' },
});


module.exports = mongoose.model('Event', eventSchema);