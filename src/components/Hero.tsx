export default function Hero({
  query,
  onQueryChange,
  resultCount,
}: {
  query: string;
  onQueryChange: (value: string) => void;
  resultCount: number | null;
}) {
  return (
    <section id="top" className="scroll-mt-28 px-4 pb-8 pt-10 sm:px-6 sm:pt-14">
      <div className="mx-auto max-w-3xl text-center">
        <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent-dim">
          PC · PS5 · PS4 · Xbox One · Xbox Series X/S
        </span>
        <h1 className="text-stencil mt-3 text-4xl leading-[0.95] text-paper sm:text-6xl">
          GTA 5 Cheat Codes
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
          Complete GTA V Cheat Codes for PC, PS5, PS4 & Xbox.
        </p>

        <div className="mx-auto mt-7 max-w-lg">
          <label htmlFor="cheat-search" className="sr-only">
            Search cheat codes
          </label>
          <div className="relative">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4.5 w-4.5 -translate-y-1/2 text-muted"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="2" />
              <path d="M20 20l-3.2-3.2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <input
              id="cheat-search"
              type="search"
              inputMode="search"
              autoComplete="off"
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search “invincibility”, “TOOLUP”, spawn a jet…"
              className="w-full rounded-xl border border-line bg-panel py-3.5 pl-11 pr-4 text-sm text-paper placeholder:text-muted/70 outline-none transition-colors focus:border-accent-dim sm:text-base"
            />
          </div>
          {query.trim() && (
            <p className="mt-2 text-xs text-muted">
              {resultCount === 0
                ? "No cheats match that search."
                : `${resultCount} cheat${resultCount === 1 ? "" : "s"} found across all platforms.`}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
