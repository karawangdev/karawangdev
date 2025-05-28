'use client';

import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import Image from 'next/image';

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

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function EventsSection() {
    const events = [
        {
            title: 'Workshop Pengembangan Web',
            date: '15 Juni 2025',
            image: '/events-placeHolder.png',
            description: 'Pelajari teknik pengembangan web modern dengan React dan Next.js'
        },
        {
            title: 'Tech Talk: AI dan Machine Learning',
            date: '2 Juli 2025',
            image: '/events-placeHolder.png',
            description: 'Menjelajahi kemajuan terbaru dalam bidang kecerdasan buatan'
        },
        {
            title: 'Hackathon 2025',
            date: '10-11 Agustus 2025',
            image: '/events-placeHolder.png',
            description: 'Kompetisi coding 48 jam dengan hadiah yang menarik'
        }
    ];

    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            sx={{
                py: 10,
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="xl">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Event Mendatang"
                        subtitle="Bergabunglah dengan kami di pertemuan dan acara teknologi berikutnya"
                    />
                </motion.div>

                <Grid
                    container
                    spacing={3} // Same spacing as AboutSection
                    sx={{ mt: 2 }}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {events.map((event, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4}
                            key={`event-${index}`}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Card sx={{
                                    width: '320px', // Fixed width
                                    height: '420px', // Fixed height
                                    p: 0,
                                    minWidth: 0,
                                    maxWidth: '100%',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid rgba(0, 147, 233, 0.1)',
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                    '&:hover': {
                                        boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)',
                                        transform: 'translateY(-5px)',
                                        borderColor: 'rgba(0, 147, 233, 0.2)'
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    overflow: 'hidden',
                                    mx: 'auto'
                                }}>
                                    <CardMedia
                                        sx={{
                                            height: 180,
                                            position: 'relative',
                                            backgroundColor: 'grey.100',
                                            flexShrink: 0
                                        }}
                                    >
                                        <Image
                                            src={event.image}
                                            alt={event.title}
                                            fill
                                            style={{
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </CardMedia>

                                    <CardContent sx={{
                                        flexGrow: 1,
                                        p: 3,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between'
                                    }}>
                                        {/* Date Area */}
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mb: 1,
                                                fontFamily: montserratFont,
                                                color: '#0093E9',
                                                fontWeight: 600,
                                                fontSize: '0.85rem'
                                            }}
                                        >
                                            {event.date}
                                        </Typography>

                                        {/* Title Area */}
                                        <Box sx={{ mb: 2 }}>
                                            <Typography
                                                variant="h6"
                                                component="h3"
                                                fontWeight="bold"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    position: 'relative',
                                                    display: 'inline-block',
                                                    pb: 1.5,
                                                    fontSize: { xs: '1.1rem', md: '1.15rem' },
                                                    lineHeight: 1.3,
                                                    mb: 0
                                                }}
                                            >
                                                {event.title}
                                                <Box
                                                    component={motion.div}
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: '100%' }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                                    sx={{
                                                        position: 'absolute',
                                                        height: '2px',
                                                        width: '100%',
                                                        bottom: 0,
                                                        left: 0,
                                                        background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.3) 50%, rgba(0,147,233,0) 100%)',
                                                        borderRadius: '2px',
                                                    }}
                                                />
                                            </Typography>
                                        </Box>

                                        {/* Description Area */}
                                        <Box sx={{ flex: 1 }}>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    lineHeight: 1.5,
                                                    fontSize: { xs: '0.85rem', md: '0.85rem' },
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                {event.description}
                                            </Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            variant="outlined"
                            component={Link}
                            href="/events"
                            size="large"
                            sx={{
                                borderRadius: '14px',
                                px: 4,
                                py: 1.2,
                                fontFamily: montserratFont,
                                fontWeight: 600,
                                textTransform: 'none',
                                borderColor: '#0093E9',
                                color: '#0093E9',
                                '&:hover': {
                                    borderColor: '#0093E9',
                                    backgroundColor: 'rgba(0, 147, 233, 0.05)',
                                }
                            }}
                        >
                            Lihat Semua Event
                        </Button>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}