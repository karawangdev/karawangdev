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
            lastmod: new Date().toISOString()
        };
    },

    additionalPaths: async (config) => {
        const additionalPaths = [
            {
                loc: '/workshop',
                changefreq: 'weekly',
                priority: 0.8,
                lastmod: new Date().toISOString()
            },
            {
                loc: '/join',
                changefreq: 'monthly',
                priority: 0.8,
                lastmod: new Date().toISOString()
            }
        ];

        return additionalPaths;
    }
};