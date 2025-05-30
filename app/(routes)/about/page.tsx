'use client';

import AboutHeroSection from '@/app/components/about/AboutHeroSection';
import AboutStorySection from '@/app/components/about/AboutStorySection';
import AboutMissionVisionSection from '@/app/components/about/AboutMissionVisionSection';
import AboutCoreValuesSection from '@/app/components/about/AboutCoreValuesSection';
import AboutJourneySection from '@/app/components/about/AboutJourneySection';
import AboutCtaSection from '@/app/components/about/AboutCtaSection';

export default function AboutPage() {
    return (
        <>
            <AboutStorySection />
            <AboutHeroSection />
            <AboutMissionVisionSection />
            <AboutCoreValuesSection />
            <AboutJourneySection />
            <AboutCtaSection />
        </>
    );
}