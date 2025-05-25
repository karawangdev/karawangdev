'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { CalendarMonth } from '@mui/icons-material';
import Link from 'next/link';

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

export default function RelatedEventsSection({ relatedEventIds, eventsData }: { relatedEventIds: string[], eventsData: any }) {
    // Filter out events that don't exist in eventsData
    const relatedEvents = relatedEventIds
        .filter(id => eventsData[id])
        .map(id => eventsData[id]);

    // If no related events, don't render the section
    if (!relatedEvents || relatedEvents.length === 0) return null;

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
                        Related Events
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
                        You might also be interested in these upcoming events
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {relatedEvents.map((event) => (
                        <Grid item xs={12} md={6} key={event.id}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            boxShadow: '0 6px 25px rgba(0,0,0,0.12)',
                                        },
                                        height: '100%'
                                    }}
                                >
                                    <Box sx={{
                                        width: { xs: '100%', sm: '40%' },
                                        position: 'relative',
                                    }}>
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                height: { xs: 200, sm: '100%' },
                                                minHeight: { xs: 'auto', sm: 200 }
                                            }}
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
                                            {event.tags && event.tags.slice(0, 1).map((tag: string, index: number) => (
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
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        width: { xs: '100%', sm: '60%' }
                                    }}>
                                        <CardContent sx={{ flexGrow: 1, p: 3 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                                                <CalendarMonth fontSize="small" sx={{ color: '#0093E9', opacity: 0.8, mr: 0.5 }} />
                                                <Typography
                                                    variant="caption"
                                                    sx={{
                                                        fontFamily: montserratFont,
                                                        color: '#0093E9',
                                                        fontWeight: 600
                                                    }}
                                                >
                                                    {event.date}
                                                </Typography>
                                            </Box>

                                            <Typography
                                                gutterBottom
                                                variant="h5"
                                                component="h3"
                                                fontWeight="bold"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    fontSize: '1.1rem',
                                                    mb: 1,
                                                    lineHeight: 1.3
                                                }}
                                            >
                                                {event.title}
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
                                                {event.shortDescription}
                                            </Typography>

                                            <Box sx={{ mt: 'auto' }}>
                                                <Button
                                                    component={Link}
                                                    href={`/events/${event.id}`}
                                                    variant="outlined"
                                                    size="small"
                                                    sx={{
                                                        borderRadius: 2,
                                                        textTransform: 'none',
                                                        fontFamily: montserratFont,
                                                        fontWeight: 600,
                                                        borderColor: '#0093E9',
                                                        color: '#0093E9',
                                                        '&:hover': {
                                                            borderColor: '#0093E9',
                                                            backgroundColor: 'rgba(0, 147, 233, 0.05)',
                                                        }
                                                    }}
                                                >
                                                    View Details
                                                </Button>
                                            </Box>
                                        </CardContent>
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
                            component={Link}
                            href="/events"
                            variant="contained"
                            size="large"
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
                            Explore All Events
                        </Button>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}