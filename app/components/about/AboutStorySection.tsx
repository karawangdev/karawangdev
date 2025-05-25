'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { motion } from 'framer-motion';

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

export default function AboutStorySection() {
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
                <Grid container spacing={6} alignItems="center">
                    <Grid item xs={12} md={6}>
                        <motion.div variants={itemVariants}>
                            <Box
                                sx={{
                                    position: 'relative',
                                    height: 400,
                                    width: '100%',
                                    borderRadius: 4,
                                    overflow: 'hidden',
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)'
                                }}
                            >
                                <Image
                                    src="/community-story.jpg"
                                    alt="Our Community Story"
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </Box>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <motion.div variants={itemVariants}>
                            <Typography variant="h3" component="h2" fontWeight="bold" gutterBottom sx={{ fontFamily: montserratFont }}>
                                Our Story
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont, mb: 3 }}>
                                The Karawang Developer Community was founded in 2022 by a group of passionate
                                technology enthusiasts who saw the need for a local tech community. What started
                                as informal meetups in local cafes has grown into a thriving community with
                                hundreds of members.
                            </Typography>
                            <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont, mb: 3 }}>
                                We believe in the power of knowledge sharing, collaboration, and building
                                connections. Our community welcomes developers of all skill levels, from
                                beginners to experts, and from all backgrounds.
                            </Typography>
                            <Typography variant="body1" sx={{ fontFamily: montserratFont }}>
                                Today, we organize regular events, workshops, hackathons, and social gatherings
                                to foster growth and innovation in Karawang's tech ecosystem.
                            </Typography>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}