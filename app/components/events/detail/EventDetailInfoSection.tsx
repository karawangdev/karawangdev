'use client';

import { Box, Container, Typography, Paper, Grid, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { ScheduleOutlined, CheckCircleOutline } from '@mui/icons-material';

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

export default function EventDetailInfoSection({ event }: { event: any }) {
    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            sx={{
                py: 10,
                background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="lg">
                <Grid container spacing={5}>
                    <Grid item xs={12} md={7}>
                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="h4"
                                component="h2"
                                fontWeight="bold"
                                sx={{
                                    mb: 3,
                                    fontFamily: montserratFont,
                                    color: '#222222',
                                    fontSize: { xs: '1.5rem', md: '2rem' },
                                    position: 'relative',
                                    display: 'inline-block',
                                    pb: 1.5
                                }}
                            >
                                About This Event
                                {/* Add the CTA-style underline */}
                                <Box
                                    component={motion.div}
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '60%' }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.4 }}
                                    sx={{
                                        position: 'absolute',
                                        height: '3px',
                                        width: '60%',
                                        bottom: 0,
                                        left: '20%',
                                        background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.5) 50%, rgba(0,147,233,0) 100%)',
                                        borderRadius: '2px',
                                    }}
                                />
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="body1"
                                sx={{
                                    mb: 4,
                                    fontFamily: montserratFont,
                                    lineHeight: 1.8,
                                    color: '#555555',
                                    fontSize: { xs: '0.95rem', md: '1.05rem' }
                                }}
                            >
                                {event.longDescription}
                            </Typography>
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <Typography
                                variant="h5"
                                component="h3"
                                fontWeight="bold"
                                sx={{
                                    mt: 5,
                                    mb: 3,
                                    fontFamily: montserratFont,
                                    color: '#222222',
                                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                                    position: 'relative',
                                    display: 'inline-block',
                                    pb: 1.5
                                }}
                            >
                                What You Need to Bring
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
                        </motion.div>

                        <motion.div variants={itemVariants}>
                            <List>
                                {event.requirements.map((req: string, index: number) => (
                                    <ListItem key={index} sx={{ px: 0, py: 1 }}>
                                        <ListItemIcon sx={{ minWidth: 36 }}>
                                            <CheckCircleOutline sx={{ color: '#0093E9' }} />
                                        </ListItemIcon>
                                        <ListItemText
                                            primary={req}
                                            primaryTypographyProps={{
                                                fontFamily: montserratFont,
                                                fontSize: '1rem'
                                            }}
                                        />
                                    </ListItem>
                                ))}
                            </List>
                        </motion.div>
                    </Grid>

                    <Grid item xs={12} md={5}>
                        <motion.div
                            variants={itemVariants}
                            whileHover={{ y: -8 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <Paper
                                elevation={0}
                                sx={{
                                    p: 4,
                                    borderRadius: 4,
                                    boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
                                    background: 'linear-gradient(45deg, rgba(0,147,233,0.03) 0%, rgba(128,208,199,0.03) 100%)',
                                    border: '1px solid rgba(0,147,233,0.1)',
                                    transition: 'all 0.3s',
                                    '&:hover': {
                                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
                                        background: 'linear-gradient(45deg, rgba(0,147,233,0.05) 0%, rgba(128,208,199,0.05) 100%)',
                                    }
                                }}
                            >
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    fontWeight="bold"
                                    sx={{
                                        mb: 3,
                                        fontFamily: montserratFont,
                                        color: '#222222',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: 1,
                                        position: 'relative',
                                        pb: 1.5
                                    }}
                                >
                                    <ScheduleOutlined sx={{ color: '#0093E9' }} />
                                    Event Agenda
                                    {/* Add the CTA-style underline */}
                                    <Box
                                        component={motion.div}
                                        initial={{ width: 0 }}
                                        whileInView={{ width: '60%' }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4 }}
                                        sx={{
                                            position: 'absolute',
                                            height: '2px',
                                            width: '60%',
                                            bottom: 0,
                                            left: '20%',
                                            background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.3) 50%, rgba(0,147,233,0) 100%)',
                                            borderRadius: '2px',
                                        }}
                                    />
                                </Typography>

                                <Divider sx={{ mb: 3 }} />

                                {event.agenda.map((item: any, index: number) => (
                                    <Box key={index} sx={{ mb: 2.5 }}>
                                        <Typography
                                            variant="subtitle1"
                                            fontWeight="600"
                                            sx={{
                                                fontFamily: montserratFont,
                                                color: '#0093E9'
                                            }}
                                        >
                                            {item.time}
                                        </Typography>
                                        <Typography
                                            variant="body1"
                                            sx={{
                                                fontFamily: montserratFont,
                                                color: '#333333'
                                            }}
                                        >
                                            {item.title}
                                        </Typography>
                                        {index < event.agenda.length - 1 && (
                                            <Divider sx={{ mt: 2 }} />
                                        )}
                                    </Box>
                                ))}
                            </Paper>
                        </motion.div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}