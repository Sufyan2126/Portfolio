import { FaLinkedin, FaGithub, FaFileAlt } from "react-icons/fa";
import resumePDF from "../assets/resume.pdf"; // make sure this path is correct
import "../styles/contact.css";

export default function Contact() {
  return (
    <footer id="" className="contact">

      {/* Divider line */}
      <hr className="footer-hr" />

      <div className="contact-content">

        <div className="footer-text">
          <p>Designed & Developed by Sufyan</p>
        </div>

        <div className="social-links">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/sufyan-qazi-12a9222b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={24} />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Sufyan2126"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            aria-label="GitHub"
          >
            <FaGithub size={24} />
          </a>

          {/* Resume Download */}
          <a
            href={resumePDF}
            download="resume.pdf"
            className="social-link"
            aria-label="Download Resume"
          >
            <FaFileAlt size={22} />
          </a>
        </div>

      </div>
    </footer>
  );
}
