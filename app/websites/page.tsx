import type { Metadata } from "next";
import { AdSlot } from "@/components/ad-slot";
import { EditorialImage } from "@/components/editorial-image";
import { ResourceExplorer } from "@/components/resource-explorer";
import { websiteResources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Best Websites to Learn Mandarin",
  description: "Compare Mandarin learning websites, course platforms, graded readers and tutor marketplaces."
};

export default function WebsitesPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-8">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-cinnabar">Web learning platforms</p>
          <h1 className="font-display text-7xl leading-none md:text-8xl">The best websites to learn Mandarin.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
            Compare structured courses, audio libraries, graded readers and live tutor marketplaces by learning goal.
          </p>
        </div>
        <EditorialImage src="/images/ai/websites-comparison.png" alt="Mandarin website comparison editorial visual" className="aspect-[16/10]" priority />
      </section>
      <AdSlot id="websites-leaderboard-top" variant="leaderboard" />
      <ResourceExplorer resources={websiteResources()} title="Filter web resources" />
    </main>
  );
}
