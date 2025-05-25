'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

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
                            mx: 'auto',
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        Meet Our Speakers
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
                        Learn from industry experts who will share their knowledge and experience
                    </Typography>
                </motion.div>

                <Grid container spacing={4} justifyContent="center">
                    {speakers.map((speaker, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
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
                                            boxShadow: '0 10px 30px rgba(0,0,0,0.12)',
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
                                                mb: 0.5,
                                                position: 'relative',
                                                display: 'inline-block',
                                                pb: 1.5,
                                                width: '100%'
                                            }}
                                        >
                                            {speaker.name}
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
                                                    background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.3) 50%, rgba(0,147,233,0) 100%)',
                                                    borderRadius: '2px',
                                                }}
                                            />
                                        </Typography>

                                        <Typography
                                            variant="subtitle1"
                                            align="center"
                                            sx={{
                                                fontFamily: montserratFont,
                                                fontSize: '0.9rem',
                                                fontWeight: 600,
                                                mb: 0.5,
                                                background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                                WebkitBackgroundClip: 'text',
                                                WebkitTextFillColor: 'transparent',
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

                                        {/* Experience badge */}
                                        {speaker.experience && (
                                            <Box sx={{ textAlign: 'center', mb: 2 }}>
                                                <Box
                                                    sx={{
                                                        display: 'inline-block',
                                                        background: 'linear-gradient(45deg, rgba(0,147,233,0.1) 0%, rgba(128,208,199,0.1) 100%)',
                                                        color: '#0093E9',
                                                        borderRadius: '8px',
                                                        padding: '4px 10px',
                                                        fontSize: '0.75rem',
                                                        fontWeight: 'bold',
                                                    }}
                                                >
                                                    {isInView ? (
                                                        <CountUp
                                                            start={0}
                                                            end={speaker.experience}
                                                            duration={2}
                                                            suffix="+ years experience"
                                                            useEasing={true}
                                                            delay={0.4 + index * 0.1}
                                                        />
                                                    ) : (
                                                        `${speaker.experience}+ years experience`
                                                    )}
                                                </Box>
                                            </Box>
                                        )}

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