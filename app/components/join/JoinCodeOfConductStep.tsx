'use client';

import { useState, useRef, useEffect } from 'react';
import { Box, Container, Typography, Button, Paper, FormControlLabel, Checkbox, Alert } from '@mui/material';
import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';

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
                py: 10, // Same as other sections
                fontFamily: montserratFont,
                backgroundColor: '#f8fafc', // Same background as other sections
                minHeight: '100vh', // Same as other sections
                position: 'relative',
                overflow: 'hidden',
                // Add subtle pattern like other sections
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundImage: 'url("/subtle-pattern.webp")',
                    backgroundSize: '1000px',
                    opacity: 0.1, // Same as other sections
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Decorative elements like other sections */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '5%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(254,107,139,0.05) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    bottom: '10%',
                    left: '5%',
                    width: '250px',
                    height: '250px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(255,71,87,0.06) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="xl"> {/* Changed to xl for consistency */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6 }}
                >
                    <SectionTitle
                        title="Kode Etik Komunitas"
                        subtitle="Silakan baca pedoman komunitas dan kode etik kami dengan seksama. Anda harus menyetujui ketentuan ini untuk bergabung dengan komunitas kami."
                    />
                </motion.div>

                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                    <Paper
                        elevation={0}
                        ref={codeOfConductRef}
                        sx={{
                            p: 4,
                            mb: 4,
                            maxHeight: 500, // Increased height
                            overflowY: 'auto',
                            borderRadius: '20px', // Same border radius as other components
                            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)', // Same shadow as other components
                            border: '1px solid rgba(254, 107, 139, 0.1)', // Same border as other components
                            backgroundColor: '#ffffff',
                            maxWidth: '800px', // Limit width
                            width: '100%',
                            '&::-webkit-scrollbar': {
                                width: '8px',
                            },
                            '&::-webkit-scrollbar-track': {
                                background: 'rgba(254, 107, 139, 0.05)',
                                borderRadius: '10px',
                            },
                            '&::-webkit-scrollbar-thumb': {
                                background: 'rgba(254, 107, 139, 0.3)',
                                borderRadius: '10px',
                            },
                            '&::-webkit-scrollbar-thumb:hover': {
                                background: 'rgba(254, 107, 139, 0.5)',
                            },
                        }}
                    >
                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            1. Rasa Hormat
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Perlakukan semua anggota komunitas dengan hormat dan pertimbangan. Kami adalah komunitas yang beragam dengan anggota dari berbagai latar belakang dan tingkat pengalaman. Pelecehan, diskriminasi, atau perilaku tidak sopan dalam bentuk apapun tidak akan ditoleransi.
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            2. Lingkungan Inklusif
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Ciptakan dan pertahankan lingkungan yang mendukung di mana setiap orang merasa diterima untuk berpartisipasi, terlepas dari pilihan teknologi, tingkat keahlian, gender, orientasi seksual, disabilitas, penampilan fisik, ukuran tubuh, ras, atau agama.
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            3. Komunikasi Konstruktif
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Jaga diskusi tetap konstruktif dan profesional. Kritik ide, bukan orangnya. Berikan umpan balik yang membantu orang lain berkembang, dan terbuka untuk menerima umpan balik sendiri.
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            4. Berbagi Pengetahuan
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Bagikan pengetahuan Anda dengan bebas dan bantu orang lain belajar. Ingatlah bahwa setiap orang pernah menjadi pemula, dan penjelasan yang sabar mendorong pertumbuhan dalam komunitas kita.
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            5. Konten Original
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Saat berbagi konten, pastikan itu asli atau dikaitkan dengan benar. Hormati kekayaan intelektual dan hukum hak cipta.
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            6. Tidak Ada Spam atau Promosi Berlebihan
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Hindari promosi diri yang berlebihan, spam, atau konten yang tidak relevan. Meskipun berbagi proyek atau artikel pribadi didorong, pastikan mereka memberikan nilai kepada komunitas.
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            7. Kerahasiaan
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Hormati kerahasiaan informasi yang dibagikan dalam komunitas. Jangan bagikan informasi pribadi anggota lain tanpa izin eksplisit.
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            8. Kepatuhan terhadap Aturan Platform
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Ikuti aturan dan syarat layanan platform apa pun yang kami gunakan untuk interaksi komunitas (seperti Telegram, Discord, dll.).
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            9. Penegakan
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Pelanggaran terhadap kode etik ini dapat mengakibatkan pengecualian sementara atau permanen dari kegiatan komunitas, sebagaimana ditentukan oleh moderator komunitas.
                        </Typography>

                        <Typography
                            variant="h5"
                            component="h3"
                            fontWeight="bold"
                            gutterBottom
                            sx={{
                                fontFamily: montserratFont,
                                color: '#FE6B8B' // Red theme
                            }}
                        >
                            10. Melaporkan Masalah
                        </Typography>
                        <Typography variant="body1" paragraph sx={{ fontFamily: montserratFont }}>
                            Jika Anda mengalami atau menyaksikan perilaku yang melanggar kode etik ini, silakan laporkan kepada administrator komunitas. Semua laporan akan ditinjau dan diselidiki dengan cepat dan rahasia.
                        </Typography>

                        <Box sx={{ height: 50 }}></Box>
                    </Paper>
                </Box>

                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ maxWidth: '800px', width: '100%' }}>
                        {!hasScrolledToBottom && (
                            <Alert
                                severity="info"
                                sx={{
                                    mb: 3,
                                    fontFamily: montserratFont,
                                    borderRadius: '12px',
                                    backgroundColor: 'rgba(254, 107, 139, 0.05)',
                                    borderColor: 'rgba(254, 107, 139, 0.1)',
                                    color: '#FE6B8B',
                                    '& .MuiAlert-icon': {
                                        color: '#FE6B8B'
                                    }
                                }}
                            >
                                Silakan gulir ke seluruh dokumen untuk mengaktifkan kotak centang persetujuan.
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
                                            color: '#FE6B8B', // Changed to red
                                            '&.Mui-checked': {
                                                color: '#FE6B8B', // Changed to red
                                            },
                                        }}
                                    />
                                }
                                label="Saya telah membaca dan menyetujui Kode Etik"
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
                                        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)', // Red gradient
                                        boxShadow: '0 3px 15px rgba(254, 107, 139, 0.4)', // Red shadow
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
                                    Lanjutkan untuk Bergabung
                                </Button>
                            </motion.div>
                        </Box>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}