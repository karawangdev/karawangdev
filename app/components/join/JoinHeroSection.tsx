'use client';

import { Box, Container, Grid, Typography, Button, Stack } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

interface JoinHeroSectionProps {
    onStartProcess: () => void;
}

export default function JoinHeroSection({ onStartProcess }: JoinHeroSectionProps) {
    return (
        <Box
            component={motion.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            sx={{
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)', // Same as HeroSection
                color: '#333333', // Same as HeroSection
                py: { xs: 10, md: 16 },
                position: 'relative',
                overflow: 'hidden',
                fontFamily: montserratFont,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)', // Same as HeroSection
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/subtle-pattern.webp")',
                    backgroundSize: '1000px', // Same as HeroSection
                    opacity: 0.2, // Same as HeroSection
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
            {/* Decorative elements - same as HeroSection */}
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

            {/* Add some decorative shapes - same as HeroSection */}
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

            {/* Container Content */}
            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
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
                                    Bergabung dengan
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
                                        Komunitas
                                    </Box>
                                    {/* Add the CTA-style underline like HeroSection */}
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
                            </motion.div>
                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 4,
                                    opacity: 0.8,
                                    fontFamily: montserratFont,
                                    fontWeight: 500, // Same as HeroSection
                                    lineHeight: 1.6, // Same as HeroSection
                                    letterSpacing: '0.5px', // Same as HeroSection
                                    maxWidth: 600,
                                    color: '#555555',
                                }}
                            >
                                Jadilah bagian dari Komunitas Developer Karawang dan terhubung dengan sesama penggemar teknologi. Belajar, berbagi pengetahuan, dan berkembang bersama.
                            </Typography>

                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        onClick={onStartProcess}
                                        sx={{
                                            borderRadius: '14px',
                                            py: 1.5,
                                            px: 4,
                                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Same as HeroSection
                                            boxShadow: '0 3px 15px rgba(254, 107, 139, 0.4)', // Same as HeroSection
                                            fontWeight: 600,
                                            letterSpacing: '0.5px',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            fontFamily: montserratFont,
                                            '&:hover': {
                                                background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)', // Same as HeroSection
                                                boxShadow: '0 6px 20px rgba(254, 107, 139, 0.5)', // Same as HeroSection
                                            },
                                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                        }}
                                    >
                                        Mulai Proses Bergabung
                                    </Button>
                                </motion.div>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        variant="outlined"
                                        size="large"
                                        component={Link}
                                        href="/about"
                                        sx={{
                                            borderRadius: '14px',
                                            py: 1.5,
                                            px: 4,
                                            borderColor: '#0093E9',
                                            color: '#0093E9',
                                            fontWeight: 600,
                                            letterSpacing: '0.5px',
                                            textTransform: 'none',
                                            fontSize: '1rem',
                                            fontFamily: montserratFont,
                                            '&:hover': {
                                                borderColor: '#0093E9',
                                                backgroundColor: 'rgba(0, 147, 233, 0.05)',
                                                transform: 'translateY(-3px)', // Same as HeroSection
                                            },
                                            transition: 'all 0.3s'
                                        }}
                                    >
                                        Pelajari Lebih Lanjut
                                    </Button>
                                </motion.div>
                            </Stack>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: { xs: 300, md: 400 },
                                    width: '100%',
                                    filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))' // Same as HeroSection
                                }}
                            >
                                <Image
                                    src="/join-community.svg"
                                    alt="Bergabung dengan Komunitas Developer Karawang"
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