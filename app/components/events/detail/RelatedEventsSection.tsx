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
                            fontSize: { xs: '1.75rem', md: '2.5rem' },
                            position: 'relative',
                            display: 'inline-block',
                            pb: 1.5,
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        Related Events
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
                        You might also be interested in these upcoming events
                    </Typography>
                </motion.div>

                <Grid container spacing={4}>
                    {relatedEvents.map((event) => (
                        <Grid item xs={12} md={6} key={event.id}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        display: 'flex',
                                        flexDirection: { xs: 'column', sm: 'row' },
                                        borderRadius: 4,
                                        overflow: 'hidden',
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        '&:hover': {
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
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
                                        </CardContent>

                                        <Box sx={{ p: 3, pt: 0, mt: 'auto' }}>
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    component={Link}
                                                    href={`/events/${event.id}`}
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
                                                    View Details
                                                </Button>
                                            </motion.div>
                                        </Box>
                                    </Box>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}