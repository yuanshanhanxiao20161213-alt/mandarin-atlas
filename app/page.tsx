import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BarChart3, BookOpenCheck, GraduationCap, ScanLine } from "lucide-react";
import { AdSlot } from "@/components/ad-slot";
import { DownloadMatrix } from "@/components/download-matrix";
import { EditorialImage } from "@/components/editorial-image";
import { ResourceExplorer } from "@/components/resource-explorer";
import { ResourceCard } from "@/components/resource-card";
import { resources, skillImages } from "@/lib/resources";
import { seoPages } from "@/lib/seo-pages";

const featured = ["hellochinese", "pleco", "du-chinese"].map((slug) => resources.find((resource) => resource.slug === slug)!);

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden border-b border-ink/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-8 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-8">
          <div className="relative z-10">
            <p className="mb-5 inline-flex border border-cinnabar/30 bg-cinnabar/8 px-3 py-2 text-xs uppercase tracking-[0.24em] text-cinnabar">
              Best apps and websites to learn Mandarin
            </p>
            <h1 className="max-w-4xl font-display text-6xl leading-[0.92] tracking-normal md:text-7xl 2xl:text-8xl">
              Find the right way to learn Mandarin.
            </h1>
            <p className="mt-7 max-w-2xl text-xl leading-8 text-ink/68">
              Mandarin Atlas compares apps, courses, websites and tutors by skill, level, platform, price and
              public data signals, so learners can choose with less noise.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="#explorer" className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-paper transition hover:bg-cinnabar">
                Start filtering
                <ArrowRight size={17} />
              </Link>
              <Link
                href="/compare"
                className="inline-flex items-center gap-2 border border-ink/15 bg-paper px-5 py-3 transition hover:bg-ivory"
              >
                Compare resources
                <BarChart3 size={17} />
              </Link>
            </div>
          </div>
          <div className="relative">
            <EditorialImage
              src="/images/ai/hero-mandarin-study.png"
              alt="Premium Mandarin learning desk with notebook, phone and study materials"
              className="aspect-[4/5] lg:aspect-[16/11]"
              priority
            />
            <div className="absolute -bottom-5 left-5 right-5 grid grid-cols-3 border border-ink/12 bg-paper/94 backdrop-blur">
              {[
                ["12", "curated picks"],
                ["8", "skill filters"],
                ["4", "compare slots"]
              ].map(([value, label]) => (
                <div key={label} className="border-r border-ink/10 p-4 last:border-r-0">
                  <p className="font-display text-4xl leading-none">{value}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.16em] text-ink/48">{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <AdSlot id="home-leaderboard-after-hero" variant="leaderboard" />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          {
            icon: BookOpenCheck,
            title: "Resource intelligence",
            text: "Each profile summarizes strengths, limits, source links and last-checked dates."
          },
          {
            icon: GraduationCap,
            title: "Teaching context",
            text: "Human tutor and classroom imagery makes the site feel like a learning guide, not a sterile directory."
          },
          {
            icon: ScanLine,
            title: "Mobile-ready downloads",
            text: "App pages show QR codes on desktop and direct store actions on mobile."
          }
        ].map((item) => (
          <div key={item.title} className="border border-ink/12 bg-paper p-5">
            <item.icon className="mb-5 text-cinnabar" size={24} />
            <h2 className="font-display text-3xl">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/66">{item.text}</p>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <EditorialImage src="/images/ai/tutoring-scene.png" alt="One-on-one Mandarin tutor scene" className="aspect-[16/11]" />
          <EditorialImage src="/images/ai/group-class.png" alt="International Mandarin group class" className="aspect-[16/11]" />
        </div>
      </section>

      <div id="explorer">
        <ResourceExplorer resources={resources} />
      </div>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 grid gap-4 lg:grid-cols-[0.72fr_1.28fr] lg:items-end">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cinnabar">Search-led guides</p>
            <h2 className="font-display text-5xl leading-none md:text-6xl">Long-tail paths learners actually search.</h2>
          </div>
          <p className="max-w-2xl text-base leading-7 text-ink/64">
            These guide pages target high-intent Mandarin search phrases such as beginner Chinese apps, HSK self-study,
            graded reader apps, character tools and online speaking practice.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {seoPages.map((page) => (
            <Link key={page.slug} href={`/${page.slug}`} className="group border border-ink/12 bg-paper p-5 transition hover:-translate-y-1 hover:shadow-editorial">
              <p className="mb-4 text-xs uppercase tracking-[0.2em] text-cinnabar">{page.eyebrow}</p>
              <h3 className="font-display text-4xl leading-none">{page.title}</h3>
              <p className="mt-4 text-sm leading-6 text-ink/64">{page.description}</p>
              <span className="mt-5 inline-flex items-center gap-2 text-sm text-ink/62 group-hover:text-cinnabar">
                Open guide
                <ArrowRight size={15} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <AdSlot id="home-infeed-before-editorial-picks" variant="in-feed" />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cinnabar">Editorial picks</p>
            <h2 className="font-display text-5xl leading-none md:text-6xl">A strong starter stack.</h2>
          </div>
          <Link href="/compare?items=hellochinese,pleco,du-chinese" className="hidden items-center gap-2 text-sm text-ink/62 hover:text-ink md:inline-flex">
            Compare stack
            <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featured.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cinnabar">Learning goals</p>
          <h2 className="font-display text-5xl leading-none md:text-6xl">Choose by the skill you actually need.</h2>
        </div>
        <div className="grid gap-4 md:grid-cols-5">
          {Object.entries(skillImages).map(([skill, image]) => (
            <Link key={skill} href={`/#explorer`} className="group overflow-hidden border border-ink/12 bg-paper">
              <div className="relative aspect-[4/5] overflow-hidden bg-ink">
                <Image src={image} alt={`${skill} learning visual`} fill sizes="20vw" className="object-cover transition duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <p className="font-display text-3xl">{skill}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <DownloadMatrix />
    </main>
  );
}
