import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/skills.css";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'ReactJS', level: 95 },
  { name: 'PowerBI', level: 85 },
  { name: 'SQL', level: 80 },
  { name: 'JavaScript', level: 90 },
  { name: 'SuiteScript', level: 75 },
  { name: 'TailwindCSS', level: 92 },
];

const Skills = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill items and their progress bars
      const items = skillsRef.current?.querySelectorAll('.skill-item');

      items?.forEach((item, index) => {
        if (index >= skills.length) return;

        const level = skills[index].level;

        // Actually my CSS structure is .skill-track > .skill-bar (the fill)
        // Let's ensure the selector matches the markup below.

        const bar = item.querySelector('.skill-bar');
        const glow = item.querySelector('.skill-glow');

        // Animate progress bars
        if (bar) {
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: `${level}%`,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        if (glow) {
          gsap.fromTo(
            glow,
            { width: '0%' },
            {
              width: `${level}%`,
              duration: 1.5,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            }
          );
        }

        // Animate skill item entrance
        gsap.fromTo(
          item,
          { opacity: 0, x: index % 2 === 0 ? -50 : 50 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            delay: index * 0.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: skillsRef.current, // Trigger when grid enters
              start: 'top 80%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="Skills"
      ref={sectionRef}
      className="skills"
    >


      <div className="container" style={{ margin: '0 auto', maxWidth: '1200px', padding: '0 20px' }}>
        <div className="skills-header">
          <h2>
            <span className="text-gradient">Skills</span>
          </h2>
        </div>

        <div ref={skillsRef} className="skill-grid">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-item group">
              <div className="skill-header-row">
                <span className="skill-name">
                  {skill.name}
                </span>
                <span className="skill-percent">
                  {skill.level}%
                </span>
              </div>
              <div className="skill-track">
                {/* Glow effect */}
                <div
                  className="skill-glow"
                />
                <div
                  className="skill-bar"
                />
              </div>
            </div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default Skills;
