'use client';

import { Box, Container, Grid, Paper, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import CountUp from 'react-countup';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

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

export default function AboutTeamSection() {
    const team = [
        {
            name: 'KarawangDev Team',
            role: 'Founder & Community Lead',
            bio: 'Full-stack developer dengan 8 tahun pengalaman, bersemangat membangun komunitas',
            avatar: '/team-lead.jpg',
            experience: 8
        },
        {
            name: 'KarawangDev Team',
            role: 'Events Coordinator',
            bio: 'UX designer dan event organizer yang suka mempertemukan orang-orang',
            avatar: '/team-events.jpg',
            experience: 5
        },
        {
            name: 'KarawangDev Team',
            role: 'Technical Mentor',
            bio: 'Senior software engineer yang mengkhususkan diri dalam cloud architecture dan DevOps',
            avatar: '/team-tech.jpg',
            experience: 12
        },
        {
            name: 'KarawangDev Team',
            role: 'Partnerships Manager',
            bio: 'Membangun jembatan antara komunitas dan perusahaan teknologi di wilayah ini',
            avatar: '/team-partnerships.jpg',
            experience: 6
        }
    ];

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            ref={sectionRef}
            sx={{
                py: 10,
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc', // Same background as AboutSection
                minHeight: '100vh',
                position: 'relative',
                overflow: 'hidden',
                // Add subtle pattern like HeroSection
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/subtle-pattern.png")',
                    backgroundSize: '1000px',
                    opacity: 0.2,
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Decorative elements like HeroSection */}
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

            {/* Add decorative shapes */}
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    transform: 'rotate(45deg)',
                    background: 'rgba(0,147,233,0.1)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 0.2 }}
                sx={{
                    position: 'absolute',
                    top: '25%',
                    right: '15%',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: 'rgba(254,107,139,0.08)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="xl">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Tim Kepemimpinan"
                        subtitle="Kenali orang-orang di balik Komunitas Developer Karawang"
                    />
                </motion.div>

                <Grid
                    container
                    spacing={3} // Same spacing as AboutSection
                    sx={{ mt: 2 }}
                    justifyContent="center"
                    alignItems="stretch"
                >
                    {team.map((member, index) => (
                        <Grid
                            item
                            xs={12}
                            sm={6}
                            md={3}
                            key={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            <motion.div
                                variants={itemVariants}
                                custom={index}
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
                                        width: '280px', // Same as AboutSection
                                        height: '400px', // Adjusted height for team cards
                                        p: 3,
                                        minWidth: 0,
                                        maxWidth: '100%',
                                        textAlign: 'center',
                                        borderRadius: '20px',
                                        transition: 'all 0.3s ease',
                                        border: '1px solid rgba(0, 147, 233, 0.1)',
                                        backgroundColor: '#ffffff',
                                        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
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
                                        mx: 'auto',
                                        position: 'relative'
                                    }}
                                >
                                    {/* Experience badge */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 15,
                                            right: 15,
                                            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                            color: 'white',
                                            borderRadius: '8px',
                                            padding: '4px 10px',
                                            fontSize: '0.75rem',
                                            fontWeight: 'bold',
                                            boxShadow: '0 2px 8px rgba(254, 107, 139, 0.3)',
                                        }}
                                    >
                                        {isInView ? (
                                            <CountUp
                                                start={0}
                                                end={member.experience}
                                                duration={2}
                                                suffix="+ tahun"
                                                useEasing={true}
                                                delay={0.4 + index * 0.1}
                                            />
                                        ) : (
                                            `0+ tahun`
                                        )}
                                    </Box>

                                    <Avatar
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mx: 'auto',
                                            mb: 2,
                                            mt: 2,
                                            bgcolor: 'grey.200',
                                            border: '4px solid rgba(0, 147, 233, 0.1)',
                                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
                                            fontSize: '2rem',
                                            fontWeight: 'bold',
                                            color: '#0093E9'
                                        }}
                                    >
                                        {member.name.charAt(0)}
                                    </Avatar>

                                    <Typography
                                        variant="h6"
                                        component="h3"
                                        gutterBottom
                                        fontWeight="bold"
                                        sx={{
                                            fontFamily: montserratFont,
                                            position: 'relative',
                                            display: 'inline-block',
                                            pb: 1.5,
                                            mb: 1.5,
                                            fontSize: { xs: '1.1rem', md: '1.15rem' }
                                        }}
                                    >
                                        {member.name}
                                        {/* Add the CTA-style underline */}
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

                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontFamily: montserratFont,
                                            color: '#0093E9', // Use consistent blue color
                                            fontWeight: 600,
                                            mb: 1.5,
                                            fontSize: { xs: '0.9rem', md: '1rem' }
                                        }}
                                    >
                                        {member.role}
                                    </Typography>

                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: montserratFont,
                                            lineHeight: 1.5,
                                            fontSize: { xs: '0.85rem', md: '0.85rem' },
                                            flex: 1,
                                            display: 'flex',
                                            alignItems: 'center',
                                            textAlign: 'center'
                                        }}
                                    >
                                        {member.bio}
                                    </Typography>
                                </Paper>
                            </motion.div>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
}