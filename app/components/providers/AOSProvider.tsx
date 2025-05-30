'use client';

import { useEffect } from 'react';

export default function AOSProvider() {
    useEffect(() => {
        // ✅ DYNAMIC IMPORT AOS TO PREVENT SSR ISSUES
        const initAOS = async () => {
            try {
                const AOS = (await import('aos')).default;
                await import('aos/dist/aos.css'); ==

                    AOS.init({
                        duration: 800,
                        once: false,
                        mirror: true,
                    });
            } catch (error) {
                console.warn('Failed to initialize AOS:', error);
            }
        };

        initAOS();
    }, []);

    return null;
}