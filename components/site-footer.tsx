import Link from "next/link";
import { BookMarked } from "lucide-react";
import { seoPages } from "@/lib/seo-pages";

export function SiteFooter() {
  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-[1.2fr_0.8fr] lg:px-8">
        <div>
          <div className="mb-4 flex items-center gap-3">
            <BookMarked className="text-brass" size={22} />
            <span className="font-display text-3xl">Mandarin Atlas</span>
          </div>
          <p className="max-w-2xl text-sm leading-6 text-paper/70">
            A curated comparison index for Mandarin learners. Traffic, rating and download notes are presented
            as public or third-party estimates and should be rechecked before commercial publication.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm text-paper/70">
          <Link href="/websites" className="hover:text-paper">Learning websites</Link>
          <Link href="/apps" className="hover:text-paper">Mobile apps</Link>
          <Link href="/compare" className="hover:text-paper">Comparison board</Link>
          <Link href="/methodology" className="hover:text-paper">Data methodology</Link>
          {seoPages.slice(0, 4).map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="hover:text-paper">
              {page.title}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
