'use client';

import { Box, Container, Typography, Paper, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import { LocationOn } from '@mui/icons-material';

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
                background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
                fontFamily: montserratFont
            }}
        >
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
                        Event Location
                        {/* Add the CTA-style underline */}
                        <Box
                            component={motion.div}
                            initial={{ width: 0 }}
                            whileInView={{ width: '200px' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            sx={{
                                position: 'absolute',
                                height: '4px',
                                width: '200px',
                                bottom: 0,
                                left: 'calc(50% - 100px)',
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
                            fontWeight: 400,
                            opacity: 0.8,
                            maxWidth: 800,
                            mx: 'auto',
                            color: '#555555'
                        }}
                    >
                        Find your way to the event venue
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={5}>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    height: '100%',
                                    borderRadius: 4,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    background: 'white',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                    }
                                }}
                            >
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <Box
                                        sx={{
                                            p: 1.2,
                                            borderRadius: '12px',
                                            background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                            boxShadow: '0 4px 15px rgba(0, 147, 233, 0.2)',
                                            mr: 2
                                        }}
                                    >
                                        <LocationOn sx={{ color: 'white', fontSize: 22 }} />
                                    </Box>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        fontWeight="bold"
                                        sx={{
                                            fontFamily: montserratFont,
                                            color: '#222222',
                                            position: 'relative',
                                            display: 'inline-block',
                                            pb: 1,
                                        }}
                                    >
                                        {location}
                                        <Box
                                            component={motion.div}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '50%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                            sx={{
                                                position: 'absolute',
                                                height: '2px',
                                                width: '50%',
                                                bottom: 0,
                                                left: '0%',
                                                background: 'linear-gradient(90deg, rgba(0,147,233,0.3) 0%, rgba(0,147,233,0) 100%)',
                                                borderRadius: '2px',
                                            }}
                                        />
                                    </Typography>
                                </Box>

                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontFamily: montserratFont,
                                        color: '#555555',
                                        mb: 3
                                    }}
                                >
                                    {address}
                                </Typography>

                                <Typography
                                    variant="body2"
                                    sx={{
                                        fontFamily: montserratFont,
                                        color: '#666666',
                                        mb: 2
                                    }}
                                >
                                    The venue is easily accessible by public transportation. Parking is available on-site for attendees coming by car.
                                </Typography>

                                <Box sx={{
                                    mt: 3,
                                    pt: 3,
                                    borderTop: '1px solid rgba(0,0,0,0.08)',
                                    display: 'flex',
                                    alignItems: 'center'
                                }}>
                                    <Box sx={{
                                        width: 40,
                                        height: 40,
                                        backgroundColor: 'rgba(0,147,233,0.1)',
                                        borderRadius: '50%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        mr: 2
                                    }}>
                                        <LocationOn sx={{ color: '#0093E9', fontSize: 20 }} />
                                    </Box>
                                    <Box>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: montserratFont,
                                                color: '#555555',
                                                fontWeight: 600
                                            }}
                                        >
                                            Need directions?
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: montserratFont,
                                                color: '#0093E9',
                                                textDecoration: 'underline',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            Open in Google Maps
                                        </Typography>
                                    </Box>
                                </Box>
                            </Paper>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={7}>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    height: { xs: 300, md: '100%', minHeight: 300 },
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                    }
                                }}
                            >
                                {/* This would be a real map in production */}
                                <Box
                                    sx={{
                                        height: '100%',
                                        width: '100%',
                                        background: 'linear-gradient(45deg, rgba(0,147,233,0.05) 0%, rgba(128,208,199,0.05) 100%)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <Typography sx={{ color: '#0093E9', fontFamily: montserratFont }}>
                                        Map would be embedded here in production
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