'use client';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { Facebook, Twitter, Instagram, LinkedIn, GitHub } from '@mui/icons-material';
import Divider from '@mui/material/Divider';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Fragment } from 'react';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

const Footer = () => {
    // Animation variants
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

    const socialIconVariants = {
        hidden: { scale: 0 },
        visible: i => ({
            scale: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5 + (i * 0.1)
            }
        }),
        hover: {
            scale: 1.2,
            transition: { duration: 0.2 }
        }
    };

    return (
        <Box
            sx={{
                bgcolor: '#121212',
                color: 'white',
                py: 6,
                fontFamily: montserratFont,
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.95))',
                boxShadow: 'inset 0 5px 15px rgba(0,0,0,0.5)',
                borderTop: '1px solid rgba(255,255,255,0.05)'
            }}
            component={motion.footer}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <Container maxWidth="lg">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Grid container spacing={5}>
                        {/* Logo and Name */}
                        <Grid item xs={12} md={4}>
                            <motion.div variants={itemVariants}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                    <Image
                                        src="/logo-darkbg.jpg"
                                        alt="KarawanDev Logo"
                                        width={50}
                                        height={50}
                                        style={{ objectFit: 'contain' }}
                                    />
                                    <Typography
                                        variant="h6"
                                        sx={{
                                            ml: 2,
                                            fontWeight: 700,
                                            letterSpacing: '.2rem',
                                            fontFamily: montserratFont,
                                        }}
                                    >
                                        Karawang<Box component="span" sx={{ fontWeight: 800 }}>Dev</Box>
                                    </Typography>
                                </Box>
                            </motion.div>
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mb: 2,
                                        fontFamily: montserratFont,
                                        lineHeight: 1.6,
                                        color: 'rgba(255,255,255,0.8)'
                                    }}
                                >
                                    Community of technology enthusiasts, developers, and innovators in Karawang
                                </Typography>
                            </motion.div>
                            <Box sx={{ display: 'flex', mt: 2 }}>
                                {[
                                    { icon: <Facebook />, url: 'https://facebook.com', i: 0 },
                                    { icon: <Twitter />, url: 'https://twitter.com', i: 1 },
                                    { icon: <Instagram />, url: 'https://instagram.com', i: 2 },
                                    { icon: <LinkedIn />, url: 'https://linkedin.com', i: 3 },
                                    { icon: <GitHub />, url: 'https://github.com', i: 4 }
                                ].map((social) => (
                                    <motion.div
                                        key={social.url}
                                        variants={socialIconVariants}
                                        custom={social.i}
                                        whileHover="hover"
                                    >
                                        <Link href={social.url} passHref>
                                            <Box
                                                component="a"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                sx={{
                                                    color: 'white',
                                                    mr: 2,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    p: 1,
                                                    borderRadius: '50%',
                                                    bgcolor: 'rgba(255,255,255,0.05)',
                                                    transition: 'all 0.3s',
                                                    '&:hover': {
                                                        bgcolor: 'rgba(254, 107, 139, 0.3)',
                                                        boxShadow: '0 0 15px rgba(254, 107, 139, 0.5)'
                                                    }
                                                }}
                                            >
                                                {social.icon}
                                            </Box>
                                        </Link>
                                    </motion.div>
                                ))}
                            </Box>
                        </Grid>

                        {/* Pages */}
                        <Grid item xs={12} sm={6} md={2}>
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 2.5,
                                        fontWeight: 700,
                                        fontFamily: montserratFont,
                                        position: 'relative',
                                        display: 'inline-block',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -5,
                                            left: 0,
                                            width: '50%',
                                            height: '3px',
                                            borderRadius: '3px',
                                            background: 'linear-gradient(45deg, #0093E9 0%, #80D0C7 100%)'
                                        }
                                    }}
                                >
                                    Pages
                                </Typography>
                            </motion.div>
                            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                {['Home', 'About', 'Events', 'Join', 'Blog'].map((item, i) => (
                                    <motion.li
                                        key={item}
                                        variants={itemVariants}
                                        custom={i}
                                        style={{ marginBottom: '12px' }}
                                    >
                                        <Link href={`/${item.toLowerCase() === 'home' ? '' : item.toLowerCase()}`} passHref>
                                            <Box
                                                component="a"
                                                sx={{
                                                    color: 'rgba(255,255,255,0.8)',
                                                    textDecoration: 'none',
                                                    fontFamily: montserratFont,
                                                    fontSize: '0.95rem',
                                                    fontWeight: 500,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    transition: 'all 0.3s',
                                                    '&:hover': {
                                                        color: '#0093E9',
                                                        transform: 'translateX(5px)'
                                                    },
                                                    '&::before': {
                                                        content: '"›"',
                                                        marginRight: '8px',
                                                        fontSize: '18px',
                                                        opacity: 0.6
                                                    }
                                                }}
                                            >
                                                {item}
                                            </Box>
                                        </Link>
                                    </motion.li>
                                ))}
                            </Box>
                        </Grid>

                        {/* Sponsors */}
                        <Grid item xs={12} sm={6} md={3}>
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 2.5,
                                        fontWeight: 700,
                                        fontFamily: montserratFont,
                                        position: 'relative',
                                        display: 'inline-block',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -5,
                                            left: 0,
                                            width: '50%',
                                            height: '3px',
                                            borderRadius: '3px',
                                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'
                                        }
                                    }}
                                >
                                    Sponsors
                                </Typography>
                            </motion.div>
                            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                {['Google Developer', 'Microsoft', 'Telkom Indonesia', 'AWS'].map((item, i) => (
                                    <motion.li
                                        key={item}
                                        variants={itemVariants}
                                        custom={i}
                                        style={{ marginBottom: '12px' }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                color: 'rgba(255,255,255,0.8)',
                                                fontFamily: montserratFont,
                                                fontSize: '0.95rem',
                                                fontWeight: 500,
                                                padding: '4px 10px',
                                                borderRadius: '8px',
                                                background: 'rgba(255,255,255,0.05)',
                                                display: 'inline-block'
                                            }}
                                        >
                                            {item}
                                        </Box>
                                    </motion.li>
                                ))}
                            </Box>
                        </Grid>

                        {/* Community Partners */}
                        <Grid item xs={12} sm={6} md={3}>
                            <motion.div variants={itemVariants}>
                                <Typography
                                    variant="h6"
                                    sx={{
                                        mb: 2.5,
                                        fontWeight: 700,
                                        fontFamily: montserratFont,
                                        position: 'relative',
                                        display: 'inline-block',
                                        '&::after': {
                                            content: '""',
                                            position: 'absolute',
                                            bottom: -5,
                                            left: 0,
                                            width: '50%',
                                            height: '3px',
                                            borderRadius: '3px',
                                            background: 'linear-gradient(45deg, #0093E9 0%, #80D0C7 100%)'
                                        }
                                    }}
                                >
                                    Community Partners
                                </Typography>
                            </motion.div>
                            <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                                {['GDSC Indonesia', 'Indonesia JS', 'React Indonesia', 'Karawang Tech Hub'].map((item, i) => (
                                    <motion.li
                                        key={item}
                                        variants={itemVariants}
                                        custom={i}
                                        style={{ marginBottom: '12px' }}
                                    >
                                        <Box
                                            component="span"
                                            sx={{
                                                color: 'rgba(255,255,255,0.8)',
                                                fontFamily: montserratFont,
                                                fontSize: '0.95rem',
                                                fontWeight: 500,
                                                padding: '4px 10px',
                                                borderRadius: '8px',
                                                background: 'rgba(255,255,255,0.05)',
                                                display: 'inline-block'
                                            }}
                                        >
                                            {item}
                                        </Box>
                                    </motion.li>
                                ))}
                            </Box>
                        </Grid>
                    </Grid>
                </motion.div>

                <Divider sx={{
                    my: 4,
                    opacity: 0.1,
                    background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)'
                }} />

                <motion.div
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                >
                    <Typography
                        variant="body2"
                        align="center"
                        sx={{
                            color: 'rgba(255,255,255,0.6)',
                            fontFamily: montserratFont,
                            fontSize: '0.85rem',
                            letterSpacing: '0.5px'
                        }}
                    >
                        © {new Date().getFullYear()} KarawangDev Community. All rights reserved.
                    </Typography>

                    {/* Partnership/Sponsorship Contact */}
                    <Typography
                        variant="body2"
                        align="center"
                        sx={{
                            color: 'rgba(255,255,255,0.6)',
                            fontFamily: montserratFont,
                            fontSize: '0.85rem',
                            letterSpacing: '0.5px',
                            mt: 1.5,
                            mb: 1.5,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                            gap: 1
                        }}
                    >
                        <Box component="span">For partnership, sponsorship, or media inquiries:</Box>
                        <Link href="mailto:karawangdevs@gmail.com" passHref>
                            <Box
                                component="a"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    color: '#FE6B8B',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    fontWeight: 600,
                                    '&:hover': {
                                        color: '#FF8E53',
                                        transform: 'translateY(-2px)'
                                    }
                                }}
                            >
                                karawangdevs@gmail.com
                            </Box>
                        </Link>
                    </Typography>

                    {/* Open Source GitHub Message */}
                    <Typography
                        variant="body2"
                        align="center"
                        sx={{
                            color: 'rgba(255,255,255,0.6)',
                            fontFamily: montserratFont,
                            fontSize: '0.85rem',
                            letterSpacing: '0.5px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1
                        }}
                    >
                        <Box component="span">This website is open source on</Box>
                        <Link href="https://github.com/karawangdev/karawang-dev" passHref>
                            <Box
                                component="a"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    color: '#0093E9',
                                    textDecoration: 'none',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        color: '#80D0C7',
                                    }
                                }}
                            >
                                <GitHub sx={{ fontSize: 16, mr: 0.5 }} />
                                GitHub
                            </Box>
                        </Link>
                    </Typography>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Footer;