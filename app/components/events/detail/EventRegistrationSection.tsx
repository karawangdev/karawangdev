'use client';

import { useState } from 'react';
import { Box, Container, Typography, Paper, Grid, TextField, Button, Checkbox, FormControlLabel } from '@mui/material';
import { motion } from 'framer-motion';
import { Send as SendIcon, PersonAdd } from '@mui/icons-material';

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
        console.log('Form submitted:', formData);
        alert('Pendaftaran berhasil dikirim! Sistem akan terhubung ke backend pada versi produksi.');
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
                    top: '15%',
                    right: '8%',
                    width: '160px',
                    height: '160px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,147,233,0.04) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '6%',
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
                        Daftar Acara Ini
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
                        Pastikan tempat Anda untuk acara menarik ini. {event?.price === 'Free' ? 'Partisipasi sepenuhnya gratis!' : `Biaya pendaftaran: ${event?.price || 'Gratis'}`}
                    </Typography>
                </motion.div>

                {/* Form Container */}
                <Container maxWidth="md">
                    <Box sx={{ display: 'flex', justifyContent: 'center', px: { xs: 2, sm: 0 } }}>
                        <Box sx={{ width: '100%', maxWidth: '600px' }}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -8, scale: 1.01 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: { xs: 3, sm: 4, md: 5 }, // Adjusted padding
                                        borderRadius: '20px',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        background: 'white',
                                        border: '1px solid rgba(0,147,233,0.1)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)',
                                            borderColor: 'rgba(0,147,233,0.2)',
                                            transform: 'translateY(-2px)'
                                        }
                                    }}
                                >
                                    {/* Header Icon */}
                                    <Box sx={{ display: 'flex', justifyContent: 'center', mb: 4 }}>
                                        <Box
                                            sx={{
                                                p: 2,
                                                borderRadius: '20px',
                                                background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                                boxShadow: '0 8px 30px rgba(0, 147, 233, 0.3)',
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.1) rotate(5deg)',
                                                    boxShadow: '0 12px 40px rgba(0, 147, 233, 0.4)'
                                                }
                                            }}
                                        >
                                            <PersonAdd sx={{ color: 'white', fontSize: 32 }} />
                                        </Box>
                                    </Box>

                                    <Box component="form" onSubmit={handleSubmit}>
                                        <Grid container spacing={3}>
                                            {/* Nama Lengkap - Full width */}
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Nama Lengkap"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    required
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: '12px',
                                                            fontFamily: montserratFont,
                                                            fontSize: '1rem',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: 'rgba(0,147,233,0.3)'
                                                                }
                                                            },
                                                            '&.Mui-focused': {
                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#0093E9',
                                                                    borderWidth: '2px'
                                                                }
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontFamily: montserratFont,
                                                            fontWeight: 500,
                                                            '&.Mui-focused': {
                                                                color: '#0093E9'
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>

                                            {/* Email dan Telepon - Side by side on desktop, stacked on mobile */}
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Alamat Email"
                                                    name="email"
                                                    type="email"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    required
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: '12px',
                                                            fontFamily: montserratFont,
                                                            fontSize: '1rem',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: 'rgba(0,147,233,0.3)'
                                                                }
                                                            },
                                                            '&.Mui-focused': {
                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#0093E9',
                                                                    borderWidth: '2px'
                                                                }
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontFamily: montserratFont,
                                                            fontWeight: 500,
                                                            '&.Mui-focused': {
                                                                color: '#0093E9'
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>
                                            <Grid item xs={12} sm={6}>
                                                <TextField
                                                    fullWidth
                                                    label="Nomor Telepon"
                                                    name="phone"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: '12px',
                                                            fontFamily: montserratFont,
                                                            fontSize: '1rem',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: 'rgba(0,147,233,0.3)'
                                                                }
                                                            },
                                                            '&.Mui-focused': {
                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#0093E9',
                                                                    borderWidth: '2px'
                                                                }
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontFamily: montserratFont,
                                                            fontWeight: 500,
                                                            '&.Mui-focused': {
                                                                color: '#0093E9'
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>

                                            {/* Organisasi - Full width */}
                                            <Grid item xs={12}>
                                                <TextField
                                                    fullWidth
                                                    label="Organisasi/Perusahaan (Opsional)"
                                                    name="organization"
                                                    value={formData.organization}
                                                    onChange={handleChange}
                                                    variant="outlined"
                                                    sx={{
                                                        '& .MuiOutlinedInput-root': {
                                                            borderRadius: '12px',
                                                            fontFamily: montserratFont,
                                                            fontSize: '1rem',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: 'rgba(0,147,233,0.3)'
                                                                }
                                                            },
                                                            '&.Mui-focused': {
                                                                '& .MuiOutlinedInput-notchedOutline': {
                                                                    borderColor: '#0093E9',
                                                                    borderWidth: '2px'
                                                                }
                                                            }
                                                        },
                                                        '& .MuiInputLabel-root': {
                                                            fontFamily: montserratFont,
                                                            fontWeight: 500,
                                                            '&.Mui-focused': {
                                                                color: '#0093E9'
                                                            }
                                                        }
                                                    }}
                                                />
                                            </Grid>

                                            {/* Terms and Conditions */}
                                            <Grid item xs={12}>
                                                <Box sx={{
                                                    display: 'flex',
                                                    justifyContent: 'center',
                                                    p: 2,
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(45deg, rgba(0,147,233,0.02) 0%, rgba(128,208,199,0.02) 100%)',
                                                    border: '1px solid rgba(0,147,233,0.05)'
                                                }}>
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
                                                                    },
                                                                    '&:hover': {
                                                                        backgroundColor: 'rgba(0,147,233,0.04)'
                                                                    }
                                                                }}
                                                            />
                                                        }
                                                        label={
                                                            <Typography
                                                                variant="body2"
                                                                sx={{
                                                                    fontFamily: montserratFont,
                                                                    fontSize: '0.95rem',
                                                                    fontWeight: 500,
                                                                    color: '#555555'
                                                                }}
                                                            >
                                                                Saya setuju dengan syarat dan ketentuan serta kebijakan privasi
                                                            </Typography>
                                                        }
                                                    />
                                                </Box>
                                            </Grid>

                                            {/* Submit Button */}
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
                                                        disabled={!formData.agreeToTerms}
                                                        sx={{
                                                            borderRadius: '15px',
                                                            py: 1.8,
                                                            px: 4,
                                                            background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                                            boxShadow: '0 6px 20px rgba(0, 147, 233, 0.3)',
                                                            fontWeight: 600,
                                                            letterSpacing: '0.5px',
                                                            textTransform: 'none',
                                                            fontSize: '1.1rem',
                                                            fontFamily: montserratFont,
                                                            minWidth: '250px',
                                                            width: { xs: '100%', sm: 'auto' },
                                                            '&:hover': {
                                                                background: 'linear-gradient(45deg, #0093E9 50%, #80D0C7 100%)',
                                                                boxShadow: '0 10px 30px rgba(0, 147, 233, 0.4)',
                                                                transform: 'translateY(-2px)'
                                                            },
                                                            '&:disabled': {
                                                                background: 'linear-gradient(45deg, rgba(0,147,233,0.3) 30%, rgba(128,208,199,0.3) 90%)',
                                                                color: 'rgba(255,255,255,0.7)'
                                                            },
                                                            transition: 'all 0.3s ease'
                                                        }}
                                                    >
                                                        Selesaikan Pendaftaran
                                                    </Button>
                                                </motion.div>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Box>
                    </Box>
                </Container>
            </Container>
        </Box>
    );
}