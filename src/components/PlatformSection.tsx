import type { Platform } from "../data/cheats";
import CategoryBlock from "./CategoryBlock";

export default function PlatformSection({
  platform,
  query,
}: {
  platform: Platform;
  query: string;
}) {
  const q = query.trim().toLowerCase();

  const filteredCategories = platform.categories
    .map((category) => ({
      ...category,
      cheats: q
        ? category.cheats.filter(
            (cheat) =>
              cheat.name.toLowerCase().includes(q) ||
              cheat.code.toLowerCase().includes(q) ||
              cheat.description.toLowerCase().includes(q)
          )
        : category.cheats,
    }))
    .filter((category) => category.cheats.length > 0);

  const totalVisible = filteredCategories.reduce((n, c) => n + c.cheats.length, 0);

  if (q && totalVisible === 0) return null;

  return (
    <section
      id={platform.slug}
      aria-labelledby={`${platform.slug}-heading`}
      className="scroll-mt-28 border-t border-line py-12 first:border-t-0 first:pt-4 sm:py-16"
    >
      <div className="mb-8 flex flex-col gap-2 sm:mb-10">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent-dim">
          Platform
        </span>
        <h2
          id={`${platform.slug}-heading`}
          className="text-stencil text-3xl text-paper sm:text-4xl"
        >
          {platform.heading}
        </h2>
        <p className="max-w-2xl text-sm leading-relaxed text-muted sm:text-base">
          {platform.intro}
        </p>
      </div>

      <div className="flex flex-col gap-8 sm:gap-10">
        {filteredCategories.map((category) => (
          <CategoryBlock key={category.id} category={category} />
        ))}
      </div>
    </section>
  );
}
