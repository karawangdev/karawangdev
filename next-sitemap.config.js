/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://karawangdev.vercel.app',
    generateRobotsTxt: true,
    sitemapSize: 7000,
    changefreq: 'weekly',
    priority: 0.7,
    exclude: ['/api/*', '/admin/*', '/_next/*', '/404', '/500'],

    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/admin/', '/private/']
            }
        ],
        additionalSitemaps: [
            'https://karawangdev.vercel.app/sitemap-0.xml'
        ]
    },

    // ✅ Enhanced transform dengan metadata lengkap
    transform: async (config, path) => {
        const customPriority = {
            '/': 1.0,
            '/about': 0.8,
            '/events': 0.9,
            '/community': 0.7,
            '/contact': 0.6,
            '/workshop': 0.8,
            '/join': 0.8,
            '/blog': 0.7
        };

        const customChangefreq = {
            '/': 'weekly',
            '/events': 'weekly',
            '/blog': 'weekly',
            '/workshop': 'weekly',
            '/about': 'monthly',
            '/community': 'monthly',
            '/contact': 'monthly',
            '/join': 'monthly'
        };

        return {
            loc: path,
            changefreq: customChangefreq[path] || config.changefreq,
            priority: customPriority[path] || config.priority,
            lastmod: new Date().toISOString(),
            // ✅ Add images for specific pages
            images: path === '/' ? [
                {
                    loc: 'https://karawangdev.vercel.app/logo.webp',
                    title: 'KarawangDev Logo',
                    caption: 'Logo komunitas developer Karawang'
                },
                {
                    loc: 'https://karawangdev.vercel.app/og-image.jpg',
                    title: 'KarawangDev Community Banner',
                    caption: 'Banner komunitas developer Karawang dengan 100+ members'
                }
            ] : []
        };
    },

    // ✅ Additional sitemaps for different content types
    additionalPaths: async (config) => {
        const additionalPaths = [];

        // Add dynamic routes if any
        // const events = await fetchEvents();
        // events.forEach(event => {
        //     additionalPaths.push({
        //         loc: `/events/${event.slug}`,
        //         changefreq: 'weekly',
        //         priority: 0.6,
        //         lastmod: event.updatedAt
        //     });
        // });

        return additionalPaths;
    }
};

{
    "scripts": {
        "build": "next build",
            "postbuild": "next-sitemap",
                "sitemap": "next-sitemap",
                    "sitemap:dev": "next-sitemap --config next-sitemap.config.js"
    }
}