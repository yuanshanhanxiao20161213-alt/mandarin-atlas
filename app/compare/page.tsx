import { Suspense } from "react";
import type { Metadata } from "next";
import { CompareBoard } from "@/components/compare-board";
import { resources } from "@/lib/resources";
import { itemListJsonLd } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Compare Mandarin Learning Resources",
  description: "Compare Chinese learning apps, websites, courses and tutoring platforms side by side.",
  alternates: {
    canonical: "/compare"
  }
};

export default function ComparePage() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            itemListJsonLd(
              "Compare Mandarin learning resources",
              "Chinese learning apps, websites, courses and tutoring platforms compared side by side.",
              resources
            )
          )
        }}
      />
      <section className="mx-auto max-w-7xl px-4 pt-12 sm:px-6 lg:px-8">
        <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cinnabar">Comparison board</p>
        <h1 className="font-display text-6xl leading-none md:text-7xl">Compare the short list.</h1>
      </section>
      <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-16">Loading comparison board...</div>}>
        <CompareBoard resources={resources} />
      </Suspense>
    </main>
  );
}
