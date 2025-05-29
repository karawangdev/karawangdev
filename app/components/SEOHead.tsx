interface SEOHeadProps {
    title?: string;
    description?: string;
    keywords?: string[];
    canonical?: string;
    ogImage?: string;
    ogType?: string;
    structuredData?: object;
}

export default function SEOHead({
    title = "KarawangDev - Komunitas Developer Karawang",
    description = "Bergabung dengan komunitas developer terbesar di Karawang! Workshop, hackathon, networking untuk programmer dan software engineer.",
    keywords = ["karawang developer", "komunitas programmer", "tech community indonesia"],
    canonical = "https://karawangdev.vercel.app/",
    ogImage = "https://karawangdev.vercel.app/og-image.jpg",
    ogType = "website",
    structuredData
}: SEOHeadProps) {
    return (
        <>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="keywords" content={keywords.join(", ")} />
            <link rel="canonical" href={canonical} />

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:url" content={canonical} />
            <meta property="og:type" content={ogType} />

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={ogImage} />

            {/* Structured Data */}
            {structuredData && (
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(structuredData)
                    }}
                />
            )}
        </>
    );
}