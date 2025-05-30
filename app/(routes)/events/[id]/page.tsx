'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import EventDetailHeroSection from '@/app/components/events/detail/EventDetailHeroSection';
import EventDetailInfoSection from '@/app/components/events/detail/EventDetailInfoSection';
import EventSpeakersSection from '@/app/components/events/detail/EventSpeakersSection';
import EventLocationSection from '@/app/components/events/detail/EventLocationSection';
import EventRegistrationSection from '@/app/components/events/detail/EventRegistrationSection';

// Mock events data - updated with proper image paths and additional events
const eventsData = {
    "web-development-workshop": {
        id: "web-development-workshop",
        title: "Workshop Pengembangan Web",
        shortDescription: "Pelajari teknik pengembangan web modern menggunakan React dan Next.js",
        longDescription: "Bergabunglah dengan workshop intensif dimana kami akan menyelami pengembangan web modern menggunakan React dan Next.js. Sesi hands-on ini sempurna untuk developer yang ingin meningkatkan skill frontend mereka dan mempelajari best practices terbaru dalam pengembangan web.",
        date: "15 Juni 2025",
        time: "10:00 - 14:00",
        location: "Karawang Digital Hub",
        address: "Jl. Galuh Mas Raya No. 1, Karawang, Jawa Barat",
        image: "/events/web-workshop.jpg",
        tags: ["Workshop", "Web Development", "React"],
        attendees: 0,
        maxAttendees: 30,
        price: "Gratis",
        status: "upcoming",
        speakers: [
            {
                name: "Budi Santoso",
                role: "Senior Frontend Developer",
                company: "Tech Innovations",
                bio: "10+ tahun pengalaman dalam pengembangan frontend, spesialisasi dalam ekosistem React",
                image: "/speaker-male.webp"
            },
            {
                name: "Dewi Putri",
                role: "UI/UX Designer",
                company: "Creative Solutions",
                bio: "Designer pemenang penghargaan dengan keahlian dalam menciptakan antarmuka yang user-friendly",
                image: "/speaker-female.webp"
            }
        ],
        agenda: [
            { time: "10:00 - 10:30", title: "Pengenalan Pengembangan Web Modern" },
            { time: "10:30 - 11:30", title: "React Fundamentals & Hooks" },
            { time: "11:30 - 12:00", title: "Break" },
            { time: "12:00 - 13:00", title: "Next.js dan Server Components" },
            { time: "13:00 - 14:00", title: "Membangun Project Lengkap & Q&A" }
        ],
        requirements: [
            "Pengetahuan dasar HTML, CSS, dan JavaScript",
            "Laptop dengan Node.js terinstall",
            "Code editor (VS Code direkomendasikan)"
        ]
    },
    "mobile-app-development-hackathon": {
        id: "mobile-app-development-hackathon",
        title: "Hackathon Aplikasi Mobile",
        shortDescription: "Hackathon 48 jam untuk membangun aplikasi mobile yang inovatif",
        longDescription: "Kompetisi hackathon 48 jam yang menantang untuk membangun aplikasi mobile inovatif. Event ini terbuka untuk semua level developer dan memberikan kesempatan untuk berkolaborasi, belajar, dan bersaing dalam menciptakan solusi teknologi terdepan.",
        date: "8-10 Juli 2025",
        time: "Mulai 09:00",
        location: "Tech Coworking Space, Karawang",
        address: "Jl. Ahmad Yani No. 25, Karawang Wetan, Karawang",
        image: "/events-placeHolder.webp",
        tags: ["Hackathon", "Mobile", "Flutter"],
        attendees: 0,
        maxAttendees: 60,
        price: "Rp 50.000",
        status: "upcoming",
        speakers: [
            {
                name: "Ahmad Rahman",
                role: "Mobile App Architect",
                company: "Mobile Solutions Inc",
                bio: "Expert dalam pengembangan aplikasi mobile cross-platform dengan Flutter dan React Native",
                image: "/speaker-male.webp"
            }
        ],
        agenda: [
            { time: "09:00 - 10:00", title: "Opening & Team Formation" },
            { time: "10:00 - 12:00", title: "Ideation & Planning Session" },
            { time: "12:00 - 13:00", title: "Lunch Break" },
            { time: "13:00 - 18:00", title: "Development Phase 1" },
            { time: "18:00 - 19:00", title: "Dinner & Networking" },
            { time: "19:00 - 24:00", title: "Development Phase 2" }
        ],
        requirements: [
            "Laptop dengan development environment siap",
            "Pengalaman dasar dalam mobile development",
            "Semangat berkolaborasi dan berkompetisi"
        ]
    },
    "ai-and-machine-learning-seminar": {
        id: "ai-and-machine-learning-seminar",
        title: "Seminar AI & Machine Learning",
        shortDescription: "Pengantar AI dan aplikasi praktis dalam bisnis",
        longDescription: "Seminar komprehensif tentang Artificial Intelligence dan Machine Learning, membahas konsep dasar hingga aplikasi praktis dalam dunia bisnis. Cocok untuk profesional yang ingin memahami potensi AI dalam industri mereka.",
        date: "5 Agustus 2025",
        time: "13:00 - 17:00",
        location: "Online via Zoom",
        address: "Zoom Meeting Room (Link akan dikirim setelah registrasi)",
        image: "/events-placeHolder.webp",
        tags: ["Seminar", "AI", "Machine Learning"],
        attendees: 0,
        maxAttendees: 100,
        price: "Gratis",
        status: "upcoming",
        speakers: [
            {
                name: "Dr. Sari Indrawati",
                role: "AI Research Scientist",
                company: "Indonesian AI Institute",
                bio: "Peneliti AI dengan fokus pada Natural Language Processing dan Computer Vision",
                image: "/speaker-female.webp"
            }
        ],
        agenda: [
            { time: "13:00 - 13:30", title: "Introduction to AI & ML" },
            { time: "13:30 - 14:30", title: "AI Applications in Business" },
            { time: "14:30 - 14:45", title: "Break" },
            { time: "14:45 - 15:45", title: "Machine Learning Models Overview" },
            { time: "15:45 - 16:30", title: "Case Studies & Best Practices" },
            { time: "16:30 - 17:00", title: "Q&A Session" }
        ],
        requirements: [
            "Koneksi internet yang stabil",
            "Kamera dan mikrofon untuk interaksi",
            "Pengetahuan dasar matematika (opsional)"
        ]
    },
    "devops-tech-talk": {
        id: "devops-tech-talk",
        title: "Tech Talk: DevOps",
        shortDescription: "Best practices DevOps untuk tim pengembangan software",
        longDescription: "Tech talk yang membahas praktik terbaik DevOps untuk tim pengembangan software modern. Pelajari tentang CI/CD, containerization, monitoring, dan budaya DevOps yang efektif.",
        date: "20 September 2025",
        time: "19:00 - 21:00",
        location: "Aula Universitas Karawang",
        address: "Jl. HS. Ronggowaluyo, Puseurjaya, Karawang",
        image: "/events-placeHolder.webp",
        tags: ["Tech Talk", "DevOps", "CI/CD"],
        attendees: 0,
        maxAttendees: 80,
        price: "Gratis",
        status: "upcoming",
        speakers: [
            {
                name: "Rizki Pratama",
                role: "DevOps Engineer",
                company: "Cloud Infrastructure Corp",
                bio: "Specialist dalam cloud infrastructure dan automation dengan pengalaman 8+ tahun",
                image: "/speaker-male.webp"
            }
        ],
        agenda: [
            { time: "19:00 - 19:15", title: "Welcome & Introduction" },
            { time: "19:15 - 20:00", title: "DevOps Culture & Principles" },
            { time: "20:00 - 20:30", title: "CI/CD Pipeline Implementation" },
            { time: "20:30 - 20:45", title: "Break" },
            { time: "20:45 - 21:00", title: "Q&A and Networking" }
        ],
        requirements: [
            "Pengetahuan dasar software development",
            "Laptop untuk mengikuti demo (opsional)",
            "Networking mindset"
        ]
    },
    // Past events
    "javascript-fundamentals-workshop": {
        id: "javascript-fundamentals-workshop",
        title: "Workshop Dasar JavaScript",
        shortDescription: "Memahami konsep inti dan praktik JavaScript modern",
        longDescription: "Workshop komprehensif tentang fundamental JavaScript modern, mencakup ES6+, async programming, dan best practices dalam pengembangan JavaScript.",
        date: "20 April 2025",
        time: "10:00 - 15:00",
        location: "Karawang Tech Center",
        address: "Jl. Raya Karawang No. 15, Karawang",
        image: "/events-placeHolder.webp",
        tags: ["Workshop", "JavaScript", "Pemula"],
        attendees: 78,
        maxAttendees: 80,
        price: "Gratis",
        status: "completed"
    },
    "blockchain-development-intro": {
        id: "blockchain-development-intro",
        title: "Pengantar Pengembangan Blockchain",
        shortDescription: "Mempelajari dasar-dasar teknologi blockchain dan pengembangan",
        longDescription: "Workshop pengenalan blockchain development, smart contracts, dan aplikasi Web3 untuk developer yang ingin masuk ke dunia blockchain.",
        date: "5 Maret 2025",
        time: "13:00 - 17:00",
        location: "Innovation Hub Karawang",
        address: "Jl. Bypass Karawang No. 88, Karawang",
        image: "/events-placeHolder.webp",
        tags: ["Workshop", "Blockchain", "Web3"],
        attendees: 45,
        maxAttendees: 50,
        price: "Rp 75.000",
        status: "completed"
    },
    "cloud-computing-conference": {
        id: "cloud-computing-conference",
        title: "Konferensi Cloud Computing",
        shortDescription: "Mengeksplorasi arsitektur cloud modern dan strategi deployment",
        longDescription: "Konferensi sehari penuh tentang cloud computing, membahas AWS, Azure, GCP, dan strategi migrasi cloud untuk enterprise.",
        date: "12 Februari 2025",
        time: "09:00 - 17:00",
        location: "Hotel Grand Karawang",
        address: "Jl. Ahmad Yani No. 1, Karawang",
        image: "/events-placeHolder.webp",
        tags: ["Konferensi", "Cloud", "DevOps"],
        attendees: 120,
        maxAttendees: 150,
        price: "Rp 100.000",
        status: "completed"
    },
    "ui-ux-design-principles": {
        id: "ui-ux-design-principles",
        title: "Prinsip Desain UI/UX",
        shortDescription: "Best practices untuk membuat antarmuka yang ramah pengguna",
        longDescription: "Workshop desain UI/UX yang membahas prinsip-prinsip fundamental dalam menciptakan pengalaman pengguna yang optimal dan interface yang menarik.",
        date: "25 Januari 2025",
        time: "10:00 - 16:00",
        location: "Design Studio Karawang",
        address: "Jl. Veteran No. 45, Karawang",
        image: "/events-placeHolder.webp",
        tags: ["Workshop", "Desain", "UI/UX"],
        attendees: 55,
        maxAttendees: 60,
        price: "Rp 50.000",
        status: "completed"
    }
};

export default function EventDetailPage() {
    const params = useParams();
    const eventId = params.id as string;
    const [event, setEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (eventId && eventsData[eventId as keyof typeof eventsData]) {
                setEvent(eventsData[eventId as keyof typeof eventsData]);
                setLoading(false);
            } else {
                setError("Event not found");
                setLoading(false);
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [eventId]);

    if (loading) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)'
            }}>
                <CircularProgress sx={{ color: '#0093E9' }} />
            </Box>
        );
    }

    if (error || !event) {
        return (
            <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '80vh',
                flexDirection: 'column',
                background: 'linear-gradient(120deg, #ffffff 0%, #f8f9fa 100%)'
            }}>
                <Box component="h1" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#333',
                    mb: 2
                }}>
                    Event Tidak Ditemukan
                </Box>
                <Box component="p" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#666'
                }}>
                    Event yang Anda cari tidak ada atau telah dihapus.
                </Box>
            </Box>
        );
    }

    return (
        <>
            <EventDetailHeroSection event={event} />
            <EventDetailInfoSection event={event} />
            <EventSpeakersSection speakers={event.speakers} />
            <EventLocationSection location={event.location} address={event.address} />
            <EventRegistrationSection event={event} />
        </>
    );
}