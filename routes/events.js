const express = require('express');
const { createEvent, getEvents } = require('../controllers/eventController');
const upload = require('../middleware/upload');
const router = express.Router();


router.post('/', upload.single('image'), createEvent);
router.get('/', getEvents);


module.exports = router;