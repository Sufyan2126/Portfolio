// education.jsx
import { FaGraduationCap, FaSchool } from "react-icons/fa";
import "../styles/education.css";

export default function Education() {
  const educationData = [
    {
      icon: <FaSchool />,
      degree: "HSC (Higher Secondary)",
      branch: "Science",
      institute: "State Board",
      duration: "2021 – 2023",
      description:
        "Completed Junior College with focus on Science stream.",
    },
    {
      icon: <FaGraduationCap />,
      degree: "Bachelor's Degree",
      branch: "Information Technology",
      institute: "Tata Institute Of Social Ciences",
      duration: "2023 – 2026",
      description:
        "Pursuing Bachelor's in Information Technology with specialization in Software Development, Web Technologies, and Analytics.",
    },
  ];

  return (
    <section id="Education" className="education">
      <h2><span className="text-gradient">Education</span></h2>
      <div className="education-grid">
        {educationData.map((edu, index) => (
          <div className="education-card" key={index}>
            <div className="card-icon">{edu.icon}</div>
            <div className="card-content">
              <h3>{edu.degree}</h3>
              <div className="branch">{edu.branch}</div>
              <div className="institute">{edu.institute}</div>
              <div className="duration">{edu.duration}</div>
              <p>{edu.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
