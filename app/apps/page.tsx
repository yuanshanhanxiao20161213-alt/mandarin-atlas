import type { Metadata } from "next";
import { AdSlot } from "@/components/ad-slot";
import { DownloadMatrix } from "@/components/download-matrix";
import { EditorialImage } from "@/components/editorial-image";
import { ResourceExplorer } from "@/components/resource-explorer";
import { appResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Best Apps to Learn Chinese",
  description: "Compare mobile apps for learning Mandarin Chinese, including speaking, reading, writing and dictionary tools."
};

export default function AppsPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-8">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-cinnabar">Mobile learning apps</p>
          <h1 className="font-display text-7xl leading-none md:text-8xl">Mandarin apps worth scanning.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
            Compare iOS and Android tools for daily practice, dictionaries, graded reading, handwriting and live lessons.
          </p>
        </div>
        <EditorialImage src="/images/ai/apps-download.png" alt="Mandarin app download editorial visual" className="aspect-[16/10]" priority />
      </section>
      <AdSlot id="apps-leaderboard-top" variant="leaderboard" />
      <ResourceExplorer resources={appResources()} title="Filter mobile apps" />
      <AdSlot id="apps-infeed-before-downloads" variant="in-feed" />
      <DownloadMatrix />
    </main>
  );
}
