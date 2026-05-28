import Image from "next/image";
import { Apple, ExternalLink, Play, ScanLine } from "lucide-react";
import { appResources, getQrUrl } from "@/lib/resources";

export function DownloadMatrix() {
  const apps = appResources();

  return (
    <section id="download" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-8 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <p className="mb-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-cinnabar">
            <ScanLine size={15} />
            Scan and install
          </p>
          <h2 className="font-display text-5xl leading-none md:text-6xl">Mobile apps, without the hunt.</h2>
        </div>
        <p className="max-w-2xl text-lg leading-8 text-ink/68">
          QR codes route to official websites or public store search pages where direct store IDs are not stable.
          On mobile, the store buttons are the fastest path.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {apps.map((app) => (
          <article key={app.slug} className="grid gap-4 border border-ink/12 bg-paper p-5 sm:grid-cols-[8.5rem_1fr]">
            <div className="hidden place-items-center bg-ivory p-3 sm:grid">
              <Image src={getQrUrl(app.websiteUrl)} alt={`${app.name} QR code`} width={132} height={132} />
            </div>
            <div>
              <p className="mb-1 text-xs uppercase tracking-[0.2em] text-ink/45">{app.priceModel}</p>
              <h3 className="font-display text-3xl">{app.name}</h3>
              <p className="mt-2 text-sm leading-6 text-ink/65">{app.bestFor}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {app.iosUrl && (
                  <a
                    href={app.iosUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 bg-ink px-3 py-2 text-sm text-paper transition hover:bg-cinnabar"
                  >
                    <Apple size={15} />
                    iOS
                  </a>
                )}
                {app.androidUrl && (
                  <a
                    href={app.androidUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 border border-ink/15 px-3 py-2 text-sm transition hover:bg-ink hover:text-paper"
                  >
                    <Play size={15} />
                    Android
                  </a>
                )}
                <a
                  href={app.websiteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 border border-ink/15 px-3 py-2 text-sm transition hover:bg-ivory"
                >
                  Site
                  <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
