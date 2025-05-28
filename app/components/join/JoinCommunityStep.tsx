'use client';

import { Box, Container, Typography, Button, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import { Send, Celebration, Chat, Forum } from '@mui/icons-material';
import Image from 'next/image';
import SectionTitle from '../ui/SectionTitle';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function JoinCommunityStep() {
    const communityOptions = [
        {
            name: 'Discord',
            description: 'Bergabunglah dengan server Discord utama kami untuk diskusi real-time, voice chat, dan acara komunitas',
            icon: <Forum fontSize="large" />,
            url: 'https://discord.gg/u5QPXgYXPW',
            gradient: 'linear-gradient(45deg, #5865F2 30%, #7289DA 90%)',
            shadowColor: 'rgba(88, 101, 242, 0.4)',
            hoverShadow: 'rgba(88, 101, 242, 0.6)',
            features: ['Voice & Text Channels', 'Screen Sharing', 'Event Komunitas', 'Integrasi Bot']
        },
        {
            name: 'WhatsApp',
            description: 'Update cepat, pengumuman, dan percakapan santai dengan sesama developer',
            icon: <Chat fontSize="large" />,
            url: 'https://chat.whatsapp.com/H6JiHoBmq3cCIBWTTNCv3T',
            gradient: 'linear-gradient(45deg, #25D366 30%, #128C7E 90%)',
            shadowColor: 'rgba(37, 211, 102, 0.4)',
            hoverShadow: 'rgba(37, 211, 102, 0.6)',
            features: ['Update Cepat', 'Mobile Friendly', 'Pesan Langsung', 'Berbagi File']
        }
    ];

    return (
        <Box
            component={motion.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
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
                    backgroundImage: 'url("/subtle-pattern.png")',
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
                    background: 'radial-gradient(circle, rgba(254,107,139,0.05) 0%, rgba(255,255,255,0) 70%)',
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
                    background: 'radial-gradient(circle, rgba(255,71,87,0.06) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="xl">
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle
                        title="Pilih Platform Anda!"
                        subtitle="Bergabunglah dengan komunitas kami di platform pilihan Anda. Anda dapat bergabung di kedua platform untuk tetap terhubung di semua saluran komunikasi!"
                    />
                </motion.div>

                {/* Community Options Grid */}
                <Grid container spacing={3} sx={{ mb: 6 }} justifyContent="center">
                    {communityOptions.map((option, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={6}
                            key={option.name}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ delay: 0.3 + (index * 0.2), duration: 0.6 }}
                                whileHover={{ y: -10 }}
                                style={{
                                    height: '100%',
                                    width: '100%',
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        width: '380px', // Fixed width - sama seperti AboutSection
                                        height: '650px', // Increased height from 520px to 600px
                                        p: 4,
                                        minWidth: 0,
                                        maxWidth: '100%',
                                        borderRadius: '20px',
                                        border: '1px solid rgba(254, 107, 139, 0.1)',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            // Dynamic shadow and border based on platform
                                            boxShadow: option.name === 'Discord'
                                                ? '0 15px 40px rgba(88, 101, 242, 0.25)' // Discord purple shadow
                                                : '0 15px 40px rgba(37, 211, 102, 0.25)', // WhatsApp green shadow
                                            transform: 'translateY(-5px)',
                                            borderColor: option.name === 'Discord'
                                                ? 'rgba(88, 101, 242, 0.3)' // Discord purple border
                                                : 'rgba(37, 211, 102, 0.3)', // WhatsApp green border
                                            // Add subtle background color change
                                            backgroundColor: option.name === 'Discord'
                                                ? 'rgba(88, 101, 242, 0.02)' // Very subtle Discord purple background
                                                : 'rgba(37, 211, 102, 0.02)' // Very subtle WhatsApp green background
                                        },
                                        display: 'flex',
                                        flexDirection: 'column',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        overflow: 'hidden',
                                        mx: 'auto' // Center the card
                                    }}
                                >
                                    {/* Platform Icon - Fixed height area */}
                                    <Box
                                        sx={{
                                            mb: 3,
                                            p: 2,
                                            borderRadius: '50%',
                                            background: option.gradient,
                                            color: 'white',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            width: 80,
                                            height: 80,
                                            boxShadow: `0 4px 15px ${option.shadowColor}`,
                                            flexShrink: 0, // Don't shrink
                                            transition: 'all 0.3s ease',
                                            // Add hover effect to icon too
                                            '.MuiPaper-root:hover &': {
                                                transform: 'scale(1.1)',
                                                boxShadow: option.name === 'Discord'
                                                    ? '0 6px 25px rgba(88, 101, 242, 0.4)'
                                                    : '0 6px 25px rgba(37, 211, 102, 0.4)'
                                            }
                                        }}
                                    >
                                        {option.icon}
                                    </Box>

                                    {/* Platform Name - Fixed height area */}
                                    <Box
                                        sx={{
                                            width: '100%',
                                            textAlign: 'center',
                                            mb: 2,
                                            height: '60px', // Fixed height for title area
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
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                maxWidth: '100%',
                                                transition: 'all 0.3s ease',
                                                // Add hover effect to title
                                                '.MuiPaper-root:hover &': {
                                                    color: option.name === 'Discord' ? '#5865F2' : '#25D366'
                                                }
                                            }}
                                        >
                                            {option.name}
                                            {/* Animated underline */}
                                            <Box
                                                component={motion.div}
                                                initial={{ width: 0 }}
                                                whileInView={{ width: '60%' }}
                                                viewport={{ once: true }}
                                                transition={{ duration: 0.4, delay: 0.2 + (index * 0.1) }}
                                                sx={{
                                                    position: 'absolute',
                                                    height: '3px',
                                                    width: '60%',
                                                    bottom: 0,
                                                    left: '20%',
                                                    background: option.gradient,
                                                    borderRadius: '2px',
                                                    transition: 'all 0.3s ease',
                                                    // Make underline glow on hover
                                                    '.MuiPaper-root:hover &': {
                                                        height: '4px',
                                                        boxShadow: option.name === 'Discord'
                                                            ? '0 2px 8px rgba(88, 101, 242, 0.6)'
                                                            : '0 2px 8px rgba(37, 211, 102, 0.6)'
                                                    }
                                                }}
                                            />
                                        </Typography>
                                    </Box>

                                    {/* Platform Description - Fixed height area */}
                                    <Box sx={{
                                        width: '100%',
                                        height: '120px', // Increased height from 100px to 120px
                                        display: 'flex',
                                        alignItems: 'flex-start',
                                        justifyContent: 'center',
                                        mb: 3,
                                        flexShrink: 0
                                    }}>
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                fontFamily: montserratFont,
                                                color: '#666',
                                                lineHeight: 1.5,
                                                fontSize: { xs: '0.9rem', md: '0.95rem' },
                                                textAlign: 'center',
                                                wordWrap: 'break-word',
                                                whiteSpace: 'normal',
                                                display: '-webkit-box',
                                                WebkitLineClamp: 5, // Increased from 4 to 5 lines
                                                WebkitBoxOrient: 'vertical',
                                                overflow: 'hidden',
                                                transition: 'all 0.3s ease',
                                                // Subtle color change on hover
                                                '.MuiPaper-root:hover &': {
                                                    color: '#555'
                                                }
                                            }}
                                        >
                                            {option.description}
                                        </Typography>
                                    </Box>

                                    {/* Features List - Fixed height area */}
                                    <Box sx={{
                                        mb: 3,
                                        width: '100%',
                                        height: '140px', // Increased height from 120px to 140px
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'flex-start',
                                        flexShrink: 0
                                    }}>
                                        {option.features.map((feature, idx) => (
                                            <Typography
                                                key={idx}
                                                variant="body2"
                                                sx={{
                                                    fontFamily: montserratFont,
                                                    color: '#555',
                                                    mb: 0.75, // Increased spacing from 0.5 to 0.75
                                                    fontSize: '0.9rem',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'flex-start',
                                                    lineHeight: 1.4, // Added line height for better spacing
                                                    transition: 'all 0.3s ease',
                                                    '&:before': {
                                                        content: '"✓"',
                                                        color: option.name === 'Discord' ? '#5865F2' : '#25D366',
                                                        fontWeight: 'bold',
                                                        marginRight: 1,
                                                        flexShrink: 0,
                                                        transition: 'all 0.3s ease'
                                                    },
                                                    // Enhanced hover effect for features
                                                    '.MuiPaper-root:hover &': {
                                                        color: '#333',
                                                        '&:before': {
                                                            transform: 'scale(1.2)',
                                                            color: option.name === 'Discord' ? '#5865F2' : '#25D366'
                                                        }
                                                    }
                                                }}
                                            >
                                                {feature}
                                            </Typography>
                                        ))}
                                    </Box>

                                    {/* Join Button - Fixed at bottom with proper spacing */}
                                    <Box sx={{
                                        width: '100%',
                                        mt: 'auto', // Push to bottom
                                        pt: 2, // Add padding top to ensure spacing
                                        flexShrink: 0
                                    }}>
                                        <motion.div
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.98 }}
                                            style={{ width: '100%' }}
                                        >
                                            <Button
                                                variant="contained"
                                                size="large"
                                                href={option.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                startIcon={option.icon}
                                                sx={{
                                                    borderRadius: '14px',
                                                    py: 1.5,
                                                    px: 4,
                                                    width: '100%',
                                                    background: option.gradient,
                                                    boxShadow: `0 4px 15px ${option.shadowColor}`,
                                                    fontWeight: 600,
                                                    letterSpacing: '0.5px',
                                                    textTransform: 'none',
                                                    fontSize: '1rem',
                                                    fontFamily: montserratFont,
                                                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                                    '&:hover': {
                                                        boxShadow: `0 8px 30px ${option.hoverShadow}`, // Enhanced shadow on button hover
                                                        transform: 'translateY(-2px)' // Slight lift on button hover
                                                    }
                                                }}
                                            >
                                                Bergabung ke {option.name}
                                            </Button>
                                        </motion.div>
                                    </Box>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>

                {/* Community Image */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            height: { xs: 150, md: 200 },
                            width: '100%',
                            mb: 4,
                            maxWidth: 500,
                            mx: 'auto',
                            filter: 'drop-shadow(0px 10px 15px rgba(0, 0, 0, 0.15))'
                        }}
                    >
                    </Box>
                </motion.div>

                {/* Community Success Message */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.7, duration: 0.6 }}
                >
                    <Box
                        sx={{
                            textAlign: 'center',
                            mb: 4,
                            py: 4,
                            px: 3,
                            borderRadius: '20px',
                            background: 'linear-gradient(135deg, rgba(254, 107, 139, 0.05) 0%, rgba(255, 142, 83, 0.05) 100%)',
                            border: '1px solid rgba(254, 107, 139, 0.1)',
                            maxWidth: 600,
                            mx: 'auto'
                        }}
                    >
                        {/* Success Icon */}
                        <Box
                            sx={{
                                display: 'inline-flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: 60,
                                height: 60,
                                borderRadius: '50%',
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                color: 'white',
                                boxShadow: '0 4px 15px rgba(254, 107, 139, 0.3)',
                                mb: 3
                            }}
                        >
                            <Send fontSize="large" />
                        </Box>

                        {/* Success Title */}
                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                mb: 2,
                                color: '#333',
                                fontSize: { xs: '1.3rem', md: '1.5rem' }
                            }}
                        >
                            Siap Bergabung!
                        </Typography>

                        {/* Success Description */}
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: montserratFont,
                                color: '#666',
                                lineHeight: 1.6,
                                fontSize: { xs: '0.95rem', md: '1rem' },
                                maxWidth: 400,
                                mx: 'auto'
                            }}
                        >
                            Pilih platform favorit Anda dan mulai terhubung dengan komunitas developer Karawang yang amazing!
                        </Typography>
                    </Box>
                </motion.div>

                {/* Footer Text */}
                <Box sx={{ textAlign: 'center' }}>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: montserratFont,
                            color: '#666',
                            fontSize: '0.95rem',
                            mb: 1,
                            lineHeight: 1.6
                        }}
                    >
                        Anda dapat bergabung di kedua platform untuk tetap terhubung penuh dengan komunitas kami
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            fontFamily: montserratFont,
                            color: '#888',
                            fontSize: '0.85rem'
                        }}
                    >
                        Link akan terbuka di tab baru
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
}