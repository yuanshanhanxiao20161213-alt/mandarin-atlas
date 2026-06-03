import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, SearchCheck } from "lucide-react";
import { notFound } from "next/navigation";
import { AdSlot } from "@/components/ad-slot";
import { ResourceCard } from "@/components/resource-card";
import { getSeoPage, getSeoPageResources, seoPages } from "@/lib/seo-pages";
import { faqJsonLd, itemListJsonLd } from "@/lib/structured-data";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    keywords: page.keywords,
    alternates: {
      canonical: `/${page.slug}`
    },
    openGraph: {
      title: page.title,
      description: page.description,
      images: [page.image]
    }
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);
  if (!page) notFound();

  const pageResources = getSeoPageResources(page);
  const relatedGuides = seoPages
    .filter((candidate) => candidate.slug !== page.slug)
    .filter((candidate) => candidate.recommendedSkills.some((skill) => page.recommendedSkills.includes(skill)))
    .slice(0, 3);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(page)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(itemListJsonLd(page.title, page.description, pageResources))
        }}
      />
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-8">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 border border-cinnabar/30 bg-cinnabar/8 px-3 py-2 text-xs uppercase tracking-[0.24em] text-cinnabar">
            <SearchCheck size={15} />
            {page.eyebrow}
          </p>
          <h1 className="font-display text-6xl leading-[0.92] md:text-7xl">{page.h1}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">{page.description}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {page.keywords.map((keyword) => (
              <span key={keyword} className="border border-ink/12 bg-paper px-3 py-2 text-xs text-ink/62">
                {keyword}
              </span>
            ))}
          </div>
          <p className="mt-5 text-sm text-ink/50">Last reviewed: {page.lastReviewed}</p>
        </div>
        <div className="relative aspect-[16/10] overflow-hidden border border-ink/12 bg-ink shadow-editorial">
          <Image src={page.image} alt={`${page.title} visual`} fill priority className="object-cover" />
        </div>
      </section>

      <AdSlot id={`guide-top-${page.slug}`} variant="leaderboard" />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-12 sm:px-6 lg:grid-cols-[0.72fr_1.28fr] lg:px-8">
        <aside className="border border-ink/12 bg-paper p-6">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-cinnabar">Search intent</p>
          <p className="text-base leading-7 text-ink/70">{page.intent}</p>
          <div className="mt-6 border-t border-ink/10 pt-5">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/45">Editorial verdict</p>
            <p className="text-base leading-7 text-ink/72">{page.verdict}</p>
          </div>
          <div className="mt-6 border-t border-ink/10 pt-5">
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-ink/45">Best-fit skills</p>
            <div className="flex flex-wrap gap-2">
              {page.recommendedSkills.map((skill) => (
                <span key={skill} className="border border-ink/12 bg-ivory px-3 py-2 text-sm text-ink/68">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </aside>
        <div className="grid gap-5">
          <article className="border border-ink/12 bg-paper p-6">
            <h2 className="font-display text-4xl leading-none">Quick comparison for this query.</h2>
            <div className="mt-5 grid gap-3">
              {page.comparisonRows.map((row) => (
                <div key={row.label} className="grid gap-3 border border-ink/10 bg-ivory p-4 md:grid-cols-[0.75fr_0.85fr_1.4fr]">
                  <p className="text-xs uppercase tracking-[0.2em] text-ink/45">{row.label}</p>
                  <p className="flex items-center gap-2 font-medium text-ink">
                    <CheckCircle2 className="text-jade" size={16} />
                    {row.bestPick}
                  </p>
                  <p className="text-sm leading-6 text-ink/66">{row.note}</p>
                </div>
              ))}
            </div>
          </article>
          {page.sections.map((section) => (
            <article key={section.heading} className="border border-ink/12 bg-paper p-6">
              <h2 className="font-display text-4xl leading-none">{section.heading}</h2>
              <p className="mt-4 text-base leading-7 text-ink/68">{section.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-7 flex items-end justify-between gap-4">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cinnabar">Recommended stack</p>
            <h2 className="font-display text-5xl leading-none">Resources that match this search.</h2>
          </div>
          <Link href="/compare" className="hidden items-center gap-2 text-sm text-ink/62 hover:text-ink md:inline-flex">
            Compare all
            <ArrowRight size={15} />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pageResources.map((resource) => (
            <ResourceCard key={resource.slug} resource={resource} compact />
          ))}
        </div>
      </section>

      <AdSlot id={`guide-mid-${page.slug}`} variant="in-feed" />

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="border border-ink/12 bg-paper p-6 md:p-8">
          <p className="mb-3 text-xs uppercase tracking-[0.24em] text-cinnabar">FAQ</p>
          <div className="grid gap-5 md:grid-cols-2">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="border-t border-ink/10 pt-5">
                <h2 className="font-display text-3xl leading-none">{faq.question}</h2>
                <p className="mt-3 text-sm leading-6 text-ink/68">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {relatedGuides.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cinnabar">Related long-tail guides</p>
            <h2 className="font-display text-5xl leading-none">Keep narrowing the search.</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {relatedGuides.map((guide) => (
              <Link key={guide.slug} href={`/${guide.slug}`} className="border border-ink/12 bg-paper p-5 transition hover:-translate-y-1 hover:shadow-editorial">
                <p className="mb-3 text-xs uppercase tracking-[0.2em] text-cinnabar">{guide.eyebrow}</p>
                <h3 className="font-display text-3xl leading-none">{guide.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/64">{guide.description}</p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
