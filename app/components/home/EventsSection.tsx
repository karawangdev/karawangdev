'use client';

import { Box, Container, Grid, Card, CardContent, CardMedia, Typography, Button } from '@mui/material';
import Link from 'next/link';
import { motion } from 'framer-motion';
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

export default function EventsSection() {
    const events = [
        {
            title: 'Web Development Workshop',
            date: 'June 15, 2025',
            image: '/event1.jpg',
            description: 'Learn modern web development techniques with React and Next.js'
        },
        {
            title: 'Tech Talk: AI and ML',
            date: 'July 2, 2025',
            image: '/event2.jpg',
            description: 'Exploring the latest advancements in artificial intelligence'
        },
        {
            title: 'Hackathon 2025',
            date: 'August 10-11, 2025',
            image: '/event3.jpg',
            description: '48-hour coding competition with amazing prizes'
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
                bgcolor: 'rgba(0, 0, 0, 0.02)',
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="lg">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Upcoming Events"
                        subtitle="Join us at our next meetups and tech gatherings"
                        gradientColors="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
                    />
                </motion.div>

                <Grid container spacing={4}>
                    {events.map((event, index) => (
                        <Grid item xs={12} md={4} key={index}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -8 }}
                            >
                                <Card sx={{
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    borderRadius: '16px',
                                    overflow: 'hidden',
                                    boxShadow: '0 5px 15px rgba(0,0,0,0.08)',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    transition: 'box-shadow 0.3s',
                                    '&:hover': {
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.15)'
                                    }
                                }}>
                                    <CardMedia
                                        component="div"
                                        sx={{
                                            height: 200,
                                            backgroundColor: 'grey.200',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center'
                                        }}
                                    >
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ fontFamily: montserratFont }}
                                        >
                                            Event Image Placeholder
                                        </Typography>
                                    </CardMedia>
                                    <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h3"
                                            fontWeight="bold"
                                            sx={{
                                                fontFamily: montserratFont,
                                                position: 'relative',
                                                display: 'inline-block',
                                                pb: 1.5,
                                                mb: 1.5
                                            }}
                                        >
                                            {event.title}
                                            {/* Add the CTA-style underline */}
                                            <Box
                                                component={motion.div}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '50%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4 }}
                                                sx={{
                                                    position: 'absolute',
                                                    height: '3px',
                                                    width: '50%',
                                                    bottom: 0,
                                                    left: '25%',
                                                    background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(254,107,139,0.3) 50%, rgba(254,107,139,0) 100%)',
                                                    borderRadius: '2px',
                                                }}
                                            />
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                mb: 2,
                                                fontFamily: montserratFont,
                                                color: '#0093E9',
                                                fontWeight: 600
                                            }}
                                        >
                                            {event.date}
                                        </Typography>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{ fontFamily: montserratFont }}
                                        >
                                            {event.description}
                                        </Typography>
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
                            View All Events
                        </Button>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}