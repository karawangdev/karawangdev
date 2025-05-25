'use client';

import { Box, CircularProgress, Typography, Container } from '@mui/material';

export default function Loading() {
    return (
        <Container>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '80vh',
                    textAlign: 'center',
                }}
            >
                <CircularProgress
                    size={60}
                    thickness={4}
                    sx={{
                        color: (theme) => theme.palette.primary.main,
                        mb: 3
                    }}
                />
                <Typography
                    variant="h5"
                    component="h2"
                    sx={{
                        fontWeight: 'bold',
                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        letterSpacing: '0.05em'
                    }}
                >
                    KARAWANG DEV
                </Typography>
                <Typography variant="body1" sx={{ mt: 2, color: '#666' }}>
                    Loading amazing content...
                </Typography>
            </Box>
        </Container>
    );
}