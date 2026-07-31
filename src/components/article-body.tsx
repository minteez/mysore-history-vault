import type { ReactNode } from "react";
import type { Chapter } from "@/data/chapters";

/** Renders paragraph text, converting [n] markers into footnote links. */
function withFootnotes(text: string, slug: string): ReactNode[] {
  const parts = text.split(/(\[\d+\])/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[(\d+)\]$/);
    if (!match) return <span key={i}>{part}</span>;
    const n = match[1];
    return (
      <sup key={i}>
        <a
          href={`#${slug}-ref-${n}`}
          className="ml-0.5 rounded px-1 font-sans text-[0.65em] text-primary no-underline hover:bg-accent"
          aria-label={`Footnote ${n}`}
        >
          [{n}]
        </a>
      </sup>
    );
  });
}

export function ArticleBody({ chapter }: { chapter: Chapter }) {
  return (
    <article className="mt-10">
      {chapter.sections.map((section, idx) => (
        <section key={section.heading} className="mb-12 animate-rise">
          <h2 className="font-display text-2xl sm:text-3xl">
            <span className="mr-3 font-sans text-sm text-muted-foreground">
              {chapter.number}.{idx + 1}
            </span>
            {section.heading}
          </h2>
          <div className="rule-gold mt-3" />
          {section.paragraphs.map((p, i) => (
            <p key={i} className="mt-5 text-lg leading-relaxed text-foreground/90">
              {withFootnotes(p, chapter.slug)}
            </p>
          ))}
        </section>
      ))}

      <section aria-labelledby={`${chapter.slug}-references`} className="surface-card rounded-lg p-6">
        <h2 id={`${chapter.slug}-references`} className="font-display text-2xl">
          References and footnotes
        </h2>
        <div className="rule-gold mt-3" />
        <ol className="mt-5 space-y-3 font-sans text-sm">
          {chapter.references.map((ref) => (
            <li key={ref.id} id={`${chapter.slug}-ref-${ref.id}`} className="flex gap-3">
              <span className="shrink-0 text-primary">[{ref.id}]</span>
              <span className="text-muted-foreground">
                {ref.citation}{" "}
                {ref.url && (
                  <a
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-primary underline underline-offset-4"
                  >
                    Link
                  </a>
                )}
              </span>
            </li>
          ))}
        </ol>
      </section>
    </article>
  );
}
