'use client';

import { Box, Container, Grid, Card, CardContent, Typography } from '@mui/material';
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

export default function AboutCoreValuesSection() {
    const values = [
        {
            title: 'Inclusion',
            description: 'We welcome developers of all backgrounds, skill levels, and technologies'
        },
        {
            title: 'Collaboration',
            description: 'We believe in the power of working together to achieve greater outcomes'
        },
        {
            title: 'Knowledge Sharing',
            description: 'We actively promote learning from each other and spreading expertise'
        },
        {
            title: 'Innovation',
            description: 'We encourage creative thinking and exploring new technologies'
        },
        {
            title: 'Community First',
            description: 'We prioritize building meaningful connections and supporting each other'
        },
        {
            title: 'Continuous Learning',
            description: 'We embrace a growth mindset and constant skill improvement'
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
                        title="Our Core Values"
                        subtitle="The principles that guide our community"
                        gradientColors="linear-gradient(45deg, #0093E9 0%, #80D0C7 100%)"
                    />
                </motion.div>

                <Grid container spacing={3}>
                    {values.map((value, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <motion.div
                                variants={itemVariants}
                                custom={index}
                                whileHover={{ y: -8 }}
                            >
                                <Card sx={{
                                    height: '100%',
                                    borderRadius: 4,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-8px)',
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                                    }
                                }}>
                                    <CardContent>
                                        <Typography variant="h5" component="h3" gutterBottom fontWeight="bold" sx={{ fontFamily: montserratFont }}>
                                            {value.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontFamily: montserratFont }}>
                                            {value.description}
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