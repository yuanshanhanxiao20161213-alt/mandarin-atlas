import { resources } from "@/lib/resources";
import { seoPages } from "@/lib/seo-pages";

export const SITE_URL = "https://mandarin-atlas.vercel.app";
export const SITE_LAST_MODIFIED = "2026-06-03";

const staticPaths = ["", "apps", "websites", "compare", "methodology"];

export function getSiteUrls() {
  const seoPaths = seoPages.map((page) => page.slug);
  const resourcePaths = resources.map((resource) => `resources/${resource.slug}`);

  return [...staticPaths, ...seoPaths, ...resourcePaths].map((path) =>
    path ? `${SITE_URL}/${path}` : `${SITE_URL}/`
  );
}
