const mongoose = require("mongoose");

const participantSchema = new mongoose.Schema({
  name: { type: String, required: true },
  college: { type: String, required: true },
  mobile: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  events: [{ type: String, required: true }],
  paymentProof: { type: String }, // Stores filename of uploaded proof
}, { timestamps: true });

const Participant = mongoose.model("Participant", participantSchema);

module.exports = Participant;
