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
        // Update state so the next render will show the fallback UI
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        // Log error to console or external service
        console.error('ErrorBoundary caught an error:', error, errorInfo);

        // You can also log the error to an error reporting service here
        // Example: Sentry.captureException(error);
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
                        Tim kami telah diberitahu dan sedang memperbaikinya.
                    </Typography>

                    {process.env.NODE_ENV === 'development' && this.state.error && (
                        <Box
                            sx={{
                                backgroundColor: '#f5f5f5',
                                p: 2,
                                borderRadius: 1,
                                mb: 3,
                                maxWidth: 800,
                                overflow: 'auto'
                            }}
                        >
                            <Typography variant="caption" component="pre">
                                {this.state.error.toString()}
                            </Typography>
                        </Box>
                    )}

                    <Box sx={{ display: 'flex', gap: 2 }}>
                        <Button
                            variant="contained"
                            onClick={this.handleReset}
                            color="primary"
                        >
                            Coba Lagi
                        </Button>

                        <Button
                            variant="outlined"
                            onClick={() => window.location.reload()}
                            color="secondary"
                        >
                            Refresh Halaman
                        </Button>
                    </Box>
                </Box>
            );
        }

        return this.props.children;
    }
}