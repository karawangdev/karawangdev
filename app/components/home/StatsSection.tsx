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
        { number: 500, suffix: '+', label: 'Anggota Komunitas' },
        { number: 50, suffix: '+', label: 'Event Diselenggarakan' },
        { number: 20, suffix: '+', label: 'Mitra Teknologi' },
        { number: 100, suffix: '+', label: 'Proyek Dibangun' }
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
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc', // Same as AboutSection
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="xl">
                <Grid
                    container
                    spacing={3} // Same spacing as AboutSection
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {stats.map((stat, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                transition={{ type: 'spring', stiffness: 300 }}
                            >
                                <Box sx={{
                                    width: '280px', // Same as AboutSection
                                    height: '200px', // Adjusted height for stats
                                    p: 3,
                                    minWidth: 0,
                                    maxWidth: '100%',
                                    textAlign: 'center',
                                    borderRadius: '20px',
                                    transition: 'all 0.3s ease',
                                    border: '1px solid rgba(254, 107, 139, 0.1)', // Updated to #FE6B8B
                                    backgroundColor: '#ffffff',
                                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                    '&:hover': {
                                        boxShadow: '0 15px 40px rgba(254, 107, 139, 0.15)', // Updated to #FE6B8B
                                        transform: 'translateY(-5px)',
                                        borderColor: 'rgba(254, 107, 139, 0.2)' // Updated to #FE6B8B
                                    },
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    overflow: 'hidden',
                                    flex: 1,
                                    mx: 'auto'
                                }}>
                                    <Typography
                                        variant="h3"
                                        component="p"
                                        fontWeight="bold"
                                        sx={{
                                            mb: 2,
                                            pb: 1.5,
                                            position: 'relative',
                                            display: 'inline-block',
                                            color: '#FE6B8B', // Updated to #FE6B8B
                                            fontFamily: montserratFont,
                                            fontSize: { xs: '2.5rem', md: '3rem' }
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

                                        {/* Animated underline */}
                                        <Box
                                            component={motion.div}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '100%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                            sx={{
                                                position: 'absolute',
                                                height: '2px',
                                                width: '100%',
                                                bottom: 0,
                                                left: 0,
                                                background: 'linear-gradient(90deg, rgba(254, 107, 139, 0) 0%, rgba(254, 107, 139, 0.3) 50%, rgba(254, 107, 139, 0) 100%)', // Updated to #FE6B8B
                                                borderRadius: '2px',
                                            }}
                                        />
                                    </Typography>

                                    <Typography
                                        variant="body1"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: montserratFont,
                                            fontWeight: 500,
                                            fontSize: { xs: '0.9rem', md: '1rem' },
                                            textAlign: 'center'
                                        }}
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