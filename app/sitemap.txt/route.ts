import { getSiteUrls } from "@/lib/site-urls";

export const dynamic = "force-static";

export function GET() {
  return new Response(`${getSiteUrls().join("\n")}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
      "X-Robots-Tag": "all"
    }
  });
}
