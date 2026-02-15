import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../styles/certifications.css";

import c1 from "../assets/certificates/c1.jpeg";
import c2 from "../assets/certificates/c2.jpeg";
import c3 from "../assets/certificates/c3.jpeg";

gsap.registerPlugin(ScrollTrigger);

const certificationsData = [
    {
        title: "Data Analytics",
        issuer: "Forage",
        date: "Feb 2025",
        image: c3,
    },
    {
        title: "Oracle Netsuite Financial Associate",
        issuer: "Oracle",
        date: "Nov 2025",
        image: c1,
    },
    {
        title: "Data Visualization with PowerBI",
        issuer: "Great Learning",
        date: "Nov 2024",
        image: c2,
    },
];

export default function Certifications() {
    const containerRef = useRef(null);
    const cardsRef = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                cardsRef.current,
                { y: 50, opacity: 0 },
                {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    stagger: 0.2,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
                        toggleActions: "play none none reverse",
                    },
                }
            );
        }, containerRef);

        return () => ctx.revert();
    }, []);

    // Throttling ref to prevent excessive GSAP calls
    const requestRef = useRef(null);

    const handleMouseMove = (e, index) => {
        const card = cardsRef.current[index];
        if (!card) return;

        // If there's already a pending animation frame, skip
        if (requestRef.current) return;

        requestRef.current = requestAnimationFrame(() => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position within the element
            const y = e.clientY - rect.top; // y position within the element
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -10; // Max rotation 10 deg
            const rotateY = ((x - centerX) / centerX) * 10;

            gsap.to(card, {
                rotationX: rotateX,
                rotationY: rotateY,
                transformPerspective: 1000,
                scale: 1.05,
                duration: 0.4,
                ease: "power2.out",
            });

            requestRef.current = null; // Reset lock
        });
    };

    const handleMouseLeave = (index) => {
        const card = cardsRef.current[index];
        if (!card) return;

        gsap.to(card, {
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            duration: 0.5,
            ease: "elastic.out(1, 0.5)",
        });
    };

    return (
        <section id="certifications" className="certifications" ref={containerRef}>
            <h2><span className="text-gradient">Certifications</span></h2>

            <div className="certifications-grid">
                {certificationsData.map((cert, index) => (
                    <div
                        key={index}
                        className="certification-card"
                        ref={(el) => (cardsRef.current[index] = el)}
                        onMouseMove={(e) => handleMouseMove(e, index)}
                        onMouseLeave={() => handleMouseLeave(index)}
                    >
                        <div className="cert-image-wrapper">
                            <img src={cert.image} alt={cert.title} className="cert-image" />
                        </div>
                        <div className="cert-content">
                            <h3>{cert.title}</h3>
                            <span className="issuer">{cert.issuer}</span>
                            <span className="cert-date">{cert.date}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
