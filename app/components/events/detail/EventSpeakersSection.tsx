'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Avatar } from '@mui/material';
import { motion } from 'framer-motion';

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

export default function EventSpeakersSection({ speakers }: { speakers: any[] }) {
    // If no speakers, don't render the section
    if (!speakers || speakers.length === 0) return null;

    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
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
                        Meet Our Speakers
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
                        Learn from industry experts who will share their knowledge and experience
                    </Typography>
                </motion.div>

                <Grid container spacing={4} justifyContent="center">
                    {speakers.map((speaker, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
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
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            boxShadow: '0 6px 25px rgba(0,0,0,0.12)',
                                        },
                                        background: 'white'
                                    }}
                                >
                                    <Box sx={{ p: 3, textAlign: 'center' }}>
                                        <Avatar
                                            src={speaker.image}
                                            alt={speaker.name}
                                            sx={{
                                                width: 120,
                                                height: 120,
                                                mx: 'auto',
                                                border: '4px solid white',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                                            }}
                                        />
                                    </Box>
                                    <CardContent sx={{ flexGrow: 1, p: 3, pt: 0 }}>
                                        <Typography
                                            gutterBottom
                                            variant="h5"
                                            component="h3"
                                            align="center"
                                            fontWeight="bold"
                                            sx={{
                                                fontFamily: montserratFont,
                                                fontSize: '1.25rem',
                                                mb: 0.5
                                            }}
                                        >
                                            {speaker.name}
                                        </Typography>

                                        <Typography
                                            variant="subtitle1"
                                            align="center"
                                            color="primary"
                                            sx={{
                                                fontFamily: montserratFont,
                                                fontSize: '0.9rem',
                                                fontWeight: 600,
                                                mb: 0.5,
                                                color: '#0093E9'
                                            }}
                                        >
                                            {speaker.role}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            align="center"
                                            sx={{
                                                fontFamily: montserratFont,
                                                fontSize: '0.85rem',
                                                mb: 2,
                                                color: '#666'
                                            }}
                                        >
                                            {speaker.company}
                                        </Typography>

                                        <Typography
                                            variant="body2"
                                            align="center"
                                            sx={{
                                                fontFamily: montserratFont,
                                                fontSize: '0.9rem',
                                                lineHeight: 1.6,
                                                color: '#555'
                                            }}
                                        >
                                            {speaker.bio}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}