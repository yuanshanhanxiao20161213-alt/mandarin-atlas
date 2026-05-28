import { Suspense } from "react";
import type { Metadata } from "next";
import { CompareBoard } from "@/components/compare-board";
import { resources } from "@/lib/resources";

export const metadata: Metadata = {
  title: "Compare Mandarin Learning Resources",
  description: "Compare Chinese learning apps, websites, courses and tutoring platforms side by side."
};

export default function ComparePage() {
  return (
    <main>
      <Suspense fallback={<div className="mx-auto max-w-7xl px-4 py-16">Loading comparison board...</div>}>
        <CompareBoard resources={resources} />
      </Suspense>
    </main>
  );
}
