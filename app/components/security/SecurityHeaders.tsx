'use client';

import { useEffect } from 'react';

export default function SecurityHeaders() {
    useEffect(() => {
        // ✅ DETECT INSECURE CONTENT
        if (typeof window !== 'undefined') {
            // Check for mixed content
            if (window.location.protocol === 'https:' && document.querySelector('img[src^="http:"], script[src^="http:"], link[href^="http:"]')) {
                console.warn('⚠️ Mixed content detected! Some resources are loaded over HTTP.');
            }

            // ✅ REPORT CSP VIOLATIONS
            document.addEventListener('securitypolicyviolation', (e) => {
                console.warn('🚨 CSP Violation:', {
                    blockedURI: e.blockedURI,
                    violatedDirective: e.violatedDirective,
                    originalPolicy: e.originalPolicy,
                });

                // ✅ TRACK SECURITY VIOLATIONS IN ANALYTICS
                if (window.gtag) {
                    window.gtag('event', 'security_violation', {
                        event_category: 'security',
                        event_label: e.violatedDirective,
                        blocked_uri: e.blockedURI,
                        violated_directive: e.violatedDirective
                    });
                }
            });

            // ✅ DETECT PROTOCOL
            if (window.location.protocol === 'http:' && window.location.hostname !== 'localhost') {
                console.warn('⚠️ Website should be served over HTTPS in production!');
            }
        }
    }, []);

    return null; // This component doesn't render anything
}