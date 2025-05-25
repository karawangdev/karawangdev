'use client';

import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

// Define Montserrat font
const montserratFont = 'Montserrat, sans-serif';

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    centered?: boolean;
    gradientColors?: string;
}

export default function SectionTitle({
    title,
    subtitle,
    centered = true,
    gradientColors = 'linear-gradient(90deg, rgba(0,147,233,0.5) 0%, rgba(128,208,199,0.5) 100%)'
}: SectionTitleProps) {
    return (
        <Box
            sx={{
                mb: 6,
                textAlign: centered ? 'center' : 'left',
                fontFamily: montserratFont
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                fontWeight="bold"
                gutterBottom
                sx={{
                    position: 'relative',
                    display: 'inline-block',
                    fontFamily: montserratFont,
                    mb: 2,
                    pb: 1.5 // Add padding to make room for the underline
                }}
            >
                {title}
                {/* Updated underline to match CTA style */}
                <Box
                    component={motion.div}
                    initial={{ width: 0 }}
                    whileInView={{ width: '60%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    sx={{
                        position: 'absolute',
                        height: '4px',
                        width: '60%',
                        bottom: 0,
                        left: '20%',
                        background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.5) 50%, rgba(0,147,233,0) 100%)',
                        borderRadius: '2px',
                    }}
                />
            </Typography>
            {subtitle && (
                <Typography
                    variant="h6"
                    sx={{
                        maxWidth: centered ? '700px' : '100%',
                        mx: centered ? 'auto' : 0,
                        fontFamily: montserratFont,
                        fontWeight: 500,
                        color: '#555',
                        lineHeight: 1.6
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
}