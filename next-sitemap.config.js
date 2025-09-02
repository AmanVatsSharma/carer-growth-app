/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://ipdeducation.in',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
};
