/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://karawangdev.vercel.app',
    generateRobotsTxt: true,
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
                disallow: ['/api/', '/_next/', '/admin/']
            }
        ],
        additionalSitemaps: [
            'https://karawangdev.vercel.app/sitemap.xml'
        ]
    },
    exclude: ['/api/*', '/admin/*'],
    generateIndexSitemap: false,
    changefreq: 'weekly',
    priority: 0.7,
    lastmod: new Date().toISOString(),
    transform: async (config, path) => {
        const customPriority = {
            '/': 1.0,
            '/about': 0.8,
            '/events': 0.9,
            '/community': 0.7,
            '/contact': 0.6
        };

        return {
            loc: path,
            changefreq: config.changefreq,
            priority: customPriority[path] || config.priority,
            lastmod: config.autoLastmod ? new Date().toISOString() : undefined
        };
    }
};