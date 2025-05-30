import { Inter } from 'next/font/google';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { SpeedInsights } from '@vercel/speed-insights/next';

import Navbar from './components/ui/navbar';
import Footer from './components/ui/footer';
import ClientProviders from './components/providers/ClientProviders';

const inter = Inter({ subsets: ['latin'] });

const theme = createTheme({
    palette: {
        primary: {
            main: '#FE6B8B',
        },
        secondary: {
            main: '#FF8E53',
        },
    },
    typography: {
        fontFamily: inter.style.fontFamily,
    },
});

// ✅ REMOVE 'use client' from layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="id">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />

                {/* ✅ Critical Missing Meta Tags */}
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="format-detection" content="telephone=no" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="application-name" content="KarawangDev" />

                {/* ✅ Language & Locale */}
                <meta httpEquiv="Content-Language" content="id" />
                <meta name="language" content="Indonesian" />

                {/* ✅ Security Headers */}
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta httpEquiv="Referrer-Policy" content="strict-origin-when-cross-origin" />

                {/* ✅ Enhanced Title & Description */}
                <title>KarawangDev - Komunitas Developer Karawang | Tech Community Indonesia</title>
                <meta name="description" content="Bergabung dengan KarawangDev, komunitas developer terbesar di Karawang! Workshop, hackathon, networking, dan kolaborasi untuk programmer, web developer, dan software engineer di Indonesia." />

                {/* ✅ Enhanced Keywords */}
                <meta name="keywords" content="karawang developer, komunitas programmer karawang, tech community indonesia, developer indonesia, coding karawang, web developer karawang, software engineer karawang, hackathon karawang, workshop programming, belajar coding, javascript indonesia, react indonesia, nodejs indonesia" />

                <meta name="author" content="KarawangDev Community" />
                <meta name="creator" content="KarawangDev" />
                <meta name="publisher" content="KarawangDev Community" />

                {/* ✅ Geographic SEO */}
                <meta name="geo.region" content="ID-JB" />
                <meta name="geo.placename" content="Karawang, Jawa Barat, Indonesia" />
                <meta name="geo.position" content="-6.3066,107.3000" />
                <meta name="ICBM" content="-6.3066,107.3000" />

                {/* ✅ Enhanced Favicon Set */}
                <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <meta name="msapplication-TileColor" content="#0093E9" />
                <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
                <meta name="theme-color" content="#0093E9" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                <meta name="apple-mobile-web-app-title" content="KarawangDev" />
                <meta name="msapplication-starturl" content="/" />
                <meta name="msapplication-window" content="width=1024;height=768" />
                <meta name="msapplication-navbutton-color" content="#0093E9" />

                {/* ✅ Enhanced Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://karawangdev.vercel.app/" />
                <meta property="og:title" content="KarawangDev - Komunitas Developer Terbesar di Karawang" />
                <meta property="og:description" content="Bergabung dengan 100+ developer di Karawang! Workshop gratis, hackathon, networking, dan kolaborasi project. Tingkatkan skill coding Anda bersama komunitas tech terdepan." />
                <meta property="og:image" content="https://karawangdev.vercel.app/og-image.jpg" />
                <meta property="og:image:secure_url" content="https://karawangdev.vercel.app/og-image.jpg" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image:alt" content="KarawangDev - Komunitas Developer Karawang" />
                <meta property="og:site_name" content="KarawangDev" />
                <meta property="og:locale" content="id_ID" />
                <meta property="og:locale:alternate" content="en_US" />

                {/* ✅ Enhanced Twitter Cards */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@karawangdev" />
                <meta name="twitter:creator" content="@karawangdev" />
                <meta name="twitter:url" content="https://karawangdev.vercel.app/" />
                <meta name="twitter:title" content="KarawangDev - Komunitas Developer Karawang" />
                <meta name="twitter:description" content="100+ developer di Karawang. Workshop, hackathon, networking. Join komunitas tech terdepan!" />
                <meta name="twitter:image" content="https://karawangdev.vercel.app/twitter-card.jpg" />
                <meta name="twitter:image:alt" content="KarawangDev Community Logo" />

                {/* ✅ Additional SEO Meta */}
                <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
                <meta name="bingbot" content="index, follow" />
                <link rel="canonical" href="https://karawangdev.vercel.app/" />

                {/* ✅ HREFLANG untuk Multi-language SEO */}
                <link rel="alternate" hrefLang="id" href="https://karawangdev.vercel.app/" />
                <link rel="alternate" hrefLang="en" href="https://karawangdev.vercel.app/en" />
                <link rel="alternate" hrefLang="x-default" href="https://karawangdev.vercel.app/" />

                {/* ✅ Preconnect & DNS Prefetch untuk Performance */}
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link rel="dns-prefetch" href="https://www.google-analytics.com" />
                <link rel="dns-prefetch" href="https://vercel.live" />

                {/* ✅ Preload Critical Resources */}
                <link rel="preload" href="/logo.webp" as="image" type="image/webp" />
                <link rel="preload" href="/favicon/favicon.ico" as="image" type="image/x-icon" />

                {/* ✅ Resource Hints */}
                <link rel="prefetch" href="/about" />
                <link rel="prefetch" href="/events" />
                <link rel="prefetch" href="/community" />

                {/* ✅ JSON-LD Structured Data */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify({
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    "@id": "https://karawangdev.vercel.app/#organization",
                                    "name": "KarawangDev",
                                    "alternateName": ["Karawang Developer Community", "Komunitas Developer Karawang"],
                                    "url": "https://karawangdev.vercel.app",
                                    "logo": {
                                        "@type": "ImageObject",
                                        "url": "https://karawangdev.vercel.app/logo.webp",
                                        "width": 512,
                                        "height": 512
                                    },
                                    "description": "Komunitas developer terbesar di Karawang untuk berbagi ilmu, berkolaborasi, dan berkembang bersama dalam dunia teknologi",
                                    "address": {
                                        "@type": "PostalAddress",
                                        "addressLocality": "Karawang",
                                        "addressRegion": "Jawa Barat",
                                        "addressCountry": "Indonesia"
                                    },
                                    "foundingDate": "2025",
                                    "memberOf": {
                                        "@type": "Organization",
                                        "name": "Indonesian Developer Community"
                                    },
                                    "sameAs": [
                                        "https://instagram.com/karawangdev",
                                        "https://linkedin.com/company/karawangdev",
                                        "https://github.com/karawangdev"
                                    ]
                                },
                                {
                                    "@type": "WebSite",
                                    "@id": "https://karawangdev.vercel.app/#website",
                                    "url": "https://karawangdev.vercel.app",
                                    "name": "KarawangDev - Komunitas Developer Karawang",
                                    "description": "Website resmi komunitas developer Karawang",
                                    "publisher": {
                                        "@id": "https://karawangdev.vercel.app/#organization"
                                    },
                                    "inLanguage": "id-ID",
                                    "potentialAction": {
                                        "@type": "SearchAction",
                                        "target": "https://karawangdev.vercel.app/?s={search_term_string}",
                                        "query-input": "required name=search_term_string"
                                    }
                                },
                                {
                                    "@type": "CollectionPage",
                                    "@id": "https://karawangdev.vercel.app/#webpage",
                                    "url": "https://karawangdev.vercel.app",
                                    "name": "KarawangDev - Komunitas Developer Karawang",
                                    "description": "Bergabung dengan komunitas developer terbesar di Karawang. Workshop, hackathon, networking untuk programmer dan software engineer.",
                                    "isPartOf": {
                                        "@id": "https://karawangdev.vercel.app/#website"
                                    },
                                    "about": {
                                        "@id": "https://karawangdev.vercel.app/#organization"
                                    },
                                    "breadcrumb": {
                                        "@type": "BreadcrumbList",
                                        "itemListElement": [
                                            {
                                                "@type": "ListItem",
                                                "position": 1,
                                                "name": "Home",
                                                "item": "https://karawangdev.vercel.app"
                                            }
                                        ]
                                    }
                                }
                            ]
                        })
                    }}
                />

                {/* ✅ GOOGLE ANALYTICS 4 - REAL TRACKING CODE */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=G-DZLPHW3KE9"></script>
                <script
                    dangerouslySetInnerHTML={{
                        __html: `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            
                            gtag('config', 'G-DZLPHW3KE9', {
                                page_title: 'KarawangDev - Komunitas Developer Karawang',
                                page_location: 'https://karawangdev.vercel.app',
                                send_page_view: true,
                                cookie_flags: 'SameSite=None;Secure',
                                custom_map: {
                                    'community_type': 'tech_developer',
                                    'location': 'karawang_indonesia',
                                    'website_section': 'main_site'
                                }
                            });
                            
                            // Enhanced tracking for community website
                            gtag('event', 'page_view', {
                                event_category: 'engagement',
                                event_label: 'karawangdev_homepage',
                                custom_parameter_1: 'community_website',
                                custom_parameter_2: 'developer_hub'
                            });
                            
                            // Track community-specific events
                            gtag('event', 'community_visit', {
                                event_category: 'community',
                                event_label: 'website_visit',
                                community_name: 'KarawangDev',
                                visit_type: 'organic'
                            });
                        `
                    }}
                />

                {/* ✅ SEMUA VERIFICATION TAGS */}
                <meta name="google-site-verification" content="v4CtYH7Fv6frBPdYa1_Xc4-mwbdHxCEGrjPX5lxFF-k" />

                {/* ✅ Bing Webmaster Tools */}
                <meta name="msvalidate.01" content="TAMBAHKAN_BING_VERIFICATION_CODE" />

                {/* ✅ Yandex Webmaster */}
                <meta name="yandex-verification" content="d90ae94a6693288b" />

                {/* ✅ Facebook Domain Verification */}
                <meta name="facebook-domain-verification" content="TAMBAHKAN_FB_CODE" />

                {/* ✅ Pinterest */}
                <meta name="p:domain_verify" content="TAMBAHKAN_PINTEREST_CODE" />
            </head>
            <body className={inter.className}>
                <ThemeProvider theme={theme}>
                    <CssBaseline />

                    {/* ✅ WRAP CLIENT-SIDE CODE */}
                    <ClientProviders>
                        <Navbar />
                        <main
                            id="main-content"
                            style={{
                                paddingTop: '70px',
                                minHeight: '100vh'
                            }}
                        >
                            {children}
                        </main>
                        <Footer />
                    </ClientProviders>

                    <SpeedInsights />
                </ThemeProvider>
            </body>
        </html>
    );
}