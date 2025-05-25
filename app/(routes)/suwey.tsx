'use client';

import { Inter } from 'next/font/google';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';



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

export default function RootLayout(
    { children }: {
        children: React.ReactNode;
    }) {
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
            <body className={inter.className}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <main style={{
                        paddingTop: '70px', // To prevent content from hiding behind fixed navbar
                        minHeight: '100vh'
                    }}>
                        {children}
                    </main>
                </ThemeProvider>
            </body>
        </html>
    );
}