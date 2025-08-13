const express = require("express");
const Participant = require("../models/Participant");
const upload = require("../middleware/upload");
const sendConfirmationMail = require("../utils/sendMail"); // ✅ Add this line

const router = express.Router();

// POST - Register a new participant
router.post("/register", upload.single("paymentProof"), async (req, res) => {
  try {
    const { name, college, mobile, email, events } = req.body;
    const eventList = Array.isArray(events) ? events : [events]; // Handle single/multiple checkboxes

    const participant = new Participant({
      name,
      college,
      mobile,
      email,
      events: eventList,
      paymentProof: req.file ? req.file.filename : "",
    });

    await participant.save();

    // ✅ Send confirmation email after saving
    await sendConfirmationMail(email, name);

    res.status(201).json({ message: "Participant registered successfully", participant });
  } catch (err) {
    console.error("Error registering participant:", err);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
