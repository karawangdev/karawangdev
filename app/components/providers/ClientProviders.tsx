'use client';

import { useEffect, Suspense } from 'react';
import { ErrorBoundary } from '../ErrorBoundary';
import dynamic from 'next/dynamic';

// ✅ DYNAMIC IMPORTS TO PREVENT SSR ISSUES
const CommunityAnalytics = dynamic(() => import('../analytics/CommunityAnalytics'), {
    ssr: false
});

const ScrollToTopButton = dynamic(() => import('../ui/ScrollToTopButton'), {
    ssr: false
});

const InteractiveTerminal = dynamic(() => import('../ui/InteractiveTerminal'), {
    ssr: false
});

// ✅ DYNAMIC AOS IMPORT
const AOSProvider = dynamic(
    () => import('./AOSProvider'),
    { ssr: false }
);

export default function ClientProviders({ children }: { children: React.ReactNode }) {
    return (
        <ErrorBoundary>
            <AOSProvider />

            <Suspense fallback={null}>
                <CommunityAnalytics />
            </Suspense>

            {children}

            <Suspense fallback={null}>
                <ScrollToTopButton />
            </Suspense>

            <Suspense fallback={null}>
                <InteractiveTerminal />
            </Suspense>
        </ErrorBoundary>
    );
}