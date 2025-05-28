'use client';

import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Flag as FlagIcon, Lightbulb as LightbulbIcon } from '@mui/icons-material';
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

export default function AboutMissionVisionSection() {
    const items = [
        {
            icon: <FlagIcon fontSize="large" />,
            title: 'Misi',
            description: [
                'Membangun komunitas developer dinamis yang mendorong pembelajaran, kolaborasi, dan inovasi dalam ekosistem teknologi lokal.'
            ]
        },
        {
            icon: <LightbulbIcon fontSize="large" />,
            title: 'Visi',
            description: [
                'Mengubah Karawang menjadi pusat teknologi yang diakui dengan komunitas yang menjadi katalis kemajuan teknologi regional.'
            ]
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
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc', // Same background as AboutSection
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                // Add subtle pattern like HeroSection
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
            {/* Decorative elements like HeroSection */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '5%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,147,233,0.05) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(254,107,139,0.06) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="xl"> {/* Changed to xl for consistency */}
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Misi & Visi"
                        subtitle="Apa yang mendorong kami maju dan membentuk komunitas kami"
                    />
                </motion.div>

                <Grid
                    container
                    spacing={3} // Same spacing as AboutSection
                    sx={{ mt: 2 }}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {items.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={12}
                            md={6} // Two columns layout
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
                                <Paper
                                    elevation={0}
                                    sx={{
                                        width: '100%',
                                        maxWidth: '500px',
                                        height: '320px',
                                        p: 4,
                                        textAlign: 'center',
                                        borderRadius: '20px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid rgba(254, 107, 139, 0.1)', // Red border
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                        '&:hover': {
                                            boxShadow: '0 15px 40px rgba(254, 107, 139, 0.15)', // Red shadow
                                            transform: 'translateY(-5px)',
                                            borderColor: 'rgba(254, 107, 139, 0.2)' // Red border on hover
                                        },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        overflow: 'hidden',
                                        flex: 1,
                                        mx: 'auto'
                                    }}
                                >
                                    {/* Icon Area - red color maintained */}
                                    <Box
                                        sx={{
                                            color: '#FE6B8B',
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: 60,
                                            width: 60,
                                            borderRadius: '50%',
                                            background: 'rgba(254, 107, 139, 0.08)',
                                            flexShrink: 0,
                                            svg: {
                                                fontSize: '1.8rem'
                                            }
                                        }}
                                    >
                                        {item.icon}
                                    </Box>

                                    {/* Title Area - red gradient maintained */}
                                    <Box
                                        sx={{
                                            width: '100%',
                                            textAlign: 'center',
                                            mb: 2,
                                            height: '50px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            fontWeight="bold"
                                            sx={{
                                                fontFamily: montserratFont,
                                                position: 'relative',
                                                display: 'inline-block',
                                                pb: 1.5,
                                                fontSize: { xs: '1.3rem', md: '1.5rem' },
                                                textAlign: 'center'
                                            }}
                                        >
                                            {item.title}
                                            <Box
                                                component={motion.div}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '100%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                                sx={{
                                                    position: 'absolute',
                                                    height: '3px',
                                                    width: '100%',
                                                    bottom: 0,
                                                    left: 0,
                                                    background: 'linear-gradient(90deg, rgba(254, 107, 139, 0) 0%, rgba(254, 107, 139, 0.5) 50%, rgba(254, 107, 139, 0) 100%)',
                                                    borderRadius: '2px',
                                                }}
                                            />
                                        </Typography>
                                    </Box>

                                    {/* Description Area - shorter text */}
                                    <Box sx={{
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        overflow: 'hidden',
                                        px: 2
                                    }}>
                                        <Typography
                                            variant="body1"
                                            color="text.secondary"
                                            sx={{
                                                fontFamily: montserratFont,
                                                width: '100%',
                                                textAlign: 'center',
                                                lineHeight: 1.6,
                                                fontSize: { xs: '0.95rem', md: '1rem' },
                                                wordWrap: 'break-word',
                                                whiteSpace: 'normal',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 3, // Reduced from 5 to 3 lines
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {/* Use the shortened description */}
                                            {item.description.join(' ')}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}