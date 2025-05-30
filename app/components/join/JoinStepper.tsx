'use client';

import { Box, Container, Step, StepLabel, Stepper } from '@mui/material';
import { motion } from 'framer-motion';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

interface JoinStepperProps {
    activeStep: number;
}

export default function JoinStepper({ activeStep }: JoinStepperProps) {
    const steps = ['Information', 'Code of Conduct', 'Join Community'];

    return (
        <Box
            component={motion.section}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            sx={{
                py: 4,
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)', // Match home page gradient
                color: '#333333',
                fontFamily: montserratFont,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
                borderBottom: '1px solid rgba(0,0,0,0.05)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/subtle-pattern.webp")',
                    backgroundSize: '1000px',
                    opacity: 0.2,
                    pointerEvents: 'none'
                }
            }}
        >
            <Container maxWidth="md">
                <Stepper
                    activeStep={activeStep}
                    alternativeLabel
                    sx={{
                        '& .MuiStepLabel-root .Mui-completed': {
                            color: '#0093E9', // completed icon color
                        },
                        '& .MuiStepLabel-root .Mui-active': {
                            color: '#FE6B8B', // active icon color
                        },
                        '& .MuiStepLabel-label': {
                            fontFamily: montserratFont,
                            fontWeight: 500,
                            mt: 1
                        }
                    }}
                >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Container>
        </Box>
    );
}