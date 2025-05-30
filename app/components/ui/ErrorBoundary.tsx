'use client';

import { Component, ErrorInfo, ReactNode } from 'react';
import { Box, Typography, Button } from '@mui/material';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

export default class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
    }

    handleReset = () => {
        this.setState({ hasError: false, error: undefined });
    };

    render() {
        if (this.state.hasError) {
            return (
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        minHeight: '50vh',
                        p: 4,
                        textAlign: 'center'
                    }}
                >
                    <Typography variant="h4" component="h1" gutterBottom color="error">
                        Oops! Terjadi kesalahan
                    </Typography>

                    <Typography variant="body1" sx={{ mb: 3, maxWidth: 600 }}>
                        Mohon maaf, terjadi kesalahan yang tidak terduga.
                    </Typography>

                    <Button
                        variant="contained"
                        onClick={() => window.location.reload()}
                        color="primary"
                    >
                        Refresh Halaman
                    </Button>
                </Box>
            );
        }

        return this.props.children;
    }
}