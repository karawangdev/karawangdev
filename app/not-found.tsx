'use client';

import { Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import HomeIcon from '@mui/icons-material/Home';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

export default function NotFound() {
    const router = useRouter();

    return (
        <Container maxWidth="md">
            <Box
                component={motion.div}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    textAlign: 'center',
                    py: 8,
                    px: 2,
                    fontFamily: montserratFont
                }}
            >
                {/* 404 with animated effect */}
                <Box
                    sx={{
                        mb: 3,
                        position: 'relative',
                        display: 'flex',
                        justifyContent: 'center',
                        width: '100%'
                    }}
                >
                    <Typography
                        variant="h1"
                        component="div"
                        sx={{
                            fontSize: { xs: '120px', md: '180px' },
                            fontWeight: 900,
                            letterSpacing: '-5px',
                            color: 'rgba(0, 147, 233, 0.1)',
                            fontFamily: montserratFont,
                            lineHeight: 1,
                            userSelect: 'none'
                        }}
                    >
                        404
                    </Typography>
                    <Box
                        component={motion.div}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
                        sx={{
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                            zIndex: 2
                        }}
                    >
                        <SearchOffIcon
                            sx={{
                                fontSize: { xs: 80, md: 100 },
                                color: '#0093E9',
                                opacity: 0.8
                            }}
                        />
                    </Box>
                </Box>

                <Typography
                    variant="h2"
                    component="h1"
                    sx={{
                        mb: 2,
                        fontWeight: 700,
                        fontSize: { xs: '1.8rem', md: '2.5rem' },
                        color: '#333',
                        fontFamily: montserratFont,
                        position: 'relative'
                    }}
                >
                    Page Not Found
                    <Box
                        component={motion.div}
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ delay: 0.6, duration: 0.4 }}
                        sx={{
                            position: 'absolute',
                            bottom: -5,
                            left: 0,
                            height: 3,
                            bgcolor: 'rgba(0, 147, 233, 0.3)',
                            borderRadius: 4
                        }}
                    />
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        maxWidth: 500,
                        mx: 'auto',
                        color: '#666',
                        fontFamily: montserratFont,
                        fontSize: { xs: '1rem', md: '1.1rem' },
                        lineHeight: 1.6
                    }}
                >
                    The page you're looking for doesn't exist or has been moved.
                    Don't worry, we can help you find your way back.
                </Typography>

                <Box sx={{
                    mt: 2,
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 2
                }}>
                    <Button
                        variant="contained"
                        onClick={() => router.push('/')}
                        startIcon={<HomeIcon />}
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        sx={{
                            py: 1.5,
                            px: 3,
                            borderRadius: '14px',
                            background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                            boxShadow: '0 3px 15px rgba(0, 147, 233, 0.4)',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontFamily: montserratFont,
                            '&:hover': {
                                background: 'linear-gradient(45deg, #80D0C7 30%, #0093E9 90%)',
                                boxShadow: '0 6px 20px rgba(0, 147, 233, 0.5)',
                            },
                            transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                        }}
                    >
                        Return Home
                    </Button>
                    <Button
                        variant="outlined"
                        startIcon={<TravelExploreIcon />}
                        onClick={() => router.push('/events')}
                        component={motion.button}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        sx={{
                            py: 1.5,
                            px: 3,
                            borderRadius: '14px',
                            borderColor: '#0093E9',
                            color: '#0093E9',
                            fontWeight: 600,
                            letterSpacing: '0.5px',
                            textTransform: 'none',
                            fontSize: '1rem',
                            fontFamily: montserratFont,
                            '&:hover': {
                                borderColor: '#0093E9',
                                backgroundColor: 'rgba(0, 147, 233, 0.05)',
                            }
                        }}
                    >
                        Browse Events
                    </Button>
                </Box>

                {/* Decorative elements */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1, duration: 1 }}
                    sx={{
                        position: 'absolute',
                        top: '15%',
                        right: '10%',
                        width: { xs: 100, md: 150 },
                        height: { xs: 100, md: 150 },
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(0,147,233,0.1) 0%, rgba(255,255,255,0) 70%)',
                        pointerEvents: 'none',
                        zIndex: -1
                    }}
                />
                <Box
                    component={motion.div}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.5 }}
                    transition={{ delay: 1.3, duration: 1 }}
                    sx={{
                        position: 'absolute',
                        bottom: '15%',
                        left: '10%',
                        width: { xs: 80, md: 120 },
                        height: { xs: 80, md: 120 },
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(254,107,139,0.1) 0%, rgba(255,255,255,0) 70%)',
                        pointerEvents: 'none',
                        zIndex: -1
                    }}
                />

                {/* Small decorative shapes */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.5, duration: 0.8 }}
                    sx={{
                        position: 'absolute',
                        top: '25%',
                        left: '20%',
                        width: 15,
                        height: 15,
                        borderRadius: 2,
                        transform: 'rotate(45deg)',
                        background: 'rgba(0,147,233,0.2)',
                        pointerEvents: 'none',
                        zIndex: -1
                    }}
                />
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.6, duration: 0.8 }}
                    sx={{
                        position: 'absolute',
                        bottom: '30%',
                        right: '25%',
                        width: 20,
                        height: 20,
                        borderRadius: '50%',
                        background: 'rgba(254,107,139,0.2)',
                        pointerEvents: 'none',
                        zIndex: -1
                    }}
                />
            </Box>
        </Container>
    );
}