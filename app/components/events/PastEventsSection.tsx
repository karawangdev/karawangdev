'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Stack, Chip, Button } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { CalendarMonth, People } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
import CountUp from 'react-countup';
import { useRef } from 'react';
import SectionTitle from '../ui/SectionTitle';

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

// Sample past events data - updated with proper IDs and image paths
const pastEvents = [
    {
        id: "javascript-fundamentals-workshop",
        title: "Workshop Dasar JavaScript",
        description: "Memahami konsep inti dan praktik JavaScript modern",
        date: "20 April 2025",
        image: "/events-placeHolder.png",
        attendees: 78,
        tags: ["Workshop", "JavaScript", "Pemula"]
    },
    {
        id: "blockchain-development-intro",
        title: "Pengantar Pengembangan Blockchain",
        description: "Mempelajari dasar-dasar teknologi blockchain dan pengembangan",
        date: "5 Maret 2025",
        image: "/events-placeHolder.png",
        attendees: 45,
        tags: ["Workshop", "Blockchain", "Web3"]
    },
    {
        id: "cloud-computing-conference",
        title: "Konferensi Cloud Computing",
        description: "Mengeksplorasi arsitektur cloud modern dan strategi deployment",
        date: "12 Februari 2025",
        image: "/events-placeHolder.png",
        attendees: 120,
        tags: ["Konferensi", "Cloud", "DevOps"]
    },
    {
        id: "ui-ux-design-principles",
        title: "Prinsip Desain UI/UX",
        description: "Best practices untuk membuat antarmuka yang ramah pengguna",
        date: "25 Januari 2025",
        image: "/events-placeHolder.png",
        attendees: 55,
        tags: ["Workshop", "Desain", "UI/UX"]
    }
];

export default function PastEventsSection() {
    const router = useRouter();
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    const handleEventClick = (eventId: string) => {
        router.push(`/events/${eventId}`);
    };

    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            ref={sectionRef}
            sx={{
                py: 10,
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc',
                minHeight: '100vh',
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

            <Container maxWidth="xl">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Event Sebelumnya"
                        subtitle="Jelajahi event sebelumnya kami dan konten berharga yang telah dibagikan dengan anggota komunitas"
                    />
                </motion.div>

                <Grid
                    container
                    spacing={3}
                    sx={{ mt: 2 }}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {pastEvents.map((event, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={event.id}
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
                                <Card
                                    elevation={0}
                                    sx={{
                                        width: '280px',
                                        height: '480px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(0, 147, 233, 0.1)',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)',
                                            transform: 'translateY(-5px)',
                                            borderColor: 'rgba(0, 147, 233, 0.2)'
                                        },
                                        mx: 'auto'
                                    }}
                                    onClick={() => handleEventClick(event.id)}
                                >
                                    {/* Image Section */}
                                    <Box sx={{ position: 'relative', height: 140, flexShrink: 0 }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={event.image}
                                            alt={event.title}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 8,
                                                right: 8,
                                                display: 'flex',
                                                gap: 0.5
                                            }}
                                        >
                                            {event.tags.slice(0, 1).map((tag, tagIndex) => (
                                                <Chip
                                                    key={tagIndex}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: 'rgba(0, 147, 233, 0.9)',
                                                        color: 'white',
                                                        fontWeight: 500,
                                                        fontFamily: montserratFont,
                                                        fontSize: '0.7rem'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    {/* Content Section - Similar to UpcomingEventsSection but with Attendees instead of Time/Location */}
                                    <CardContent sx={{ flexGrow: 1, p: 2.5, display: 'flex', flexDirection: 'column' }}>
                                        {/* Title Area */}
                                        <Box
                                            sx={{
                                                width: '100%',
                                                textAlign: 'center',
                                                mb: 1.5,
                                                height: '60px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                flexShrink: 0
                                            }}
                                        >
                                            <Typography
                                                variant="h6"
                                                component="h3"
                                                fontWeight="bold"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    position: 'relative',
                                                    display: 'inline-block',
                                                    pb: 1.5,
                                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                                    textAlign: 'center',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    lineHeight: 1.3,
                                                    maxWidth: '100%'
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
                                        <Box sx={{ mb: 2, flexShrink: 0, height: '60px', overflow: 'hidden' }}>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.4,
                                                    textAlign: 'center',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                {event.description}
                                            </Typography>
                                        </Box>

                                        {/* Event Details */}
                                        <Stack spacing={1} sx={{ mb: 2, flexShrink: 0 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                                <CalendarMonth fontSize="small" sx={{ color: '#0093E9', opacity: 0.8 }} />
                                                <Typography variant="body2" sx={{ fontFamily: montserratFont, fontSize: '0.8rem' }}>
                                                    {event.date}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                                <People fontSize="small" sx={{ color: '#0093E9', opacity: 0.8 }} />
                                                <Typography variant="body2" sx={{ fontFamily: montserratFont, fontSize: '0.8rem', color: '#0093E9', fontWeight: 600 }}>
                                                    {isInView ? (
                                                        <CountUp
                                                            start={0}
                                                            end={event.attendees}
                                                            duration={2}
                                                            delay={0.2 + index * 0.1}
                                                            suffix=" Peserta"
                                                        />
                                                    ) : (
                                                        "0 Peserta"
                                                    )}
                                                </Typography>
                                            </Box>

                                            {/* Tags Section */}
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, justifyContent: 'center', mt: 1 }}>
                                                {event.tags.slice(1, 3).map((tag, tagIndex) => (
                                                    <Chip
                                                        key={tagIndex}
                                                        label={tag}
                                                        size="small"
                                                        sx={{
                                                            bgcolor: 'rgba(0, 147, 233, 0.08)',
                                                            color: '#0093E9',
                                                            fontWeight: 500,
                                                            fontFamily: montserratFont,
                                                            fontSize: '0.7rem'
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </Stack>

                                        {/* Button Area */}
                                        <Box sx={{ mt: 'auto', pt: 1 }}>
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Button
                                                    fullWidth
                                                    variant="outlined"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleEventClick(event.id);
                                                    }}
                                                    sx={{
                                                        fontFamily: montserratFont,
                                                        textTransform: 'none',
                                                        fontWeight: 600,
                                                        borderRadius: '12px',
                                                        py: 1,
                                                        fontSize: '0.9rem',
                                                        borderColor: '#0093E9',
                                                        color: '#0093E9',
                                                        '&:hover': {
                                                            borderColor: '#0093E9',
                                                            backgroundColor: 'rgba(0, 147, 233, 0.05)',
                                                            boxShadow: '0 3px 10px rgba(0, 147, 233, 0.1)',
                                                        },
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    Lihat Detail
                                                </Button>
                                            </motion.div>
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
                        style={{ display: 'inline-block' }}
                    >
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                borderRadius: '14px',
                                py: 1.5,
                                px: 4,
                                minWidth: '200px',
                                borderColor: '#0093E9',
                                color: '#0093E9',
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontFamily: montserratFont,
                                '&:hover': {
                                    borderColor: '#0093E9',
                                    backgroundColor: 'rgba(0, 147, 233, 0.05)',
                                    boxShadow: '0 4px 15px rgba(0, 147, 233, 0.1)',
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Lihat Semua Event Sebelumnya
                        </Button>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}