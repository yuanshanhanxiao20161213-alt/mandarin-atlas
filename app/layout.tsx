import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoogleAnalytics } from "@/components/google-analytics";
import { websiteJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  metadataBase: new URL("https://mandarin-atlas.vercel.app"),
  title: {
    default: "Mandarin Atlas | Best Apps and Websites to Learn Chinese",
    template: "%s | Mandarin Atlas"
  },
  description:
    "Compare the best apps, websites, courses and tutoring platforms for learning Mandarin Chinese. Filter by level, skill, platform and price.",
  keywords: [
    "best apps to learn Chinese",
    "best websites to learn Mandarin",
    "Chinese learning app comparison",
    "HSK learning resources",
    "Mandarin learning websites"
  ],
  openGraph: {
    title: "Mandarin Atlas",
    description: "A refined comparison guide for Mandarin learning apps and websites.",
    url: "https://mandarin-atlas.vercel.app",
    siteName: "Mandarin Atlas",
    images: ["/images/ai/hero-mandarin-study.png"]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mandarin Atlas",
    description: "Compare Mandarin learning apps, websites, courses and tutors.",
    images: ["/images/ai/hero-mandarin-study.png"]
  },
  verification: {
    google: "ksSxZskkqTUEGn7bNp_rOQqAV6RK8R3g4OWlZmFNa-o"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <GoogleAnalytics />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd()) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  );
}
