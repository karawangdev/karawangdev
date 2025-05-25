'use client';

import EventsHeroSection from '@/app/components/events/EventsHeroSection';
import UpcomingEventsSection from '@/app/components/events/UpcomingEventsSection';
import PastEventsSection from '@/app/components/events/PastEventsSection';
import EventCTASection from '@/app/components/events/EventCTASection';

export default function EventsPage() {
    return (
        <>
            <EventsHeroSection />
            <UpcomingEventsSection />
            <PastEventsSection />
            <EventCTASection />
        </>
    );
}