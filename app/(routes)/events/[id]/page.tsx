'use client';

import { useParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Box, CircularProgress } from '@mui/material';
import EventDetailHeroSection from '@/app/components/events/detail/EventDetailHeroSection';
import EventDetailInfoSection from '@/app/components/events/detail/EventDetailInfoSection';
import EventSpeakersSection from '@/app/components/events/detail/EventSpeakersSection';
import EventLocationSection from '@/app/components/events/detail/EventLocationSection';
import EventRegistrationSection from '@/app/components/events/detail/EventRegistrationSection';
import RelatedEventsSection from '@/app/components/events/detail/RelatedEventsSection';

// Mock events data - in a real app, you would fetch this from an API
const eventsData = {
    "web-development-workshop": {
        id: "web-development-workshop",
        title: "Web Development Workshop",
        shortDescription: "Learn modern web development techniques using React and Next.js",
        longDescription: "Join us for an intensive workshop where we'll dive deep into modern web development using React and Next.js. This hands-on session is perfect for developers looking to level up their frontend skills and learn the latest best practices in web development.",
        date: "June 15, 2025",
        time: "10:00 AM - 2:00 PM",
        location: "Karawang Digital Hub",
        address: "Jl. Galuh Mas Raya No. 1, Karawang, West Java",
        image: "/events/web-workshop.jpg",
        tags: ["Workshop", "Web Development", "React"],
        attendees: 0,
        maxAttendees: 30,
        price: "Free",
        status: "upcoming",
        speakers: [
            {
                name: "Budi Santoso",
                role: "Senior Frontend Developer",
                company: "Tech Innovations",
                bio: "10+ years of experience in frontend development, specializing in React ecosystem",
                image: "/speakers/speaker1.jpg"
            },
            {
                name: "Dewi Putri",
                role: "UI/UX Designer",
                company: "Creative Solutions",
                bio: "Award-winning designer with expertise in creating user-friendly interfaces",
                image: "/speakers/speaker2.jpg"
            }
        ],
        agenda: [
            { time: "10:00 - 10:30", title: "Introduction to Modern Web Development" },
            { time: "10:30 - 11:30", title: "React Fundamentals & Hooks" },
            { time: "11:30 - 12:00", title: "Break" },
            { time: "12:00 - 13:00", title: "Next.js and Server Components" },
            { time: "13:00 - 14:00", title: "Building a Full Project & Q&A" }
        ],
        requirements: [
            "Basic knowledge of HTML, CSS, and JavaScript",
            "Laptop with Node.js installed",
            "Code editor (VS Code recommended)"
        ],
        relatedEvents: ["mobile-app-development-hackathon", "ai-and-machine-learning-seminar"]
    },
    "mobile-app-development-hackathon": {
        id: "mobile-app-development-hackathon",
        title: "Mobile App Development Hackathon",
        shortDescription: "48-hour hackathon to build innovative mobile applications",
        date: "July 8-10, 2025",
        // Add other fields similar to the first event
    },
    "ai-and-machine-learning-seminar": {
        id: "ai-and-machine-learning-seminar",
        title: "AI and Machine Learning Seminar",
        shortDescription: "Introduction to AI and practical applications in business",
        date: "August 5, 2025",
        // Add other fields similar to the first event
    }
};

export default function EventDetailPage() {
    const params = useParams();
    const eventId = params.id as string;
    const [event, setEvent] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        // Simulate API fetch with setTimeout
        const timer = setTimeout(() => {
            if (eventId && eventsData[eventId as keyof typeof eventsData]) {
                setEvent(eventsData[eventId as keyof typeof eventsData]);
                setLoading(false);
            } else {
                setError("Event not found");
                setLoading(false);
            }
        }, 800); // Simulate network delay

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
                    Event Not Found
                </Box>
                <Box component="p" sx={{
                    fontFamily: 'Montserrat, sans-serif',
                    color: '#666'
                }}>
                    The event you're looking for doesn't exist or has been removed.
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
            <RelatedEventsSection relatedEventIds={event.relatedEvents} eventsData={eventsData} />
        </>
    );
}