'use client';

import { Box, Container, Typography, Button, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import EventNoteIcon from '@mui/icons-material/EventNote';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function EventCTASection() {
    return (
        <Box
            component={motion.section}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            sx={{
                py: 10,
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc', // Same background as other sections
                position: 'relative',
                overflow: 'hidden',
                // Add subtle pattern like other sections
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/subtle-pattern.webp")',
                    backgroundSize: '1000px',
                    opacity: 0.1,
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Decorative elements like other sections */}
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

            <Container maxWidth="xl"> {/* Changed to xl for consistency */}
                <Grid container spacing={3} justifyContent="center"> {/* Changed spacing to 3 */}
                    <Grid item xs={12} md={6}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: '20px', // Same border radius as other cards
                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                    color: 'white',
                                    border: '1px solid rgba(254, 107, 139, 0.1)', // Add border like other cards
                                    boxShadow: '0 4px 20px rgba(254, 107, 139, 0.2)', // Same shadow pattern
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 15px 40px rgba(254, 107, 139, 0.3)', // Same hover shadow pattern
                                        transform: 'translateY(-5px)',
                                        borderColor: 'rgba(254, 107, 139, 0.2)'
                                    }
                                }}
                            >
                                <CalendarMonthIcon sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    fontWeight="bold"
                                    sx={{
                                        fontFamily: montserratFont,
                                        position: 'relative',
                                        display: 'inline-block',
                                        pb: 1.5,
                                        fontSize: { xs: '1.8rem', md: '2.125rem' } // Responsive font size
                                    }}
                                >
                                    Ajukan Event Anda
                                    {/* Add the CTA-style underline */}
                                    <Box
                                        component={motion.div}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '60%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        sx={{
                                            position: 'absolute',
                                            height: '3px',
                                            width: '60%',
                                            bottom: 0,
                                            left: '20%',
                                            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
                                            borderRadius: '2px',
                                        }}
                                    />
                                </Typography>
                                <Typography
                                    sx={{
                                        mb: 3,
                                        opacity: 0.9,
                                        fontFamily: montserratFont,
                                        fontWeight: 400,
                                        lineHeight: 1.6,
                                        maxWidth: 500,
                                        fontSize: { xs: '0.95rem', md: '1rem' } // Responsive font size
                                    }}
                                >
                                    Punya ide event untuk Komunitas Developer Karawang? Ajukan proposal Anda dan bagikan pengetahuan dengan sesama developer.
                                </Typography>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            mt: 2,
                                            bgcolor: 'white',
                                            color: '#FE6B8B',
                                            fontWeight: 600,
                                            '&:hover': {
                                                bgcolor: 'rgba(255,255,255,0.9)',
                                                boxShadow: '0 5px 15px rgba(255, 255, 255, 0.3)',
                                            },
                                            px: 4,
                                            py: 1.5,
                                            minWidth: '200px', // Consistent button width
                                            borderRadius: '14px',
                                            textTransform: 'none',
                                            fontFamily: montserratFont,
                                            fontSize: '1rem',
                                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                        }}
                                    >
                                        Kirim Proposal
                                    </Button>
                                </motion.div>
                            </Paper>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <motion.div
                            whileHover={{ y: -10 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: '20px', // Same border radius as other cards
                                    background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                    color: 'white',
                                    border: '1px solid rgba(0, 147, 233, 0.1)', // Add border like other cards
                                    boxShadow: '0 4px 20px rgba(0, 147, 233, 0.2)', // Same shadow pattern
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    transition: 'all 0.3s ease',
                                    '&:hover': {
                                        boxShadow: '0 15px 40px rgba(0, 147, 233, 0.3)', // Same hover shadow pattern
                                        transform: 'translateY(-5px)',
                                        borderColor: 'rgba(0, 147, 233, 0.2)'
                                    }
                                }}
                            >
                                <EventNoteIcon sx={{ fontSize: 60, mb: 2, opacity: 0.9 }} />
                                <Typography
                                    variant="h4"
                                    gutterBottom
                                    fontWeight="bold"
                                    sx={{
                                        fontFamily: montserratFont,
                                        position: 'relative',
                                        display: 'inline-block',
                                        pb: 1.5,
                                        fontSize: { xs: '1.8rem', md: '2.125rem' } // Responsive font size
                                    }}
                                >
                                    Sediakan Venue
                                    {/* Add the CTA-style underline */}
                                    <Box
                                        component={motion.div}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '60%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        sx={{
                                            position: 'absolute',
                                            height: '3px',
                                            width: '60%',
                                            bottom: 0,
                                            left: '20%',
                                            background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.5) 50%, rgba(255,255,255,0) 100%)',
                                            borderRadius: '2px',
                                        }}
                                    />
                                </Typography>
                                <Typography
                                    sx={{
                                        mb: 3,
                                        opacity: 0.9,
                                        fontFamily: montserratFont,
                                        fontWeight: 400,
                                        lineHeight: 1.6,
                                        maxWidth: 500,
                                        fontSize: { xs: '0.95rem', md: '1rem' } // Responsive font size
                                    }}
                                >
                                    Bermitra dengan kami dengan menyediakan venue untuk event komunitas. Dukung developer lokal sambil mempromosikan tempat Anda.
                                </Typography>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <Button
                                        variant="contained"
                                        size="large"
                                        sx={{
                                            mt: 2,
                                            bgcolor: 'white',
                                            color: '#0093E9',
                                            fontWeight: 600,
                                            '&:hover': {
                                                bgcolor: 'rgba(255,255,255,0.9)',
                                                boxShadow: '0 5px 15px rgba(255, 255, 255, 0.3)',
                                            },
                                            px: 4,
                                            py: 1.5,
                                            minWidth: '200px', // Consistent button width
                                            borderRadius: '14px',
                                            textTransform: 'none',
                                            fontFamily: montserratFont,
                                            fontSize: '1rem',
                                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                        }}
                                    >
                                        Hubungi Kami
                                    </Button>
                                </motion.div>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}