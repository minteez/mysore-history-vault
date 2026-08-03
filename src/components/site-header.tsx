import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, Moon, Search, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { SearchDialog } from "./search-dialog";
import { LanguageSelect } from "./language-select";
import { useI18n } from "@/i18n";

const nav = [
  { to: "/chapters", key: "nav.chapters" },
  { to: "/timeline", key: "nav.timeline" },
  { to: "/gallery", key: "nav.gallery" },
  { to: "/maps", key: "nav.maps" },
  { to: "/genealogy", key: "nav.genealogy" },
  { to: "/glossary", key: "nav.glossary" },
  { to: "/quiz", key: "nav.quiz" },
  { to: "/references", key: "nav.references" },
] as const;

function ThemeToggle() {
  const { t } = useI18n();
  const [dark, setDark] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem("mysuru-theme");
    const prefers = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const next = stored ? stored === "dark" : prefers;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    window.localStorage.setItem("mysuru-theme", next ? "dark" : "light");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggle}
      aria-label={dark ? t("a11y.themeLight") : t("a11y.themeDark")}
      className="min-h-11 min-w-11"
    >
      {dark ? <Moon className="size-4" /> : <Sun className="size-4" />}
    </Button>
  );
}

export function SiteHeader() {
  const { t } = useI18n();
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3 sm:px-6">
        <Link to="/" className="flex min-w-0 items-center gap-3">
          <span className="grid size-10 shrink-0 place-items-center rounded-full bg-royal font-display text-lg text-primary-foreground">
            ಮ
          </span>
          <span className="min-w-0">
            <span className="block truncate font-display text-lg leading-tight font-semibold sm:text-xl">
              {t("site.title")}
            </span>
            <span className="eyebrow hidden text-muted-foreground sm:block">
              {t("site.tagline")}
            </span>
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <nav aria-label={t("a11y.primaryNav")} className="hidden items-center gap-1 xl:flex">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-md px-3 py-2 font-sans text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground data-[status=active]:text-foreground"
                activeProps={{ className: "text-foreground font-medium" }}
              >
                {t(item.key)}
              </Link>
            ))}
          </nav>

          <Button
            variant="ghost"
            size="icon"
            aria-label={t("a11y.search")}
            className="min-h-11 min-w-11"
            onClick={() => setSearchOpen(true)}
          >
            <Search className="size-4" />
          </Button>
          <ThemeToggle />
          <div className="hidden sm:block">
            <LanguageSelect compact />
          </div>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                aria-label={t("a11y.openMenu")}
                className="min-h-11 min-w-11 xl:hidden"
              >
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetTitle className="font-display text-xl">{t("header.navigate")}</SheetTitle>
              <nav aria-label={t("a11y.mobileNav")} className="mt-6 flex flex-col gap-1">
                {nav.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    className={`rounded-md px-3 py-3 font-sans text-sm ${
                      pathname === item.to ? "bg-accent text-accent-foreground" : "text-foreground"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                ))}
              </nav>
              <div className="mt-6 sm:hidden">
                <p className="eyebrow mb-2 text-muted-foreground">{t("lang.label")}</p>
                <LanguageSelect />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <SearchDialog open={searchOpen} onOpenChange={setSearchOpen} />
    </header>
  );
}
