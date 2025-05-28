'use client';

import { Box, Container, Typography, Grid, Card, CardContent, Avatar } from '@mui/material';
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
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)', // Same gradient as other sections
                position: 'relative',
                fontFamily: montserratFont,
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
                    opacity: 0.1, // Same opacity as other sections
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Decorative elements - Same as other sections */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '10%',
                    right: '5%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,147,233,0.04) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '15%',
                    left: '8%',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(254,107,139,0.05) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />

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
                            color: '#222222', // Same as other sections
                            fontSize: { xs: '1.75rem', md: '2.5rem' },
                            position: 'relative',
                            display: 'inline-block',
                            pb: 1.5,
                            mx: 'auto',
                            width: '100%',
                            textAlign: 'center'
                        }}
                    >
                        Narasumber Kami
                        {/* Add the CTA-style underline - Same as other sections */}
                        <Box
                            component={motion.div}
                            initial={{ width: 0 }}
                            whileInView={{ width: '60%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            sx={{
                                position: 'absolute',
                                height: '4px', // Same height as other sections
                                width: '60%',
                                bottom: 0,
                                left: '20%',
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
                            fontWeight: 500, // Same as other sections
                            opacity: 0.8,
                            maxWidth: 800,
                            mx: 'auto',
                            color: '#555555', // Same as other sections
                            lineHeight: 1.6, // Same as other sections
                            letterSpacing: '0.3px', // Added for consistency
                            fontSize: { xs: '1rem', md: '1.1rem' }
                        }}
                    >
                        Belajar dari para ahli industri yang akan berbagi pengetahuan dan pengalaman mereka
                    </Typography>
                </motion.div>

                <Grid container spacing={4} justifyContent="center">
                    {(speakers || [
                        {
                            name: "Budi Santoso",
                            role: "Senior Full Stack Developer",
                            company: "PT Tech Indonesia",
                            experience: 8,
                            bio: "Berpengalaman dalam pengembangan aplikasi web modern dengan React, Node.js, dan teknologi cloud.",
                            image: "/speaker-male.jpg"
                        },
                        {
                            name: "Sari Dewi",
                            role: "UI/UX Design Lead",
                            company: "Digital Creative Studio",
                            experience: 6,
                            bio: "Spesialis dalam desain antarmuka pengguna dan pengalaman pengguna untuk aplikasi mobile dan web.",
                            image: "/speaker-female.jpg"
                        },
                        {
                            name: "Ahmad Rahman",
                            role: "DevOps Engineer",
                            company: "Cloud Solutions Corp",
                            experience: 10,
                            bio: "Ahli dalam implementasi CI/CD, containerization, dan infrastruktur cloud modern.",
                            image: "/speaker-male.jpg"
                        }
                    ]).map((speaker, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10, scale: 1.02 }} // Enhanced hover effect
                                transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Card
                                    elevation={0}
                                    sx={{
                                        width: '350px', // Increased from 280px to 350px
                                        height: '550px', // Increased from 400px to 550px
                                        p: 4, // Increased padding from 3 to 4
                                        textAlign: 'center',
                                        borderRadius: '20px', // Same as AboutSection
                                        transition: 'all 0.3s ease', // Same transition
                                        border: '1px solid rgba(0, 147, 233, 0.1)', // Same border
                                        backgroundColor: '#ffffff', // Same background
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // Same shadow
                                        '&:hover': {
                                            boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)', // Same hover shadow
                                            transform: 'translateY(-5px)', // Same hover transform
                                            borderColor: 'rgba(0, 147, 233, 0.2)' // Same hover border
                                        },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        overflow: 'hidden',
                                        mx: 'auto' // Center the card
                                    }}
                                >
                                    {/* Avatar Section - Larger */}
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '200px', // Increased from 160px to 200px
                                        p: 4 // Increased padding
                                    }}>
                                        <Avatar
                                            src={speaker.image}
                                            alt={speaker.name}
                                            sx={{
                                                width: 150, // Increased from 120px to 150px
                                                height: 150, // Increased from 120px to 150px
                                                border: '4px solid white',
                                                boxShadow: '0 8px 25px rgba(0,147,233,0.15)', // Enhanced shadow with theme color
                                                transition: 'all 0.3s ease',
                                                '&:hover': {
                                                    transform: 'scale(1.05)',
                                                    boxShadow: '0 12px 35px rgba(0,147,233,0.25)'
                                                }
                                            }}
                                        />
                                    </Box>

                                    {/* Content Section - Larger */}
                                    <CardContent sx={{
                                        height: '350px', // Increased from 240px to 350px
                                        p: 4, // Increased padding
                                        pt: 0,
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'space-between' // Distribute space evenly
                                    }}>
                                        {/* Top Section - Info */}
                                        <Box sx={{ height: '200px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                            {/* Name - Larger */}
                                            <Box sx={{ height: '60px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Typography
                                                    variant="h4" // Changed from h5 to h4
                                                    component="h3"
                                                    align="center"
                                                    fontWeight="bold"
                                                    sx={{
                                                        fontFamily: montserratFont,
                                                        fontSize: '1.5rem', // Increased from 1.25rem to 1.5rem
                                                        position: 'relative',
                                                        display: 'inline-block',
                                                        pb: 1.5,
                                                        width: '100%',
                                                        color: '#222222'
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
                                            </Box>

                                            {/* Role - Larger */}
                                            <Box sx={{ height: '45px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Typography
                                                    variant="h6" // Changed from subtitle1 to h6
                                                    align="center"
                                                    sx={{
                                                        fontFamily: montserratFont,
                                                        fontSize: '1.1rem', // Increased from 0.95rem to 1.1rem
                                                        fontWeight: 600,
                                                        background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                                        WebkitBackgroundClip: 'text',
                                                        WebkitTextFillColor: 'transparent',
                                                    }}
                                                >
                                                    {speaker.role}
                                                </Typography>
                                            </Box>

                                            {/* Company - Larger */}
                                            <Box sx={{ height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                <Typography
                                                    variant="body1" // Changed from body2 to body1
                                                    align="center"
                                                    sx={{
                                                        fontFamily: montserratFont,
                                                        fontSize: '1rem', // Increased from 0.9rem to 1rem
                                                        color: '#666',
                                                        fontWeight: 500,
                                                        mb: 1
                                                    }}
                                                >
                                                    {speaker.company}
                                                </Typography>
                                            </Box>

                                            {/* Experience Badge - Larger */}
                                            <Box sx={{ height: '70px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}> {/* Increased height from 55px to 70px */}
                                                {speaker.experience && (
                                                    <Box
                                                        sx={{
                                                            display: 'inline-block',
                                                            background: 'linear-gradient(45deg, rgba(0,147,233,0.1) 0%, rgba(128,208,199,0.1) 100%)',
                                                            color: '#0093E9',
                                                            borderRadius: '15px', // Increased border radius
                                                            padding: '10px 18px', // Increased padding from '8px 16px' to '10px 18px'
                                                            fontSize: '0.85rem', // Slightly reduced from 0.95rem to fit better
                                                            fontWeight: 'bold',
                                                            fontFamily: montserratFont,
                                                            border: '1px solid rgba(0,147,233,0.2)',
                                                            transition: 'all 0.3s ease',
                                                            textAlign: 'center',
                                                            minWidth: 'fit-content', // Ensure badge fits content
                                                            whiteSpace: 'nowrap', // Prevent text wrapping
                                                            '&:hover': {
                                                                background: 'linear-gradient(45deg, rgba(0,147,233,0.15) 0%, rgba(128,208,199,0.15) 100%)',
                                                                transform: 'scale(1.05)'
                                                            }
                                                        }}
                                                    >
                                                        {isInView ? (
                                                            <CountUp
                                                                start={0}
                                                                end={speaker.experience}
                                                                duration={2}
                                                                suffix="+ tahun pengalaman" // Changed from "+ years experience" to "+ tahun pengalaman"
                                                                useEasing={true}
                                                                delay={0.4 + index * 0.1}
                                                            />
                                                        ) : (
                                                            `${speaker.experience}+ tahun pengalaman` // Changed from "years experience" to "tahun pengalaman"
                                                        )}
                                                    </Box>
                                                )}
                                            </Box>

                                            {/* Adjust Top Section height to accommodate larger experience badge */}
                                        </Box>

                                        {/* Adjust Bio section height */}
                                        <Box sx={{
                                            height: '115px', // Reduced from 130px to 115px to accommodate larger experience badge
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden' // Prevent overflow
                                        }}>
                                            <Typography
                                                variant="body1" // Changed from body2 to body1
                                                align="center"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    fontSize: '0.95rem', // Slightly reduced from 1rem to 0.95rem
                                                    lineHeight: 1.5, // Adjusted line height from 1.6 to 1.5
                                                    color: '#555555',
                                                    letterSpacing: '0.2px', // Reduced from 0.3px to 0.2px
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 4, // Reduced from 5 to 4 lines to fit better
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                    px: 2 // Increased padding
                                                }}
                                            >
                                                {speaker.bio}
                                            </Typography>
                                        </Box>
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