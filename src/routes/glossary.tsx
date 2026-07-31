import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { glossary } from "@/data/glossary";

export const Route = createFileRoute("/glossary")({
  head: () => ({
    meta: [
      { title: "Glossary of Mysore History Terms" },
      {
        name: "description",
        content:
          "Definitions of terms used across the Mysore archive: dalavayi, dewan, gangavadi, jagati, nada habba, ryotwari, vachana and more.",
      },
      { property: "og:title", content: "Glossary of Mysore History Terms" },
      { property: "og:description", content: "Administrative, architectural and cultural vocabulary of Mysuru's past." },
      { property: "og:url", content: "/glossary" },
    ],
    links: [{ rel: "canonical", href: "/glossary" }],
  }),
  component: GlossaryPage,
});

function GlossaryPage() {
  const [q, setQ] = useState("");
  const list = glossary.filter(
    (g) =>
      g.term.toLowerCase().includes(q.toLowerCase()) ||
      g.definition.toLowerCase().includes(q.toLowerCase()),
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">Reference</p>
      <h1 className="mt-3 font-display text-5xl">Glossary</h1>
      <div className="rule-gold mt-4" />
      <label htmlFor="glossary-search" className="mt-8 block font-sans text-sm text-muted-foreground">
        Filter terms
      </label>
      <input
        id="glossary-search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="e.g. dewan, gopura, ryotwari"
        className="mt-2 w-full rounded-md border border-input bg-card px-4 py-3 font-sans text-sm placeholder:text-muted-foreground"
      />
      <dl className="mt-10 space-y-6">
        {list.map((g) => (
          <div key={g.term} className="surface-card rounded-lg p-6">
            <dt className="font-display text-2xl">
              {g.term}
              <span className="ml-3 align-middle font-sans text-xs text-muted-foreground uppercase">
                {g.category}
              </span>
            </dt>
            <dd className="mt-2 text-muted-foreground">{g.definition}</dd>
          </div>
        ))}
        {list.length === 0 && <p className="text-muted-foreground">No terms match that filter.</p>}
      </dl>
    </div>
  );
}
