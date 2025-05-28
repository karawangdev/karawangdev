'use client';

import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import {
    Diversity3 as InclusionIcon,
    Handshake as CollaborationIcon,
    School as KnowledgeIcon,
    Lightbulb as InnovationIcon,
    Group as CommunityIcon,
    TrendingUp as LearningIcon
} from '@mui/icons-material';
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
            icon: <InclusionIcon fontSize="large" />,
            title: 'Inklusivitas',
            description: 'Kami menyambut developer dari semua latar belakang, tingkat keahlian, dan teknologi'
        },
        {
            icon: <CollaborationIcon fontSize="large" />,
            title: 'Kolaborasi',
            description: 'Kami percaya pada kekuatan bekerja sama untuk mencapai hasil yang lebih besar'
        },
        {
            icon: <KnowledgeIcon fontSize="large" />,
            title: 'Berbagi Pengetahuan',
            description: 'Kami secara aktif mempromosikan pembelajaran satu sama lain dan menyebarkan keahlian'
        },
        {
            icon: <InnovationIcon fontSize="large" />,
            title: 'Inovasi',
            description: 'Kami mendorong pemikiran kreatif dan mengeksplorasi teknologi baru'
        },
        {
            icon: <CommunityIcon fontSize="large" />,
            title: 'Mengutamakan Komunitas',
            description: 'Kami memprioritaskan membangun koneksi yang bermakna dan saling mendukung'
        },
        {
            icon: <LearningIcon fontSize="large" />,
            title: 'Pembelajaran Berkelanjutan',
            description: 'Kami merangkul pola pikir pertumbuhan dan peningkatan keterampilan yang konstan'
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
                        title="Nilai-Nilai Inti Kami"
                        subtitle="Prinsip-prinsip yang membimbing komunitas kami"
                    />
                </motion.div>

                <Grid
                    container
                    spacing={3} // Same spacing as AboutSection
                    sx={{ mt: 2 }}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {values.map((value, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={4} // 3 columns layout
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
                                        width: '280px', // Same exact width as AboutSection
                                        height: '320px', // Same exact height as AboutSection
                                        p: 3,
                                        minWidth: 0,
                                        maxWidth: '100%',
                                        textAlign: 'center',
                                        borderRadius: '20px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid rgba(0, 147, 233, 0.1)',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                        '&:hover': {
                                            boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)',
                                            transform: 'translateY(-5px)',
                                            borderColor: 'rgba(0, 147, 233, 0.2)'
                                        },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        overflow: 'hidden',
                                        flex: 1,
                                        mx: 'auto' // Center the card like AboutSection
                                    }}
                                >
                                    {/* Icon Area - exactly same as AboutSection */}
                                    <Box
                                        sx={{
                                            color: '#0093E9',
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: 60,
                                            width: 60,
                                            borderRadius: '50%',
                                            background: 'rgba(0, 147, 233, 0.08)',
                                            flexShrink: 0,
                                            svg: {
                                                fontSize: '1.8rem'
                                            }
                                        }}
                                    >
                                        {value.icon}
                                    </Box>

                                    {/* Title Area - exactly same as AboutSection */}
                                    <Box
                                        sx={{
                                            width: '100%',
                                            textAlign: 'center',
                                            mb: 1.5,
                                            height: '50px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            flexShrink: 0
                                        }}
                                    >
                                        <Typography
                                            variant="h6"
                                            component="h3"
                                            fontWeight="bold"
                                            sx={{
                                                fontFamily: montserratFont,
                                                position: 'relative',
                                                display: 'inline-block',
                                                pb: 1.5,
                                                fontSize: { xs: '1.1rem', md: '1.15rem' },
                                                textAlign: 'center',
                                                whiteSpace: 'nowrap', // Same as AboutSection
                                                overflow: 'hidden', // Same as AboutSection
                                                textOverflow: 'ellipsis', // Same as AboutSection
                                                maxWidth: '100%'
                                            }}
                                        >
                                            {value.title}
                                            {/* Animated underline - same as AboutSection */}
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
                                                    background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.3) 50%, rgba(0,147,233,0) 100%)',
                                                    borderRadius: '2px',
                                                }}
                                            />
                                        </Typography>
                                    </Box>

                                    {/* Description Area - exactly same as AboutSection */}
                                    <Box sx={{
                                        flex: 1,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        width: '100%',
                                        overflow: 'hidden',
                                        px: 1
                                    }}>
                                        <Typography
                                            variant="body2"
                                            color="text.secondary"
                                            sx={{
                                                fontFamily: montserratFont,
                                                width: '100%',
                                                textAlign: 'center',
                                                lineHeight: 1.5,
                                                fontSize: { xs: '0.85rem', md: '0.85rem' },
                                                wordWrap: 'break-word',
                                                whiteSpace: 'normal',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 4,
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {value.description}
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