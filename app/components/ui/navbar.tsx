'use client';

import { useState, useEffect, Fragment } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import {
    Home as HomeIcon,
    Info as InfoIcon,
    Event as EventIcon,
    PeopleAlt as PeopleIcon,
    Close as CloseIcon
} from '@mui/icons-material';
import { Divider, Fade, useScrollTrigger } from '@mui/material';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

const pages = [
    { name: 'Home', href: '/', icon: <HomeIcon sx={{ fontSize: 20 }} /> },
    { name: 'About', href: '/about', icon: <InfoIcon sx={{ fontSize: 20 }} /> },
    { name: 'Events', href: '/events', icon: <EventIcon sx={{ fontSize: 20 }} /> },
];

export default function Navbar() {
    const pathname = usePathname();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 50,
    });

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const isActive = (href: string) => pathname === href;

    // NavLink animations
    const navLinkVariants = {
        initial: { y: -10, opacity: 0 },
        animate: (i: number) => ({
            y: 0,
            opacity: 1,
            transition: {
                delay: i * 0.1,
                duration: 0.5,
                ease: [0.6, -0.05, 0.01, 0.99],
            },
        }),
    };

    return (
        <AppBar
            position="fixed"
            elevation={0}
            sx={{
                background: trigger
                    ? 'rgba(255, 255, 255, 0.95)' // ✅ Increased opacity for better contrast
                    : 'rgba(255, 255, 255, 0.85)', // ✅ Increased opacity
                backdropFilter: 'blur(15px) saturate(180%)',
                boxShadow: trigger
                    ? '0 10px 30px -10px rgba(0, 0, 0, 0.08)'
                    : 'none',
                color: '#333',
                transition: 'all 0.4s cubic-bezier(0.65, 0, 0.35, 1)',
                borderBottom: trigger ? 'none' : '1px solid rgba(0, 0, 0, 0.05)',
                fontFamily: montserratFont,
            }}
            component={motion.nav}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <Box
                component="a"
                href="#main-content"
                sx={{
                    position: 'absolute',
                    left: '-9999px',
                    top: '8px',
                    zIndex: 9999,
                    padding: '8px 16px',
                    background: '#0093E9',
                    color: 'white',
                    textDecoration: 'none',
                    borderRadius: '4px',
                    fontWeight: 600,
                    '&:focus': {
                        left: '8px'
                    }
                }}
            >
                Skip to main content
            </Box>
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ py: { xs: 1, md: 1.2 } }}>
                    {/* Desktop Logo */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        sx={{
                            display: { xs: 'none', md: 'flex' },
                            mr: 1.5,
                            alignItems: 'center'
                        }}
                    >
                        <Link href="/" passHref style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src="/logo.webp"
                                alt="Karawang Dev Logo"
                                width={45}
                                height={45}
                                style={{
                                    objectFit: 'contain',
                                    filter: 'drop-shadow(0px 2px 5px rgba(0, 0, 0, 0.1))'
                                }}
                            />
                        </Link>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 3,
                            color: '#1a1a1a', // ✅ Darker color for better contrast
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: montserratFont,
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                            filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.05))',
                        }}
                    >
                        Karawang<Box component="span" sx={{ fontWeight: 800 }}>Dev</Box>
                    </Typography>

                    {/* Mobile Menu */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="Open navigation menu" // ✅ More descriptive aria-label
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                            sx={{
                                border: '1px solid rgba(0, 0, 0, 0.12)', // ✅ Slightly more visible border
                                borderRadius: '12px',
                                p: 1,
                                color: '#2c2c2c', // ✅ Darker icon color
                                '&:hover': {
                                    backgroundColor: 'rgba(0, 147, 233, 0.08)'
                                },
                                // ✅ Add focus styles
                                '&:focus': {
                                    outline: '2px solid #0093E9',
                                    outlineOffset: '2px'
                                }
                            }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            TransitionComponent={Fade}
                            transitionDuration={300}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                                '& .MuiPaper-root': {
                                    borderRadius: '16px',
                                    mt: 1.5,
                                    width: '90vw',
                                    maxWidth: '360px',
                                    p: 2,
                                    boxShadow: '0 10px 40px rgba(0, 0, 0, 0.12)',
                                    border: '1px solid rgba(0, 0, 0, 0.05)',
                                    backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.95))',
                                    backdropFilter: 'blur(10px)',
                                    fontFamily: montserratFont, // Apply Montserrat to menu
                                }
                            }}
                        >
                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                mb: 1.5,
                                px: 1
                            }}>
                                <Typography variant="subtitle1" fontWeight={700} sx={{
                                    color: '#0093E9',
                                    letterSpacing: '0.05em',
                                    fontFamily: montserratFont,
                                }}>
                                    MENU
                                </Typography>
                                <IconButton
                                    size="small"
                                    onClick={handleCloseNavMenu}
                                    aria-label="Close navigation menu" // ✅ Add aria-label
                                    sx={{
                                        backgroundColor: 'rgba(0, 0, 0, 0.06)', // ✅ Slightly more visible
                                        color: '#2c2c2c', // ✅ Darker color
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 0, 0, 0.1)',
                                            color: '#0093E9'
                                        },
                                        // ✅ Add focus styles
                                        '&:focus': {
                                            outline: '2px solid #0093E9',
                                            outlineOffset: '2px'
                                        }
                                    }}
                                >
                                    <CloseIcon fontSize="small" />
                                </IconButton>
                            </Box>
                            <Divider sx={{ mb: 1.5 }} />

                            <Box sx={{ mb: 1 }}>
                                {pages.map((page, i) => (
                                    <MenuItem
                                        key={page.name}
                                        onClick={handleCloseNavMenu}
                                        component={motion.div}
                                        variants={navLinkVariants}
                                        initial="initial"
                                        animate="animate"
                                        custom={i}
                                        sx={{
                                            mb: 0.5,
                                            py: 1.5,
                                            borderRadius: '12px',
                                            backgroundColor: isActive(page.href) ? 'rgba(0, 147, 233, 0.1)' : 'transparent',
                                            '&:hover': {
                                                backgroundColor: 'rgba(0, 147, 233, 0.05)',
                                            },
                                            fontFamily: montserratFont, // Apply Montserrat to menu items
                                        }}
                                    >
                                        <Box component={Link} href={page.href} sx={{
                                            display: 'flex',
                                            width: '100%',
                                            alignItems: 'center',
                                            textDecoration: 'none',
                                            color: isActive(page.href) ? '#0093E9' : '#2c2c2c', // ✅ Darker text for better contrast
                                            fontWeight: isActive(page.href) ? 600 : 500,
                                            fontFamily: montserratFont, // Apply Montserrat to links
                                        }}>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '10px',
                                                mr: 2,
                                                width: 36,
                                                height: 36,
                                                backgroundColor: isActive(page.href) ? 'rgba(0, 147, 233, 0.15)' : 'rgba(0, 0, 0, 0.04)'
                                            }}>
                                                {page.icon}
                                            </Box>
                                            <Typography variant="body1" sx={{ fontFamily: montserratFont }}>
                                                {page.name}
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                ))}
                            </Box>

                            <Divider sx={{ my: 1.5 }} />

                            <Box sx={{ px: 1, pb: 1, pt: 0.5 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    component={Link}
                                    href="/join"
                                    onClick={handleCloseNavMenu}
                                    startIcon={<PeopleIcon />}
                                    sx={{
                                        borderRadius: '14px',
                                        py: 1.5,
                                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                        boxShadow: '0 3px 15px rgba(254, 107, 139, 0.4)',
                                        fontWeight: 600,
                                        letterSpacing: '0.5px',
                                        textTransform: 'none',
                                        fontSize: '1rem',
                                        fontFamily: montserratFont, // Apply Montserrat to button
                                        '&:hover': {
                                            background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                                            boxShadow: '0 6px 20px rgba(254, 107, 139, 0.5)',
                                        }
                                    }}
                                >
                                    Join Our Community
                                </Button>
                            </Box>
                        </Menu>
                    </Box>

                    {/* Mobile Logo */}
                    <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1.5 }}>
                        <Link href="/" passHref style={{ display: 'flex', alignItems: 'center' }}>
                            <Image
                                src="/logo.webp"
                                alt="Karawang Dev Logo"
                                width={36}
                                height={36}
                                style={{ objectFit: 'contain' }}
                            />
                        </Link>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        href="/"
                        sx={{
                            mr: 2,
                            color: '#1a1a1a', // ✅ Darker color for better contrast
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: montserratFont,
                            fontWeight: 500,
                            letterSpacing: '.1rem',
                            textDecoration: 'none',
                        }}
                    >
                        Karawang<Box component="span" sx={{ fontWeight: 800 }}>Dev</Box>
                    </Typography>

                    {/* Desktop Nav Links */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                            justifyContent: 'center',
                            gap: 1
                        }}
                    >
                        {pages.map((page, i) => (
                            <Fragment key={page.name}>
                                <Button
                                    component={Link}
                                    href={page.href}
                                    onClick={handleCloseNavMenu}
                                    aria-label={`Navigate to ${page.name} page`} // ✅ Add aria-label for accessibility
                                    sx={{
                                        px: 2.5,
                                        py: 1,
                                        mx: 0.5,
                                        color: isActive(page.href) ? '#0093E9' : '#2c2c2c', // ✅ Darker text for better contrast
                                        fontWeight: isActive(page.href) ? 600 : 500,
                                        borderRadius: '12px',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s',
                                        fontSize: '0.95rem',
                                        textTransform: 'none',
                                        letterSpacing: '0.3px',
                                        backgroundColor: isActive(page.href) ? 'rgba(0, 147, 233, 0.12)' : 'transparent', // ✅ Slightly more opaque background
                                        fontFamily: montserratFont,
                                        '&:hover': {
                                            backgroundColor: 'rgba(0, 147, 233, 0.08)',
                                            transform: 'translateY(-3px)',
                                            color: '#0093E9'
                                        },
                                        // ✅ Add focus styles for keyboard navigation
                                        '&:focus': {
                                            outline: '2px solid #0093E9',
                                            outlineOffset: '2px'
                                        }
                                    }}
                                >
                                    <Box sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1
                                    }}>
                                        <Box
                                            component={motion.div}
                                            initial={{ scale: 0 }}
                                            animate={{ scale: 1 }}
                                            transition={{ delay: 0.3 + (i * 0.1), duration: 0.4, type: 'spring' }}
                                            sx={{
                                                lineHeight: 0,
                                                color: isActive(page.href) ? '#0093E9' : 'inherit'
                                            }}
                                        >
                                            {page.icon}
                                        </Box>
                                        <motion.span
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.4 + (i * 0.1), duration: 0.4 }}
                                            style={{ fontFamily: montserratFont }} // Apply Montserrat to text
                                        >
                                            {page.name}
                                        </motion.span>
                                    </Box>
                                    {isActive(page.href) && (
                                        <Box
                                            component={motion.div}
                                            layoutId="activeNavIndicator"
                                            sx={{
                                                position: 'absolute',
                                                bottom: '7px',
                                                left: '25%',
                                                width: '50%',
                                                height: '3px',
                                                backgroundColor: '#0093E9',
                                                borderRadius: '3px'
                                            }}
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                </Button>
                            </Fragment>
                        ))}
                    </Box>

                    {/* Join Button */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.6, duration: 0.5 }}
                        sx={{
                            flexGrow: 0,
                            display: { xs: 'none', md: 'block' } // Hide on mobile, show on medium screens and up
                        }}
                    >
                        <Button
                            variant="contained"
                            component={Link}
                            href="/join"
                            startIcon={<PeopleIcon />}
                            aria-label="Join KarawangDev community" // ✅ Add descriptive aria-label
                            sx={{
                                borderRadius: '14px',
                                px: 2.5,
                                py: 1,
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                boxShadow: '0 4px 15px rgba(254, 107, 139, 0.3)',
                                fontWeight: 600,
                                textTransform: 'none',
                                fontSize: { xs: '0.9rem', md: '0.95rem' },
                                letterSpacing: '0.3px',
                                fontFamily: montserratFont,
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                                    transform: 'translateY(-3px) scale(1.03)',
                                    boxShadow: '0 8px 20px rgba(254, 107, 139, 0.4)'
                                },
                                // ✅ Add focus styles
                                '&:focus': {
                                    outline: '3px solid rgba(254, 107, 139, 0.5)',
                                    outlineOffset: '2px'
                                },
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            Join Us
                        </Button>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}