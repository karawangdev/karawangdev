'use client';

import { Box, Container, Typography, Stack, Button } from '@mui/material';
import Link from 'next/link';
import { People as PeopleIcon, Event as EventIcon } from '@mui/icons-material';
import { motion } from 'framer-motion';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function AboutCtaSection() {
    return (
        <Box
            component={motion.section}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
                py: 10,
                position: 'relative',
                color: '#333',
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc',
                borderTop: '1px solid rgba(0, 147, 233, 0.1)',
                borderBottom: '1px solid rgba(0, 147, 233, 0.1)',
                overflow: 'hidden',
            }}
        >
            {/* Subtle gradient overlay */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(135deg, rgba(0, 147, 233, 0.08) 0%, rgba(128, 208, 199, 0.08) 100%)',
                    zIndex: 0,
                }}
            />

            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '15%',
                    right: '10%',
                    width: 300,
                    height: 300,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,147,233,0.05) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: 200,
                    height: 200,
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(128,208,199,0.05) 0%, rgba(255,255,255,0) 70%)',
                    zIndex: 0,
                }}
            />

            <Container maxWidth="md" sx={{ position: 'relative', zIndex: 1 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <Typography
                            variant="h3"
                            component="h2"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#0056a8',
                                position: 'relative',
                                display: 'inline-block',
                                fontSize: { xs: '2rem', md: '2.5rem' }
                            }}
                        >
                            Bergabunglah Dengan Kami
                            <Box
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

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 4,
                                color: '#555',
                                fontFamily: montserratFont,
                                fontWeight: 500,
                                lineHeight: 1.5,
                                maxWidth: 700,
                                mx: 'auto',
                                fontSize: { xs: '1.1rem', md: '1.25rem' }
                            }}
                        >
                            Bergabunglah dengan kami dalam membangun komunitas developer Karawang dan membentuk masa depan teknologi di wilayah kita
                        </Typography>
                    </motion.div>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={3}
                        justifyContent="center"
                        sx={{ mt: 2 }}
                    >
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                component={Link}
                                href="/join"
                                startIcon={<PeopleIcon />}
                                sx={{
                                    borderRadius: '14px',
                                    py: 1.5,
                                    px: 4, // Reduced padding to match content
                                    minWidth: '200px', // Set minimum width for consistency
                                    background: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)',
                                    color: 'white',
                                    fontWeight: 600,
                                    letterSpacing: '0.5px',
                                    textTransform: 'none',
                                    fontSize: '1rem',
                                    fontFamily: montserratFont,
                                    boxShadow: '0 4px 15px rgba(0, 147, 233, 0.2)',
                                    '&:hover': {
                                        boxShadow: '0 6px 20px rgba(0, 147, 233, 0.3)',
                                    },
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                }}
                            >
                                Gabung Komunitas
                            </Button>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Button
                                variant="outlined"
                                size="large"
                                component={Link}
                                href="/events"
                                startIcon={<EventIcon />}
                                sx={{
                                    borderRadius: '14px',
                                    py: 1.5,
                                    px: 4, // Same padding as first button
                                    minWidth: '200px', // Same minimum width
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
                                        boxShadow: '0 4px 15px rgba(0, 147, 233, 0.1)',
                                    },
                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                }}
                            >
                                Hadiri Event
                            </Button>
                        </motion.div>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}