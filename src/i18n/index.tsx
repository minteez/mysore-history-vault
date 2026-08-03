import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { en } from "./locales/en";
import type { Dictionary } from "./locales/en";
import { hi } from "./locales/hi";
import { kn } from "./locales/kn";

export type LocaleCode = "en" | "hi" | "kn";

export const locales: { code: LocaleCode; label: string; english: string; htmlLang: string }[] = [
  { code: "en", label: "English", english: "English", htmlLang: "en" },
  { code: "hi", label: "हिन्दी", english: "Hindi", htmlLang: "hi" },
  { code: "kn", label: "ಕನ್ನಡ", english: "Kannada", htmlLang: "kn" },
];

const dictionaries: Record<LocaleCode, Dictionary> = { en, hi, kn };

const STORAGE_KEY = "mysuru-lang";

function isLocale(value: string | null | undefined): value is LocaleCode {
  return value === "en" || value === "hi" || value === "kn";
}

function readStoredLocale(): LocaleCode | null {
  if (typeof document === "undefined") return null;
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLocale(stored)) return stored;
  } catch {
    /* storage unavailable */
  }
  const match = document.cookie.match(/(?:^|;\s*)mysuru-lang=([^;]+)/);
  if (match && isLocale(match[1])) return match[1];
  return null;
}

type I18nValue = {
  locale: LocaleCode;
  setLocale: (next: LocaleCode) => void;
  t: (key: string, params?: Record<string, string | number>) => string;
  /** Content lookup: returns the translated string, or the English source text. */
  tc: (key: string, fallback: string) => string;
};

const I18nContext = createContext<I18nValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<LocaleCode>("en");

  useEffect(() => {
    const stored = readStoredLocale();
    if (stored) setLocaleState(stored);
    else {
      const nav = window.navigator.language?.slice(0, 2);
      if (isLocale(nav)) setLocaleState(nav);
    }
  }, []);

  useEffect(() => {
    const entry = locales.find((l) => l.code === locale);
    if (typeof document !== "undefined" && entry) {
      document.documentElement.lang = entry.htmlLang;
    }
  }, [locale]);

  const setLocale = useCallback((next: LocaleCode) => {
    setLocaleState(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
    document.cookie = `${STORAGE_KEY}=${next}; path=/; max-age=31536000; SameSite=Lax`;
  }, []);

  const t = useCallback(
    (key: string, params?: Record<string, string | number>) => {
      const dict = dictionaries[locale];
      const raw = dict[key] ?? (en as Dictionary)[key] ?? key;
      if (!params) return raw;
      return raw.replace(/\{(\w+)\}/g, (m, name: string) =>
        params[name] === undefined ? m : String(params[name]),
      );
    },
    [locale],
  );

  const tc = useCallback(
    (key: string, fallback: string) => dictionaries[locale][key] ?? fallback,
    [locale],
  );

  const value = useMemo<I18nValue>(
    () => ({ locale, setLocale, t, tc }),
    [locale, setLocale, t, tc],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

/** Localized <title>/<meta description> applied on the client after hydration. */
export function useLocalizedMeta(titleKey: string, descriptionKey: string) {
  const { t, locale } = useI18n();
  useEffect(() => {
    if (typeof document === "undefined") return;
    document.title = t(titleKey);
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", t(descriptionKey));
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", t(titleKey));
    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute("content", t(descriptionKey));
  }, [t, locale, titleKey, descriptionKey]);
}
