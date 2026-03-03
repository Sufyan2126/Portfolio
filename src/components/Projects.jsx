import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "../styles/projects.css";

export default function Projects() {
  const projects = [
    {
      title: "Typing Speed Test",
      description:
        "Typing Speed Web application with real-time speed and accuracy tracking.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=250&fit=crop",
      tech: ["ReactJS", "MYSQL", "NodeJS", "CSS"],
      github: "https://github.com/Sufyan2126/typing-speed-test",
    },


    {
      title: "LoopSnake",
      description:
        "Retro-style Snake game with smooth movement and increasing difficulty.",
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

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextProject = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="Projects" className="projects">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-gradient">Projects</span>
      </motion.h2>

      <div className="carousel-container-vertical">
        <div className="carousel-content-wrapper">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className="project-split-layout"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Left Content */}
              <div className="project-info">
                <h3>{projects[currentIndex].title}</h3>
                <p>{projects[currentIndex].description}</p>
                <div className="project-tech-stack">
                  {projects[currentIndex].tech.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={projects[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-btn"
                >
                  <FaGithub /> View Project
                </a>
              </div>

              {/* Right Image */}
              <div
                className="project-preview"
                style={{ backgroundColor: projects[currentIndex].color || 'var(--bg-pink)' }}
              >
                <img
                  src={projects[currentIndex].image}
                  alt={projects[currentIndex].title}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Controls Below */}
        <div className="carousel-controls">
          <button className="nav-btn" onClick={prevProject}>
            <FaChevronLeft />
          </button>

          <div className="dots-container">
            {projects.map((_, index) => (
              <div
                key={index}
                className={`dot-indicator ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>

          <button className="nav-btn" onClick={nextProject}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Dots Indicator */}

    </section>
  );
}
