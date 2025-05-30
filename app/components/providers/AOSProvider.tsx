'use client';

import { useEffect } from 'react';

export default function AOSProvider() {
    useEffect(() => {
        // ✅ DYNAMIC IMPORT AOS TO PREVENT SSR ISSUES
        const initAOS = async () => {
            const AOS = (await import('aos')).default;
            const 'aos/dist/aos.css';

            AOS.init({
                duration: 800,
                once: false,
                mirror: true,
            });
        };

        initAOS();
    }, []);

    return null;
}