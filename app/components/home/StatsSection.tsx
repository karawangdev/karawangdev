'use client';

import { Box, Container, Grid, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

// Define animation variants - sama seperti AboutSection
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
        { number: '100+', label: 'Active Members', description: 'Developers and tech enthusiasts' },
        { number: '20+', label: 'Events Hosted', description: 'Workshops, meetups, and hackathons' },
        { number: '15+', label: 'Tech Talks', description: 'Knowledge sharing sessions' },
        { number: '5+', label: 'Years Growing', description: 'Building the tech community' }
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
                backgroundColor: '#f8fafc',
                minHeight: '100vh'
            }}
        >
            <Container maxWidth="xl"> {/* ✅ Sama dengan AboutSection */}
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Statistik Komunitas"
                        subtitle="Angka-angka yang menunjukkan pertumbuhan dan aktivitas komunitas developer Karawang"
                    />
                </motion.div>

                <Grid
                    container
                    spacing={3} // ✅ Spacing sama dengan AboutSection
                    sx={{ mt: 2 }}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {stats.map((stat, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={`stat-${index}`}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <motion.div
                                variants={itemVariants}
                                whileHover={{ y: -10 }} // ✅ Hover effect sama
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                                transition={{ type: 'spring', stiffness: 300 }} // ✅ Transition sama
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        width: '280px', // ✅ Ukuran sama dengan AboutSection
                                        height: '320px', // ✅ Tinggi sama dengan AboutSection
                                        p: 3,
                                        minWidth: 0,
                                        maxWidth: '100%',
                                        textAlign: 'center',
                                        borderRadius: '20px', // ✅ Border radius sama
                                        transition: 'all 0.3s ease',
                                        border: '1px solid rgba(0, 147, 233, 0.1)', // ✅ Border sama
                                        backgroundColor: '#ffffff', // ✅ Background putih sama
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // ✅ Shadow sama
                                        '&:hover': {
                                            boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)', // ✅ Hover shadow sama
                                            transform: 'translateY(-5px)',
                                            borderColor: 'rgba(0, 147, 233, 0.2)'
                                        },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        justifyContent: 'flex-start',
                                        overflow: 'hidden',
                                        flex: 1,
                                        mx: 'auto' // ✅ Center kotak sama
                                    }}
                                >
                                    {/* Number Area - seperti Icon Area di AboutSection */}
                                    <Box
                                        sx={{
                                            color: '#0093E9',
                                            mb: 2,
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            height: 60, // ✅ Height sama dengan icon area
                                            width: 60,
                                            borderRadius: '50%',
                                            background: 'rgba(0, 147, 233, 0.08)', // ✅ Background sama
                                            flexShrink: 0
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            component="div"
                                            fontWeight="bold"
                                            sx={{
                                                fontFamily: montserratFont,
                                                fontSize: { xs: '1.5rem', md: '1.8rem' },
                                                color: '#0093E9'
                                            }}
                                        >
                                            {stat.number}
                                        </Typography>
                                    </Box>

                                    {/* Title Area - sama seperti AboutSection */}
                                    <Box
                                        sx={{
                                            width: '100%',
                                            textAlign: 'center',
                                            mb: 1.5,
                                            height: '50px', // ✅ Height sama
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
                                                fontSize: { xs: '1.1rem', md: '1.15rem' }, // ✅ Font size sama
                                                textAlign: 'center',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                maxWidth: '100%'
                                            }}
                                        >
                                            {stat.label}
                                            {/* ✅ Animated underline sama persis */}
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

                                    {/* Description Area - sama seperti AboutSection */}
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
                                                fontSize: { xs: '0.85rem', md: '0.85rem' }, // ✅ Font size sama
                                                wordWrap: 'break-word',
                                                whiteSpace: 'normal',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 4, // ✅ Line clamp sama
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden'
                                            }}
                                        >
                                            {stat.description}
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