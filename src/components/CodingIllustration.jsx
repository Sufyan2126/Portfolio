import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function CodingIllustration() {
    const containerRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating animation for elements
            gsap.to('.float-element', {
                y: -20,
                duration: 2,
                repeat: -1,
                yoyo: true,
                ease: 'power1.inOut',
                stagger: 0.2, // Offsets each element
            });

            // Pulse animation for the "core"
            gsap.to('.pulse-core', {
                scale: 1.1,
                opacity: 0.8,
                duration: 1.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
            });

            // Rotating gear/cog
            gsap.to('.rotate-cog', {
                rotation: 360,
                duration: 10,
                repeat: -1,
                ease: 'linear',
                transformOrigin: 'center center',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="illustration-container" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 500 400"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ maxWidth: '400px' }} // Restrict max size
            >
                {/* Background Glow */}
                <circle cx="250" cy="200" r="120" fill="url(#grad1)" className="pulse-core" opacity="0.3" />

                {/* Abstract Laptop Base */}
                <rect x="100" y="250" width="300" height="20" rx="5" fill="#333" />
                <path d="M120 250 L140 150 L360 150 L380 250 Z" fill="#222" opacity="0.8" />

                {/* Screen */}
                <rect x="130" y="160" width="240" height="140" rx="4" fill="#1e1e1e" stroke="#444" strokeWidth="2" />

                {/* Code Lines on Screen */}
                <g className="code-lines">
                    <rect x="150" y="180" width="100" height="6" rx="3" fill="#ff5f56" className="float-element" />
                    <rect x="150" y="200" width="160" height="6" rx="3" fill="#ffbd2e" className="float-element" />
                    <rect x="150" y="220" width="130" height="6" rx="3" fill="#27c93f" className="float-element" />
                    <rect x="150" y="240" width="80" height="6" rx="3" fill="#5fc9f8" className="float-element" />
                </g>

                {/* Floating Icons around */}
                <circle cx="80" cy="120" r="25" fill="#282c34" stroke="#61dafb" strokeWidth="2" className="float-element" />
                <path d="M70 120 L90 120 M80 110 L80 130" stroke="#61dafb" strokeWidth="2" className="rotate-cog" style={{ transformOrigin: '80px 120px' }} />

                <rect x="400" y="100" width="40" height="40" rx="8" fill="#f7df1e" className="float-element" />
                <text x="412" y="128" fontSize="20" fontWeight="bold" fill="#000" className="float-element">JS</text>

                <circle cx="420" cy="280" r="20" fill="#3178c6" className="float-element" />
                <text x="412" y="286" fontSize="16" fontWeight="bold" fill="#fff" className="float-element">TS</text>

                {/* Decorative Elements */}
                {/* <circle cx="250" cy="200" r="160" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="10 5" className="rotate-cog" /> */}

                <defs>
                    <radialGradient id="grad1" cx="0.5" cy="0.5" r="0.5" fx="0.5" fy="0.5">
                        <stop offset="0%" stopColor="#8a2be2" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#000" stopOpacity="0" />
                    </radialGradient>
                </defs>
            </svg>
        </div>
    );
}
