import { useEffect, useState, Suspense, lazy } from "react";
import Background3D from "./components/Background3D";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Preloader from "./components/Preloader";
import SectionSeparator from "./components/SectionSeparator";

// Lazy load below-the-fold components
const About = lazy(() => import("./components/About"));
const Skills = lazy(() => import("./components/Skills"));
const Projects = lazy(() => import("./components/Projects"));
const Contact = lazy(() => import("./components/Contact"));
const Education = lazy(() => import("./components/Education"));
const GetInTouch = lazy(() => import("./components/getInTouch"));
const Resume = lazy(() => import("./components/Resume"));
const Certifications = lazy(() => import("./components/certifications"));

export default function App() {
  const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   // Optional: You could track window load here if you wanted the preloader to wait
  //   // But for smooth 0-100 animation, we'll let Preloader drive the timing.
  // }, []);

  return (
    <>
      <Suspense fallback={null}>
        <Background3D />
      </Suspense>
      {
        loading ? (
          <Preloader onComplete={() => setLoading(false)
          } />
        ) : (
          <div>
            <Navbar />
            <Hero />

            <SectionSeparator />

            <Suspense fallback={<div className="h-screen w-full flex items-center justify-center text-white/50">Loading...</div>}>
              <About />
              <Resume />
              <SectionSeparator />
              <Education />
              <SectionSeparator />
              <Skills />
              <SectionSeparator />
              <Projects />
              <SectionSeparator />
              <Certifications />
              <SectionSeparator />
              <GetInTouch />
              <SectionSeparator />
              <Contact />
            </Suspense>
          </div>
        )}
    </>
  );
}
