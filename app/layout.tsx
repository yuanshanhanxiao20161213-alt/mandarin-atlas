import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoogleAnalytics } from "@/components/google-analytics";

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
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
