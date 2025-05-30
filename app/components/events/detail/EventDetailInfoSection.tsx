'use client';

import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { ScheduleOutlined, CheckCircleOutline } from '@mui/icons-material';

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

export default function EventDetailInfoSection({ event }: { event: any }) {
    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            sx={{
                py: 10,
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                fontFamily: montserratFont,
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/subtle-pattern.webp")',
                    backgroundSize: '1000px',
                    opacity: 0.1,
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '15%',
                    right: '8%',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,147,233,0.04) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '20%',
                    left: '5%',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(254,107,139,0.05) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="lg">
                {/* Content Container - Centered */}
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ width: '100%', maxWidth: '900px' }}>
                        <Grid container spacing={5} justifyContent="center">
                            {/* Left Content - Tentang Acara */}
                            <Grid item xs={12} md={6}>
                                <motion.div variants={itemVariants}>
                                    <Typography
                                        variant="h4"
                                        component="h2"
                                        fontWeight="bold"
                                        align="center"
                                        sx={{
                                            mb: 3,
                                            fontFamily: montserratFont,
                                            color: '#222222',
                                            fontSize: { xs: '1.5rem', md: '2rem' },
                                            position: 'relative',
                                            display: 'inline-block',
                                            pb: 1.5,
                                            width: '100%'
                                        }}
                                    >
                                        Tentang Acara Ini
                                        <Box
                                            component={motion.div}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '60%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                            sx={{
                                                position: 'absolute',
                                                height: '4px',
                                                width: '60%',
                                                bottom: 0,
                                                left: '20%',
                                                background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.5) 50%, rgba(0,147,233,0) 100%)',
                                                borderRadius: '2px',
                                            }}
                                        />
                                    </Typography>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Typography
                                        variant="body1"
                                        align="center"
                                        sx={{
                                            mb: 4,
                                            fontFamily: montserratFont,
                                            lineHeight: 1.6,
                                            color: '#555555',
                                            fontSize: { xs: '0.95rem', md: '1.05rem' },
                                            letterSpacing: '0.3px'
                                        }}
                                    >
                                        {event.longDescription || event.shortDescription}
                                    </Typography>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Typography
                                        variant="h5"
                                        component="h3"
                                        fontWeight="bold"
                                        align="center"
                                        sx={{
                                            mt: 5,
                                            mb: 3,
                                            fontFamily: montserratFont,
                                            color: '#222222',
                                            fontSize: { xs: '1.25rem', md: '1.5rem' },
                                            position: 'relative',
                                            display: 'inline-block',
                                            pb: 1.5,
                                            width: '100%'
                                        }}
                                    >
                                        Yang Perlu Anda Bawa
                                        <Box
                                            component={motion.div}
                                            initial={{ width: 0 }}
                                            whileInView={{ width: '50%' }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 0.4 }}
                                            sx={{
                                                position: 'absolute',
                                                height: '3px',
                                                width: '50%',
                                                bottom: 0,
                                                left: '25%',
                                                background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.4) 50%, rgba(0,147,233,0) 100%)',
                                                borderRadius: '2px',
                                            }}
                                        />
                                    </Typography>
                                </motion.div>

                                <motion.div variants={itemVariants}>
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                                        <List sx={{ width: '100%', maxWidth: '400px' }}>
                                            {(event.requirements || [
                                                "Laptop dengan koneksi internet",
                                                "Text editor (VS Code direkomendasikan)",
                                                "Semangat untuk belajar",
                                                "Catatan untuk mencatat hal penting"
                                            ]).map((req: string, index: number) => (
                                                <ListItem key={index} sx={{ px: 0, py: 1, justifyContent: 'flex-start' }}>
                                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                                        <CheckCircleOutline sx={{
                                                            color: '#0093E9',
                                                            transition: 'all 0.3s ease',
                                                            '&:hover': {
                                                                transform: 'scale(1.1)',
                                                                color: '#007ACC'
                                                            }
                                                        }} />
                                                    </ListItemIcon>
                                                    <ListItemText
                                                        primary={req}
                                                        primaryTypographyProps={{
                                                            fontFamily: montserratFont,
                                                            fontSize: '1rem',
                                                            color: '#555555',
                                                            fontWeight: 500
                                                        }}
                                                    />
                                                </ListItem>
                                            ))}
                                        </List>
                                    </Box>
                                </motion.div>
                            </Grid>

                            {/* Right Content - Agenda */}
                            <Grid item xs={12} md={6}>
                                <motion.div
                                    variants={itemVariants}
                                    whileHover={{ y: -8, scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                                >
                                    <Paper
                                        elevation={0}
                                        sx={{
                                            p: 4,
                                            borderRadius: '20px',
                                            boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                            background: 'linear-gradient(135deg, rgba(0,147,233,0.03) 0%, rgba(128,208,199,0.03) 100%)',
                                            border: '1px solid rgba(0,147,233,0.1)',
                                            transition: 'all 0.3s ease',
                                            height: 'fit-content',
                                            '&:hover': {
                                                boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)',
                                                background: 'linear-gradient(135deg, rgba(0,147,233,0.05) 0%, rgba(128,208,199,0.05) 100%)',
                                                borderColor: 'rgba(0,147,233,0.2)',
                                                transform: 'translateY(-2px)'
                                            }
                                        }}
                                    >
                                        <Typography
                                            variant="h5"
                                            component="h3"
                                            fontWeight="bold"
                                            align="center"
                                            sx={{
                                                mb: 3,
                                                fontFamily: montserratFont,
                                                color: '#222222',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                gap: 1,
                                                position: 'relative',
                                                pb: 1.5,
                                                fontSize: { xs: '1.25rem', md: '1.4rem' }
                                            }}
                                        >
                                            <ScheduleOutlined sx={{
                                                color: '#0093E9',
                                                transition: 'all 0.3s ease',
                                                '.MuiPaper-root:hover &': {
                                                    transform: 'rotate(10deg) scale(1.1)',
                                                    color: '#007ACC'
                                                }
                                            }} />
                                            Agenda Acara
                                            <Box
                                                component={motion.div}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '50%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4 }}
                                                sx={{
                                                    position: 'absolute',
                                                    height: '3px',
                                                    width: '50%',
                                                    bottom: 0,
                                                    left: '25%',
                                                    background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.4) 50%, rgba(0,147,233,0) 100%)',
                                                    borderRadius: '2px',
                                                }}
                                            />
                                        </Typography>

                                        <Divider sx={{
                                            mb: 3,
                                            background: 'linear-gradient(90deg, rgba(0,147,233,0.1) 0%, rgba(0,147,233,0.3) 50%, rgba(0,147,233,0.1) 100%)'
                                        }} />

                                        {(event.agenda || [
                                            { time: "09:00 - 09:30", title: "Registrasi & Welcome Coffee" },
                                            { time: "09:30 - 10:30", title: "Pengenalan Dasar Technology" },
                                            { time: "10:30 - 10:45", title: "Coffee Break" },
                                            { time: "10:45 - 12:00", title: "Hands-on Practice" },
                                            { time: "12:00 - 13:00", title: "Lunch Break" },
                                            { time: "13:00 - 15:00", title: "Project Implementation" },
                                            { time: "15:00 - 15:15", title: "Coffee Break" },
                                            { time: "15:15 - 16:30", title: "Q&A dan Networking" },
                                            { time: "16:30 - 17:00", title: "Penutupan & Certificate" }
                                        ]).map((item: any, index: number) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: -20 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: index * 0.1 }}
                                            >
                                                <Box sx={{
                                                    mb: 2.5,
                                                    p: 2,
                                                    borderRadius: '12px',
                                                    background: 'rgba(255, 255, 255, 0.7)',
                                                    transition: 'all 0.3s ease',
                                                    textAlign: 'center',
                                                    '&:hover': {
                                                        background: 'rgba(0, 147, 233, 0.05)',
                                                        transform: 'translateY(-2px)'
                                                    }
                                                }}>
                                                    <Typography
                                                        variant="subtitle1"
                                                        fontWeight="600"
                                                        sx={{
                                                            fontFamily: montserratFont,
                                                            color: '#0093E9',
                                                            fontSize: '0.95rem',
                                                            mb: 0.5
                                                        }}
                                                    >
                                                        {item.time}
                                                    </Typography>
                                                    <Typography
                                                        variant="body1"
                                                        sx={{
                                                            fontFamily: montserratFont,
                                                            color: '#333333',
                                                            fontSize: '0.9rem',
                                                            fontWeight: 500
                                                        }}
                                                    >
                                                        {item.title}
                                                    </Typography>
                                                </Box>
                                                {index < (event.agenda || []).length - 1 && (
                                                    <Divider sx={{
                                                        mt: 1,
                                                        mb: 1,
                                                        opacity: 0.3
                                                    }} />
                                                )}
                                            </motion.div>
                                        ))}
                                    </Paper>
                                </motion.div>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}