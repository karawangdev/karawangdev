'use client';

import { useEffect } from 'react';
import { Button, Container, Typography, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error(error);
    }, [error]);

    const router = useRouter();

    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '70vh',
                    textAlign: 'center',
                    py: 8,
                }}
                data-aos="fade-up"
            >
                <Typography variant="h2" component="h1" gutterBottom>
                    Something went wrong!
                </Typography>
                <Typography variant="body1" paragraph>
                    We apologize for the inconvenience. An unexpected error has occurred.
                </Typography>
                <Box sx={{ mt: 4, display: 'flex', gap: 2 }}>
                    <Button
                        variant="contained"
                        onClick={reset}
                        sx={{ borderRadius: '24px' }}
                    >
                        Try again
                    </Button>
                    <Button
                        variant="outlined"
                        onClick={() => router.push('/')}
                        sx={{ borderRadius: '24px' }}
                    >
                        Return home
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}