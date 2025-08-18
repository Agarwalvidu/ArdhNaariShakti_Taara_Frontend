const express = require("express");
const router = express.Router();
const donationController = require("../controllers/donationController");

router.get("/", donationController.getCenters);
router.post("/", donationController.addCenter);
router.patch("/:id", donationController.updateCenter);

module.exports = router;

