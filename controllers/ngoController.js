const NGO = require('../models/NGO');


exports.createNGO = async (req, res) => {
try {
const ngo = await NGO.create({ ...req.body, createdBy: req.user._id });
res.status(201).json(ngo);
} catch (error) {
res.status(500).json({ message: error.message });
}
};


exports.getAllNGOs = async (req, res) => {
try {
const ngos = await NGO.find();
res.json(ngos);
} catch (error) {
res.status(500).json({ message: error.message });
}
};