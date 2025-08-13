// src/components/ParticipantRegisterModal.jsx
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import scannerImage from "../assets/scanner.jpg";
import bannerImage from "../assets/banner.jpg"; // your symposium banner

const eventsList = ["Design Pulse", "Code Surgeon", "InovateXpo", "Tech Talk Forum", "Knowledge Knockout", "Brain Links", "Pixel Roast"];

const ParticipantRegisterModal = ({ onClose }) => {
  const [form, setForm] = useState({
    name: "",
    college: "",
    mobile: "",
    email: "",
    events: [],
  });

  const [paymentProof, setPaymentProof] = useState(null);
  const [scannerClicked, setScannerClicked] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEventChange = (e) => {
    const value = e.target.value;
    setForm((prev) => ({
      ...prev,
      events: prev.events.includes(value)
        ? prev.events.filter((v) => v !== value)
        : [...prev.events, value],
    }));
  };

  const handleFileChange = (e) => {
    setPaymentProof(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!paymentProof) {
      return toast.error("Please upload your payment proof!");
    }

    const data = new FormData();
    data.append("name", form.name);
    data.append("college", form.college);
    data.append("mobile", form.mobile);
    data.append("email", form.email);
    form.events.forEach((event) => data.append("events", event));
    data.append("paymentProof", paymentProof);

    try {
      await axios.post("http://localhost:5000/api/participants/register", data);
      toast.success("Participant Registered Successfully!");
      setForm({ name: "", college: "", mobile: "", email: "", events: [] });
      setPaymentProof(null);
      setScannerClicked(false);
      onClose();
    } catch (err) {
      toast.error("Registration Failed. Try again!");
      console.error(err);
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex justify-center items-center bg-black bg-opacity-50"
        style={{
          backgroundImage: `url(${bannerImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
        <ToastContainer />
        <motion.div
          className="relative bg-white rounded-lg shadow-lg max-w-xl w-full max-h-[90vh] overflow-y-auto p-6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-gray-500 hover:text-red-500 text-xl"
          >
            ✖
          </button>

          <h2 className="text-2xl font-bold text-center mb-4">
            Participant Registration
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Name"
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="college"
              value={form.college}
              onChange={handleChange}
              placeholder="College Name"
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="text"
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              placeholder="Mobile Number"
              required
              className="w-full border p-2 rounded"
            />
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              required
              className="w-full border p-2 rounded"
            />

            {/* Events Checkboxes */}
            <div>
              <label className="font-medium block mb-1">Select Events:</label>
              <div className="grid grid-cols-2 gap-2">
                {eventsList.map((event) => (
                  <label key={event} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      value={event}
                      checked={form.events.includes(event)}
                      onChange={handleEventChange}
                    />
                    {event}
                  </label>
                ))}
              </div>
            </div>

            {/* Scanner Image */}
            <div className="text-center">
              <label className="block font-medium mb-1">Scan & Pay:</label>
              <img
                src={scannerImage}
                alt="Scanner"
                className="w-48 h-48 mx-auto cursor-pointer border rounded"
                onClick={() => setScannerClicked(true)}
              />
              {!scannerClicked && (
                <p className="text-sm text-gray-500 mt-2">
                  Click the scanner after payment to upload proof
                </p>
              )}
            </div>

            {/* Payment Proof Upload */}
            <div>
              <label className="block font-medium mb-1">
                Upload Payment Proof:
              </label>
              <input
                type="file"
                accept="image/*"
                disabled={!scannerClicked}
                onChange={handleFileChange}
                className="w-full border p-2 rounded disabled:opacity-50"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
            >
              Register
            </button>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ParticipantRegisterModal;
