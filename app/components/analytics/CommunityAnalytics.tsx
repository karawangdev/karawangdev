'use client';

import { useEffect, Suspense } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
    interface Window {
        gtag: (...args: any[]) => void;
    }
}

// Separate component for search params
function SearchParamsTracker() {
    const searchParams = useSearchParams();

    useEffect(() => {
        // Track UTM parameters if present
        const utmSource = searchParams.get('utm_source');
        const utmMedium = searchParams.get('utm_medium');
        const utmCampaign = searchParams.get('utm_campaign');

        if (utmSource && typeof window !== 'undefined' && window.gtag) {
            window.gtag('event', 'utm_tracking', {
                event_category: 'marketing',
                event_label: `${utmSource}_${utmMedium}`,
                utm_source: utmSource,
                utm_medium: utmMedium,
                utm_campaign: utmCampaign,
                traffic_type: 'campaign'
            });
        }
    }, [searchParams]);

    return null;
}

export default function CommunityAnalytics() {
    const pathname = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined' && window.gtag) {
            // Track page navigation
            window.gtag('config', 'G-DZLPHW3KE9', {
                page_path: pathname,
                page_title: getPageTitle(pathname),
                custom_map: {
                    'page_category': getPageCategory(pathname),
                    'user_journey': getUserJourney(pathname)
                }
            });

            // Track specific community events
            trackCommunityEvents(pathname);
        }
    }, [pathname]);

    // Track page scroll depth
    useEffect(() => {
        if (typeof window === 'undefined') return;

        let maxScroll = 0;
        const handleScroll = () => {
            const scrollPercent = Math.round(
                (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
            );

            if (scrollPercent > maxScroll && scrollPercent % 25 === 0) {
                maxScroll = scrollPercent;
                if (window.gtag) {
                    window.gtag('event', 'scroll_depth', {
                        event_category: 'engagement',
                        event_label: `${scrollPercent}%`,
                        value: scrollPercent
                    });
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <Suspense fallback={null}>
            <SearchParamsTracker />
        </Suspense>
    );
}

// Helper functions
function getPageTitle(path: string): string {
    const titles: { [key: string]: string } = {
        '/': 'KarawangDev - Homepage',
        '/about': 'About KarawangDev Community',
        '/events': 'Events & Workshops',
        '/community': 'Community Members',
        '/contact': 'Contact KarawangDev'
    };
    return titles[path] || `KarawangDev - ${path}`;
}

function getPageCategory(path: string): string {
    if (path === '/') return 'homepage';
    if (path.includes('/about')) return 'information';
    if (path.includes('/events')) return 'activities';
    if (path.includes('/community')) return 'members';
    if (path.includes('/contact')) return 'support';
    return 'navigation';
}

function getUserJourney(path: string): string {
    if (path === '/') return 'discovery';
    if (path.includes('/about')) return 'learning';
    if (path.includes('/events')) return 'engagement';
    if (path.includes('/community')) return 'connection';
    if (path.includes('/contact')) return 'conversion';
    return 'exploration';
}

function trackCommunityEvents(path: string) {
    if (typeof window !== 'undefined' && window.gtag) {
        const eventData = {
            event_category: 'community',
            community_name: 'KarawangDev',
            page_path: path
        };

        if (path === '/') {
            window.gtag('event', 'homepage_view', {
                ...eventData,
                event_label: 'main_landing'
            });
        } else if (path.includes('/events')) {
            window.gtag('event', 'events_interest', {
                ...eventData,
                event_label: 'events_exploration'
            });
        }
    }
}

// Export tracking functions
export const trackCommunityAction = (action: string, details: any = {}) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'community_action', {
            event_category: 'community',
            event_label: action,
            community_action: action,
            ...details
        });
    }
};

export const trackJoinInterest = (method: string) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'join_interest', {
            event_category: 'conversion',
            event_label: `join_via_${method}`,
            community_action: 'join_attempt',
            conversion_type: 'membership_interest',
            join_method: method
        });
    }
};