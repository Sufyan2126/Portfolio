import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import "../styles/projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Typing Speed Test",
      description:
        "React.js and CSS based application with real-time speed and accuracy tracking.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tech: ["ReactJS", "MYSQL", "NodeJS", "CSS"],
      github: "https://github.com/Sufyan2126/typing-speed-test",
    },
    {
      title: "Expense Tracker",
      description:
        "Expense tracking app with authentication using React, Node.js, and MySQL.",
      image:
        "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=400&h=250&fit=crop",
      tech: ["ReactJS", "CSS", "NodeJS"],
      github: "https://github.com/Sufyan2126/expense-tracker-web/",
    },
    {
      title: "Portfolio Dashboard",
      description:
        "Modern responsive portfolio with animations and clean UI.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&h=250&fit=crop",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Sufyan2126/developer-portfolio",
    },
    {
      title: "LoopSnake",
      description:
        "Analytics dashboard with charts and structured data presentation.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop",
      tech: ["React", "Charts"],
      github: "https://github.com/Sufyan2126/MyPortfolio",
    },
    {
      title: "MySchool Portal",
      description:
        "Information, Campus Life, and Testimonials.",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop",
      tech: ["Tyescript", "TailwindCSS", "UI/UX"],
      github: "https://github.com/Sufyan2126/MyPortfolio",
    },
  ];

  return (
    <section id="Projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            className="project-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="project-image">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="github-btn"
              >
                <FaGithub /> View on GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
