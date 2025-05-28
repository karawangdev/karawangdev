'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

// Define animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3
        }
    }
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.6, -0.05, 0.01, 0.99]
        }
    }
};

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function AboutStorySection() {
    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            sx={{
                py: 10,
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc', // Same background as other sections
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                // Add subtle pattern like HeroSection
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/subtle-pattern.png")',
                    backgroundSize: '1000px',
                    opacity: 0.1,
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Decorative elements like HeroSection */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '8%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,147,233,0.05) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '8%',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(254,107,139,0.06) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />

            {/* Add decorative shapes */}
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                sx={{
                    position: 'absolute',
                    top: '20%',
                    left: '15%',
                    width: '25px',
                    height: '25px',
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
                    bottom: '25%',
                    right: '12%',
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    background: 'rgba(254,107,139,0.08)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="xl"> {/* Changed to xl for consistency */}
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div variants={itemVariants}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: 400,
                                    width: '100%',
                                    borderRadius: '20px', // Consistent border radius
                                    overflow: 'hidden',
                                    boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)', // Consistent shadow
                                    border: '1px solid rgba(0, 147, 233, 0.1)', // Add border like other cards
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        transform: 'translateY(-5px)',
                                        boxShadow: '0 20px 50px rgba(0, 147, 233, 0.2)',
                                        borderColor: 'rgba(0, 147, 233, 0.2)'
                                    }
                                }}
                            >
                                <Image
                                    src="/community-story.jpg"
                                    alt="Cerita Komunitas Kami"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="h3"
                                component="h2"
                                fontWeight="bold"
                                gutterBottom
                                sx={{
                                    fontFamily: montserratFont,
                                    position: 'relative',
                                    display: 'inline-block',
                                    pb: 2,
                                    mb: 3,
                                    color: '#0093E9', // Consistent color
                                    fontSize: { xs: '2rem', md: '2.5rem' }
                                }}
                            >
                                Cerita Kami
                                {/* Add animated underline */}
                                <Box
                                    component={motion.div}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: 0.3 }}
                                    sx={{
                                        position: 'absolute',
                                        height: '3px',
                                        width: '100%',
                                        bottom: 0,
                                        left: 0,
                                        background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.8) 50%, rgba(0,147,233,0) 100%)',
                                        borderRadius: '2px',
                                    }}
                                />
                            </Typography>

                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontFamily: montserratFont,
                                    mb: 3,
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    lineHeight: 1.7,
                                    color: 'text.secondary'
                                }}
                            >
                                Komunitas Developer Karawang didirikan pada tahun 2022 oleh sekelompok
                                penggemar teknologi yang bersemangat yang melihat kebutuhan akan komunitas
                                teknologi lokal. Apa yang dimulai sebagai pertemuan informal di kafe-kafe
                                lokal telah berkembang menjadi komunitas yang berkembang dengan ratusan anggota.
                            </Typography>

                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    fontFamily: montserratFont,
                                    mb: 3,
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    lineHeight: 1.7,
                                    color: 'text.secondary'
                                }}
                            >
                                Kami percaya pada kekuatan berbagi pengetahuan, kolaborasi, dan membangun
                                koneksi. Komunitas kami menyambut pengembang dari semua tingkat keahlian,
                                dari pemula hingga ahli, dan dari semua latar belakang.
                            </Typography>

                            <Typography
                                variant="body1"
                                sx={{
                                    fontFamily: montserratFont,
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    lineHeight: 1.7,
                                    color: 'text.secondary'
                                }}
                            >
                                Hari ini, kami menyelenggarakan acara rutin, lokakarya, hackathon, dan
                                pertemuan sosial untuk mendorong pertumbuhan dan inovasi dalam ekosistem
                                teknologi Karawang.
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}