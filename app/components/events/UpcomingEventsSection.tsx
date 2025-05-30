'use client';

import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, Stack, Chip, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { CalendarMonth, AccessTime, LocationOn } from '@mui/icons-material';
import { useRouter } from 'next/navigation';
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

// Sample upcoming events data - updated with proper IDs and image paths
const upcomingEvents = [
    {
        id: "web-development-workshop",
        title: "Workshop Pengembangan Web",
        description: "Pelajari teknik pengembangan web modern menggunakan React dan Next.js",
        date: "15 Juni 2025",
        time: "10:00 - 14:00",
        location: "Karawang Digital Hub",
        image: "/events-placeHolder.png",
        tags: ["Workshop", "Web Development", "React"]
    },
    {
        id: "mobile-app-development-hackathon",
        title: "Hackathon Aplikasi Mobile",
        description: "Hackathon 48 jam untuk membangun aplikasi mobile yang inovatif",
        date: "8-10 Juli 2025",
        time: "Mulai 09:00",
        location: "Tech Coworking Space, Karawang",
        image: "/events-placeHolder.png",
        tags: ["Hackathon", "Mobile", "Flutter"]
    },
    {
        id: "ai-and-machine-learning-seminar",
        title: "Seminar AI & Machine Learning",
        description: "Pengantar AI dan aplikasi praktis dalam bisnis",
        date: "5 Agustus 2025",
        time: "13:00 - 17:00",
        location: "Online via Zoom",
        image: "/events-placeHolder.png",
        tags: ["Seminar", "AI", "Machine Learning"]
    },
    {
        id: "devops-tech-talk",
        title: "Tech Talk: DevOps",
        description: "Best practices DevOps untuk tim pengembangan software",
        date: "20 September 2025",
        time: "19:00 - 21:00",
        location: "Aula Universitas Karawang",
        image: "/events-placeHolder.png",
        tags: ["Tech Talk", "DevOps", "CI/CD"]
    }
];

export default function UpcomingEventsSection() {
    const router = useRouter();

    const handleEventClick = (eventId: string) => {
        router.push(`/events/${eventId}`);
    };

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
                minHeight: '100vh',
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

            <Container maxWidth="xl">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Event Mendatang"
                        subtitle="Bergabunglah dengan event mendatang kami untuk belajar keterampilan baru, berjaringan dengan sesama developer, dan mengikuti tren teknologi terbaru"
                    />
                </motion.div>

                <Grid
                    container
                    spacing={3}
                    sx={{ mt: 2 }}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {upcomingEvents.map((event, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={event.id}
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
                                <Card
                                    elevation={0}
                                    sx={{
                                        width: '280px',
                                        height: '480px',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        borderRadius: '20px',
                                        overflow: 'hidden',
                                        border: '1px solid rgba(0, 147, 233, 0.1)',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                        transition: 'all 0.3s ease',
                                        cursor: 'pointer',
                                        '&:hover': {
                                            boxShadow: '0 15px 40px rgba(0, 147, 233, 0.15)',
                                            transform: 'translateY(-5px)',
                                            borderColor: 'rgba(0, 147, 233, 0.2)'
                                        },
                                        mx: 'auto'
                                    }}
                                    onClick={() => handleEventClick(event.id)}
                                >
                                    {/* Image Section */}
                                    <Box sx={{ position: 'relative', height: 140, flexShrink: 0 }}>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={event.image}
                                            alt={event.title}
                                            sx={{ objectFit: 'cover' }}
                                        />
                                        <Box
                                            sx={{
                                                position: 'absolute',
                                                top: 8,
                                                right: 8,
                                                display: 'flex',
                                                gap: 0.5
                                            }}
                                        >
                                            {event.tags.slice(0, 1).map((tag, tagIndex) => (
                                                <Chip
                                                    key={tagIndex}
                                                    label={tag}
                                                    size="small"
                                                    sx={{
                                                        bgcolor: 'rgba(0, 147, 233, 0.9)',
                                                        color: 'white',
                                                        fontWeight: 500,
                                                        fontFamily: montserratFont,
                                                        fontSize: '0.7rem'
                                                    }}
                                                />
                                            ))}
                                        </Box>
                                    </Box>

                                    {/* Content Section */}
                                    <CardContent sx={{ flexGrow: 1, p: 2.5, display: 'flex', flexDirection: 'column' }}>
                                        {/* Title Area */}
                                        <Box
                                            sx={{
                                                width: '100%',
                                                textAlign: 'center',
                                                mb: 1.5,
                                                height: '60px',
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
                                                    fontSize: { xs: '1rem', md: '1.1rem' },
                                                    textAlign: 'center',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 2,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden',
                                                    lineHeight: 1.3,
                                                    maxWidth: '100%'
                                                }}
                                            >
                                                {event.title}
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
                                        <Box sx={{ mb: 2, flexShrink: 0, height: '60px', overflow: 'hidden' }}>
                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    fontSize: '0.85rem',
                                                    lineHeight: 1.4,
                                                    textAlign: 'center',
                                                    display: '-webkit-box',
                                                    WebkitLineClamp: 3,
                                                    WebkitBoxOrient: 'vertical',
                                                    overflow: 'hidden'
                                                }}
                                            >
                                                {event.description}
                                            </Typography>
                                        </Box>

                                        {/* Event Details */}
                                        <Stack spacing={1} sx={{ mb: 2, flexShrink: 0 }}>
                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                                <CalendarMonth fontSize="small" sx={{ color: '#0093E9', opacity: 0.8 }} />
                                                <Typography variant="body2" sx={{ fontFamily: montserratFont, fontSize: '0.8rem' }}>
                                                    {event.date}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                                <AccessTime fontSize="small" sx={{ color: '#0093E9', opacity: 0.8 }} />
                                                <Typography variant="body2" sx={{ fontFamily: montserratFont, fontSize: '0.8rem' }}>
                                                    {event.time}
                                                </Typography>
                                            </Box>

                                            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, justifyContent: 'center' }}>
                                                <LocationOn fontSize="small" sx={{ color: '#0093E9', opacity: 0.8 }} />
                                                <Typography
                                                    variant="body2"
                                                    sx={{
                                                        fontFamily: montserratFont,
                                                        fontSize: '0.8rem',
                                                        textAlign: 'center',
                                                        display: '-webkit-box',
                                                        WebkitLineClamp: 2,
                                                        WebkitBoxOrient: 'vertical',
                                                        overflow: 'hidden'
                                                    }}
                                                >
                                                    {event.location}
                                                </Typography>
                                            </Box>
                                        </Stack>

                                        {/* Button Area */}
                                        <Box sx={{ mt: 'auto', pt: 1 }}>
                                            <motion.div
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                            >
                                                <Button
                                                    fullWidth
                                                    variant="contained"
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        handleEventClick(event.id);
                                                    }}
                                                    sx={{
                                                        fontFamily: montserratFont,
                                                        textTransform: 'none',
                                                        fontWeight: 600,
                                                        borderRadius: '12px',
                                                        py: 1,
                                                        fontSize: '0.9rem',
                                                        background: 'linear-gradient(135deg, #0093E9 0%, #80D0C7 100%)',
                                                        boxShadow: '0 3px 10px rgba(0, 147, 233, 0.3)',
                                                        '&:hover': {
                                                            background: 'linear-gradient(135deg, #0093E9 30%, #80D0C7 90%)',
                                                            boxShadow: '0 5px 15px rgba(0, 147, 233, 0.4)',
                                                        },
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                >
                                                    Daftar Sekarang
                                                </Button>
                                            </motion.div>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                <Box sx={{ textAlign: 'center', mt: 6 }}>
                    <motion.div
                        variants={itemVariants}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                        style={{ display: 'inline-block' }}
                    >
                        <Button
                            variant="outlined"
                            size="large"
                            sx={{
                                borderRadius: '14px',
                                py: 1.5,
                                px: 4,
                                minWidth: '200px',
                                borderColor: '#0093E9',
                                color: '#0093E9',
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: '1rem',
                                fontFamily: montserratFont,
                                '&:hover': {
                                    borderColor: '#0093E9',
                                    backgroundColor: 'rgba(0, 147, 233, 0.05)',
                                    boxShadow: '0 4px 15px rgba(0, 147, 233, 0.1)',
                                },
                                transition: 'all 0.3s ease'
                            }}
                        >
                            Lihat Semua Event
                        </Button>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}