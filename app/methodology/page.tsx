import type { Metadata } from "next";
import { BarChart3, CalendarCheck, ExternalLink, ShieldCheck } from "lucide-react";
import { EditorialImage } from "@/components/editorial-image";

export const metadata: Metadata = {
  title: "Data Methodology",
  description: "How Mandarin Atlas evaluates Chinese learning apps and websites using public data, source links and editorial criteria."
};

export default function MethodologyPage() {
  return (
    <main>
      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:px-8">
        <div>
          <p className="mb-4 text-xs uppercase tracking-[0.24em] text-cinnabar">Methodology</p>
          <h1 className="font-display text-7xl leading-none md:text-8xl">How the atlas reads the market.</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-ink/68">
            Mandarin Atlas treats traffic, ratings and downloads as signals, not absolute truth. Every resource profile
            keeps source links and a last-checked date visible.
          </p>
        </div>
        <EditorialImage src="/images/ai/methodology-data.png" alt="Mandarin Atlas data methodology visual" className="aspect-[16/10]" priority />
      </section>
      <section className="mx-auto grid max-w-7xl gap-4 px-4 py-10 sm:px-6 md:grid-cols-3 lg:px-8">
        {[
          {
            icon: ExternalLink,
            title: "Official first",
            text: "Profiles prioritize official websites, App Store pages, Google Play pages and official category pages."
          },
          {
            icon: BarChart3,
            title: "Traffic as estimate",
            text: "Website traffic is framed as third-party directional data, not an official metric or guaranteed ranking."
          },
          {
            icon: CalendarCheck,
            title: "Dates matter",
            text: "Every public-data field carries a last-checked date so updates can be audited."
          }
        ].map((item) => (
          <article key={item.title} className="border border-ink/12 bg-paper p-6">
            <item.icon className="mb-6 text-cinnabar" size={24} />
            <h2 className="font-display text-4xl">{item.title}</h2>
            <p className="mt-3 text-sm leading-6 text-ink/68">{item.text}</p>
          </article>
        ))}
      </section>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="border border-ink/12 bg-paper p-6 md:p-8">
          <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-cinnabar">
            <ShieldCheck size={15} />
            Publishing rule
          </p>
          <h2 className="font-display text-5xl leading-none">Do not hide uncertainty.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-ink/68">
            If an app store rating, install count, ranking or website-traffic figure cannot be verified reliably, the
            product should say so plainly. The goal is to help learners choose, not to manufacture false precision.
          </p>
        </div>
      </section>
    </main>
  );
}
