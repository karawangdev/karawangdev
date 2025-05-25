'use client';

import { Box, Container, Grid, Paper, Typography, Avatar } from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

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
            avatar: '/team-lead.jpg'
        },
        {
            name: 'KarawangDev Team',
            role: 'Events Coordinator',
            bio: 'UX designer and event organizer who loves bringing people together',
            avatar: '/team-events.jpg'
        },
        {
            name: 'KarawangDev Team',
            role: 'Technical Mentor',
            bio: 'Senior software engineer specializing in cloud architecture and DevOps',
            avatar: '/team-tech.jpg'
        },
        {
            name: 'KarawangDev Team',
            role: 'Partnerships Manager',
            bio: 'Building bridges between the community and tech companies in the region',
            avatar: '/team-partnerships.jpg'
        }
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
                                <Paper elevation={0} sx={{
                                    p: 3,
                                    height: '100%',
                                    textAlign: 'center',
                                    borderRadius: 4,
                                    transition: 'transform 0.3s, box-shadow 0.3s',
                                    '&:hover': {
                                        transform: 'translateY(-10px)',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                    }
                                }}>
                                    <Avatar
                                        sx={{
                                            width: 120,
                                            height: 120,
                                            mx: 'auto',
                                            mb: 2,
                                            bgcolor: 'grey.200'
                                        }}
                                    >
                                        {member.name.charAt(0)}
                                    </Avatar>
                                    <Typography variant="h6" component="h3" gutterBottom fontWeight="bold" sx={{ fontFamily: montserratFont }}>
                                        {member.name}
                                    </Typography>
                                    <Typography variant="subtitle1" color="primary" gutterBottom sx={{ fontFamily: montserratFont }}>
                                        {member.role}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{ fontFamily: montserratFont }}>
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