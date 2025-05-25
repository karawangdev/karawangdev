'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function EventsHeroSection() {
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
                    backgroundImage: 'url("/subtle-pattern.png")',
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

            {/* Small decorative shapes */}
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
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Typography
                                variant="h2"
                                component="h1"
                                fontWeight="bold"
                                sx={{
                                    mb: 2,
                                    fontFamily: montserratFont,
                                    fontSize: { xs: '2rem', md: '3rem' },
                                    color: '#222222',
                                    position: 'relative',
                                    display: 'inline-block',
                                    pb: 1.5
                                }}
                            >
                                Our
                                <Box
                                    component="span"
                                    sx={{
                                        fontWeight: 900,
                                        position: 'relative',
                                        display: 'inline-block',
                                        color: '#0093E9',
                                        ml: 1,
                                        textShadow: '0 2px 10px rgba(0,147,233,0.1)',
                                        '&:hover': {
                                            color: '#FE6B8B',
                                            textShadow: '0 2px 15px rgba(254,107,139,0.2)',
                                            transition: 'all 0.3s ease-in-out'
                                        }
                                    }}
                                >
                                    Events
                                </Box>
                                {/* Add the CTA-style underline */}
                                <Box
                                    component={motion.div}
                                    initial={{ width: 0 }}
                                    animate={{ width: '60%' }}
                                    transition={{ duration: 0.6, delay: 0.6 }}
                                    sx={{
                                        position: 'absolute',
                                        height: '4px',
                                        width: '60%',
                                        bottom: 0,
                                        left: '20%',
                                        background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.5) 50%, rgba(0,147,233,0) 100%)',
                                        borderRadius: '2px',
                                    }}
                                />
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 4,
                                    opacity: 0.8,
                                    fontFamily: montserratFont,
                                    fontWeight: 400,
                                    lineHeight: 1.6,
                                    maxWidth: 600,
                                    color: '#555555'
                                }}
                            >
                                Discover tech talks, workshops, hackathons, and networking opportunities organized by the Karawang Developer Community
                            </Typography>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.4,
                                type: 'spring',
                                y: {
                                    repeat: Infinity,
                                    duration: 3,
                                    ease: "easeInOut",
                                    repeatType: "reverse"
                                }
                            }}
                            animate={{
                                y: [0, -10, 0]
                            }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: { xs: 250, md: 300 },
                                    width: '100%',
                                    filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))'
                                }}
                            >
                                <Image
                                    src="/events-illustration.svg"
                                    alt="Karawang Developer Community Events"
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