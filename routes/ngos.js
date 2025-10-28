const express = require('express');
const { createNGO, getAllNGOs } = require('../controllers/ngoController');
const { protect } = require('../middleware/auth');
const router = express.Router();


router.post('/', protect, createNGO);
router.get('/', getAllNGOs);


module.exports = router;