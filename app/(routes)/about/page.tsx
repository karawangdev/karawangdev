'use client';

import AboutHeroSection from '@/app/components/about/AboutHeroSection';
import AboutStorySection from '@/app/components/about/AboutStorySection';
import AboutMissionVisionSection from '@/app/components/about/AboutMissionVisionSection';
import AboutCoreValuesSection from '@/app/components/about/AboutCoreValuesSection';
import AboutJourneySection from '@/app/components/about/AboutJourneySection';
import AboutTeamSection from '@/app/components/about/AboutTeamSection';
import AboutCtaSection from '@/app/components/about/AboutCtaSection';

export default function AboutPage() {
    return (
        <>
            <AboutHeroSection />
            <AboutStorySection />
            <AboutMissionVisionSection />
            <AboutCoreValuesSection />
            <AboutJourneySection />
            <AboutTeamSection />
            <AboutCtaSection />
        </>
    );
}