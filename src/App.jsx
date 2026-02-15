import { useEffect, useState, Suspense, lazy } from "react";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Lazy load below-the-fold components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Education = lazy(() => import("./components/Education"));
// const GetInTouch = lazy(() => import("./components/getInTouch"));
const Resume = lazy(() => import("./components/Resume"));
const Certifications = lazy(() => import("./components/certifications"));

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Safety timeout: forced loading finish after 4.5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4500);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Refresh ScrollTrigger once content is visible to ensure animations work
      setTimeout(() => {
        ScrollTrigger.refresh();
      }, 500);
    }
  }, [loading]);

  return (
    <>
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      {
        loading ? (
          <Preloader onComplete={() => setLoading(false)} />
        ) : (
          <div>
            <Navbar />
            <Hero />



            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-white/50">Loading...</div>}>
              <About />
              <Resume />

              <Education />

              <Skills />

              <Projects />
              {/* <SectionSeparator />
              <Certifications /> */}
              {/* <SectionSeparator />
              <GetInTouch /> */}

              <Contact />
            </Suspense>
          </div>
        )
      }
    </>
  );
}
