// src/components/Footer.jsx
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pb-10 pt-5 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} All Rights Reserved | Developed by{" "}
        <span className="text-white font-semibold">Team Mind Mesh</span>
      </p>
    </footer>
  );
}
