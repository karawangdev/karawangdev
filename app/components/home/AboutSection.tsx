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
            title: 'Kumpul Teknologi',
            description: 'Sesi pengkodean reguler, hackathon, dan lokakarya teknis untuk meningkatkan keterampilan developer'
        },
        {
            icon: <PeopleIcon fontSize="large" />,
            title: 'Networking',
            description: 'Terhubung dengan pengembang, desainer, dan profesional industri yang berpikiran sama'
        },
        {
            icon: <SchoolIcon fontSize="large" />,
            title: 'Belajar',
            description: 'Akses ke sumber daya pembelajaran, bimbingan, dan panduan karir untuk pengembangan diri'
        },
        {
            icon: <EventIcon fontSize="large" />,
            title: 'Event',
            description: 'Kegiatan teknologi, konferensi, dan acara sosial untuk membangun komunitas yang solid'
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
                backgroundColor: '#f8fafc', // Tambahkan background abu-abu terang
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="xl">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Tentang KarawangDev"
                        subtitle="Ekosistem yang berkembang untuk pengembang, desainer, dan penggemar teknologi di Karawang"
                    />
                </motion.div>

                <Grid
                    container
                    spacing={3} // Tambah spacing
                    sx={{ mt: 2 }}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {features.map((item, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={`item-${index}`}
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
                                        width: '280px', // Ukuran lebar tetap
                                        height: '320px', // Ukuran tinggi tetap
                                        p: 3,
                                        minWidth: 0,
                                        maxWidth: '100%',
                                        textAlign: 'center',
                                        borderRadius: '20px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid rgba(0, 147, 233, 0.1)',
                                        backgroundColor: '#ffffff', // Background putih untuk kontras
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // Shadow halus
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
                                        mx: 'auto' // Center kotak
                                    }}
                                >
                                    {/* Icon Area */}
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
                                        {item.icon}
                                    </Box>

                                    {/* Title Area */}
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
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                maxWidth: '100%'
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

                                    {/* Description Area */}
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
                                            {item.description}
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