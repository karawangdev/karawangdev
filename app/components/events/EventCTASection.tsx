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
                py: 12,
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                position: 'relative',
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
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
                                    borderRadius: 4,
                                    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                    color: 'white',
                                    boxShadow: '0 6px 20px rgba(254, 107, 139, 0.3)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
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
                                        pb: 1.5
                                    }}
                                >
                                    Submit Your Event
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
                                        maxWidth: 500
                                    }}
                                >
                                    Have an event idea for the Karawang Developer Community? Submit your proposal and share your knowledge with fellow developers.
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
                                            borderRadius: '14px',
                                            textTransform: 'none',
                                            fontFamily: montserratFont,
                                            fontSize: '1rem',
                                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                        }}
                                    >
                                        Submit Proposal
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
                                    borderRadius: 4,
                                    background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                    color: 'white',
                                    boxShadow: '0 6px 20px rgba(0, 147, 233, 0.3)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    textAlign: 'center'
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
                                        pb: 1.5
                                    }}
                                >
                                    Host a Venue
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
                                        maxWidth: 500
                                    }}
                                >
                                    Partner with us by providing a venue for our community events. Support local developers while promoting your space.
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
                                            borderRadius: '14px',
                                            textTransform: 'none',
                                            fontFamily: montserratFont,
                                            fontSize: '1rem',
                                            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                        }}
                                    >
                                        Contact Us
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