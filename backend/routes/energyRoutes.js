const express = require('express');
const router = express.Router();
const EnergyData = require('../models/EnergyData');


router.get('/', async (req, res) => {
  try {
    const data = await EnergyData.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;