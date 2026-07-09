import { useMemo, useState } from "react";
import PlatformNav from "../components/PlatformNav";
import Hero from "../components/Hero";
import PlatformSection from "../components/PlatformSection";
import FAQSection from "../components/FAQSection";
import { platforms } from "../data/cheats";

export default function HomePage() {
  const [query, setQuery] = useState("");

  const resultCount = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return null;
    let count = 0;
    for (const platform of platforms) {
      for (const category of platform.categories) {
        for (const cheat of category.cheats) {
          if (
            cheat.name.toLowerCase().includes(q) ||
            cheat.code.toLowerCase().includes(q) ||
            cheat.description.toLowerCase().includes(q)
          ) {
            count += 1;
          }
        }
      }
    }
    return count;
  }, [query]);

  return (
    <>
      <PlatformNav platforms={platforms} />

      <main>
        <Hero query={query} onQueryChange={setQuery} resultCount={resultCount} />

        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {platforms.map((platform) => (
            <PlatformSection key={platform.id} platform={platform} query={query} />
          ))}
        </div>

        {!query.trim() && <FAQSection />}
      </main>
    </>
  );
}
