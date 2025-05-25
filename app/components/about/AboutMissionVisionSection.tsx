'use client';

import { Box, Container, Grid, Paper, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { Flag as FlagIcon, Lightbulb as LightbulbIcon } from '@mui/icons-material';
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

export default function AboutMissionVisionSection() {
    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            sx={{
                py: 10,
                bgcolor: 'rgba(0, 0, 0, 0.02)',
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="lg">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Mission & Vision"
                        subtitle="What drives us forward and shapes our community"
                    />
                </motion.div>

                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
                            <Paper elevation={0} sx={{
                                p: 4,
                                height: '100%',
                                borderRadius: 4,
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.3s',
                                '&:hover': {
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                                }
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <FlagIcon sx={{ fontSize: 36, color: 'primary.main', mr: 2 }} />
                                    <Typography variant="h4" component="h3" fontWeight="bold" sx={{ fontFamily: montserratFont }}>
                                        Mission
                                    </Typography>
                                </Box>
                                <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                                    To build and nurture a vibrant community of developers in Karawang that fosters
                                    learning, collaboration, and innovation.
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: montserratFont }}>
                                    We aim to create an inclusive environment where developers can share knowledge,
                                    build connections, and grow together professionally while contributing to the
                                    local tech ecosystem.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <motion.div variants={itemVariants} whileHover={{ y: -8 }}>
                            <Paper elevation={0} sx={{
                                p: 4,
                                height: '100%',
                                borderRadius: 4,
                                border: '1px solid rgba(0,0,0,0.05)',
                                transition: 'all 0.3s',
                                '&:hover': {
                                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                                }
                            }}>
                                <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                                    <LightbulbIcon sx={{ fontSize: 36, color: 'primary.main', mr: 2 }} />
                                    <Typography variant="h4" component="h3" fontWeight="bold" sx={{ fontFamily: montserratFont }}>
                                        Vision
                                    </Typography>
                                </Box>
                                <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                                    To transform Karawang into a recognized technology hub where innovation thrives
                                    and technical talent flourishes.
                                </Typography>
                                <Typography variant="body1" sx={{ fontFamily: montserratFont }}>
                                    We envision a future where our community becomes a catalyst for technological
                                    advancement in the region, creating opportunities for developers and
                                    contributing to the growth of the digital economy.
                                </Typography>
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}