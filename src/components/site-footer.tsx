import { Link } from "@tanstack/react-router";
import { useI18n } from "@/i18n";
import { LanguageSelect } from "./language-select";

const links = [
  ["/chapters", "footer.link.chapters"],
  ["/timeline", "footer.link.timeline"],
  ["/gallery", "footer.link.gallery"],
  ["/maps", "footer.link.maps"],
  ["/genealogy", "footer.link.genealogy"],
  ["/glossary", "footer.link.glossary"],
  ["/quiz", "footer.link.quiz"],
  ["/references", "footer.link.references"],
] as const;

export function SiteFooter() {
  const { t } = useI18n();

  return (
    <footer className="mt-24 border-t border-border bg-parchment">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-3">
        <div>
          <h2 className="font-display text-2xl">{t("site.title")}</h2>
          <div className="rule-gold mt-3" />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{t("footer.about")}</p>
          <div className="mt-6">
            <p className="eyebrow mb-2 text-muted-foreground">{t("lang.label")}</p>
            <LanguageSelect />
          </div>
        </div>
        <nav aria-label={t("a11y.footerNav")} className="font-sans text-sm">
          <h3 className="eyebrow text-muted-foreground">{t("footer.sections")}</h3>
          <ul className="mt-4 space-y-2">
            {links.map(([to, key]) => (
              <li key={to}>
                <Link to={to} className="text-muted-foreground transition-colors hover:text-foreground">
                  {t(key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="font-sans text-sm">
          <h3 className="eyebrow text-muted-foreground">{t("footer.sourcing")}</h3>
          <p className="mt-4 text-sm text-muted-foreground">{t("footer.sourcingBody")}</p>
          <p className="mt-6 text-xs text-muted-foreground">{t("footer.note")}</p>
        </div>
      </div>
      <div className="border-t border-border bg-parchment">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-6 text-center sm:flex-row sm:px-6 sm:text-left">
          <p className="text-xs text-muted-foreground">{t("footer.copyright")}</p>
          <p className="max-w-2xl text-xs text-muted-foreground">
            {t("footer.creditsPre")}{" "}
            Minteez{" "}
            {t("footer.creditsPost")}{" "}
            <a
              href="https://minteez.lovable.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline underline-offset-2"
            >
              {t("footer.developer")}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
