import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/about.css";
import CodingIllustration from "./CodingIllustration";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Reveal Text
      gsap.from(".about-text-p", {
        opacity: 0,
        y: 30,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
        },
      });

      // Reveal Illustration
      gsap.from(".about-illustration", {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="About" ref={sectionRef} className="about">
      <h2><span className="text-gradient">About Me</span></h2>

      {/* L-shape wrapping content */}
      <div className="about-wrapper">
        <div className="about-container">

          {/* Text Content */}
          <div className="about-content" ref={textRef}>
            <p className="about-text-p">
              I'm an{" "}
              <span className="highlight">aspiring NetSuite Consultant</span> and{" "}
              <span className="highlight">Business Analyst</span> focused on expanding my expertise in{" "}
              <span className="highlight">NetSuite</span>.
            </p>

            <p className="about-text-p">
              I have learned to create <span className="highlight">Sales Orders</span>, use{" "}
              <span className="highlight">Saved Searches</span>, import/export data via{" "}
              <span className="highlight">CSV</span>, and manage functionalities to optimize business processes.
            </p>

            <p className="about-text-p">
              Passionate about bridging the gap between <span className="highlight">Business Requirements</span> and <span className="highlight">Technical Solutions</span>.
            </p>

            <p className="about-text-p">
              I also enjoy <span className="highlight">Frontend Development</span>, building interactive and responsive web interfaces to keep my technical skills sharp.
            </p>
          </div>

          {/* Illustration */}
          <div className="about-illustration">
            <CodingIllustration />
          </div>

        </div>
      </div>
    </section>
  );
}
