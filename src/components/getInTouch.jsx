import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "../styles/getInTouch.css";
import resume from "../assets/resume.pdf";
import useScrollAnimation from "../hooks/useScrollAnimation";


export default function GetInTouch() {
  const ref = useScrollAnimation();

  return (
    <section id="getInTouch" className="contact-section" ref={ref}>
      <h1 className="contact-heading">Get In <span className="text-gradient">Touch</span></h1>

      <div className="contact-icons-wrapper">
        <a
          href="https://www.linkedin.com/in/sufyan-qazi-12a9222b9/"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </a>

        <a
          href="https://github.com/Sufyan2126"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
          aria-label="GitHub"
        >
          <FaGithub />
          <span>GitHub</span>
        </a>

        <a
          href={resume}
          download="resume.pdf"
          className="contact-icon"
          aria-label="Resume"
        >
          <FaDownload />
          <span>Resume</span>
        </a>


        <a
          href="https://www.google.com/maps/place/Thane,+Mumbai"
          target="_blank"
          rel="noreferrer"
          className="contact-icon"
          aria-label="Location"
        >
          <FaMapMarkerAlt />
          <span>Location</span>
        </a>

      </div>
    </section>
  );
}
