'use client';

import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';
import ScrollToTopButton from './components/ui/ScrollToTopButton';
import InteractiveTerminal from './components/ui/InteractiveTerminal';

const inter = Inter({ subsets: ['latin'] });

// Create a theme instance
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // Initialize AOS
    useEffect(() => {
        AOS.init({
            duration: 800,
            once: false,
            mirror: true,
        });
    }, []);

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Karawang Dev - Komunitas Developer Karawang</title>
                <meta name="description" content="Komunitas developer di Karawang untuk berbagi ilmu, berkolaborasi, dan berkembang bersama dalam dunia teknologi." />

                {/* Favicon */}
                <link rel="icon" href="/logo.jpg" />
                <link rel="shortcut icon" href="/logo.jpg" />
                <link rel="apple-touch-icon" href="/logo.jpg" />

                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="KarawangDev - Komunitas Developer Karawang" />
                <meta property="og:description" content="Komunitas developer di Karawang untuk berbagi ilmu, berkolaborasi, dan berkembang bersama dalam dunia teknologi." />
                <meta property="og:image" content="/logo.jpg" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="KarawangDev - Komunitas Developer Karawang" />
                <meta name="twitter:description" content="Komunitas developer di Karawang untuk berbagi ilmu, berkolaborasi, dan berkembang bersama dalam dunia teknologi." />
                <meta name="twitter:image" content="/logo.jpg" />
            </head>
            <body className={inter.className}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Navbar />
                    <main style={{
                        paddingTop: '70px', // To prevent content from hiding behind fixed navbar
                        minHeight: '100vh'
                    }}>
                        {children}
                    </main>
                    <Footer />
                    <ScrollToTopButton />
                    <InteractiveTerminal />
                </ThemeProvider>
            </body>
        </html>
    );
}