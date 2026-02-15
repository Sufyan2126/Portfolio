import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function useScrollAnimation(threshold = 0.1) {
    const elementRef = useRef(null);

    useEffect(() => {
        const element = elementRef.current;
        let ctx;

        if (element) {
            ctx = gsap.context(() => {
                gsap.fromTo(
                    element,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: element,
                            start: "top 85%", // Trigger when top of element hits 85% of viewport height
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            }, element);
        }

        return () => ctx && ctx.revert();
    }, [threshold]);

    return elementRef;
}
