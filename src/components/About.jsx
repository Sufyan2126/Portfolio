import "../styles/about.css";
import useScrollAnimation from "../hooks/useScrollAnimation";

export default function About() {
  const ref = useScrollAnimation();

  return (
    <section id="About" ref={ref} className="about">
      <h2><span className="text-gradient">About</span></h2>

      {/* L-shape wrapping ONLY content */}
      <div className="about-wrapper">
        <div className="about-content">
          <p>
            I'm an{" "}
            <span className="highlight">aspiring NetSuite Consultant</span> and{" "}
            <span className="highlight">Business Analyst</span> focused on expanding my expertise in{" "}
            <span className="highlight">NetSuite</span>. I have learned to create{" "}
            <span className="highlight">Sales Orders</span>, use{" "}
            <span className="highlight">Saved Searches</span>, import/export data via{" "}
            <span className="highlight">CSV</span>, and manage other NetSuite functionalities, and I am now learning more advanced features and business processes.
          </p>


          <p>
            As a <span className="highlight">Business Analyst</span>, I am
            exploring business processes in depth, analyzing workflows, and
            understanding how to optimize operations effectively within
            NetSuite.
          </p>

          <p>
            For fun and experimentation, I also work on{" "}
            <span className="highlight">frontend development</span> to practice
            building interactive and responsive web interfaces.
          </p>
        </div>
      </div>
    </section>
  );
}
