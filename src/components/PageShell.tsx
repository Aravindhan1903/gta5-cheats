import type { ReactNode } from "react";

export default function PageShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <main className="px-4 py-12 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-2xl">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-dim">
          {eyebrow}
        </span>
        <h1 className="text-stencil mt-2 text-3xl text-paper sm:text-4xl">{title}</h1>
        <div className="prose-content mt-6 flex flex-col gap-4 text-sm leading-relaxed text-muted sm:text-[0.95rem]">
          {children}
        </div>
      </div>
    </main>
  );
}
