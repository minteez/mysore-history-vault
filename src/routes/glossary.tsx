import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { glossary } from "@/data/glossary";
import { useI18n, useLocalizedMeta } from "@/i18n";

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
  const { t, tc } = useI18n();
  useLocalizedMeta("meta.glossary.title", "meta.glossary.description");
  const [q, setQ] = useState("");
  const entries = glossary.map((g) => ({
    ...g,
    label: tc(`content.glossary.${g.term}.term`, g.term),
    text: tc(`content.glossary.${g.term}.definition`, g.definition),
  }));
  const needle = q.toLowerCase();
  const list = entries.filter(
    (g) =>
      g.term.toLowerCase().includes(needle) ||
      g.label.toLowerCase().includes(needle) ||
      g.text.toLowerCase().includes(needle),
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">{t("glossary.eyebrow")}</p>
      <h1 className="mt-3 font-display text-5xl">{t("glossary.title")}</h1>
      <div className="rule-gold mt-4" />
      <label htmlFor="glossary-search" className="mt-8 block font-sans text-sm text-muted-foreground">
        {t("glossary.filterLabel")}
      </label>
      <input
        id="glossary-search"
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder={t("glossary.filterPlaceholder")}
        className="mt-2 w-full rounded-md border border-input bg-card px-4 py-3 font-sans text-sm placeholder:text-muted-foreground"
      />
      <dl className="mt-10 space-y-6">
        {list.map((g) => (
          <div key={g.term} className="surface-card rounded-lg p-6">
            <dt className="font-display text-2xl">
              {g.label}
              <span className="ml-3 align-middle font-sans text-xs text-muted-foreground uppercase">
                {tc(`content.glossaryCategory.${g.category}`, g.category)}
              </span>
            </dt>
            <dd className="mt-2 text-muted-foreground">{g.text}</dd>
          </div>
        ))}
        {list.length === 0 && <p className="text-muted-foreground">{t("glossary.empty")}</p>}
      </dl>
    </div>
  );
}
