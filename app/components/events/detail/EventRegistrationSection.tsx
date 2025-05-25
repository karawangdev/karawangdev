'use client';

import { useState } from 'react';
import { Box, Container, Typography, Paper, Grid, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { motion } from 'framer-motion';
import { Send as SendIcon } from '@mui/icons-material';

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

export default function EventRegistrationSection({ event }: { event: any }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        organization: '',
        agreeToTerms: false
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: name === 'agreeToTerms' ? checked : value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Here you would handle the form submission, e.g., send data to an API
        console.log('Form submitted:', formData);
        alert('Registration submitted! This would connect to your backend in production.');
    };

    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            sx={{
                py: 10,
                bgcolor: '#f8f9fa',
                position: 'relative',
                fontFamily: montserratFont,
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
            <Container maxWidth="md">
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
                            fontSize: { xs: '1.75rem', md: '2.5rem' }
                        }}
                    >
                        Register for This Event
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h6"
                        align="center"
                        sx={{
                            mb: 6,
                            fontFamily: montserratFont,
                            fontWeight: 400,
                            opacity: 0.8,
                            maxWidth: 800,
                            mx: 'auto',
                            color: '#555555'
                        }}
                    >
                        Secure your spot for this exciting event. {event.price === 'Free' ? 'Participation is completely free!' : `Registration fee: ${event.price}`}
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Paper
                        elevation={0}
                        sx={{
                            p: 4,
                            borderRadius: 4,
                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                            background: 'white'
                        }}
                    >
                        <form onSubmit={handleSubmit}>
                            <Grid container spacing={3}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Full Name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                                fontFamily: montserratFont
                                            },
                                            '& .MuiInputLabel-root': {
                                                fontFamily: montserratFont
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Email Address"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                                fontFamily: montserratFont
                                            },
                                            '& .MuiInputLabel-root': {
                                                fontFamily: montserratFont
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Phone Number"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                                fontFamily: montserratFont
                                            },
                                            '& .MuiInputLabel-root': {
                                                fontFamily: montserratFont
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        fullWidth
                                        label="Organization/Company"
                                        name="organization"
                                        value={formData.organization}
                                        onChange={handleChange}
                                        variant="outlined"
                                        sx={{
                                            '& .MuiOutlinedInput-root': {
                                                borderRadius: 2,
                                                fontFamily: montserratFont
                                            },
                                            '& .MuiInputLabel-root': {
                                                fontFamily: montserratFont
                                            }
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                name="agreeToTerms"
                                                checked={formData.agreeToTerms}
                                                onChange={handleChange}
                                                required
                                                sx={{
                                                    color: '#0093E9',
                                                    '&.Mui-checked': {
                                                        color: '#0093E9',
                                                    }
                                                }}
                                            />
                                        }
                                        label={
                                            <Typography
                                                variant="body2"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    fontSize: '0.9rem'
                                                }}
                                            >
                                                I agree to the terms and conditions and privacy policy
                                            </Typography>
                                        }
                                    />
                                </Grid>
                                <Grid item xs={12} sx={{ textAlign: 'center', mt: 2 }}>
                                    <motion.div
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        <Button
                                            type="submit"
                                            variant="contained"
                                            size="large"
                                            endIcon={<SendIcon />}
                                            sx={{
                                                borderRadius: '14px',
                                                py: 1.5,
                                                px: 4,
                                                background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                                boxShadow: '0 3px 15px rgba(0, 147, 233, 0.4)',
                                                fontWeight: 600,
                                                letterSpacing: '0.5px',
                                                textTransform: 'none',
                                                fontSize: '1rem',
                                                fontFamily: montserratFont,
                                                '&:hover': {
                                                    background: 'linear-gradient(45deg, #80D0C7 30%, #0093E9 90%)',
                                                    boxShadow: '0 6px 20px rgba(0, 147, 233, 0.5)',
                                                },
                                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                            }}
                                        >
                                            Complete Registration
                                        </Button>
                                    </motion.div>
                                </Grid>
                            </Grid>
                        </form>
                    </Paper>
                </motion.div>
            </Container>
        </Box>
    );
}