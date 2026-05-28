import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, ExternalLink } from "lucide-react";
import type { Resource } from "@/lib/resources";

const accentClasses: Record<Resource["accent"], string> = {
  cinnabar: "text-cinnabar border-cinnabar/35 bg-cinnabar/8",
  jade: "text-jade border-jade/35 bg-jade/8",
  lapis: "text-lapis border-lapis/35 bg-lapis/8",
  brass: "text-brass border-brass/45 bg-brass/10"
};

export function ResourceCard({ resource, compact = false }: { resource: Resource; compact?: boolean }) {
  return (
    <article className="group grid overflow-hidden border border-ink/12 bg-paper shadow-sm transition hover:-translate-y-1 hover:shadow-editorial">
      {!compact && (
        <div className="relative aspect-[16/10] overflow-hidden bg-ink">
          <Image
            src={resource.image}
            alt={`${resource.name} editorial visual`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition duration-500 group-hover:scale-[1.035]"
          />
        </div>
      )}
      <div className="p-5">
        <div className="mb-4 flex items-start justify-between gap-4">
          <div>
            <p className={`mb-2 inline-flex border px-2 py-1 text-[11px] uppercase tracking-[0.2em] ${accentClasses[resource.accent]}`}>
              {resource.kind}
            </p>
            <h3 className="font-display text-3xl leading-none">{resource.name}</h3>
          </div>
          <Link href={`/resources/${resource.slug}`} aria-label={`View ${resource.name}`}>
            <ArrowUpRight className="mt-1 text-ink/45 transition group-hover:text-cinnabar" size={20} />
          </Link>
        </div>
        <p className="min-h-12 text-sm leading-6 text-ink/70">{resource.tagline}</p>
        <div className="mt-5 flex flex-wrap gap-2">
          {resource.skills.slice(0, 4).map((skill) => (
            <span key={skill} className="border border-ink/10 bg-ivory px-2 py-1 text-xs text-ink/68">
              {skill}
            </span>
          ))}
        </div>
        <div className="mt-5 space-y-2 border-t border-ink/10 pt-4">
          {resource.coreStrengths.slice(0, 2).map((strength) => (
            <p key={strength} className="flex gap-2 text-sm text-ink/72">
              <CheckCircle2 className="mt-0.5 shrink-0 text-jade" size={15} />
              {strength}
            </p>
          ))}
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <Link
            href={`/resources/${resource.slug}`}
            className="inline-flex items-center gap-2 bg-ink px-3 py-2 text-sm text-paper transition hover:bg-cinnabar"
          >
            Details
            <ArrowUpRight size={15} />
          </Link>
          <a
            href={resource.websiteUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-ink/62 hover:text-ink"
          >
            Visit
            <ExternalLink size={14} />
          </a>
        </div>
      </div>
    </article>
  );
}
