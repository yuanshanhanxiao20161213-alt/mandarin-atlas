type AdSlotProps = {
  id: string;
  label?: string;
  variant?: "leaderboard" | "in-feed" | "sidebar";
  className?: string;
};

const variantClasses = {
  leaderboard: "min-h-28 md:min-h-32",
  "in-feed": "min-h-40",
  sidebar: "min-h-64"
};

export function AdSlot({ id, label = "Advertisement", variant = "leaderboard", className = "" }: AdSlotProps) {
  return (
    <aside
      aria-label={label}
      data-ad-slot={id}
      data-adsense-ready="true"
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div
        className={`grid place-items-center border border-dashed border-ink/18 bg-paper/70 text-center ${variantClasses[variant]}`}
      >
        <div className="px-4 py-6">
          <p className="text-[11px] uppercase tracking-[0.24em] text-ink/42">{label}</p>
          <p className="mt-2 text-xs text-ink/45">AdSense responsive slot: {id}</p>
        </div>
      </div>
    </aside>
  );
}
