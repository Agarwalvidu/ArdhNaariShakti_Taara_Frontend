const express = require("express");
const mongoose = require("mongoose");
const donationRoutes = require("./routes/donationCenters");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ardhnaari", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use("/api/donation-centers", donationRoutes);

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});

