'use client';

import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Code, Group, School, Event } from '@mui/icons-material';
import SectionTitle from '../ui/SectionTitle';

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
            icon: <Code fontSize="large" />,
            title: "Sesi Coding",
            description: "Ikuti sesi coding reguler dan workshop yang dipimpin oleh developer berpengalaman"
        },
        {
            icon: <Group fontSize="large" />,
            title: "Networking",
            description: "Terhubung dengan developer sejenis dan bangun jaringan profesional Anda"
        },
        {
            icon: <School fontSize="large" />,
            title: "Sumber Belajar",
            description: "Akses materi pembelajaran eksklusif, tutorial, dan kesempatan mentoring"
        },
        {
            icon: <Event fontSize="large" />,
            title: "Event",
            description: "Bergabung dalam event tech lokal dan online, hackathon, dan konferensi"
        }
    ];

    return (
        <Box
            component={motion.section}
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            sx={{
                py: 10,
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc', // Same background as AboutSection
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                // Add subtle pattern like AboutSection
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
            {/* Decorative elements like AboutSection */}
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
                        title="Mengapa Bergabung dengan KarawangDev?"
                        subtitle="Komunitas Developer Karawang adalah kelompok berkembang yang terdiri dari penggemar teknologi, programmer, dan inovator yang bersemangat tentang teknologi. Dengan bergabung, Anda akan mendapatkan akses ke sumber daya, event, dan koneksi untuk membantu pengembangan profesional Anda."
                    />
                </motion.div>

                <Grid
                    container
                    spacing={3} // Same spacing as AboutSection
                    sx={{ mt: 2 }}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {benefits.map((benefit, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3} // 4 columns like AboutSection
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
                                        width: '280px', // Same width as AboutSection
                                        height: '320px', // Same height as AboutSection
                                        p: 3,
                                        minWidth: 0,
                                        maxWidth: '100%',
                                        textAlign: 'center',
                                        borderRadius: '20px', // Same border radius as AboutSection
                                        transition: 'all 0.3s ease',
                                        border: '1px solid rgba(0, 147, 233, 0.1)', // Same border as AboutSection
                                        backgroundColor: '#ffffff', // Same background as AboutSection
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // Same shadow as AboutSection
                                        '&:hover': {
                                            boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)', // Same hover shadow
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
                                    {/* Icon Area - same structure as AboutSection */}
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
                                        {benefit.icon}
                                    </Box>

                                    {/* Title Area - same structure as AboutSection */}
                                    <Box
                                        sx={{
                                            width: '100%',
                                            textAlign: 'center',
                                            mb: 1.5,
                                            height: '50px', // Fixed height for title area
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
                                            {benefit.title}
                                            {/* Animated underline like AboutSection */}
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

                                    {/* Description Area - same structure as AboutSection */}
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
                                            {benefit.description}
                                        </Typography>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <motion.div
                    variants={itemVariants}
                    style={{ textAlign: 'center', marginTop: '4rem' }}
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
                            Lanjut ke Kode Etik
                        </Button>
                    </motion.div>
                </motion.div>
            </Container>
        </Box>
    );
}