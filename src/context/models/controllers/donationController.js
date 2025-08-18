const DonationCenter = require("../models/DonationCenter");

// GET verified centers
exports.getCenters = async (req, res) => {
  const centers = await DonationCenter.find({ verified: true });
  res.json(centers);
};

// POST new center (pending verification)
exports.addCenter = async (req, res) => {
  const newCenter = new DonationCenter({ ...req.body, verified: false });
  await newCenter.save();
  res.json({ message: "Submitted for moderation!" });
};

// PATCH update (for admin use)
exports.updateCenter = async (req, res) => {
  const { id } = req.params;
  const updated = await DonationCenter.findByIdAndUpdate(id, req.body, { new: true });
  res.json(updated);
};

