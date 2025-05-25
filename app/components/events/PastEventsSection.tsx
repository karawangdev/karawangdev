'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Stack, Chip, Button } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import { CalendarMonth } from '@mui/icons-material';
import Image from 'next/image';
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

// Sample past events data
const pastEvents = [
    {
        id: 1,
        title: "JavaScript Fundamentals Workshop",
        description: "Understanding core concepts and modern JavaScript practices",
        date: "April 20, 2025",
        image: "/events/js-workshop.jpg",
        attendees: 78,
        tags: ["Workshop", "JavaScript", "Beginner"]
    },
    {
        id: 2,
        title: "Intro to Blockchain Development",
        description: "Learning the basics of blockchain technology and development",
        date: "March 5, 2025",
        image: "/events/blockchain.jpg",
        attendees: 45,
        tags: ["Workshop", "Blockchain", "Web3"]
    },
    {
        id: 3,
        title: "Cloud Computing Conference",
        description: "Exploring modern cloud architectures and deployment strategies",
        date: "February 12, 2025",
        image: "/events/cloud-conference.jpg",
        attendees: 120,
        tags: ["Conference", "Cloud", "DevOps"]
    },
    {
        id: 4,
        title: "UI/UX Design Principles",
        description: "Best practices for creating user-friendly interfaces",
        date: "January 25, 2025",
        image: "/events/ux-design.jpg",
        attendees: 55,
        tags: ["Workshop", "Design", "UI/UX"]
    }
];

export default function PastEventsSection() {
    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

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
            <Container maxWidth="lg">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Past Events"
                        subtitle="Explore our previous events and the valuable content shared with our community members"
                    />
                </motion.div>

                <Grid container spacing={3}>
                    {pastEvents.map((event, index) => (
                        <Grid item xs={12} sm={6} md={3} key={event.id}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        height: '100%',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: 3,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 15px rgba(0,0,0,0.06)',
                                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        '&:hover': {
                                            boxShadow: '0 6px 20px rgba(0,0,0,0.1)',
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'relative', height: 180 }}>
                                        <CardMedia
                                            component="img"
                                            height="180"
                                            image={event.image}
                                            alt={event.title}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                right: 0,
                                                px: 1.5,
                                                py: 1,
                                                background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                                                display: 'flex',
                                                justifyContent: 'space-between',
                                                alignItems: 'center'
                                            }}
                                        >
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                                                <CalendarMonth fontSize="small" sx={{ color: '#fff', fontSize: '0.9rem' }} />
                                                <Typography variant="caption" sx={{ fontFamily: montserratFont, color: '#fff', fontWeight: 500 }}>
                                                    {event.date}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 2.5 }}>
                                        <Typography
                                            gutterBottom
                                            variant="subtitle1"
                                            component="h3"
                                            fontWeight="bold"
                                            sx={{
                                                fontFamily: montserratFont,
                                                fontSize: '1.1rem',
                                                mb: 1,
                                                lineHeight: 1.3,
                                                position: 'relative',
                                                display: 'inline-block',
                                                pb: 1.5
                                            }}
                                        >
                                            {event.title}
                                            {/* Add the CTA-style underline */}
                                            <Box
                                                component={motion.div}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4 }}
                                                sx={{
                                                    position: 'absolute',
                                                    height: '2px',
                                                    width: '100%',
                                                    bottom: 0,
                                                    left: '0%',
                                                    background: 'linear-gradient(90deg, rgba(0,147,233,0.3) 0%, rgba(0,147,233,0) 100%)',
                                                    borderRadius: '2px',
                                                }}
                                            />
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                mb: 2,
                                                fontFamily: montserratFont,
                                                fontSize: '0.85rem',
                                                lineHeight: 1.5
                                            }}
                                        >
                                            {event.description}
                                        </Typography>

                                        <Box sx={{ mt: 'auto', display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                            {event.tags.map((tag, index) => (
                                                <Chip
                                                    key={index}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: 'rgba(0, 147, 233, 0.08)',
                                                        color: '#0093E9',
                                                        fontWeight: 500,
                                                        fontFamily: montserratFont,
                                                        fontSize: '0.75rem'
                                                    }}
                                                />
                                            ))}
                                        </Box>

                                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        color: '#0093E9',
                                                        fontFamily: montserratFont,
                                                        fontSize: '0.85rem',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    {isInView ? (
                                                        <CountUp
                                                            start={0}
                                                            end={event.attendees}
                                                            duration={2}
                                                            delay={0.2 + index * 0.1}
                                                            suffix=" Attendees"
                                                        />
                                                    ) : (
                                                        "0 Attendees"
                                                    )}
                                                </Typography>
                                            </Box>
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
                                transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            Explore All Past Events
                        </Button>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}