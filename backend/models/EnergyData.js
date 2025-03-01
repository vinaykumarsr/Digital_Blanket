const mongoose = require('mongoose');

const energyDataSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  consumption: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model('EnergyData', energyDataSchema);