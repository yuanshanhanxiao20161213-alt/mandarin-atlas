import { buildSitemapXml } from "@/lib/sitemap-xml";

export const dynamic = "force-dynamic";

const sitemapHeaders = {
  "Content-Type": "application/xml; charset=utf-8",
  "Cache-Control": "public, max-age=0, must-revalidate",
  "X-Robots-Tag": "all"
};

export function GET(request: Request) {
  console.log("[sitemap.xml] requested", {
    userAgent: request.headers.get("user-agent") ?? "unknown"
  });

  return new Response(buildSitemapXml(), {
    status: 200,
    headers: sitemapHeaders
  });
}

export function HEAD() {
  return new Response(null, {
    status: 200,
    headers: sitemapHeaders
  });
}
