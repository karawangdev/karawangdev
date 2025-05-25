'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Button, Paper, FormControlLabel, Checkbox, Alert } from '@mui/material';
import { motion } from 'framer-motion';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

interface JoinCodeOfConductStepProps {
    onNext: () => void;
    onAgree: (agreed: boolean) => void;
    hasAgreed: boolean;
}

export default function JoinCodeOfConductStep({
    onNext,
    onAgree,
    hasAgreed
}: JoinCodeOfConductStepProps) {
    const [hasScrolledToBottom, setHasScrolledToBottom] = useState(false);
    const codeOfConductRef = useRef<HTMLDivElement>(null);

    // Handle scrolling
    const handleScroll = () => {
        if (codeOfConductRef.current) {
            const { scrollTop, scrollHeight, clientHeight } = codeOfConductRef.current;
            // Check if scrolled to bottom (with a small buffer)
            if (scrollTop + clientHeight >= scrollHeight - 20) {
                setHasScrolledToBottom(true);
            }
        }
    };

    useEffect(() => {
        const currentRef = codeOfConductRef.current;
        if (currentRef) {
            currentRef.addEventListener('scroll', handleScroll);
            return () => {
                currentRef.removeEventListener('scroll', handleScroll);
            };
        }
    }, []);

    return (
        <Box
            component={motion.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                py: 6,
                fontFamily: montserratFont,
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                position: 'relative',
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
            <Container maxWidth="md">
                <Typography
                    variant="h4"
                    component="h2"
                    fontWeight="bold"
                    gutterBottom
                    sx={{
                        mb: 2,
                        fontFamily: montserratFont,
                        textAlign: 'center'
                    }}
                >
                    Community Code of Conduct
                </Typography>

                <Typography
                    variant="body1"
                    sx={{
                        mb: 4,
                        opacity: 0.8,
                        fontFamily: montserratFont,
                        textAlign: 'center',
                        maxWidth: 800,
                        mx: 'auto'
                    }}
                >
                    Please read our community guidelines and code of conduct carefully.
                    You must agree to these terms to join our community.
                </Typography>

                <Paper
                    elevation={0}
                    ref={codeOfConductRef}
                    sx={{
                        p: 4,
                        mb: 4,
                        maxHeight: 400,
                        overflowY: 'auto',
                        borderRadius: 2,
                        boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                        '&::-webkit-scrollbar': {
                            width: '8px',
                        },
                        '&::-webkit-scrollbar-track': {
                            background: '#f1f1f1',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb': {
                            background: '#c1c1c1',
                            borderRadius: '10px',
                        },
                        '&::-webkit-scrollbar-thumb:hover': {
                            background: '#a8a8a8',
                        },
                    }}
                >
                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        1. Respect
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Treat all community members with respect and consideration. We are a diverse community with members from different backgrounds and experience levels. Harassment, discrimination, or disrespectful behavior of any kind will not be tolerated.
                    </Typography>

                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        2. Inclusive Environment
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Create and maintain a supportive environment where everyone feels welcome to participate, regardless of technology choices, skill level, gender, sexual orientation, disability, physical appearance, body size, race, or religion.
                    </Typography>

                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        3. Constructive Communication
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Keep discussions constructive and professional. Criticize ideas, not people. Provide feedback that helps others improve, and be open to receiving feedback yourself.
                    </Typography>

                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        4. Knowledge Sharing
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Share your knowledge freely and help others learn. Remember that everyone was a beginner at some point, and patient explanations foster growth in our community.
                    </Typography>

                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        5. Original Content
                    </Typography>
                    <Typography variant="body1" paragraph>
                        When sharing content, ensure it's original or properly attributed. Respect intellectual property and copyright laws.
                    </Typography>

                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        6. No Spam or Self-Promotion
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Avoid excessive self-promotion, spam, or irrelevant content. While sharing personal projects or articles is encouraged, ensure they provide value to the community.
                    </Typography>

                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        7. Confidentiality
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Respect the confidentiality of information shared within the community. Don't share personal information of other members without explicit permission.
                    </Typography>

                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        8. Compliance with Platform Rules
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Follow the rules and terms of service of any platforms we use for community interactions (such as Telegram, Discord, etc.).
                    </Typography>

                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        9. Enforcement
                    </Typography>
                    <Typography variant="body1" paragraph>
                        Violations of this code of conduct may result in temporary or permanent exclusion from community activities, as determined by community moderators.
                    </Typography>

                    <Typography variant="h5" component="h3" fontWeight="bold" gutterBottom>
                        10. Reporting Issues
                    </Typography>
                    <Typography variant="body1" paragraph>
                        If you experience or witness behavior that violates this code of conduct, please report it to the community administrators. All reports will be reviewed and investigated promptly and confidentially.
                    </Typography>

                    <Box sx={{ height: 50 }}></Box>
                </Paper>

                {!hasScrolledToBottom && (
                    <Alert severity="info" sx={{ mb: 3, fontFamily: montserratFont }}>
                        Please scroll through the entire document to enable the agreement checkbox.
                    </Alert>
                )}

                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                checked={hasAgreed}
                                onChange={(e) => onAgree(e.target.checked)}
                                disabled={!hasScrolledToBottom}
                                sx={{
                                    color: '#0093E9',
                                    '&.Mui-checked': {
                                        color: '#0093E9',
                                    },
                                }}
                            />
                        }
                        label="I have read and agree to the Code of Conduct"
                        sx={{
                            fontFamily: montserratFont,
                            '.MuiFormControlLabel-label': {
                                fontFamily: montserratFont,
                                fontWeight: 500
                            }
                        }}
                    />

                    <motion.div
                        whileHover={hasAgreed ? { scale: 1.05 } : {}}
                        whileTap={hasAgreed ? { scale: 0.98 } : {}}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={onNext}
                            disabled={!hasAgreed}
                            sx={{
                                borderRadius: '14px',
                                py: 1.5,
                                px: 5,
                                background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                                boxShadow: '0 3px 15px rgba(254, 107, 139, 0.4)',
                                fontWeight: 600,
                                letterSpacing: '0.5px',
                                textTransform: 'none',
                                fontSize: '1.1rem',
                                fontFamily: montserratFont,
                                '&:hover': {
                                    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
                                    boxShadow: '0 6px 20px rgba(254, 107, 139, 0.5)',
                                },
                                '&.Mui-disabled': {
                                    background: '#cccccc',
                                    color: '#666666'
                                },
                                transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
                            }}
                        >
                            Continue to Join
                        </Button>
                    </motion.div>
                </Box>
            </Container>
        </Box>
    );
}