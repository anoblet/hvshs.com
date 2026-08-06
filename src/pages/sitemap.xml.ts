import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const site = 'https://hvshs.com';

const staticRoutes = [
  '/',
  '/about',
  '/blog',
  '/business-card',
  '/contact',
  '/faq',
  '/lit',
  '/mentorship',
  '/portfolio',
  '/portfolio/personal',
  '/portfolio/professional',
  '/pricing',
  '/service-area',
  '/services',
  '/services/design',
  '/services/design/pricing',
  '/services/installation',
  '/services/installation/pricing',
  '/services/consultation',
  '/services/consultation/pricing',
  '/settings',
  '/theme',
];

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');

  const urls = [
    ...staticRoutes.map(route => ({
      loc: `${site}${route}`,
      changefreq: 'monthly' as const,
    })),
    ...posts.map(post => ({
      loc: `${site}/blog/${post.id}`,
      lastmod: post.data.date.toISOString().split('T')[0],
    })),
  ];

  const urlset = urls
    .map(
      url =>
        `  <url>\n    <loc>${url.loc}</loc>${
          url.lastmod ? `\n    <lastmod>${url.lastmod}</lastmod>` : ''
        }${
          url.changefreq
            ? `\n    <changefreq>${url.changefreq}</changefreq>`
            : ''
        }\n  </url>`
    )
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urlset}
</urlset>`;

  return new Response(sitemap, {
    headers: { 'Content-Type': 'application/xml' },
  });
};
