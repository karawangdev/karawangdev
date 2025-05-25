'use client';

import { Box, Container, Grid, Typography } from '@mui/material';
import { motion, useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from 'react';

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

export default function StatsSection() {
    const stats = [
        { number: 500, suffix: '+', label: 'Community Members' },
        { number: 50, suffix: '+', label: 'Events Hosted' },
        { number: 20, suffix: '+', label: 'Tech Partners' },
        { number: 100, suffix: '+', label: 'Projects Built' }
    ];

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
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={4} justifyContent="center">
                    {stats.map((stat, index) => (
                        <Grid item xs={6} md={3} key={index}>
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -5 }}
                            >
                                <Box sx={{
                                    textAlign: 'center',
                                    p: 3,
                                    borderRadius: '16px',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        background: 'rgba(0,0,0,0.02)'
                                    }
                                }}>
                                    <Typography
                                        variant="h3"
                                        component="p"
                                        fontWeight="bold"
                                        sx={{
                                            mb: 1,
                                            pb: 1.5,
                                            position: 'relative',
                                            display: 'inline-block',
                                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontFamily: montserratFont
                                        }}
                                    >
                                        {/* Animated counting from 0 */}
                                        {isInView ? (
                                            <CountUp
                                                start={0}
                                                end={stat.number}
                                                duration={2.5}
                                                separator=","
                                                suffix={stat.suffix}
                                                useEasing={true}
                                                delay={0.4 + index * 0.1}
                                            />
                                        ) : (
                                            `0${stat.suffix}`
                                        )}

                                        {/* CTA-style underline */}
                                        <Box
                                            component={motion.div}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '60%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                            sx={{
                                                position: 'absolute',
                                                height: '3px', // Slightly smaller for stats
                                                width: '60%',
                                                bottom: 0,
                                                left: '20%',
                                                background: 'linear-gradient(90deg, rgba(254,107,139,0) 0%, rgba(254,107,139,0.3) 50%, rgba(254,107,139,0) 100%)',
                                                borderRadius: '2px',
                                            }}
                                        />
                                    </Typography>
                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{ fontFamily: montserratFont, fontWeight: 500 }}
                                    >
                                        {stat.label}
                                    </Typography>
                                </Box>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}