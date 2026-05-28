import { resources } from "@/lib/resources";
import { seoPages } from "@/lib/seo-pages";

const SITE_URL = "https://mandarin-atlas.vercel.app";

export const dynamic = "force-dynamic";

const escapeXml = (value: string) =>
  value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&apos;");

export function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  console.log("[sitemap] requested", { userAgent });

  const staticPaths = ["", "apps", "websites", "compare", "methodology"];
  const seoPaths = seoPages.map((page) => page.slug);
  const resourcePaths = resources.map((resource) => `resources/${resource.slug}`);
  const paths = [...staticPaths, ...seoPaths, ...resourcePaths];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((path) => {
    const loc = path ? `${SITE_URL}/${path}` : `${SITE_URL}/`;
    return `  <url>
    <loc>${escapeXml(loc)}</loc>
  </url>`;
  })
  .join("\n")}
</urlset>`;

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "all"
    }
  });
}
