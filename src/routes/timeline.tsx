import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { eras, sortedTimeline } from "@/data/timeline";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Timeline of Mysore — 3000 BCE to today" },
      {
        name: "description",
        content:
          "A dated timeline of Mysuru's history: Neolithic settlement, the Gangas, Hoysalas, Vijayanagara, the Wadiyars, Tipu Sultan, the Rendition, unification and the modern city.",
      },
      { property: "og:title", content: "Timeline of Mysore" },
      { property: "og:description", content: "Every turning point in the history of Mysuru, dated and cited." },
      { property: "og:url", content: "/timeline" },
    ],
    links: [{ rel: "canonical", href: "/timeline" }],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  const [era, setEra] = useState<string>("All");
  const events = era === "All" ? sortedTimeline : sortedTimeline.filter((e) => e.era === era);

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">Chronology</p>
      <h1 className="mt-3 font-display text-5xl">Timeline</h1>
      <div className="rule-gold mt-4" />

      <div className="mt-8 flex flex-wrap gap-2 font-sans text-sm">
        {["All", ...eras].map((e) => (
          <button
            key={e}
            onClick={() => setEra(e)}
            aria-pressed={era === e}
            className={`min-h-11 rounded-full border border-border px-4 ${
              era === e ? "bg-primary text-primary-foreground" : "bg-card text-muted-foreground"
            }`}
          >
            {e}
          </button>
        ))}
      </div>

      <ol className="mt-12 border-l border-border pl-6">
        {events.map((e) => (
          <li key={e.title} className="relative mb-10 animate-rise">
            <span className="absolute top-2 -left-[31px] size-3 rounded-full bg-gold ring-4 ring-background" />
            <p className="font-sans text-sm tracking-wide text-primary">{e.year}</p>
            <h2 className="mt-1 font-display text-2xl">{e.title}</h2>
            <p className="mt-2 text-muted-foreground">{e.description}</p>
            {e.chapter && (
              <Link
                to="/chapters/$slug"
                params={{ slug: e.chapter }}
                className="mt-2 inline-block font-sans text-sm text-primary underline underline-offset-4"
              >
                Read more
              </Link>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
