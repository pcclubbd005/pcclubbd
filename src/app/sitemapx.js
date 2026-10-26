
import { SITE } from '@/data/site';

export default function sitemap() {
  const baseUrl = 'https://pcclubbd.com';
  const lastModified = new Date();

  const routes = [
    '',
    '/aboutus',
    '/shop',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified,
    changeFrequency: route === '' ? 'daily' : 'weekly',
    priority: route === '' ? 1 : 0.7,
  }));
}
