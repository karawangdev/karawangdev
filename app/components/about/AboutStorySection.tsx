'use client';

import { Box, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';

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

export default function AboutStorySection() {
    return (
        <Box
            component={motion.section}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            sx={{
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)',
                color: '#333333',
                py: { xs: 10, md: 16 },
                position: 'relative',
                overflow: 'hidden',
                fontFamily: montserratFont,
                boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
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
                },
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: '15%',
                    background: 'linear-gradient(0deg, rgba(0,147,233,0.05) 0%, rgba(255,255,255,0) 100%)',
                    pointerEvents: 'none'
                }
            }}
        >
            {/* Decorative elements */}
            <Box
                sx={{
                    position: 'absolute',
                    top: '5%',
                    right: '5%',
                    width: '300px',
                    height: '300px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(0,147,233,0.05) 0%, rgba(255,255,255,0) 70%)',
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
                    background: 'radial-gradient(circle, rgba(254,107,139,0.06) 0%, rgba(255,255,255,0) 70%)',
                    pointerEvents: 'none'
                }}
            />

            {/* Small decorative shapes */}
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
                sx={{
                    position: 'absolute',
                    top: '15%',
                    left: '10%',
                    width: '20px',
                    height: '20px',
                    borderRadius: '4px',
                    transform: 'rotate(45deg)',
                    background: 'rgba(0,147,233,0.1)',
                    pointerEvents: 'none'
                }}
            />
            <Box
                component={motion.div}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
                sx={{
                    position: 'absolute',
                    top: '25%',
                    right: '15%',
                    width: '35px',
                    height: '35px',
                    borderRadius: '50%',
                    background: 'rgba(254,107,139,0.08)',
                    pointerEvents: 'none'
                }}
            />

            <Container maxWidth="md"> {/* ✅ Smaller container for text-only */}
                {/* ✅ Main title */}
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h2"
                        component="h2"
                        fontWeight="bold"
                        sx={{
                            mb: 3,
                            fontFamily: montserratFont,
                            fontSize: { xs: '2.5rem', md: '3.5rem' },
                            color: '#222222',
                            position: 'relative',
                            display: 'inline-block',
                            pb: 2,
                            textAlign: 'center',
                            width: '100%'
                        }}
                    >
                        Cerita
                        <Box
                            component="span"
                            sx={{
                                fontWeight: 900,
                                position: 'relative',
                                display: 'inline-block',
                                color: '#0093E9',
                                ml: 1,
                                textShadow: '0 2px 10px rgba(0,147,233,0.1)',
                                '&:hover': {
                                    color: '#FE6B8B',
                                    textShadow: '0 2px 15px rgba(254,107,139,0.2)',
                                    transition: 'all 0.3s ease-in-out'
                                }
                            }}
                        >
                            Kami
                        </Box>

                        <Box
                            component={motion.div}
                            initial={{ width: 0 }}
                            whileInView={{ width: '50%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.5 }}
                            sx={{
                                position: 'absolute',
                                height: '4px',
                                bottom: 0,
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'linear-gradient(90deg, rgba(0,147,233,0) 0%, rgba(0,147,233,0.5) 50%, rgba(0,147,233,0) 100%)',
                                borderRadius: '2px',
                            }}
                        />
                    </Typography>
                </motion.div>

                {/* ✅ Subtitle */}
                <motion.div variants={itemVariants}>
                    <Typography
                        variant="h5"
                        sx={{
                            mb: 6,
                            opacity: 0.8,
                            fontFamily: montserratFont,
                            fontWeight: 400,
                            lineHeight: 1.6,
                            color: '#555555',
                            textAlign: 'center',
                            maxWidth: '800px',
                            mx: 'auto'
                        }}
                    >
                        Dari pertemuan sederhana di kafe hingga menjadi komunitas teknologi terdepan di Karawang.
                        Inilah perjalanan kami membangun ekosistem developer yang solid.
                    </Typography>
                </motion.div>

                {/* ✅ Main content paragraphs */}
                <Box sx={{ maxWidth: '900px', mx: 'auto' }}>
                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontFamily: montserratFont,
                                mb: 4,
                                fontSize: { xs: '1.1rem', md: '1.2rem' },
                                lineHeight: 1.8,
                                color: '#666666',
                                textAlign: 'justify',
                                textIndent: '2em' // ✅ Paragraph indent
                            }}
                        >
                            Komunitas Developer Karawang didirikan pada tahun 2022 oleh sekelompok
                            penggemar teknologi yang bersemangat yang melihat kebutuhan akan komunitas
                            teknologi lokal. Apa yang dimulai sebagai pertemuan informal di kafe-kafe
                            lokal telah berkembang menjadi komunitas yang berkembang dengan ratusan anggota
                            dari berbagai latar belakang teknologi.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontFamily: montserratFont,
                                mb: 4,
                                fontSize: { xs: '1.1rem', md: '1.2rem' },
                                lineHeight: 1.8,
                                color: '#666666',
                                textAlign: 'justify',
                                textIndent: '2em'
                            }}
                        >
                            Kami percaya pada kekuatan berbagi pengetahuan, kolaborasi, dan membangun
                            koneksi yang bermakna. Komunitas kami menyambut pengembang dari semua tingkat keahlian,
                            dari pemula yang baru memulai perjalanan coding hingga senior developer yang
                            berpengalaman, serta dari semua latar belakang dan spesialisasi teknologi.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="body1"
                            paragraph
                            sx={{
                                fontFamily: montserratFont,
                                mb: 4,
                                fontSize: { xs: '1.1rem', md: '1.2rem' },
                                lineHeight: 1.8,
                                color: '#666666',
                                textAlign: 'justify',
                                textIndent: '2em'
                            }}
                        >
                            Visi kami adalah menciptakan ekosistem teknologi yang thriving di Karawang,
                            di mana setiap developer dapat berkembang, berinovasi, dan berkontribusi
                            pada kemajuan industri teknologi lokal. Kami tidak hanya fokus pada aspek
                            teknis, tetapi juga pada pengembangan soft skills dan networking profesional.
                        </Typography>
                    </motion.div>

                    <motion.div variants={itemVariants}>
                        <Typography
                            variant="body1"
                            sx={{
                                fontFamily: montserratFont,
                                fontSize: { xs: '1.1rem', md: '1.2rem' },
                                lineHeight: 1.8,
                                color: '#666666',
                                textAlign: 'justify',
                                textIndent: '2em'
                            }}
                        >
                            Hari ini, kami secara rutin menyelenggarakan berbagai kegiatan seperti workshop
                            teknis, tech talks, hackathon, code review sessions, dan pertemuan sosial
                            untuk terus mendorong pertumbuhan dan inovasi dalam ekosistem teknologi Karawang.
                            Bergabunglah dengan kami dalam membangun masa depan teknologi yang lebih cerah!
                        </Typography>
                    </motion.div>
                </Box>

                {/* ✅ Stats section at bottom */}
                <motion.div variants={itemVariants}>
                    <Box
                        sx={{
                            mt: 8,
                            p: 4,
                            borderRadius: '20px',
                            background: 'rgba(0, 147, 233, 0.05)',
                            border: '1px solid rgba(0, 147, 233, 0.1)',
                            textAlign: 'center'
                        }}
                    >
                        <Typography
                            variant="h6"
                            fontWeight="bold"
                            sx={{
                                mb: 3,
                                fontFamily: montserratFont,
                                color: '#333'
                            }}
                        >
                            Pencapaian Kami
                        </Typography>

                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: 4,
                                flexWrap: 'wrap'
                            }}
                        >
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h4" fontWeight="bold" color="#0093E9">
                                    2022
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Tahun Berdiri
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h4" fontWeight="bold" color="#FE6B8B">
                                    100+
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Members Aktif
                                </Typography>
                            </Box>
                            <Box sx={{ textAlign: 'center' }}>
                                <Typography variant="h4" fontWeight="bold" color="#0093E9">
                                    20+
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Events Diselenggarakan
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </motion.div>
            </Container>
        </Box>
    );
}