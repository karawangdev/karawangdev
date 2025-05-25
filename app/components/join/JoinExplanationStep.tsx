'use client';

import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Group, School, Event } from '@mui/icons-material';

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

interface JoinExplanationStepProps {
    onNext: () => void;
}

export default function JoinExplanationStep({ onNext }: JoinExplanationStepProps) {
    const benefits = [
        {
            icon: <Code fontSize="large" color="primary" />,
            title: "Coding Sessions",
            description: "Participate in regular coding sessions and workshops led by experienced developers"
        },
        {
            icon: <Group fontSize="large" color="primary" />,
            title: "Networking",
            description: "Connect with like-minded developers and build your professional network"
        },
        {
            icon: <School fontSize="large" color="primary" />,
            title: "Learning Resources",
            description: "Access exclusive learning materials, tutorials, and mentorship opportunities"
        },
        {
            icon: <Event fontSize="large" color="primary" />,
            title: "Events",
            description: "Join local and online tech events, hackathons, and conferences"
        }
    ];

    return (
        <Box
            component={motion.section}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            sx={{
                py: 8,
                fontFamily: montserratFont,
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/subtle-pattern.png")',
                    backgroundSize: '1000px',
                    opacity: 0.2,
                    pointerEvents: 'none'
                }
            }}
        >
            <Container maxWidth="md">
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h4"
                        component="h2"
                        fontWeight="bold"
                        gutterBottom
                        sx={{
                            mb: 2,
                            fontFamily: montserratFont,
                            textAlign: 'center'
                        }}
                    >
                        Why Join Karawang Dev?
                    </Typography>
                </motion.div>

                <motion.div variants={itemVariants}>
                    <Typography
                        variant="body1"
                        sx={{
                            mb: 5,
                            opacity: 0.8,
                            fontFamily: montserratFont,
                            textAlign: 'center',
                            fontSize: '1.1rem',
                            maxWidth: 800,
                            mx: 'auto'
                        }}
                    >
                        The Karawang Developer Community is a thriving group of tech enthusiasts, programmers, and innovators passionate about technology. By joining our community, you'll gain access to valuable resources, events, and connections to help you grow professionally.
                    </Typography>
                </motion.div>

                <Grid container spacing={3} sx={{ mb: 6 }}>
                    {benefits.map((benefit, index) => (
                        <Grid item xs={12} sm={6} key={index}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        borderRadius: 4,
                                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                                        transition: 'all 0.3s',
                                        '&:hover': {
                                            boxShadow: '0 6px 25px rgba(0,0,0,0.1)',
                                        },
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}
                                >
                                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                        {benefit.icon}
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            fontWeight="bold"
                                            sx={{ ml: 1.5, fontFamily: montserratFont }}
                                        >
                                            {benefit.title}
                                        </Typography>
                                    </Box>
                                    <Typography
                                        variant="body2"
                                        sx={{
                                            fontFamily: montserratFont,
                                            color: '#555555',
                                            lineHeight: 1.6
                                        }}
                                    >
                                        {benefit.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <motion.div
                    variants={itemVariants}
                    style={{ textAlign: 'center' }}
                >
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={onNext}
                            sx={{
                                borderRadius: '14px',
                                py: 1.5,
                                px: 5,
                                background: 'linear-gradient(45deg, #0093E9 0%, #80D0C7 100%)',
                                boxShadow: '0 3px 15px rgba(0, 147, 233, 0.4)',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                fontFamily: montserratFont,
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                    boxShadow: '0 6px 20px rgba(0, 147, 233, 0.5)',
                                },
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            Continue to Code of Conduct
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
}