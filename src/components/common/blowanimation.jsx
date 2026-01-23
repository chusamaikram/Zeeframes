

import { useEffect, useRef, useState } from "react";

const CursorGlow = () => {
    const glowRef = useRef(null);
    const [isDesktop, setIsDesktop] = useState(false);
    const posRef = useRef({ current: { x: -100, y: -100 }, target: { x: -100, y: -100 } });

    useEffect(() => {
        // Check if device is desktop (has fine pointer like mouse)
        const mediaQuery = window.matchMedia('(pointer: fine)');
        setIsDesktop(mediaQuery.matches);

        // Listen for changes (if user connects/disconnects mouse)
        const handleChange = (e) => setIsDesktop(e.matches);
        mediaQuery.addEventListener('change', handleChange);

        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    useEffect(() => {
        if (!isDesktop || !glowRef.current) return;

        const glow = glowRef.current;
        const pos = posRef.current;
        let rafId = null;

        // Smooth lerp (linear interpolation) function
        const lerp = (start, end, factor) => start + (end - start) * factor;

        // Update target position on mouse move
        const handleMove = (e) => {
            pos.target.x = e.clientX - 60;
            pos.target.y = e.clientY - 60;
        };

        // Animate smoothly using RAF
        const animate = () => {
            // Smoothness factor: lower = slower/smoother (0.05-0.2 recommended)
            const ease = 0.04;

            pos.current.x = lerp(pos.current.x, pos.target.x, ease);
            pos.current.y = lerp(pos.current.y, pos.target.y, ease);

            glow.style.transform = `translate3d(${pos.current.x}px, ${pos.current.y}px, 0)`;

            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener("mousemove", handleMove, { passive: true });
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener("mousemove", handleMove);
            if (rafId) cancelAnimationFrame(rafId);
        };
    }, [isDesktop]);

    // Don't render on mobile/tablet
    if (!isDesktop) return null;

    return (
        <div
            ref={glowRef}
            className="fixed top-0 left-0 w-20 h-20 rounded-full 
                pointer-events-none mix-blend-lighten opacity-40 
                bg-[#F3FE00] blur-[25px] will-change-transform z-0"
            style={{
                transform: 'translate3d(-100px, -100px, 0)'
            }}
            aria-hidden="true"
        />
    );
};

export default CursorGlow;