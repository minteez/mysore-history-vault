import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Landmark, Map, ScrollText } from "lucide-react";
import hero from "@/assets/hero-mysore-palace.jpg";
import galleryHoysala from "@/assets/gallery-hoysala.jpg";
import galleryDasara from "@/assets/gallery-dasara.jpg";
import gallerySrirangapatna from "@/assets/gallery-srirangapatna.jpg";
import { chapters, chaptersByPart } from "@/data/chapters";
import { sortedTimeline, timeline } from "@/data/timeline";
import { useI18n, useLocalizedMeta } from "@/i18n";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Complete History of Mysore — Mysuru, Karnataka" },
      {
        name: "description",
        content:
          "A research-led, illustrated history of Mysuru: geography, the Gangas, Hoysalas, Vijayanagara, the Wadiyars, Tipu Sultan, the princely state and the modern city — fully cited.",
      },
      { property: "og:title", content: "The Complete History of Mysore — Mysuru, Karnataka" },
      {
        property: "og:description",
        content:
          "A research-led, illustrated history of Mysuru: geography, the Gangas, Hoysalas, Vijayanagara, the Wadiyars, Tipu Sultan, the princely state and the modern city — fully cited.",
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
        }),
      },
    ],
  }),
  component: Home,
});

const quickLinks = [
  { to: "/timeline", labelKey: "home.quick.timeline", icon: ScrollText, noteKey: "home.quick.timelineNote" },
  { to: "/gallery", labelKey: "home.quick.gallery", icon: Landmark, noteKey: "home.quick.galleryNote" },
  { to: "/maps", labelKey: "home.quick.maps", icon: Map, noteKey: "home.quick.mapsNote" },
  { to: "/references", labelKey: "home.quick.bibliography", icon: BookOpen, noteKey: "home.quick.bibliographyNote" },
] as const;

function Home() {
  const { t, tc } = useI18n();
  useLocalizedMeta("meta.home.title", "meta.home.description");
  const featured = sortedTimeline.filter((e) =>
    ["1610", "4 May 1799", "25 March 1881", "1 November 1973"].includes(e.year),
  );

  return (
    <>
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt={t("home.alt.hero")}
          width={1920}
          height={1088}
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
        <div className="relative mx-auto max-w-7xl px-4 py-28 sm:px-6 sm:py-40">
          <p className="eyebrow animate-rise text-primary">{t("home.eyebrow")}</p>
          <h1 className="animate-rise mt-4 max-w-4xl font-display text-5xl leading-[1.05] font-semibold sm:text-7xl">
            {t("home.titlePre")} <span className="text-gradient-gold">{t("home.titleHighlight")}</span>
          </h1>
          <p className="animate-rise mt-6 max-w-2xl text-lg text-foreground/85 sm:text-xl">
            {t("home.lede")}
          </p>
          <div className="animate-rise mt-9 flex flex-wrap gap-3 font-sans">
            <Link
              to="/chapters"
              className="hover-lift inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground"
            >
              {t("home.ctaRead")} <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/timeline"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-6 py-3 text-sm font-medium"
            >
              {t("home.ctaTimeline")}
            </Link>
          </div>
        </div>
      </section>

      <section aria-labelledby="quick-nav" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
        <h2 id="quick-nav" className="sr-only">
          {t("home.quickNav")}
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {quickLinks.map((q) => (
            <Link
              key={q.to}
              to={q.to}
              className="surface-card hover-lift group rounded-lg p-6"
            >
              <q.icon className="size-6 text-primary" />
              <h3 className="mt-4 font-display text-xl">{t(q.labelKey)}</h3>
              <p className="mt-1 font-sans text-sm text-muted-foreground">{t(q.noteKey)}</p>
            </Link>
          ))}
        </div>
      </section>

      <section aria-labelledby="featured-timeline" className="paper-grain bg-parchment py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <p className="eyebrow text-primary">{t("home.featuredEyebrow")}</p>
          <h2 id="featured-timeline" className="mt-3 font-display text-4xl sm:text-5xl">
            {t("home.featuredTitle")}
          </h2>
          <div className="rule-gold mt-4" />
          <ol className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {featured.map((e) => (
              <li key={e.year} className="surface-card hover-lift rounded-lg p-6">
                <p className="font-sans text-sm tracking-wide text-primary">{e.year}</p>
                <h3 className="mt-2 font-display text-2xl leading-snug">{tc(`content.timeline.${timeline.indexOf(e)}.title`, e.title)}</h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  {tc(`content.timeline.${timeline.indexOf(e)}.description`, e.description)}
                </p>
                {e.chapter && (
                  <Link
                    to="/chapters/$slug"
                    params={{ slug: e.chapter }}
                    className="mt-4 inline-block font-sans text-sm text-primary underline underline-offset-4"
                  >
                    {t("home.readChapter")}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section aria-labelledby="periods" className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
        <p className="eyebrow text-primary">{t("home.periodsEyebrow")}</p>
        <h2 id="periods" className="mt-3 font-display text-4xl sm:text-5xl">
          {t("home.periodsTitle")}
        </h2>
        <div className="rule-gold mt-4" />
        <div className="mt-10 space-y-12">
          {chaptersByPart.map((group, gi) => (
            <div key={group.part}>
              <h3 className="font-sans text-sm tracking-widest text-muted-foreground uppercase">
                {tc(`content.part.${gi}`, group.part)}
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
                      {t("chapters.cardMeta", {
                        n: c.number,
                        period: tc(`content.chapter.${c.slug}.period`, c.period),
                      })}
                    </p>
                    <h4 className="mt-2 font-display text-2xl">{tc(`content.chapter.${c.slug}.title`, c.title)}</h4>
                    <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{tc(`content.chapter.${c.slug}.summary`, c.summary)}</p>
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
            <p className="eyebrow opacity-80">{t("home.archiveEyebrow")}</p>
            <h2 id="archive" className="mt-3 font-display text-4xl sm:text-5xl">
              {t("home.archiveTitle", { count: chapters.length })}
            </h2>
            <p className="mt-5 max-w-lg opacity-90">
              {t("home.archiveBody")}
            </p>
            <Link
              to="/references"
              className="mt-8 inline-flex items-center gap-2 rounded-md bg-gold px-6 py-3 font-sans text-sm font-medium text-gold-foreground"
            >
              {t("home.archiveCta")} <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-3 gap-3">
            {[
              [galleryHoysala, t("home.alt.hoysala")],
              [galleryDasara, t("home.alt.dasara")],
              [gallerySrirangapatna, t("home.alt.srirangapatna")],
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
