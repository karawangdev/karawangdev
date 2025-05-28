'use client';

import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn, DirectionsCar, Train } from '@mui/icons-material';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

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

export default function EventLocationSection({ location, address }: { location: string, address: string }) {
    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            sx={{
                py: 10,
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                fontFamily: montserratFont,
                position: 'relative',
                overflow: 'hidden',
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
            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '20%',
                    right: '10%',
                    width: '180px',
                    height: '180px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,147,233,0.04) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '25%',
                    left: '5%',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(254,107,139,0.05) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="lg">
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        fontWeight="bold"
                        sx={{
                            mb: 2,
                            fontFamily: montserratFont,
                            color: '#222222',
                            fontSize: { xs: '1.75rem', md: '2.5rem' },
                            position: 'relative',
                            display: 'inline-block',
                            pb: 1.5,
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        Lokasi Acara
                        <Box
                            component={motion.div}
                            initial={{ width: 0 }}
                            whileInView={{ width: '60%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
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

                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            mb: 6,
                            fontFamily: montserratFont,
                            fontWeight: 500,
                            opacity: 0.8,
                            maxWidth: 800,
                            mx: 'auto',
                            color: '#555555',
                            lineHeight: 1.6,
                            letterSpacing: '0.3px',
                            fontSize: { xs: '1rem', md: '1.1rem' }
                        }}
                    >
                        Temukan lokasi venue acara dengan mudah dan dapatkan petunjuk arah
                    </Typography>
                </motion.div>

                {/* Grid Container - Full width layout */}
                <Grid container spacing={4} justifyContent="center">
                    {/* Location Info Section - Full width on all screens */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.02 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            style={{ height: '100%' }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: { xs: 3, md: 4 },
                                    height: '100%',
                                    minHeight: 500, // Fixed height for consistency
                                    borderRadius: '20px',
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    background: 'white',
                                    border: '1px solid rgba(0,147,233,0.1)',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    '&:hover': {
                                        boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)',
                                        borderColor: 'rgba(0,147,233,0.2)',
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                {/* Header with Icon */}
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    mb: 3,
                                    textAlign: 'center'
                                }}>
                                    <Box
                                        sx={{
                                            p: 2,
                                            borderRadius: '20px',
                                            background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                            boxShadow: '0 8px 30px rgba(0, 147, 233, 0.3)',
                                            mb: 2,
                                            transition: 'all 0.3s ease',
                                            '&:hover': {
                                                transform: 'scale(1.1) rotate(5deg)',
                                                boxShadow: '0 12px 40px rgba(0, 147, 233, 0.4)'
                                            }
                                        }}
                                    >
                                        <LocationOn sx={{ color: 'white', fontSize: 32 }} />
                                    </Box>
                                    <Typography
                                        variant="h4"
                                        component="h3"
                                        fontWeight="bold"
                                        sx={{
                                            fontFamily: montserratFont,
                                            color: '#222222',
                                            position: 'relative',
                                            display: 'inline-block',
                                            pb: 1.5,
                                            fontSize: { xs: '1.5rem', md: '1.7rem' },
                                            textAlign: 'center'
                                        }}
                                    >
                                        {location || "Gedung Serbaguna Karawang"}
                                        <Box
                                            component={motion.div}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '80%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                            sx={{
                                                position: 'absolute',
                                                height: '4px',
                                                width: '80%',
                                                bottom: 0,
                                                left: '10%',
                                                background: 'linear-gradient(90deg, rgba(0,147,233,0.4) 0%, rgba(0,147,233,0.8) 50%, rgba(0,147,233,0.4) 100%)',
                                                borderRadius: '2px',
                                            }}
                                        />
                                    </Typography>
                                </Box>

                                {/* Content Section */}
                                <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                                    {/* Address */}
                                    <Box sx={{
                                        mb: 3,
                                        p: 2,
                                        borderRadius: '12px',
                                        background: 'linear-gradient(45deg, rgba(0,147,233,0.02) 0%, rgba(128,208,199,0.02) 100%)',
                                        border: '1px solid rgba(0,147,233,0.05)'
                                    }}>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: montserratFont,
                                                color: '#555555',
                                                fontSize: { xs: '1rem', md: '1.1rem' },
                                                lineHeight: 1.6,
                                                letterSpacing: '0.3px',
                                                textAlign: 'center',
                                                fontWeight: 500
                                            }}
                                        >
                                            {address || "Jl. Tuparev No.1, Karawang Wetan, Kec. Karawang Tim., Kabupaten Karawang, Jawa Barat 41314"}
                                        </Typography>
                                    </Box>

                                    {/* Description */}
                                    <Typography
                                        variant="body1"
                                        sx={{
                                            fontFamily: montserratFont,
                                            color: '#666666',
                                            mb: 4,
                                            fontSize: { xs: '0.95rem', md: '1rem' },
                                            lineHeight: 1.6,
                                            textAlign: 'center',
                                            fontStyle: 'italic'
                                        }}
                                    >
                                        Venue mudah diakses dengan transportasi umum. Tersedia area parkir untuk peserta yang membawa kendaraan pribadi.
                                    </Typography>

                                    {/* Transportation Info */}
                                    <Box sx={{
                                        pt: 3,
                                        borderTop: '2px solid rgba(0,147,233,0.1)',
                                    }}>
                                        <Grid container spacing={3}>
                                            <Grid item xs={6}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    p: 2,
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(45deg, rgba(0,147,233,0.03) 0%, rgba(0,147,233,0.08) 100%)',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                        background: 'linear-gradient(45deg, rgba(0,147,233,0.08) 0%, rgba(0,147,233,0.15) 100%)'
                                                    }
                                                }}>
                                                    <Box sx={{
                                                        width: 45,
                                                        height: 45,
                                                        backgroundColor: 'rgba(0,147,233,0.1)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mb: 1,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(0,147,233,0.2)',
                                                            transform: 'scale(1.1)'
                                                        }
                                                    }}>
                                                        <DirectionsCar sx={{ color: '#0093E9', fontSize: 24 }} />
                                                    </Box>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            fontFamily: montserratFont,
                                                            color: '#555555',
                                                            fontWeight: 600,
                                                            fontSize: '0.9rem',
                                                            textAlign: 'center'
                                                        }}
                                                    >
                                                        Parkir Tersedia
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                            <Grid item xs={6}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    alignItems: 'center',
                                                    p: 2,
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(45deg, rgba(0,147,233,0.03) 0%, rgba(0,147,233,0.08) 100%)',
                                                    transition: 'all 0.3s ease',
                                                    '&:hover': {
                                                        transform: 'translateY(-4px)',
                                                        background: 'linear-gradient(45deg, rgba(0,147,233,0.08) 0%, rgba(0,147,233,0.15) 100%)'
                                                    }
                                                }}>
                                                    <Box sx={{
                                                        width: 45,
                                                        height: 45,
                                                        backgroundColor: 'rgba(0,147,233,0.1)',
                                                        borderRadius: '50%',
                                                        display: 'flex',
                                                        alignItems: 'center',
                                                        justifyContent: 'center',
                                                        mb: 1,
                                                        transition: 'all 0.3s ease',
                                                        '&:hover': {
                                                            backgroundColor: 'rgba(0,147,233,0.2)',
                                                            transform: 'scale(1.1)'
                                                        }
                                                    }}>
                                                        <Train sx={{ color: '#0093E9', fontSize: 24 }} />
                                                    </Box>
                                                    <Typography
                                                        variant="body2"
                                                        sx={{
                                                            fontFamily: montserratFont,
                                                            color: '#555555',
                                                            fontWeight: 600,
                                                            fontSize: '0.9rem',
                                                            textAlign: 'center'
                                                        }}
                                                    >
                                                        Akses Publik
                                                    </Typography>
                                                </Box>
                                            </Grid>
                                        </Grid>

                                        {/* Maps Link */}
                                        <Box sx={{ mt: 4, textAlign: 'center' }}>
                                            <motion.div
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                            >
                                                <Box
                                                    onClick={() => {
                                                        const googleMapsUrl = `https://www.google.com/maps?q=-6.3015516362005926,107.29666822649251`;
                                                        window.open(googleMapsUrl, '_blank');
                                                    }}
                                                    sx={{
                                                        display: 'inline-flex',
                                                        alignItems: 'center',
                                                        background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                                        borderRadius: '15px',
                                                        padding: '12px 24px',
                                                        border: 'none',
                                                        boxShadow: '0 6px 20px rgba(0, 147, 233, 0.3)',
                                                        transition: 'all 0.3s ease',
                                                        cursor: 'pointer',
                                                        '&:hover': {
                                                            boxShadow: '0 10px 30px rgba(0, 147, 233, 0.4)',
                                                            transform: 'translateY(-3px)'
                                                        }
                                                    }}
                                                >
                                                    <LocationOn sx={{ color: 'white', fontSize: 24, mr: 1.5 }} />
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            fontFamily: montserratFont,
                                                            color: 'white',
                                                            fontWeight: 600,
                                                            fontSize: '1rem'
                                                        }}
                                                    >
                                                        Buka di Google Maps
                                                    </Typography>
                                                </Box>
                                            </motion.div>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>

                    {/* Map Section - Same width as location card */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8, scale: 1.01 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            style={{ height: '100%' }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    height: 500, // Same height as location card
                                    boxShadow: '0 8px 30px rgba(0,0,0,0.12)',
                                    border: '2px solid rgba(0,147,233,0.1)',
                                    transition: 'all 0.3s ease',
                                    position: 'relative',
                                    '&:hover': {
                                        boxShadow: '0 20px 50px rgba(0, 147, 233, 0.2)',
                                        borderColor: 'rgba(0,147,233,0.3)',
                                        transform: 'translateY(-4px)'
                                    },
                                    '&::before': {
                                        content: '""',
                                        position: 'absolute',
                                        top: -2,
                                        left: -2,
                                        right: -2,
                                        bottom: -2,
                                        background: 'linear-gradient(45deg, rgba(0,147,233,0.1), rgba(128,208,199,0.1))',
                                        borderRadius: '22px',
                                        zIndex: -1,
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    },
                                    '&:hover::before': {
                                        opacity: 1
                                    }
                                }}
                            >
                                <iframe
                                    src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.9448374897896!2d107.29666822649251!3d-6.3015516362005926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMTgnMDUuNiJTIDEwN8KwMTcnNDguMCJF!5e0!3m2!1sen!2sid!4v1234567890123!5m2!1sen!2sid&maptype=roadmap&zoom=15`}
                                    width="100%"
                                    height="100%"
                                    style={{
                                        border: 0,
                                        borderRadius: '20px',
                                        filter: 'contrast(1.1) saturate(1.1)',
                                    }}
                                    allowFullScreen={true}
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Lokasi Event - Karawang Digital Hub"
                                />

                                <Box
                                    sx={{
                                        position: 'absolute',
                                        top: 16,
                                        left: 16,
                                        background: 'rgba(255, 255, 255, 0.95)',
                                        backdropFilter: 'blur(10px)',
                                        borderRadius: '12px',
                                        padding: '8px 12px',
                                        border: '1px solid rgba(0,147,233,0.2)',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                    }}
                                >
                                    <Typography
                                        variant="caption"
                                        sx={{
                                            fontFamily: montserratFont,
                                            color: '#0093E9',
                                            fontWeight: 600,
                                            fontSize: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center'
                                        }}
                                    >
                                        <LocationOn sx={{ fontSize: 16, mr: 0.5 }} />
                                        Karawang Digital Hub
                                    </Typography>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}