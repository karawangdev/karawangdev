'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import { Event as EventIcon } from '@mui/icons-material';
import SectionTitle from '../ui/SectionTitle';

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

export default function AboutJourneySection() {
    const milestones = [
        {
            year: '2025',
            title: 'Komunitas Didirikan',
            description: 'Pertemuan pertama dengan 15 developer di kafe lokal'
        },
        {
            year: '2026',
            title: 'Workshop Pertama',
            description: 'Menyelenggarakan workshop teknis pertama tentang pengembangan web'
        },
        {
            year: '2027',
            title: '100 Anggota',
            description: 'Mencapai 100 anggota komunitas yang aktif'
        },
        {
            year: '2028',
            title: 'Hackathon Pertama',
            description: 'Mengadakan hackathon perdana 24 jam dengan 20 tim'
        },
        {
            year: '2028',
            title: 'Kemitraan Korporat',
            description: 'Membangun kemitraan dengan perusahaan teknologi lokal'
        },
        {
            year: '2029',
            title: 'Konferensi Karawang Dev',
            description: 'Menyelenggarakan konferensi teknologi tahunan pertama dengan 300+ peserta'
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
                backgroundColor: '#f8fafc', // Same background as AboutSection
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                // Add subtle pattern like HeroSection
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
            {/* Decorative elements like HeroSection */}
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
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Perjalanan Kami"
                        subtitle="Pencapaian utama dalam pertumbuhan komunitas kami"
                    />
                </motion.div>

                <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 4 }}>
                    <Timeline position="alternate">
                        {milestones.map((milestone, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent color="text.secondary">
                                    <motion.div
                                        variants={itemVariants}
                                        custom={index}
                                    >
                                        <Typography
                                            variant="h6"
                                            fontWeight="bold"
                                            sx={{
                                                fontFamily: montserratFont,
                                                color: '#0093E9', // Same color as AboutSection
                                                fontSize: { xs: '1.1rem', md: '1.25rem' }
                                            }}
                                        >
                                            {milestone.year}
                                        </Typography>
                                    </motion.div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <motion.div
                                        variants={itemVariants}
                                        custom={index}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <TimelineDot
                                            sx={{
                                                backgroundColor: '#0093E9', // Same color as AboutSection
                                                '&:hover': {
                                                    backgroundColor: '#FE6B8B' // Red on hover
                                                },
                                                transition: 'all 0.3s ease'
                                            }}
                                        >
                                            <EventIcon sx={{ color: 'white' }} />
                                        </TimelineDot>
                                    </motion.div>
                                    {index < milestones.length - 1 && (
                                        <motion.div
                                            variants={itemVariants}
                                            custom={index}
                                        >
                                            <TimelineConnector
                                                sx={{
                                                    backgroundColor: 'rgba(0, 147, 233, 0.2)' // Blue connector
                                                }}
                                            />
                                        </motion.div>
                                    )}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <motion.div
                                        variants={itemVariants}
                                        custom={index}
                                        whileHover={{ y: -5 }}
                                    >
                                        <Paper
                                            elevation={0}
                                            sx={{
                                                p: 3,
                                                borderRadius: '20px', // Same as AboutSection
                                                transition: 'all 0.3s ease',
                                                border: '1px solid rgba(0, 147, 233, 0.1)', // Same border as AboutSection
                                                backgroundColor: '#ffffff', // Same background
                                                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // Same shadow
                                                '&:hover': {
                                                    boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)', // Same hover shadow
                                                    transform: 'translateY(-5px)',
                                                    borderColor: 'rgba(0, 147, 233, 0.2)'
                                                }
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="h3"
                                                fontWeight="bold"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    mb: 1,
                                                    position: 'relative',
                                                    display: 'inline-block',
                                                    pb: 1.5,
                                                    fontSize: { xs: '1.1rem', md: '1.15rem' }
                                                }}
                                            >
                                                {milestone.title}
                                                {/* Add animated underline like AboutSection */}
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
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    lineHeight: 1.5,
                                                    fontSize: { xs: '0.85rem', md: '0.9rem' }
                                                }}
                                            >
                                                {milestone.description}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>
            </Container>
        </Box>
    );
}