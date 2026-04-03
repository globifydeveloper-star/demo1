import { MetadataRoute } from 'next';

// We import the static data here, but handle potential missing exports safely
// For a deep Next.js app, generating a dynamic sitemap from known routes
export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    '', '/services', '/web-development', '/app-development',
    '/digital-marketing', '/ecommerce', '/ai-automation',
    '/erp-solutions', '/about', '/projects', '/products'
  ];

  return staticPages.map(url => ({
    url: `https://globify.ae${url}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: url === '' ? 1.0 : 0.8,
  }));
}
