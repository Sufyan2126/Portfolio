// Hero.jsx
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "../styles/hero.css";
import profileImg from "../assets/New folder/download.png";

export default function Hero() {
  const roles = [
    "Netsuite Consultant",
    "Frontend Developer",
    "Business Analyst",
  ];

  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      setText((prev) =>
        isDeleting
          ? currentRole.substring(0, prev.length - 1)
          : currentRole.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentRole) {
        setTimeout(() => setIsDeleting(true), 1200);
      }

      if (isDeleting && text === "") {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: 180 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: { type: "spring", stiffness: 100, damping: 10 },
    },
  };

  return (
    <section id="Hero" className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* LEFT */}
        <motion.div className="hero-left" variants={itemVariants}>
          <motion.h1>
            <div style={{ fontSize: "20px", marginBottom: "8px" }}>
              <motion.span
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Hey there
              </motion.span>
              <motion.span
                className="emoji hand-wave"
                style={{ fontSize: "20px", marginLeft: "6px", display: "inline-block", transformOrigin: "70% 70%" }}
                animate={{ rotate: [0, 20, -10, 15, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                👋
              </motion.span>

            </div>

            <div style={{ fontSize: "2.9rem", fontWeight: "bold" }}>
              I'm <span>Sufyan</span>
            </div>
          </motion.h1>

          <motion.h2>
            {text}
            <span className="cursor">|</span>
          </motion.h2>

          <motion.p>
            Learning NetSuite, Business Analysis, and building modern,
            responsive and clean UI designs.
          </motion.p>
        </motion.div>

        {/* RIGHT */}
        <motion.div className="hero-right" variants={itemVariants}>
          <div className="profile-orbit-container">
            {/* Orbit Circles */}
            <div className="hero-orbit-circle h-orbit-2" />

            {/* Orbiting Elements */}
            {['React', 'Node', 'Next.js', 'TS'].map((tech, index) => (
              <div
                key={tech}
                className="hero-orbiting-tech animate-orbit-desktop"
                style={{
                  animationDelay: `${index * -6.25}s`, // 25s / 4 items = 6.25s spacing
                }}
              >
                <div className="hero-tech-icon">
                  {tech}
                </div>
              </div>
            ))}

            <div className="profile-circle">
              <img src={profileImg} alt="Sufyan" />
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
