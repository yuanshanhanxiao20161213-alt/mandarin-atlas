"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, SlidersHorizontal, X } from "lucide-react";
import { ResourceCard } from "@/components/resource-card";
import type { Level, Platform, PriceModel, Resource, Skill } from "@/lib/resources";

const levels: Level[] = ["Beginner", "Intermediate", "Advanced"];
const skills: Skill[] = ["Speaking", "Listening", "Reading", "Writing", "Characters", "HSK Prep", "Dictionary", "Tutoring"];
const platforms: Platform[] = ["Web", "iOS", "Android"];
const prices: PriceModel[] = ["Free", "Freemium", "Paid", "Marketplace"];

function toggleItem<T>(current: T[], item: T) {
  return current.includes(item) ? current.filter((value) => value !== item) : [...current, item];
}

export function ResourceExplorer({ resources, title = "Find your best fit" }: { resources: Resource[]; title?: string }) {
  const [query, setQuery] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<Level[]>(["Beginner"]);
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [selectedPlatforms, setSelectedPlatforms] = useState<Platform[]>([]);
  const [selectedPrices, setSelectedPrices] = useState<PriceModel[]>([]);
  const [compare, setCompare] = useState<string[]>([]);

  const filtered = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    return resources
      .map((resource) => {
        const score =
          selectedLevels.filter((level) => resource.levels.includes(level)).length * 3 +
          selectedSkills.filter((skill) => resource.skills.includes(skill)).length * 4 +
          selectedPlatforms.filter((platform) => resource.platforms.includes(platform)).length * 2 +
          selectedPrices.filter((price) => resource.priceModel === price).length * 2;
        return { resource, score };
      })
      .filter(({ resource, score }) => {
        const textMatch =
          !normalized ||
          `${resource.name} ${resource.tagline} ${resource.bestFor} ${resource.skills.join(" ")}`
            .toLowerCase()
            .includes(normalized);
        const levelMatch = selectedLevels.length === 0 || selectedLevels.some((level) => resource.levels.includes(level));
        const skillMatch = selectedSkills.length === 0 || selectedSkills.some((skill) => resource.skills.includes(skill));
        const platformMatch =
          selectedPlatforms.length === 0 || selectedPlatforms.some((platform) => resource.platforms.includes(platform));
        const priceMatch = selectedPrices.length === 0 || selectedPrices.includes(resource.priceModel);
        return textMatch && levelMatch && skillMatch && platformMatch && priceMatch && score >= 0;
      })
      .sort((a, b) => b.score - a.score || a.resource.name.localeCompare(b.resource.name))
      .map(({ resource }) => resource);
  }, [query, resources, selectedLevels, selectedPlatforms, selectedPrices, selectedSkills]);

  const compareHref = compare.length ? `/compare?items=${compare.join(",")}` : "/compare";

  return (
    <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-6 grid gap-5 border-y border-ink/12 py-5 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-cinnabar">
            <SlidersHorizontal size={15} />
            Interactive atlas
          </p>
          <h2 className="font-display text-5xl leading-none md:text-6xl">{title}</h2>
        </div>
        <div className="grid gap-4">
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search by name, skill, learning goal..."
            className="w-full border border-ink/15 bg-paper px-4 py-3 text-base outline-none transition placeholder:text-ink/38 focus:border-cinnabar"
          />
          <FilterRow label="Level" values={levels} selected={selectedLevels} onToggle={(value) => setSelectedLevels(toggleItem(selectedLevels, value))} />
          <FilterRow label="Skill" values={skills} selected={selectedSkills} onToggle={(value) => setSelectedSkills(toggleItem(selectedSkills, value))} />
          <FilterRow
            label="Platform"
            values={platforms}
            selected={selectedPlatforms}
            onToggle={(value) => setSelectedPlatforms(toggleItem(selectedPlatforms, value))}
          />
          <FilterRow label="Price" values={prices} selected={selectedPrices} onToggle={(value) => setSelectedPrices(toggleItem(selectedPrices, value))} />
        </div>
      </div>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <p className="text-sm text-ink/62">
          Showing <strong className="text-ink">{filtered.length}</strong> resources. Select up to four to compare.
        </p>
        <Link
          href={compareHref}
          className="inline-flex items-center gap-2 border border-ink/15 bg-paper px-3 py-2 text-sm transition hover:bg-ink hover:text-paper"
        >
          Compare {compare.length ? compare.length : "top picks"}
          <ArrowRight size={15} />
        </Link>
      </div>

      {compare.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          {compare.map((slug) => {
            const resource = resources.find((item) => item.slug === slug);
            if (!resource) return null;
            return (
              <button
                key={slug}
                onClick={() => setCompare(compare.filter((item) => item !== slug))}
                className="inline-flex items-center gap-2 bg-ink px-3 py-2 text-sm text-paper"
              >
                {resource.name}
                <X size={14} />
              </button>
            );
          })}
        </div>
      )}

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filtered.map((resource) => {
          const selected = compare.includes(resource.slug);
          return (
            <div key={resource.slug} className="relative">
              <button
                onClick={() => {
                  if (selected) {
                    setCompare(compare.filter((item) => item !== resource.slug));
                  } else if (compare.length < 4) {
                    setCompare([...compare, resource.slug]);
                  }
                }}
                className={`absolute right-3 top-3 z-10 border px-3 py-2 text-xs uppercase tracking-[0.16em] backdrop-blur ${
                  selected ? "border-ink bg-ink text-paper" : "border-paper/70 bg-paper/90 text-ink"
                }`}
              >
                {selected ? "Selected" : "Compare"}
              </button>
              <ResourceCard resource={resource} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

function FilterRow<T extends string>({
  label,
  values,
  selected,
  onToggle
}: {
  label: string;
  values: T[];
  selected: T[];
  onToggle: (value: T) => void;
}) {
  return (
    <div className="grid gap-2 md:grid-cols-[6rem_1fr] md:items-start">
      <span className="text-xs uppercase tracking-[0.2em] text-ink/45">{label}</span>
      <div className="flex flex-wrap gap-2">
        {values.map((value) => {
          const active = selected.includes(value);
          return (
            <button
              key={value}
              onClick={() => onToggle(value)}
              className={`border px-3 py-1.5 text-sm transition ${
                active ? "border-ink bg-ink text-paper" : "border-ink/12 bg-paper text-ink/68 hover:border-ink/40"
              }`}
            >
              {value}
            </button>
          );
        })}
      </div>
    </div>
  );
}
