import { useState } from "react";
import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

import {
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaEnvelope,
  FaCertificate,
} from "react-icons/fa";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false); // Close menu on mobile
  };

  return (
    <motion.nav
      className="navbar"
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="logo" onClick={() => handleClick("Hero")}>
        SQCodes
      </h2>

      {/* Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        <span></span>
        <span></span>
        <span></span>
      </div>

      {/* Menu */}
      <ul className={`menu ${open ? "show" : ""}`}>
        <li onClick={() => handleClick("Hero")}>
          <FaHome className="nav-icon" /> Home
        </li>
        <li onClick={() => handleClick("About")}>
          <FaUser className="nav-icon" /> About
        </li>
        <li onClick={() => handleClick("Education")}>
          <FaGraduationCap className="nav-icon" /> Education
        </li>

        <li onClick={() => handleClick("Skills")}>
          <FaTools className="nav-icon" /> Skills
        </li>
        <li onClick={() => handleClick("Projects")}>
          <FaProjectDiagram className="nav-icon" /> Projects
        </li>

        <li onClick={() => handleClick("certifications")}>
          <FaCertificate className="nav-icon" /> Certifications
        </li>

        <li onClick={() => handleClick("getInTouch")}>
          <FaEnvelope className="nav-icon" /> Contact
        </li>
      </ul>

    </motion.nav>
  );
}
