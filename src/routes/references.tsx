import { createFileRoute } from "@tanstack/react-router";
import { bibliography, editorialNote } from "@/data/sources";
import { useI18n, useLocalizedMeta } from "@/i18n";

export const Route = createFileRoute("/references")({
  head: () => ({
    meta: [
      { title: "References and Bibliography — History of Mysore" },
      {
        name: "description",
        content:
          "Full bibliography for the Mysore archive: B. L. Rice, S. Srikanta Sastri, Burton Stein, Karnataka Gazetteers, the Archaeological Survey of India and Wikipedia entry points.",
      },
      { property: "og:title", content: "References and Bibliography — History of Mysore" },
      { property: "og:description", content: "Primary sources, monographs and government records used throughout the archive." },
      { property: "og:url", content: "/references" },
    ],
    links: [{ rel: "canonical", href: "/references" }],
  }),
  component: References,
});

function References() {
  const { t, tc } = useI18n();
  useLocalizedMeta("meta.references.title", "meta.references.description");
  return (
    <div className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">{t("references.eyebrow")}</p>
      <h1 className="mt-3 font-display text-5xl">{t("references.title")}</h1>
      <div className="rule-gold mt-4" />
      <p className="mt-6 text-muted-foreground">{tc("content.editorialNote", editorialNote)}</p>

      <div className="mt-12 space-y-10">
        {bibliography.map((group) => (
          <section key={group.category}>
            <h2 className="font-display text-2xl">{tc(`content.bibliographyCategory.${group.category}`, group.category)}</h2>
            <ul className="mt-4 space-y-3 font-sans text-sm">
              {group.entries.map((e) => (
                <li key={e.text} className="surface-card rounded-md p-4 text-muted-foreground">
                  {e.text}{" "}
                  {e.url && (
                    <a
                      href={e.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-primary underline underline-offset-4"
                    >
                      {t("references.link")}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
