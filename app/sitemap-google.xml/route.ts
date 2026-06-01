import { buildSitemapXml } from "@/lib/sitemap-xml";

export const dynamic = "force-dynamic";

export function GET(request: Request) {
  const userAgent = request.headers.get("user-agent") ?? "unknown";
  console.log("[sitemap-google] requested", { userAgent });

  return new Response(buildSitemapXml(), {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "all"
    }
  });
}
