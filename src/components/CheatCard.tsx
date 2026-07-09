import { useState } from "react";
import type { Cheat } from "../data/cheats";

export default function CheatCard({ cheat }: { cheat: Cheat }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(cheat.code);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable — fail silently, code is still selectable.
    }
  }

  return (
    <article className="group relative rounded-xl border border-line bg-panel p-4 shadow-[0_1px_0_rgba(255,255,255,0.03)_inset] transition-colors hover:border-accent-dim sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-semibold text-paper text-[0.95rem] leading-snug sm:text-base">
          {cheat.name}
        </h3>
        <button
          type="button"
          onClick={handleCopy}
          aria-label={`Copy code for ${cheat.name}`}
          className="keycap shrink-0 rounded-md bg-panel-alt px-2.5 py-1.5 text-[0.7rem] font-semibold uppercase tracking-wide text-muted transition-colors hover:text-accent active:keycap-active"
        >
          {copied ? "Copied" : "Copy"}
        </button>
      </div>

      <p className="mt-2 break-words rounded-lg bg-ink/60 px-3 py-2 font-mono text-[0.78rem] text-accent sm:text-[0.85rem]">
        {cheat.code}
      </p>

      <p className="mt-2.5 text-[0.83rem] leading-relaxed text-muted">
        {cheat.description}
      </p>
    </article>
  );
}
