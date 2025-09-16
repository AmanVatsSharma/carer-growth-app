/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ipdeducation.in',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: [
    '/dashboard/*', // Exclude all dashboard pages from sitemap
    '/dashboard/login', // Exclude login page
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/dashboard/', '/dashboard/login'], // Disallow dashboard pages
      },
    ],
  },
};
