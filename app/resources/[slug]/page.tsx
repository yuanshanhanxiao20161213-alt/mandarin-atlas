import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Apple, ArrowLeft, ExternalLink, Play, ScanLine } from "lucide-react";
import { AdSlot } from "@/components/ad-slot";
import { getQrUrl, getResource, resources } from "@/lib/resources";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return resources.map((resource) => ({ slug: resource.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) return {};

  return {
    title: `${resource.name} Review and Comparison`,
    description: `${resource.name}: ${resource.tagline} Compare strengths, limits, platforms, price and public data signals.`
  };
}

export default async function ResourceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = getResource(slug);
  if (!resource) notFound();

  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:grid-cols-[0.86fr_1.14fr] lg:items-end lg:px-8">
        <div>
          <Link href="/" className="mb-8 inline-flex items-center gap-2 text-sm text-ink/62 hover:text-ink">
            <ArrowLeft size={15} />
            Back to atlas
          </Link>
          <p className="mb-3 inline-flex border border-cinnabar/30 bg-cinnabar/8 px-3 py-2 text-xs uppercase tracking-[0.24em] text-cinnabar">
            {resource.kind}
          </p>
          <h1 className="font-display text-7xl leading-none md:text-8xl">{resource.name}</h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-ink/68">{resource.tagline}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={resource.websiteUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-ink px-5 py-3 text-paper transition hover:bg-cinnabar">
              Visit official site
              <ExternalLink size={16} />
            </a>
            {resource.iosUrl && (
              <a href={resource.iosUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ink/15 bg-paper px-5 py-3 transition hover:bg-ivory">
                <Apple size={16} />
                iOS
              </a>
            )}
            {resource.androidUrl && (
              <a href={resource.androidUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ink/15 bg-paper px-5 py-3 transition hover:bg-ivory">
                <Play size={16} />
                Android
              </a>
            )}
          </div>
        </div>
        <div className="relative aspect-[16/11] overflow-hidden border border-ink/12 bg-ink shadow-editorial">
          <Image src={resource.image} alt={`${resource.name} visual`} fill priority className="object-cover" />
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 lg:grid-cols-[1fr_0.48fr] lg:px-8">
        <div className="grid gap-5 md:grid-cols-2">
          <InfoPanel title="Best for" text={resource.bestFor} />
          <InfoPanel title="Traffic note" text={resource.trafficEstimate} />
          <InfoPanel title="App data" text={`${resource.appRating} ${resource.downloads}`} />
          <InfoPanel title="Last checked" text={resource.lastChecked} />
        </div>
        <aside className="border border-ink/12 bg-paper p-6">
          <p className="mb-4 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-cinnabar">
            <ScanLine size={15} />
            QR access
          </p>
          <div className="grid place-items-center bg-ivory p-5">
            <Image src={getQrUrl(resource.websiteUrl)} alt={`${resource.name} QR code`} width={180} height={180} />
          </div>
          <p className="mt-4 text-sm leading-6 text-ink/60">Scan to open the official site or store pathway.</p>
        </aside>
      </section>

      <AdSlot id={`resource-${resource.slug}-infeed`} variant="in-feed" />

      <section className="mx-auto grid max-w-7xl gap-5 px-4 py-8 sm:px-6 md:grid-cols-2 lg:px-8">
        <ListPanel title="Core strengths" items={resource.coreStrengths} />
        <ListPanel title="Limitations" items={resource.limitations} />
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border border-ink/12 bg-paper p-6">
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-cinnabar">Sources</p>
          <div className="flex flex-wrap gap-3">
            {resource.sourceLinks.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border border-ink/12 px-3 py-2 text-sm hover:bg-ivory">
                {source.label}
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
          <p className="mt-5 text-sm leading-6 text-ink/55">Traffic source note: {resource.trafficSource}</p>
        </div>
      </section>
    </main>
  );
}

function InfoPanel({ title, text }: { title: string; text: string }) {
  return (
    <article className="border border-ink/12 bg-paper p-5">
      <p className="mb-2 text-xs uppercase tracking-[0.2em] text-ink/45">{title}</p>
      <p className="text-base leading-7 text-ink/72">{text}</p>
    </article>
  );
}

function ListPanel({ title, items }: { title: string; items: string[] }) {
  return (
    <article className="border border-ink/12 bg-paper p-6">
      <h2 className="font-display text-4xl">{title}</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="border-l-2 border-cinnabar/45 pl-3 text-sm leading-6 text-ink/70">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
}
