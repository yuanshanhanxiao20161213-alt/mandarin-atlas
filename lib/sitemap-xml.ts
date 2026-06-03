import { getSiteUrls, SITE_LAST_MODIFIED } from "@/lib/site-urls";

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export function buildSitemapXml() {
  const urls = getSiteUrls()
    .map(
      (url) => `  <url>
    <loc>${escapeXml(url)}</loc>
    <lastmod>${SITE_LAST_MODIFIED}</lastmod>
  </url>`
    )
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;
}
