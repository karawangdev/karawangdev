'use client';

import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function HeroSection() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    // Don't render animations until client-side hydration is complete
    if (!isClient) {
        return (
            <Box
                sx={{
                    background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                    color: '#333333',
                    py: { xs: 10, md: 16 },
                    position: 'relative',
                    overflow: 'hidden',
                    fontFamily: montserratFont,
                    boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                }}
            >
                <Container maxWidth="lg">
                    <Grid container spacing={4} alignItems="center">
                        <Grid item xs={12} md={6}>
                            {/* Static version without animations */}
                            <Box sx={{ textAlign: 'center' }}>
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: 180,
                                        height: 180,
                                        mx: 'auto',
                                        mb: 4,
                                    }}
                                >
                                    <Image
                                        src="/logo.webp"
                                        alt="Karawang Dev Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </Box>
                                <Typography
                                    variant="h2"
                                    component="div" // Changed from default to div
                                    fontWeight="bold"
                                    sx={{
                                        mb: 2,
                                        fontFamily: montserratFont,
                                        color: '#222222',
                                        fontSize: { xs: '2rem', md: '2.5rem' },
                                    }}
                                >
                                    Karawang
                                    <Box
                                        component="span"
                                        sx={{
                                            fontWeight: 900,
                                            color: '#0093E9',
                                        }}
                                    >
                                        Dev
                                    </Box>
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="div" // Changed from default to div
                                    sx={{
                                        mb: 4,
                                        opacity: 0.8,
                                        fontFamily: montserratFont,
                                        color: '#555555',
                                    }}
                                >
                                    Terhubung, belajar, dan berkembang bersama sesama pengembang di Karawang
                                </Typography>
                                <Stack direction={{ xs: 'column', md: 'row' }} spacing={2}>
                                    <Button
                                        variant="contained"
                                        size="large"
                                        component={Link}
                                        href="/join"
                                        sx={{
                                            borderRadius: '14px',
                                            py: 1.5,
                                            px: 4,
                                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                            fontFamily: montserratFont,
                                        }}
                                    >
                                        Gabung Komunitas
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        component={Link}
                                        href="/events"
                                        sx={{
                                            borderRadius: '14px',
                                            py: 1.5,
                                            px: 4,
                                            borderColor: '#0093E9',
                                            color: '#0093E9',
                                            fontFamily: montserratFont,
                                        }}
                                    >
                                        Event Mendatang
                                    </Button>
                                </Stack>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: { xs: 300, md: 400 },
                                    width: '100%',
                                }}
                            >
                                <Image
                                    src="/logo.webp"
                                    alt="Karawang Developer Community"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        );
    }

    return (
        <Box
            component={motion.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            sx={{
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                color: '#333333',
                py: { xs: 10, md: 16 },
                position: 'relative',
                overflow: 'hidden',
                fontFamily: montserratFont,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/subtle-pattern.webp")',
                    backgroundSize: '1000px',
                    opacity: 0.2,
                    pointerEvents: 'none'
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '15%',
                    background: 'linear-gradient(0deg, rgba(0,147,233,0.05) 0%, rgba(255,255,255,0) 100%)',
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '5%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,147,233,0.05) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(254,107,139,0.06) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />

            {/* Decorative shapes */}
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    transform: 'rotate(45deg)',
                    background: 'rgba(0,147,233,0.1)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                sx={{
                    position: 'absolute',
                    top: '25%',
                    right: '15%',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: 'rgba(254,107,139,0.08)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '20%',
                    width: '15px',
                    height: '15px',
                    background: 'rgba(0,147,233,0.12)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        {/* Mobile layout */}
                        <Box
                            sx={{
                                display: { xs: 'flex', md: 'none' },
                                flexDirection: 'column',
                                alignItems: 'center',
                                textAlign: 'center'
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: 180,
                                        height: 180,
                                        overflow: 'hidden',
                                        mb: 4,
                                    }}
                                >
                                    <Image
                                        src="/logo.webp"
                                        alt="Karawang Dev Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </Box>
                            </motion.div>

                            <motion.div
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            >
                                <Typography
                                    variant="h2"
                                    component="div" // Changed from h1 to div
                                    fontWeight="bold"
                                    sx={{
                                        mb: 2,
                                        fontFamily: montserratFont,
                                        color: '#222222',
                                        fontSize: '2rem',
                                    }}
                                >
                                    Karawang
                                    <Box
                                        component="span"
                                        sx={{
                                            fontWeight: 900,
                                            color: '#0093E9',
                                            textShadow: '0 2px 10px rgba(0,147,233,0.1)',
                                        }}
                                    >
                                        Dev
                                    </Box>
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="div" // Changed from default to div
                                    sx={{
                                        mb: 4,
                                        opacity: 0.8,
                                        fontFamily: montserratFont,
                                        fontWeight: 500,
                                        color: '#555555',
                                        fontSize: '0.9rem'
                                    }}
                                >
                                    Terhubung, belajar, dan berkembang bersama sesama pengembang di Karawang
                                </Typography>
                                <Stack direction="column" spacing={2} sx={{ width: '100%' }}>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            component={Link}
                                            href="/join"
                                            fullWidth
                                            sx={{
                                                borderRadius: '14px',
                                                py: 1.5,
                                                px: 4,
                                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                                boxShadow: '0 3px 15px rgba(137, 109, 115, 0.4)',
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontFamily: montserratFont,
                                            }}
                                        >
                                            Gabung Komunitas
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            component={Link}
                                            href="/events"
                                            fullWidth
                                            sx={{
                                                borderRadius: '14px',
                                                py: 1.5,
                                                px: 4,
                                                borderColor: '#0093E9',
                                                color: '#0093E9',
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontFamily: montserratFont,
                                            }}
                                        >
                                            Event Mendatang
                                        </Button>
                                    </motion.div>
                                </Stack>
                            </motion.div>
                        </Box>

                        {/* Desktop layout */}
                        <Box
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                alignItems: 'flex-start',
                                gap: 4
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                                whileHover={{ scale: 1.05 }}
                            >
                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: 240,
                                        height: 240,
                                        overflow: 'hidden',
                                        flexShrink: 0,
                                    }}
                                >
                                    <Image
                                        src="/logo.webp"
                                        alt="Karawang Dev Logo"
                                        fill
                                        style={{ objectFit: 'contain' }}
                                        priority
                                    />
                                </Box>
                            </motion.div>

                            <motion.div
                                initial={{ x: -50, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                                style={{ flex: 1 }}
                            >
                                <Typography
                                    variant="h2"
                                    component="h1" // Keep h1 for main heading for SEO
                                    fontWeight="bold"
                                    sx={{
                                        mb: 2,
                                        fontFamily: montserratFont,
                                        color: '#222222',
                                        fontSize: '2.5rem',
                                    }}
                                >
                                    Karawang
                                    <Box
                                        component="span"
                                        sx={{
                                            fontWeight: 900,
                                            color: '#0093E9',
                                            textShadow: '0 2px 10px rgba(0,147,233,0.1)',
                                        }}
                                    >
                                        Dev
                                    </Box>
                                </Typography>
                                <Typography
                                    variant="h6"
                                    component="div" // Changed from default to div
                                    sx={{
                                        mb: 4,
                                        opacity: 0.8,
                                        fontFamily: montserratFont,
                                        fontWeight: 500,
                                        color: '#555555',
                                        fontSize: '1rem'
                                    }}
                                >
                                    Terhubung, belajar, dan berkembang bersama sesama pengembang di Karawang
                                </Typography>
                                <Stack direction="row" spacing={2}>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            variant="contained"
                                            size="large"
                                            component={Link}
                                            href="/join"
                                            sx={{
                                                borderRadius: '14px',
                                                py: 1.5,
                                                px: 4,
                                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                                boxShadow: '0 3px 15px rgba(254, 107, 139, 0.4)',
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontFamily: montserratFont,
                                            }}
                                        >
                                            Gabung Komunitas
                                        </Button>
                                    </motion.div>
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
                                        <Button
                                            variant="outlined"
                                            size="large"
                                            component={Link}
                                            href="/events"
                                            sx={{
                                                borderRadius: '14px',
                                                py: 1.5,
                                                px: 4,
                                                borderColor: '#0093E9',
                                                color: '#0093E9',
                                                fontWeight: 600,
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontFamily: montserratFont,
                                            }}
                                        >
                                            Event Mendatang
                                        </Button>
                                    </motion.div>
                                </Stack>
                            </motion.div>
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: { xs: 300, md: 400 },
                                    width: '100%',
                                    filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))'
                                }}
                            >
                                <Image
                                    src="/logo.webp"
                                    alt="Karawang Developer Community"
                                    fill
                                    style={{ objectFit: 'contain' }}
                                    priority
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}