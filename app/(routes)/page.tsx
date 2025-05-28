'use client';

import HeroSection from '../components/home/HeroSection';
import AboutSection from '../components/home/AboutSection';
import UpcomingEventsSection from '../components/events/UpcomingEventsSection';
import StatsSection from '../components/home/StatsSection';
import AboutCtaSection from '../components/about/AboutCtaSection';

export default function HomePage() {
    return (
        <>
            <HeroSection />
            <AboutSection />
            <UpcomingEventsSection />
            <StatsSection />
            <AboutCtaSection />
        </>
    );
}