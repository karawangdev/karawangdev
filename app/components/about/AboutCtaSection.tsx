'use client';

import { Box, Container, Typography, Stack } from '@mui/material';
import Link from 'next/link';
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
                background: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)',
                color: 'white',
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="md">
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
                            sx={{ fontFamily: montserratFont }}
                        >
                            Be Part of Our Story
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
                                opacity: 0.9,
                                fontFamily: montserratFont,
                                fontWeight: 500,
                                maxWidth: 700,
                                mx: 'auto'
                            }}
                        >
                            Join us in building Karawang's developer community and shaping the future of tech in our region
                        </Typography>
                    </motion.div>

                    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Box component={Link} href="/join" sx={{ textDecoration: 'none' }}>
                                <Box
                                    sx={{
                                        borderRadius: '14px',
                                        py: 1.5,
                                        px: 5,
                                        bgcolor: 'white',
                                        color: '#0093E9',
                                        fontWeight: 'bold',
                                        fontFamily: montserratFont,
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.9)',
                                            boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
                                        },
                                        display: 'inline-block',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Join the Community
                                </Box>
                            </Box>
                        </motion.div>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Box component={Link} href="/events" sx={{ textDecoration: 'none' }}>
                                <Box
                                    sx={{
                                        borderRadius: '14px',
                                        py: 1.5,
                                        px: 5,
                                        border: '2px solid white',
                                        color: 'white',
                                        fontWeight: 'bold',
                                        fontFamily: montserratFont,
                                        '&:hover': {
                                            bgcolor: 'rgba(255, 255, 255, 0.1)',
                                        },
                                        display: 'inline-block',
                                        transition: 'all 0.3s'
                                    }}
                                >
                                    Attend an Event
                                </Box>
                            </Box>
                        </motion.div>
                    </Stack>
                </Box>
            </Container>
        </Box>
    );
}