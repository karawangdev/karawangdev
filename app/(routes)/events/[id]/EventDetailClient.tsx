'use client';

import { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Card, CardContent, Chip, Grid } from '@mui/material';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { CalendarToday, LocationOn, People, Schedule } from '@mui/icons-material';
import Link from 'next/link';

interface Event {
    id: string;
    title: string;
    description: string;
    date: string;
    time: string;
    location: string;
    image: string;
    capacity: number;
    registered: number;
    tags: string[];
    organizer: string;
}

interface EventDetailClientProps {
    eventId: string;
}

export default function EventDetailClient({ eventId }: EventDetailClientProps) {
    const [event, setEvent] = useState<Event | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Mock data dengan fallback image
        const mockEvents: Event[] = [
            {
                id: '1',
                title: 'React Workshop untuk Pemula',
                description: 'Workshop intensif React untuk developer pemula. Belajar fundamental React, hooks, dan state management.',
                date: '2024-06-15',
                time: '09:00 - 17:00',
                location: 'Coworking Space Karawang',
                image: '/events-placeHolder.webp', // Gunakan placeholder yang ada
                capacity: 30,
                registered: 15,
                tags: ['React', 'JavaScript', 'Workshop'],
                organizer: 'Karawang Developer Community'
            },
            {
                id: '2',
                title: 'Tech Meetup Karawang',
                description: 'Pertemuan bulanan developer Karawang untuk sharing knowledge dan networking.',
                date: '2024-06-20',
                time: '19:00 - 21:00',
                location: 'Cafe Digital Karawang',
                image: '/events-placeHolder.webp',
                capacity: 50,
                registered: 25,
                tags: ['Networking', 'Tech Talk', 'Community'],
                organizer: 'Karawang Developer Community'
            },
            {
                id: '3',
                title: 'JavaScript Fundamentals',
                description: 'Belajar dasar-dasar JavaScript modern, ES6+, dan best practices.',
                date: '2024-06-25',
                time: '14:00 - 18:00',
                location: 'Online via Zoom',
                image: '/events-placeHolder.webp',
                capacity: 100,
                registered: 45,
                tags: ['JavaScript', 'ES6', 'Online'],
                organizer: 'Karawang Developer Community'
            }
        ];

        setTimeout(() => {
            const foundEvent = mockEvents.find(e => e.id === eventId);
            setEvent(foundEvent || null);
            setLoading(false);
        }, 500);
    }, [eventId]);

    if (loading) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h6">Loading event details...</Typography>
                </Box>
            </Container>
        );
    }

    if (!event) {
        return (
            <Container maxWidth="lg" sx={{ py: 8 }}>
                <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>
                        Event Tidak Ditemukan
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                        Event dengan ID "{eventId}" tidak ditemukan.
                    </Typography>
                    <Link href="/events" passHref>
                        <Button
                            variant="contained"
                            sx={{ mt: 3 }}
                        >
                            Kembali ke Events
                        </Button>
                    </Link>
                </Box>
            </Container>
        );
    }

    return (
        <Container maxWidth="lg" sx={{ py: 8 }}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                height: 400,
                                borderRadius: 2,
                                overflow: 'hidden',
                                backgroundColor: '#f5f5f5'
                            }}
                        >
                            <Image
                                src={event.image}
                                alt={event.title}
                                fill
                                style={{ objectFit: 'cover' }}
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </Box>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Box sx={{ mb: 2 }}>
                            {event.tags.map((tag) => (
                                <Chip
                                    key={tag}
                                    label={tag}
                                    size="small"
                                    sx={{ mr: 1, mb: 1 }}
                                />
                            ))}
                        </Box>

                        <Typography variant="h3" component="h1" gutterBottom>
                            {event.title}
                        </Typography>

                        <Typography variant="body1" paragraph color="text.secondary">
                            {event.description}
                        </Typography>

                        <Grid container spacing={2} sx={{ mb: 3 }}>
                            <Grid item xs={6}>
                                <Card variant="outlined">
                                    <CardContent sx={{ textAlign: 'center', py: 2 }}>
                                        <CalendarToday color="primary" sx={{ mb: 1 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            Tanggal
                                        </Typography>
                                        <Typography variant="body1" fontWeight="bold">
                                            {new Date(event.date).toLocaleDateString('id-ID')}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={6}>
                                <Card variant="outlined">
                                    <CardContent sx={{ textAlign: 'center', py: 2 }}>
                                        <Schedule color="primary" sx={{ mb: 1 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            Waktu
                                        </Typography>
                                        <Typography variant="body1" fontWeight="bold">
                                            {event.time}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={6}>
                                <Card variant="outlined">
                                    <CardContent sx={{ textAlign: 'center', py: 2 }}>
                                        <LocationOn color="primary" sx={{ mb: 1 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            Lokasi
                                        </Typography>
                                        <Typography variant="body1" fontWeight="bold">
                                            {event.location}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>

                            <Grid item xs={6}>
                                <Card variant="outlined">
                                    <CardContent sx={{ textAlign: 'center', py: 2 }}>
                                        <People color="primary" sx={{ mb: 1 }} />
                                        <Typography variant="body2" color="text.secondary">
                                            Peserta
                                        </Typography>
                                        <Typography variant="body1" fontWeight="bold">
                                            {event.registered}/{event.capacity}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>

                        <Button
                            variant="contained"
                            size="large"
                            fullWidth
                            sx={{ mb: 2 }}
                            disabled={event.registered >= event.capacity}
                        >
                            {event.registered >= event.capacity ? 'Event Penuh' : 'Daftar Sekarang'}
                        </Button>

                        <Typography variant="body2" color="text.secondary" textAlign="center">
                            Diselenggarakan oleh {event.organizer}
                        </Typography>
                    </Grid>
                </Grid>
            </motion.div>
        </Container>
    );
}