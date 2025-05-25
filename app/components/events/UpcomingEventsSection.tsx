'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Stack, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { CalendarMonth, AccessTime, LocationOn } from '@mui/icons-material';
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

// Sample upcoming events data
const upcomingEvents = [
    {
        id: 1,
        title: "Web Development Workshop",
        description: "Learn modern web development techniques using React and Next.js",
        date: "June 15, 2025",
        time: "10:00 AM - 2:00 PM",
        location: "Karawang Digital Hub",
        image: "/events/web-workshop.jpg",
        tags: ["Workshop", "Web Development", "React"]
    },
    {
        id: 2,
        title: "Mobile App Development Hackathon",
        description: "48-hour hackathon to build innovative mobile applications",
        date: "July 8-10, 2025",
        time: "Starts at 9:00 AM",
        location: "Tech Coworking Space, Karawang",
        image: "/events/mobile-hackathon.jpg",
        tags: ["Hackathon", "Mobile", "Flutter"]
    },
    {
        id: 3,
        title: "AI and Machine Learning Seminar",
        description: "Introduction to AI and practical applications in business",
        date: "August 5, 2025",
        time: "1:00 PM - 5:00 PM",
        location: "Online via Zoom",
        image: "/events/ai-seminar.jpg",
        tags: ["Seminar", "AI", "Machine Learning"]
    }
];

export default function UpcomingEventsSection() {
    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            sx={{
                py: 10,
                background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="lg">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Upcoming Events"
                        subtitle="Join our upcoming events to learn new skills, network with fellow developers, and stay up-to-date with the latest technology trends"
                    />
                </motion.div>

                <Grid container spacing={4}>
                    {upcomingEvents.map((event) => (
                        <Grid item xs={12} md={4} key={event.id}>
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
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        '&:hover': {
                                            boxShadow: '0 6px 25px rgba(0,0,0,0.12)',
                                        }
                                    }}
                                >
                                    <Box sx={{ position: 'relative', height: 200 }}>
                                        <CardMedia
                                            component="img"
                                            height="200"
                                            image={event.image}
                                            alt={event.title}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 10,
                                                right: 10,
                                                display: 'flex',
                                                gap: 0.5
                                            }}
                                        >
                                            {event.tags.slice(0, 2).map((tag, index) => (
                                                <Chip
                                                    key={index}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: 'rgba(255, 255, 255, 0.8)',
                                                        fontWeight: 500,
                                                        fontFamily: montserratFont
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h3"
                                            fontWeight="bold"
                                            sx={{
                                                fontFamily: montserratFont,
                                                fontSize: '1.25rem',
                                                mb: 1,
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
                                                    height: '3px',
                                                    width: '100%',
                                                    bottom: 0,
                                                    left: '0%',
                                                    background: 'linear-gradient(90deg, rgba(0,147,233,0.3) 0%, rgba(128,208,199,0.3) 100%)',
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
                                                fontSize: '0.9rem',
                                                lineHeight: 1.6
                                            }}
                                        >
                                            {event.description}
                                        </Typography>

                                        <Stack spacing={1.5} sx={{ mt: 2 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <CalendarMonth fontSize="small" sx={{ color: '#0093E9', opacity: 0.8 }} />
                                                <Typography variant="body2" sx={{ fontFamily: montserratFont }}>
                                                    {event.date}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <AccessTime fontSize="small" sx={{ color: '#0093E9', opacity: 0.8 }} />
                                                <Typography variant="body2" sx={{ fontFamily: montserratFont }}>
                                                    {event.time}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                                <LocationOn fontSize="small" sx={{ color: '#0093E9', opacity: 0.8 }} />
                                                <Typography variant="body2" sx={{ fontFamily: montserratFont }}>
                                                    {event.location}
                                                </Typography>
                                            </Box>
                                        </Stack>
                                    </CardContent>

                                    <Box sx={{ p: 3, pt: 0 }}>
                                        <motion.div
                                            whileHover={{ scale: 1.03 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            <Button
                                                fullWidth
                                                variant="contained"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    textTransform: 'none',
                                                    fontWeight: 600,
                                                    borderRadius: 2,
                                                    py: 1,
                                                    background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                                    boxShadow: '0 3px 10px rgba(0, 147, 233, 0.3)',
                                                    '&:hover': {
                                                        background: 'linear-gradient(45deg, #0093E9 50%, #80D0C7 100%)',
                                                        boxShadow: '0 5px 15px rgba(0, 147, 233, 0.4)',
                                                    },
                                                    transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                                                }}
                                            >
                                                Register Now
                                            </Button>
                                        </motion.div>
                                    </Box>
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
                            View All Events
                        </Button>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}