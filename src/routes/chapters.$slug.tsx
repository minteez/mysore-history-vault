import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArticleBody } from "@/components/article-body";
import { chapters, getChapter } from "@/data/chapters";

export const Route = createFileRoute("/chapters/$slug")({
  loader: ({ params }) => {
    const chapter = getChapter(params.slug);
    if (!chapter) throw notFound();
    return { chapter };
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return { meta: [{ title: "Chapter unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const c = loaderData.chapter;
    const title = `${c.title} — The Complete History of Mysore`;
    return {
      meta: [
        { title },
        { name: "description", content: c.summary },
        { property: "og:title", content: title },
        { property: "og:description", content: c.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/chapters/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/chapters/${params.slug}` }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: c.title,
            description: c.summary,
            keywords: c.keywords.join(", "),
          }),
        },
      ],
    };
  },
  component: ChapterPage,
});

function ChapterPage() {
  const { chapter } = Route.useLoaderData();
  const idx = chapters.findIndex((c) => c.slug === chapter.slug);
  const prev = chapters[idx - 1];
  const next = chapters[idx + 1];

  return (
    <div className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <nav aria-label="Breadcrumb" className="font-sans text-sm text-muted-foreground">
        <Link to="/chapters" className="hover:text-foreground">
          Chapters
        </Link>
        <span className="mx-2">/</span>
        <span>{chapter.part}</span>
      </nav>

      <p className="eyebrow mt-6 text-primary">
        Chapter {chapter.number} · {chapter.period}
      </p>
      <h1 className="mt-3 font-display text-4xl sm:text-5xl">{chapter.title}</h1>
      <div className="rule-gold mt-4" />
      <p className="mt-6 text-xl leading-relaxed text-muted-foreground italic">{chapter.summary}</p>

      <ul className="mt-6 flex flex-wrap gap-2 font-sans text-xs">
        {chapter.keywords.map((k: string) => (
          <li key={k} className="rounded-full bg-accent px-3 py-1 text-accent-foreground">
            {k}
          </li>
        ))}
      </ul>

      <ArticleBody chapter={chapter} />

      <nav aria-label="Chapter navigation" className="mt-12 grid gap-4 sm:grid-cols-2">
        {prev && (
          <Link
            to="/chapters/$slug"
            params={{ slug: prev.slug }}
            className="surface-card rounded-lg p-5"
          >
            <span className="font-sans text-xs text-muted-foreground">Previous</span>
            <span className="mt-1 block font-display text-xl">{prev.title}</span>
          </Link>
        )}
        {next && (
          <Link
            to="/chapters/$slug"
            params={{ slug: next.slug }}
            className="surface-card rounded-lg p-5 sm:text-right"
          >
            <span className="font-sans text-xs text-muted-foreground">Next</span>
            <span className="mt-1 block font-display text-xl">{next.title}</span>
          </Link>
        )}
      </nav>
    </div>
  );
}
