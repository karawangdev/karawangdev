'use client';

import { Box, Container, Grid, Typography, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CalendarMonth, AccessTime, LocationOn } from '@mui/icons-material';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function EventDetailHeroSection({ event }: { event: any }) {
    return (
        <Box
            component={motion.section}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            sx={{
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                color: '#333333',
                py: { xs: 10, md: 16 },
                position: 'relative',
                overflow: 'hidden',
                fontFamily: montserratFont,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
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
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '15%',
                    background: 'linear-gradient(0deg, rgba(0,147,233,0.05) 0%, rgba(255,255,255,0) 100%)',
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Decorative elements - Same as HeroSection */}
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

            {/* Small decorative shapes - Same as HeroSection */}
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: '20px',
                    height: '20px',
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
                    top: '25%',
                    right: '15%',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: 'rgba(254,107,139,0.08)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.4 }}
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '20%',
                    width: '15px',
                    height: '15px',
                    background: 'rgba(0,147,233,0.12)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="lg">
                <Grid container spacing={4} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                        >
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 2 }}>
                                {event.tags?.map((tag: string) => (
                                    <Chip
                                        key={tag}
                                        label={tag}
                                        size="small"
                                        sx={{
                                            bgcolor: 'rgba(0, 147, 233, 0.08)',
                                            color: '#0093E9',
                                            fontWeight: 500,
                                            fontFamily: montserratFont,
                                        }}
                                    />
                                ))}
                            </Box>

                            <motion.div
                                whileHover={{ scale: 1.03 }}
                                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                            >
                                <Typography
                                    variant="h2"
                                    component="h1"
                                    fontWeight="bold"
                                    sx={{
                                        mb: 2,
                                        fontFamily: montserratFont,
                                        fontSize: { xs: '1.8rem', md: '2.5rem' },
                                        color: '#222222',
                                        position: 'relative',
                                        display: 'inline-block',
                                        pb: 1.5
                                    }}
                                >
                                    {event.title}
                                    <Box
                                        component={motion.div}
                                        initial={{ width: 0 }}
                                        animate={{ width: '60%' }}
                                        transition={{ duration: 0.6, delay: 0.6 }}
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

                            <Typography
                                variant="h6"
                                sx={{
                                    mb: 4,
                                    opacity: 0.8,
                                    fontFamily: montserratFont,
                                    fontWeight: 500,
                                    lineHeight: 1.5,
                                    letterSpacing: '0.5px',
                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                    color: '#555555'
                                }}
                            >
                                {event.shortDescription}
                            </Typography>

                            <Box sx={{ mb: 4 }}>
                                <Grid container spacing={2}>
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <CalendarMonth sx={{ color: '#0093E9', opacity: 0.8 }} />
                                            <Typography sx={{
                                                fontFamily: montserratFont,
                                                fontWeight: 500,
                                                color: '#555555'
                                            }}>
                                                {event.date || "Akan diumumkan"}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <AccessTime sx={{ color: '#0093E9', opacity: 0.8 }} />
                                            <Typography sx={{
                                                fontFamily: montserratFont,
                                                fontWeight: 500,
                                                color: '#555555'
                                            }}>
                                                {event.time || "Akan diumumkan"}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} sm={4}>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <LocationOn sx={{ color: '#0093E9', opacity: 0.8 }} />
                                            <Typography sx={{
                                                fontFamily: montserratFont,
                                                fontWeight: 500,
                                                color: '#555555'
                                            }}>
                                                {event.location || "Akan diumumkan"}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>

                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Button
                                    variant="contained"
                                    size="large"
                                    sx={{
                                        borderRadius: '14px',
                                        py: 1.5,
                                        px: 4,
                                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                        boxShadow: '0 3px 15px rgba(254, 107, 139, 0.4)',
                                        fontWeight: 600,
                                        letterSpacing: '0.5px',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontFamily: montserratFont,
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                                            boxShadow: '0 6px 20px rgba(254, 107, 139, 0.5)',
                                        },
                                        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                    }}
                                >
                                    Daftar Sekarang {event.price === 'Gratis' || event.price === 'Free' ? '(Gratis)' : `(${event.price})`}
                                </Button>
                            </motion.div>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, type: 'spring' }}
                        >
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: { xs: 300, md: 400 },
                                    width: '100%',
                                    borderRadius: '20px',
                                    overflow: 'hidden',
                                    filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))'
                                }}
                            >
                                <Image
                                    src={event.image || "/events-placeHolder.png"}
                                    alt={event.title}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                    priority
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}