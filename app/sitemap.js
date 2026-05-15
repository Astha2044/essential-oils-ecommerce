export default function sitemap() {
  const baseUrl = 'https://www.vsnaturalsandessentials.com';

  const routes = [
    '',
    '/about',
    '/products',
    '/shop',
    '/blog',
    '/privacy',
    '/terms',
    '/contact',
    '/how-it-works',
    '/benefits',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new URLSearchParams().get('updatedAt') || new Date().toISOString().split('T')[0],
    changeFrequency: 'monthly',
    priority: route === '' ? 1 : 0.8,
  }));

  return routes;
}
