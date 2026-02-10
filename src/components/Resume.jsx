import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import "../styles/resume.css";
import resumePdf from "../assets/resume.pdf";

export default function Resume() {
    return (
        <section id="resume" className="resume-section">
            <div className="resume-container">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="resume-content"
                >
                    <a href={resumePdf} download="Sufyan_Qazi_Resume.pdf" className="resume-button">
                        <FaDownload className="download-icon" />
                        Download Resume
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
