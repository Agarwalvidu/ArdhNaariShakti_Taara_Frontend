const mongoose = require("mongoose");

const donationCenterSchema = new mongoose.Schema({
  name: String,
  type: [String],
  address: String,
  coordinates: {
    lat: Number,
    lng: Number,
  },
  trans_friendly: Boolean,
  availability: { type: String, default: "Open" },
  last_updated: { type: Date, default: Date.now },
  verified: { type: Boolean, default: false },
});

module.exports = mongoose.model("DonationCenter", donationCenterSchema);

