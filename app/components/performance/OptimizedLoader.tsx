'use client';

import { lazy, Suspense } from 'react';
import { Box, CircularProgress } from '@mui/material';

// ✅ LAZY LOAD HEAVY COMPONENTS
const InteractiveTerminal = lazy(() => import('../ui/InteractiveTerminal'));
const ScrollToTopButton = lazy(() => import('../ui/ScrollToTopButton'));

// ✅ LOADING FALLBACK
const LoadingFallback = () => (
    <Box
        sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '60px',
            width: '60px',
            position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 9999
        }}
    >
        <CircularProgress size={24} />
    </Box>
);

export default function OptimizedLoader() {
    return (
        <>
            <Suspense fallback={<LoadingFallback />}>
                <ScrollToTopButton />
            </Suspense>

            <Suspense fallback={null}>
                <InteractiveTerminal />
            </Suspense>
        </>
    );
}