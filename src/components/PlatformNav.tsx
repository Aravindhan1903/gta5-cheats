import type { Platform } from "../data/cheats";

export default function PlatformNav({ platforms }: { platforms: Platform[] }) {
  return (
    <div className="sticky top-[57px] z-30 border-b border-line bg-ink/95 backdrop-blur sm:top-[65px]">
      <nav
        aria-label="Jump to platform"
        className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-4 py-3 sm:gap-3 sm:px-6"
      >
        {platforms.map((platform) => (
          <a
            key={platform.slug}
            href={`#${platform.slug}`}
            className="keycap shrink-0 rounded-lg bg-panel-alt px-4 py-2 text-xs font-bold uppercase tracking-wider text-paper transition-colors hover:text-accent active:keycap-active sm:text-sm"
          >
            {platform.shortLabel}
          </a>
        ))}
      </nav>
    </div>
  );
}
