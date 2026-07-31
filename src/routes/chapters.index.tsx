import { createFileRoute, Link } from "@tanstack/react-router";
import { chaptersByPart } from "@/data/chapters";

export const Route = createFileRoute("/chapters/")({
  head: () => ({
    meta: [
      { title: "All Chapters — The Complete History of Mysore" },
      {
        name: "description",
        content:
          "Twenty-five cited chapters on the history of Mysuru: geography, dynasties, the Wadiyars, colonial rule, culture, architecture and the modern city.",
      },
      { property: "og:title", content: "All Chapters — The Complete History of Mysore" },
      {
        property: "og:description",
        content: "Browse the complete chapter index of the Mysore history archive.",
      },
      { property: "og:url", content: "/chapters" },
    ],
    links: [{ rel: "canonical", href: "/chapters" }],
  }),
  component: ChaptersIndex,
});

function ChaptersIndex() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">Contents</p>
      <h1 className="mt-3 font-display text-5xl">All chapters</h1>
      <div className="rule-gold mt-4" />
      <div className="mt-12 space-y-12">
        {chaptersByPart.map((group) => (
          <section key={group.part}>
            <h2 className="font-sans text-sm tracking-widest text-muted-foreground uppercase">
              {group.part}
            </h2>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {group.items.map((c) => (
                <li key={c.slug}>
                  <Link
                    to="/chapters/$slug"
                    params={{ slug: c.slug }}
                    className="surface-card hover-lift block h-full rounded-lg p-6"
                  >
                    <p className="font-sans text-xs text-muted-foreground">
                      Chapter {c.number} · {c.period}
                    </p>
                    <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{c.summary}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
