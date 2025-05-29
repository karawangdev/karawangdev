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
        visible: (i: number) => ({
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
                                        src="/logo.webp"
                                        alt="KarawangDev Logo"
                                        width={50}
                                        height={50}
                                        style={{
                                            objectFit: 'contain',
                                            filter: 'brightness(0) invert(1)',
                                            transition: 'all 0.3s ease'
                                        }}
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
                                    Komunitas pecinta teknologi, pengembang, dan inovator di Karawang
                                </Typography>
                            </motion.div>

                            {/* Fixed Social Links - Disable Facebook and Twitter */}
                            <Box sx={{ display: 'flex', mt: 2 }}>
                                {[
                                    { icon: <Facebook />, url: null, i: 0, disabled: true }, // ✅ Nonaktifkan Facebook
                                    { icon: <Twitter />, url: null, i: 1, disabled: true }, // ✅ Nonaktifkan Twitter
                                    { icon: <Instagram />, url: 'https://instagram.com/karawangdev', i: 2, disabled: false },
                                    { icon: <LinkedIn />, url: 'https://linkedin.com/company/karawangdev', i: 3, disabled: false },
                                    { icon: <GitHub />, url: 'https://github.com/karawangdev', i: 4, disabled: false }
                                ].map((social) => (
                                    <motion.div
                                        key={social.i}
                                        variants={socialIconVariants}
                                        custom={social.i}
                                        whileHover={social.disabled ? undefined : "hover"} // ✅ Disable hover jika disabled
                                    >
                                        <Box
                                            component={social.disabled ? "div" : "a"} // ✅ Gunakan div jika disabled
                                            href={social.disabled ? undefined : social.url} // ✅ No href jika disabled
                                            target={social.disabled ? undefined : "_blank"}
                                            rel={social.disabled ? undefined : "noopener noreferrer"}
                                            sx={{
                                                color: social.disabled ? 'rgba(255,255,255,0.3)' : 'white', // ✅ Warna lebih redup jika disabled
                                                mr: 2,
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                p: 1,
                                                borderRadius: '50%',
                                                bgcolor: social.disabled ? 'rgba(255,255,255,0.02)' : 'rgba(255,255,255,0.05)', // ✅ Background lebih redup
                                                transition: 'all 0.3s',
                                                textDecoration: 'none',
                                                cursor: social.disabled ? 'not-allowed' : 'pointer', // ✅ Cursor not-allowed
                                                opacity: social.disabled ? 0.5 : 1, // ✅ Opacity lebih rendah
                                                '&:hover': social.disabled ? {} : { // ✅ No hover effect jika disabled
                                                    bgcolor: 'rgba(254, 107, 139, 0.3)',
                                                    boxShadow: '0 0 15px rgba(254, 107, 139, 0.5)'
                                                }
                                            }}
                                        >
                                            {social.icon}
                                        </Box>
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
                                {[
                                    { name: 'Home', href: '/' },
                                    { name: 'About', href: '/about' },
                                    { name: 'Events', href: '/events' },
                                    { name: 'Join', href: '/join' }
                                ].map((item, i) => (
                                    <motion.li
                                        key={item.name}
                                        variants={itemVariants}
                                        custom={i}
                                        style={{ marginBottom: '12px' }}
                                    >
                                        <Link href={item.href} passHref>
                                            <Box
                                                component="span"
                                                sx={{
                                                    color: 'rgba(255,255,255,0.8)',
                                                    textDecoration: 'none',
                                                    fontFamily: montserratFont,
                                                    fontSize: '0.95rem',
                                                    fontWeight: 500,
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    transition: 'all 0.3s',
                                                    cursor: 'pointer',
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
                                                {item.name}
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
                        © {new Date().getFullYear()} Komunitas KarawangDev. Segala hak dilindungi.
                    </Typography>

                    {/* Partnership/Sponsorship Contact */}
                    <Typography
                        variant="body2"
                        align="center"
                        component="div"
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
                        <Box component="span">untuk kerjasama, sponsorship atau kebutuhan media:</Box>
                        <Box
                            component="a"
                            href="mailto:karawangdevs@gmail.com"
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
                    </Typography>

                    {/* Open Source GitHub Message */}
                    <Typography
                        variant="body2"
                        align="center"
                        component="div"
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
                        <Box component="span">Website ini open-source di</Box>
                        <Box
                            component="a"
                            href="https://github.com/karawangdev/karawangdev"
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
                    </Typography>
                </motion.div>
            </Container>
        </Box>
    );
};

export default Footer;