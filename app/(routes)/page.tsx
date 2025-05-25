'use client';

import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import EventsSection from '../components/home/EventsSection';
import StatsSection from '../components/home/StatsSection';
import CTASection from '../components/home/CTASection';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <EventsSection />
            <StatsSection />
            <CTASection />
        </>
    );
}