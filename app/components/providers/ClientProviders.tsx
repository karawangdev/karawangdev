'use client';

import dynamic from 'next/dynamic';
import { ReactNode, useEffect, Suspense } from 'react';
import { Inter } from 'next/font/google';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import ErrorBoundary from '../ui/ErrorBoundary';

// ✅ TYPED DYNAMIC IMPORTS
const CommunityAnalytics = dynamic(
    () => import('../analytics/CommunityAnalytics'),
    {
        ssr: false,
        loading: () => null
    }
);

const ScrollToTopButton = dynamic(
    () => import('../ui/ScrollToTopButton'),
    {
        ssr: false,
        loading: () => null
    }
);

const InteractiveTerminal = dynamic(
    () => import('../ui/InteractiveTerminal'),
    {
        ssr: false,
        loading: () => null
    }
);

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
    palette: {
        primary: {
            main: '#FE6B8B',
        },
        secondary: {
            main: '#FF8E53',
        },
    },
    typography: {
        fontFamily: inter.style.fontFamily,
    },
});

interface ClientProvidersProps {
    children: ReactNode;
}

export default function ClientProviders({ children }: ClientProvidersProps) {
    // ✅ INITIALIZE AOS DIRECTLY HERE
    useEffect(() => {
        const initAOS = async () => {
            try {
                if (typeof window !== 'undefined') {
                    const { default: AOS } = await import('aos');
                    await import('aos');

                    AOS.init({
                        duration: 800,
                        once: false,
                        mirror: true,
                        easing: 'ease-out-cubic',
                        delay: 0,
                    });
                }
            } catch (error) {
                console.warn('Failed to initialize AOS:', error);
            }
        };

        initAOS();
    }, []);

    return (
        <ErrorBoundary>
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

export function ThemeProvider({ children }: { children: React.ReactNode }) {
    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            {children}
        </MuiThemeProvider>
    );
}