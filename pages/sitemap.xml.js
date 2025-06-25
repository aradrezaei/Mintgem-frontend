export async function GET() {
  const baseUrl = 'https://mintgem.ir'; 

  const staticPages = [
    '',
    '/about',
    '/contact-us',
    "/login.js",
    "/terms-of-service.js",
    "/purchaseprocess.js",


];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map(
        (path) => `
      <url>
        <loc>${baseUrl}${path}</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>`
      )
      .join('')}
  </urlset>`;

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
