"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Check, Plus, X } from "lucide-react";
import type { Resource } from "@/lib/resources";

const defaultSlugs = ["hellochinese", "pleco", "du-chinese", "italki-chinese"];

export function CompareBoard({ resources }: { resources: Resource[] }) {
  const searchParams = useSearchParams();
  const initial = searchParams.get("items")?.split(",").filter(Boolean) ?? defaultSlugs;
  const [selected, setSelected] = useState<string[]>(initial.slice(0, 4));

  const selectedResources = useMemo(
    () => selected.map((slug) => resources.find((resource) => resource.slug === slug)).filter(Boolean) as Resource[],
    [resources, selected]
  );

  const rows = [
    { label: "Best for", render: (resource: Resource) => resource.bestFor },
    { label: "Level", render: (resource: Resource) => resource.levels.join(", ") },
    { label: "Skills", render: (resource: Resource) => resource.skills.join(", ") },
    { label: "Platforms", render: (resource: Resource) => resource.platforms.join(", ") },
    { label: "Price", render: (resource: Resource) => resource.priceModel },
    { label: "Traffic note", render: (resource: Resource) => resource.trafficEstimate },
    { label: "App data", render: (resource: Resource) => `${resource.appRating} ${resource.downloads}` },
    { label: "Limits", render: (resource: Resource) => resource.limitations.join("; ") }
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-8 grid gap-4 lg:grid-cols-[0.85fr_1.15fr]">
        <div>
          <p className="mb-2 text-xs uppercase tracking-[0.24em] text-cinnabar">Comparison board</p>
          <h1 className="font-display text-6xl leading-none md:text-7xl">Compare the short list.</h1>
        </div>
        <div className="flex flex-wrap gap-2 self-end">
          {resources.map((resource) => {
            const active = selected.includes(resource.slug);
            const disabled = !active && selected.length >= 4;
            return (
              <button
                key={resource.slug}
                disabled={disabled}
                onClick={() => {
                  if (active) setSelected(selected.filter((slug) => slug !== resource.slug));
                  else setSelected([...selected, resource.slug]);
                }}
                className={`inline-flex items-center gap-2 border px-3 py-2 text-sm transition disabled:cursor-not-allowed disabled:opacity-35 ${
                  active ? "border-ink bg-ink text-paper" : "border-ink/12 bg-paper text-ink/68 hover:border-ink/40"
                }`}
              >
                {active ? <X size={14} /> : <Plus size={14} />}
                {resource.name}
              </button>
            );
          })}
        </div>
      </div>

      <div className="overflow-x-auto border border-ink/12 bg-paper">
        <table className="min-w-[900px] w-full border-collapse text-left">
          <thead>
            <tr>
              <th className="w-44 border-b border-r border-ink/10 bg-ivory p-4 text-xs uppercase tracking-[0.2em] text-ink/45">
                Criteria
              </th>
              {selectedResources.map((resource) => (
                <th key={resource.slug} className="border-b border-r border-ink/10 p-4 align-top">
                  <p className="mb-1 text-xs uppercase tracking-[0.18em] text-cinnabar">{resource.kind}</p>
                  <p className="font-display text-3xl leading-none">{resource.name}</p>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label}>
                <th className="border-r border-t border-ink/10 bg-ivory p-4 text-sm font-medium text-ink/75">
                  {row.label}
                </th>
                {selectedResources.map((resource) => (
                  <td key={`${resource.slug}-${row.label}`} className="border-r border-t border-ink/10 p-4 text-sm leading-6 text-ink/70">
                    {row.render(resource)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-4 flex gap-2 text-sm text-ink/56">
        <Check className="mt-0.5 shrink-0 text-jade" size={15} />
        Data is intentionally labeled as public or third-party estimate. Recheck live store pages before final commercial use.
      </p>
    </section>
  );
}
