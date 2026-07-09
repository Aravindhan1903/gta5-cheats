import type { Category } from "../data/cheats";
import CheatCard from "./CheatCard";

export default function CategoryBlock({ category }: { category: Category }) {
  if (category.cheats.length === 0) return null;

  return (
    <div>
      <div className="mb-3 flex items-center gap-3">
        <h3 className="text-stencil text-lg tracking-wide text-paper sm:text-xl">
          {category.name}
        </h3>
        <span className="h-px flex-1 bg-line" />
        <span className="font-mono text-xs text-muted">
          {category.cheats.length.toString().padStart(2, "0")}
        </span>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {category.cheats.map((cheat) => (
          <CheatCard key={cheat.id} cheat={cheat} />
        ))}
      </div>
    </div>
  );
}
