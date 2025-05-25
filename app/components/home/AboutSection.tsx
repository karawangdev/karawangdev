'use client';

import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Code as CodeIcon, People as PeopleIcon, Event as EventIcon, School as SchoolIcon } from '@mui/icons-material';
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

export default function AboutSection() {
    const features = [
        {
            icon: <CodeIcon fontSize="large" />,
            title: 'Tech Meetups',
            description: 'Regular coding sessions, hackathons, and technical workshops to enhance your skills'
        },
        {
            icon: <PeopleIcon fontSize="large" />,
            title: 'Networking',
            description: 'Connect with like-minded developers and industry professionals'
        },
        {
            icon: <SchoolIcon fontSize="large" />,
            title: 'Learning',
            description: 'Access to learning resources, mentorship, and career guidance'
        },
        {
            icon: <EventIcon fontSize="large" />,
            title: 'Events',
            description: 'Tech talks, conferences, and social events for the community'
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
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="lg">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="About Our Community"
                        subtitle="A thriving ecosystem for developers, designers, and tech enthusiasts in Karawang"
                    />
                </motion.div>

                <Grid container spacing={4} sx={{ mt: 2 }}>
                    {features.map((item, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                            >
                                <Paper elevation={0} sx={{
                                    p: 3,
                                    height: '100%',
                                    textAlign: 'center',
                                    borderRadius: '16px',
                                    transition: 'box-shadow 0.3s',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    '&:hover': {
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                                    }
                                }}>
                                    <Box
                                        sx={{
                                            color: '#0093E9',
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: 70
                                        }}
                                    >
                                        {item.icon}
                                    </Box>
                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        fontWeight="bold"
                                        sx={{
                                            fontFamily: montserratFont,
                                            position: 'relative',
                                            display: 'inline-block',
                                            pb: 1.5,
                                            mb: 1.5
                                        }}
                                    >
                                        {item.title}
                                        {/* Add the CTA-style underline */}
                                        <Box
                                            component={motion.div}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '50%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 }}
                                            sx={{
                                                position: 'absolute',
                                                height: '2px', // Smaller for card titles
                                                width: '50%',
                                                bottom: 0,
                                                left: '25%',
                                                background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.3) 50%, rgba(0,147,233,0) 100%)',
                                                borderRadius: '2px',
                                            }}
                                        />
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{ fontFamily: montserratFont }}
                                    >
                                        {item.description}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}