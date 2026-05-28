import Link from "next/link";
import { BookOpen, Compass, ScanLine } from "lucide-react";

const nav = [
  { href: "/best-chinese-learning-apps-for-beginners", label: "Guides" },
  { href: "/websites", label: "Websites" },
  { href: "/apps", label: "Apps" },
  { href: "/compare", label: "Compare" },
  { href: "/methodology", label: "Methodology" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-ivory/86 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Mandarin Atlas home">
          <span className="grid size-10 place-items-center border border-ink/15 bg-paper text-cinnabar shadow-sm">
            <Compass size={19} strokeWidth={1.7} />
          </span>
          <span>
            <span className="block font-display text-2xl leading-none tracking-normal">Mandarin Atlas</span>
            <span className="hidden text-[11px] uppercase tracking-[0.24em] text-ink/55 sm:block">
              Compare. Choose. Learn.
            </span>
          </span>
        </Link>
        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="px-3 py-2 text-sm text-ink/72 transition hover:bg-ink/5 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/apps#download"
          className="inline-flex items-center gap-2 border border-ink/15 bg-ink px-3 py-2 text-sm text-paper transition hover:bg-cinnabar"
        >
          <ScanLine size={16} />
          <span className="hidden sm:inline">Scan apps</span>
        </Link>
      </div>
      <div className="flex border-t border-ink/10 md:hidden">
        {nav.map((item) => (
          <Link key={item.href} href={item.href} className="flex-1 px-2 py-2 text-center text-xs text-ink/68">
            {item.label}
          </Link>
        ))}
      </div>
    </header>
  );
}
