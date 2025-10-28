const Event = require('../models/Event');


exports.createEvent = async (req, res) => {
try {
const event = await Event.create({ ...req.body, image: req.file?.path });
res.status(201).json(event);
} catch (error) {
res.status(500).json({ message: error.message });
}
};


exports.getEvents = async (req, res) => {
try {
const events = await Event.find().populate('ngo');
res.json(events);
} catch (error) {
res.status(500).json({ message: error.message });
}
};