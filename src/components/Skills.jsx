import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaDatabase,
  FaNodeJs, // Leaving this if needed later
  FaChartBar, // For PowerBI fallback
  FaCloud, // For NetSuite fallback
  FaFileExcel // For Excel
} from "react-icons/fa";
import {
  SiTailwindcss
} from "react-icons/si";
import "../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'ReactJS', level: 95, icon: <FaReact color="#61DAFB" /> },
  { name: 'PowerBI', level: 85, icon: <FaChartBar color="#F2C811" /> },
  { name: 'SQL', level: 80, icon: <FaDatabase color="#00758F" /> },
  { name: 'JavaScript', level: 90, icon: <FaJs color="#F7DF1E" /> },
  { name: 'SuiteScript', level: 75, icon: <FaCloud color="#000000" /> }, // Fallback icon
  { name: 'TailwindCSS', level: 92, icon: <SiTailwindcss color="#38B2AC" /> },
  { name: 'HTML', level: 95, icon: <FaHtml5 color="#E34F26" /> },
  { name: 'Excel', level: 85, icon: <FaFileExcel color="#217346" /> },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = skillsRef.current?.querySelectorAll('.skill-item');

      items?.forEach((item, index) => {
        const circle = item.querySelector('.progress-ring__circle--progress');
        const percent = skills[index].level;
        const radius = circle.r.baseVal.value;
        const circumference = radius * 2 * Math.PI;

        // Set initial state
        gsap.set(circle, { strokeDasharray: `${circumference} ${circumference}`, strokeDashoffset: circumference });

        const offset = circumference - (percent / 100) * circumference;

        // Animate Circle
        gsap.to(circle, {
          strokeDashoffset: offset,
          duration: 2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top bottom',
          },
        });

        // Item Entrance Animation REMOVED for debugging/visibility reliability
        gsap.set(item, { opacity: 1, y: 0 });

        /*
        gsap.fromTo(
          item,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            delay: index * 0.1,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: skillsRef.current,
              start: 'top bottom-=100', 
            },
            onComplete: () => {
               gsap.set(item, { opacity: 1, clearProps: "transform" }); 
            }
          }
        );
        */
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="Skills" ref={sectionRef} className="skills">
      <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
        <div className="skills-header">
          <h2><span className="text-gradient">Skills</span></h2>
        </div>

        <div ref={skillsRef} className="skill-grid-circles">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item">
              <div className="skill-circle-container">
                <svg
                  className="progress-ring"
                  viewBox="0 0 120 120"
                >
                  <circle
                    className="progress-ring__circle--track"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="8"
                    fill="transparent"
                    r="52"
                    cx="60"
                    cy="60"
                  />
                  <circle
                    className="progress-ring__circle--progress"
                    stroke="var(--accent-blue)"
                    strokeWidth="8"
                    fill="transparent"
                    r="52"
                    cx="60"
                    cy="60"
                    strokeLinecap="round"
                    style={{ transform: 'rotate(-90deg)', transformOrigin: '50% 50%' }}
                  />
                </svg>

                <div className="skill-icon">
                  {skill.icon}
                </div>
              </div>

              <h3 className="skill-name-circle">{skill.name}</h3>
              <span className="skill-percent-text">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
