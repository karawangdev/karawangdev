'use client';

import { Box, Container, Typography, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot,
    TimelineOppositeContent
} from '@mui/lab';
import { Event as EventIcon } from '@mui/icons-material';
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

export default function AboutJourneySection() {
    const milestones = [
        {
            year: '2025',
            title: 'Community Founded',
            description: 'First meetup with 15 developers in a local café'
        },
        {
            year: '2026',
            title: 'First Workshop',
            description: 'Organized our first technical workshop on web development'
        },
        {
            year: '2027',
            title: '100 Members',
            description: 'Reached 100 active community members'
        },
        {
            year: '2028',
            title: 'First Hackathon',
            description: 'Hosted our inaugural 24-hour hackathon with 20 teams'
        },
        {
            year: '2028',
            title: 'Corporate Partnerships',
            description: 'Established partnerships with local tech companies'
        },
        {
            year: '2028',
            title: 'Karawang Dev Conference',
            description: 'Organized our first annual tech conference with 300+ attendees'
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
                bgcolor: 'rgba(0, 0, 0, 0.02)',
                fontFamily: montserratFont
            }}
        >
            <Container maxWidth="lg">
                <motion.div variants={itemVariants}>
                    <SectionTitle
                        title="Our Journey"
                        subtitle="Key milestones in our community's growth"
                        gradientColors="linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
                    />
                </motion.div>

                <Box sx={{ maxWidth: 1000, mx: 'auto' }}>
                    <Timeline position="alternate">
                        {milestones.map((milestone, index) => (
                            <TimelineItem key={index}>
                                <TimelineOppositeContent color="text.secondary">
                                    <motion.div
                                        variants={itemVariants}
                                        custom={index}
                                    >
                                        <Typography variant="h6" fontWeight="bold" sx={{ fontFamily: montserratFont }}>
                                            {milestone.year}
                                        </Typography>
                                    </motion.div>
                                </TimelineOppositeContent>
                                <TimelineSeparator>
                                    <motion.div
                                        variants={itemVariants}
                                        custom={index}
                                        whileHover={{ scale: 1.2 }}
                                    >
                                        <TimelineDot color="primary">
                                            <EventIcon />
                                        </TimelineDot>
                                    </motion.div>
                                    {index < milestones.length - 1 && (
                                        <motion.div
                                            variants={itemVariants}
                                            custom={index}
                                        >
                                            <TimelineConnector />
                                        </motion.div>
                                    )}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <motion.div
                                        variants={itemVariants}
                                        custom={index}
                                        whileHover={{ y: -5 }}
                                    >
                                        <Paper elevation={0} sx={{
                                            p: 3,
                                            borderRadius: 2,
                                            border: '1px solid rgba(0,0,0,0.05)',
                                            transition: 'all 0.3s',
                                            '&:hover': {
                                                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)'
                                            }
                                        }}>
                                            <Typography variant="h6" component="h3" fontWeight="bold" sx={{ fontFamily: montserratFont }}>
                                                {milestone.title}
                                            </Typography>
                                            <Typography variant="body2" sx={{ fontFamily: montserratFont }}>
                                                {milestone.description}
                                            </Typography>
                                        </Paper>
                                    </motion.div>
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </Box>
            </Container>
        </Box>
    );
}