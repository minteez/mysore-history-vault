import { createFileRoute } from "@tanstack/react-router";
import { rulers } from "@/data/genealogy";
import { useI18n, useLocalizedMeta } from "@/i18n";

export const Route = createFileRoute("/genealogy")({
  head: () => ({
    meta: [
      { title: "Wadiyar Genealogy — Rulers of Mysore, 1399–1950" },
      {
        name: "description",
        content:
          "A succession list of the Wadiyar dynasty of Mysore from Yaduraya in 1399 to Jayachamarajendra Wadiyar in 1950, including the Hyder Ali and Tipu Sultan interregnum.",
      },
      { property: "og:title", content: "Wadiyar Genealogy — Rulers of Mysore" },
      { property: "og:description", content: "Five and a half centuries of succession in the Kingdom of Mysore." },
      { property: "og:url", content: "/genealogy" },
    ],
    links: [{ rel: "canonical", href: "/genealogy" }],
  }),
  component: Genealogy,
});

function Genealogy() {
  const { t, tc } = useI18n();
  useLocalizedMeta("meta.genealogy.title", "meta.genealogy.description");
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">{t("genealogy.eyebrow")}</p>
      <h1 className="mt-3 font-display text-5xl">{t("genealogy.title")}</h1>
      <div className="rule-gold mt-4" />
      <p className="mt-6 max-w-2xl text-muted-foreground">{t("genealogy.intro")}</p>
      <ol className="mt-12 border-l-2 border-gold/50 pl-6">
        {rulers.map((r, i) => (
          <li key={r.name} className="relative mb-8">
            <span className="absolute top-2 -left-[31px] size-4 rounded-full border-2 border-gold bg-background" />
            <p className="font-sans text-sm text-primary">{r.reign}</p>
            <h2 className="font-display text-2xl">{tc(`content.ruler.${i}.name`, r.name)}</h2>
            <p className="mt-1 text-muted-foreground">{tc(`content.ruler.${i}.note`, r.note)}</p>
            {r.house === "Interregnum" && (
              <span className="mt-2 inline-block rounded-full bg-accent px-3 py-1 font-sans text-xs text-accent-foreground">
                {t("genealogy.interregnum")}
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
