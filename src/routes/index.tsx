import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Landmark, Map, ScrollText } from "lucide-react";
import hero from "@/assets/hero-mysore-palace.jpg";
import galleryHoysala from "@/assets/gallery-hoysala.jpg";
import galleryDasara from "@/assets/gallery-dasara.jpg";
import gallerySrirangapatna from "@/assets/gallery-srirangapatna.jpg";
import { chapters, chaptersByPart } from "@/data/chapters";
import { sortedTimeline } from "@/data/timeline";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Complete History of Mysore — Mysuru, Karnataka" },
      {
        name: "description",
        content:
          "A research-led, illustrated history of Mysuru: geography, the Gangas, Hoysalas, Vijayanagara, the Wadiyars, Tipu Sultan, the princely state and the modern city — fully cited.",
      },
      { property: "og:title", content: "The Complete History of Mysore" },
      {
        property: "og:description",
        content:
          "Twenty-five cited chapters, a full timeline, gallery, maps, genealogy and bibliography on the history of Mysuru, Karnataka.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "The Complete History of Mysore",
          about: "History of Mysuru, Karnataka, India",
philosophy: undefined,
        }),
      },
    ],
  }),
  component: Home,
});

const quickLinks = [
  { to: "/timeline", label: "Timeline", icon: ScrollText, note: "33 dated events" },
  { to: "/gallery", label: "Historical gallery", icon: Landmark, note: "Visual archive" },
  { to: "/maps", label: "Interactive maps", icon: Map, note: "Sites & dominions" },
  { to: "/references", label: "Bibliography", icon: BookOpen, note: "Sources & footnotes" },
] as const;

function Home() {
  const featured = sortedTimeline.filter((e) =>
    ["1610", "4 May 1799", "25 March 1881", "1 November 1973"].includes(e.year),
  );

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Amba Vilas, the Mysore Palace, at sunset with Chamundi Hill behind"
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-40">
          <p className="eyebrow animate-rise text-primary">Mysuru · Karnataka · India</p>
          <h1 className="animate-rise mt-4 max-w-4xl font-display text-5xl leading-[1.05] font-semibold sm:text-7xl">
            The Complete History of <span className="text-gradient-gold">Mysore</span>
          </h1>
          <p className="animate-rise mt-6 max-w-2xl text-lg text-foreground/85 sm:text-xl">
            From Neolithic ash mounds and Ganga copper plates to Hoysala soapstone, the Wadiyar
            durbar, Tipu Sultan's rockets and the modern heritage city — twenty-five chapters, each
            with numbered footnotes and a full bibliography.
          </p>
          <div className="animate-rise mt-9 flex flex-wrap gap-3 font-sans">
            <Link
              to="/chapters"
              className="hover-lift inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              Begin reading <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium"
            >
              Explore the timeline
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="quick-nav" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 id="quick-nav" className="sr-only">
          Quick navigation
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((q) => (
            <Link
              key={q.to}
              to={q.to}
              className="surface-card hover-lift group rounded-lg p-6"
            >
              <q.icon className="size-6 text-primary" />
              <h3 className="mt-4 font-display text-xl">{q.label}</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">{q.note}</p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="featured-timeline" className="paper-grain bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow text-primary">Featured timeline</p>
          <h2 id="featured-timeline" className="mt-3 font-display text-4xl sm:text-5xl">
            Four turning points
          </h2>
          <div className="rule-gold mt-4" />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((e) => (
              <li key={e.year} className="surface-card hover-lift rounded-lg p-6">
                <p className="font-sans text-sm tracking-wide text-primary">{e.year}</p>
                <h3 className="mt-2 font-display text-2xl leading-snug">{e.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{e.description}</p>
                {e.chapter && (
                  <Link
                    to="/chapters/$slug"
                    params={{ slug: e.chapter }}
                    className="mt-4 inline-block font-sans text-sm text-primary underline underline-offset-4"
                  >
                    Read the chapter
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="periods" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="eyebrow text-primary">Historical periods</p>
        <h2 id="periods" className="mt-3 font-display text-4xl sm:text-5xl">
          Chapters by era
        </h2>
        <div className="rule-gold mt-4" />
        <div className="mt-10 space-y-12">
          {chaptersByPart.map((group) => (
            <div key={group.part}>
              <h3 className="font-sans text-sm tracking-widest text-muted-foreground uppercase">
                {group.part}
              </h3>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {group.items.map((c) => (
                  <Link
                    key={c.slug}
                    to="/chapters/$slug"
                    params={{ slug: c.slug }}
                    className="surface-card hover-lift rounded-lg p-6"
                  >
                    <p className="font-sans text-xs text-muted-foreground">
                      Chapter {c.number} · {c.period}
                    </p>
                    <h4 className="mt-2 font-display text-2xl">{c.title}</h4>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{c.summary}</p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section aria-labelledby="archive" className="bg-royal py-20 text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <p className="eyebrow opacity-80">The archive</p>
            <h2 id="archive" className="mt-3 font-display text-4xl sm:text-5xl">
              {chapters.length} chapters, every claim footnoted
            </h2>
            <p className="mt-5 max-w-lg opacity-90">
              Wikipedia is used only as a starting point. Substantive statements are anchored to
              B. L. Rice's Epigraphia Carnatica, S. Srikanta Sastri, Burton Stein, Karnataka State
              Gazetteers, the Archaeological Survey of India and Government of Karnataka records.
            </p>
            <Link
              to="/references"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-sans text-sm font-medium text-gold-foreground"
            >
              View the bibliography <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              [galleryHoysala, "Hoysala soapstone carving"],
              [galleryDasara, "Dasara procession elephant with golden howdah"],
              [gallerySrirangapatna, "Ramparts of Srirangapatna at dawn"],
            ].map(([src, alt]) => (
              <img
                key={alt}
                src={src}
                alt={alt}
                loading="lazy"
                width={1024}
                height={768}
                className="aspect-[3/4] size-full rounded-lg object-cover"
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
