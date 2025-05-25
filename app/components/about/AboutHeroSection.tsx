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
            bio: 'Full-stack developer with 8 years of experience, passionate about building communities',
            avatar: '/team-lead.jpg',
            experience: 8
        },
        {
            name: 'KarawangDev Team',
            role: 'Events Coordinator',
            bio: 'UX designer and event organizer who loves bringing people together',
            avatar: '/team-events.jpg',
            experience: 5
        },
        {
            name: 'KarawangDev Team',
            role: 'Technical Mentor',
            bio: 'Senior software engineer specializing in cloud architecture and DevOps',
            avatar: '/team-tech.jpg',
            experience: 12
        },
        {
            name: 'KarawangDev Team',
            role: 'Partnerships Manager',
            bio: 'Building bridges between the community and tech companies in the region',
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
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="lg">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Leadership Team"
                        subtitle="Meet the people behind the Karawang Developer Community"
                    />
                </motion.div>

                <Grid container spacing={4}>
                    {team.map((member, index) => (
                        <Grid item xs={12} sm={6} md={3} key={index}>
                            <motion.div
                                variants={itemVariants}
                                custom={index}
                                whileHover={{ y: -10 }}
                            >
                                <Paper
                                    elevation={0}
                                    sx={{
                                        p: 3,
                                        height: '100%',
                                        textAlign: 'center',
                                        borderRadius: 4,
                                        transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                                        '&:hover': {
                                            transform: 'translateY(-10px)',
                                            boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                        },
                                        border: '1px solid rgba(0,0,0,0.05)',
                                        overflow: 'hidden',
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
                                                suffix="+ years"
                                                useEasing={true}
                                                delay={0.4 + index * 0.1}
                                            />
                                        ) : (
                                            `0+ years`
                                        )}
                                    </Box>

                                    <Avatar
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mx: 'auto',
                                            mb: 2,
                                            bgcolor: 'grey.200',
                                            border: '4px solid rgba(0, 147, 233, 0.1)',
                                            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)'
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
                                            mb: 1.5
                                        }}
                                    >
                                        {member.name}
                                        {/* Add the CTA-style underline */}
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
                                                background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.3) 50%, rgba(0,147,233,0) 100%)',
                                                borderRadius: '2px',
                                            }}
                                        />
                                    </Typography>
                                    <Typography
                                        variant="subtitle1"
                                        sx={{
                                            fontFamily: montserratFont,
                                            background: 'linear-gradient(45deg, #0093E9 30%, #80D0C7 90%)',
                                            WebkitBackgroundClip: 'text',
                                            WebkitTextFillColor: 'transparent',
                                            fontWeight: 600,
                                            mb: 1.5
                                        }}
                                    >
                                        {member.role}
                                    </Typography>
                                    <Typography
                                        variant="body2"
                                        color="text.secondary"
                                        sx={{
                                            fontFamily: montserratFont,
                                            lineHeight: 1.6
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