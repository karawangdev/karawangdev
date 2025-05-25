'use client';

import { Box, Container, Typography, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { Send, Celebration } from '@mui/icons-material';
import Image from 'next/image';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function JoinTelegramStep() {
    return (
        <Box
            component={motion.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                py: 10,
                fontFamily: montserratFont,
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                position: 'relative',
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
                }
            }}
        >
            <Container maxWidth="md">
                <Box sx={{ textAlign: 'center' }}>
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1, rotate: [0, 10, 0, -10, 0] }}
                        transition={{
                            type: "spring",
                            stiffness: 260,
                            damping: 20,
                            rotate: { duration: 0.5, delay: 0.3 }
                        }}
                        style={{ display: 'inline-block', marginBottom: '1.5rem' }}
                    >
                        <Celebration fontSize="large" color="primary" sx={{ fontSize: 60 }} />
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <Typography
                            variant="h3"
                            component="h2"
                            fontWeight="bold"
                            gutterBottom
                            sx={{ fontFamily: montserratFont }}
                        >
                            You're All Set!
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <Typography
                            variant="body1"
                            sx={{
                                mb: 5,
                                opacity: 0.8,
                                fontFamily: montserratFont,
                                fontSize: '1.1rem',
                                maxWidth: 600,
                                mx: 'auto',
                                lineHeight: 1.6
                            }}
                        >
                            Thank you for agreeing to our code of conduct. You're ready to join our Telegram community where all our discussions, events, and announcements take place.
                        </Typography>
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.6 }}
                    >
                        <Box
                            sx={{
                                position: 'relative',
                                height: 200,
                                width: '100%',
                                mb: 5,
                                maxWidth: 500,
                                mx: 'auto'
                            }}
                        >
                            <Image
                                src="/telegram-community.svg"
                                alt="Join our Telegram Community"
                                fill
                                style={{ objectFit: 'contain' }}
                            />
                        </Box>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            href="https://t.me/KarawangDevs"
                            target="_blank"
                            rel="noopener noreferrer"
                            startIcon={<Send />}
                            sx={{
                                borderRadius: '14px',
                                py: 2,
                                px: 6,
                                background: 'linear-gradient(45deg, #0088cc 30%, #29B6F6 90%)', // Telegram colors
                                boxShadow: '0 6px 20px rgba(0, 136, 204, 0.4)',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                textTransform: 'none',
                                fontSize: '1.2rem',
                                fontFamily: montserratFont,
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #0088cc 50%, #29B6F6 100%)',
                                    boxShadow: '0 8px 25px rgba(0, 136, 204, 0.6)',
                                },
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            Join Our Telegram Group
                        </Button>
                    </motion.div>

                    <Typography
                        variant="body2"
                        sx={{
                            mt: 3,
                            fontFamily: montserratFont,
                            color: '#666',
                            fontSize: '0.9rem'
                        }}
                    >
                        You'll be redirected to the Telegram app or website
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}