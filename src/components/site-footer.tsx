import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-parchment">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl">The Complete History of Mysore</h2>
          <div className="rule-gold mt-3" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">
            An open, citation-led archive of the land, dynasties, culture and institutions of
            Mysuru, Karnataka — from Neolithic ash mounds to the modern city.
          </p>
        </div>
        <nav aria-label="Footer sections" className="font-sans text-sm">
          <h3 className="eyebrow text-muted-foreground">Sections</h3>
          <ul className="mt-4 space-y-2">
            {(
              [
                ["/chapters", "All chapters"],
                ["/timeline", "Timeline"],
                ["/gallery", "Historical gallery"],
                ["/maps", "Interactive maps"],
                ["/genealogy", "Wadiyar genealogy"],
                ["/glossary", "Glossary"],
                ["/quiz", "Knowledge quiz"],
                ["/references", "References & bibliography"],
              ] as const
            ).map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="font-sans text-sm">
          <h3 className="eyebrow text-muted-foreground">Sourcing</h3>
          <p className="mt-4 text-sm text-muted-foreground">
            Built on Wikipedia as a starting point, paired with B. L. Rice, S. Srikanta Sastri,
            Burton Stein, Karnataka State Gazetteers, the Archaeological Survey of India and
            Government of Karnataka resources. Every chapter carries numbered footnotes.
          </p>
          <p className="mt-6 text-xs text-muted-foreground">
            Educational, non-commercial project. Illustrations are interpretive renderings.
          </p>
        </div>
      </div>
      <div className="border-t border-border bg-parchment">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:px-6 sm:flex-row sm:text-left">
          <p className="text-xs text-muted-foreground">
            © 2026 The Complete History of Mysore. All rights reserved.
          </p>
          <p className="max-w-2xl text-xs text-muted-foreground">
            Designed and developed by{" "}
            <a
              href="https://minteez.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-2 transition-colors hover:text-foreground"
            >
              Minteez
            </a>{" "}
            in collaboration with Lovable. This website is an educational and research-focused digital
            archive dedicated to preserving and sharing the rich history, culture, and heritage of
            Mysore through reliable historical sources and scholarly references.
          </p>
        </div>
      </div>
    </footer>
  );
}
