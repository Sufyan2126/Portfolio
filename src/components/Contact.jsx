import { useRef, useEffect } from "react";
import { FaRegCopyright } from "react-icons/fa";
import gsap from "gsap";
import "../styles/contact.css";

export default function Contact() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marqueeText = marqueeRef.current;

    // Clone text for seamless loop
    // We can just duplicate the content in JSX or use GSAP to repeat
    // Simple GSAP tween for infinite scrolling
    const ctx = gsap.context(() => {
      gsap.to(".marquee-track", {
        xPercent: -50, // Move half the width (since we double the text)
        ease: "none",
        duration: 20, // Adjust speed
        repeat: -1,
      });
    }, marqueeRef);

    return () => ctx.revert();
  }, []);

  return (
    <footer id="Contact" className="contact">
      <hr className="footer-hr" />

      <div className="contact-content">

        {/* TOP SECTION: Split Layout */}
        <div className="footer-top">

          {/* LEFT: Big Title */}
          <div className="footer-left">
            <h2 className="footer-title">SOFTWARE</h2>
            <h2 className="footer-title">DEVELOPER</h2>
          </div>

          {/* RIGHT: Copyright */}
          <div className="footer-right">
            <FaRegCopyright className="copyright-icon" />
            <div className="copyright-text">
              <span>Reserved</span>
              <span>Rights</span>
              <span className="year">2026</span>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Scrolling Marquee */}
        <div className="footer-marquee" ref={marqueeRef}>
          <div className="marquee-track">
            {/* Repeated text for seamless loop */}
            <span>DESIGNED AND DEVELOPED BY SQCODES</span>
            <span className="separator">•</span>
            <span>DESIGNED AND DEVELOPED BY SQCODES</span>
            <span className="separator">•</span>
            <span>DESIGNED AND DEVELOPED BY SQCODES</span>
            <span className="separator">•</span>
            <span>DESIGNED AND DEVELOPED BY SQCODES</span>
            <span className="separator">•</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
