import { Globe } from "lucide-react";
import { locales, useI18n } from "@/i18n";
import type { LocaleCode } from "@/i18n";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function LanguageSelect({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <Select value={locale} onValueChange={(v) => setLocale(v as LocaleCode)}>
      <SelectTrigger
        aria-label={t("lang.select")}
        className={compact ? "h-11 w-[112px] gap-2 font-sans text-sm" : "h-11 w-[160px] gap-2 font-sans text-sm"}
      >
        <Globe className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
        <SelectValue placeholder={t("lang.label")} />
      </SelectTrigger>
      <SelectContent>
        {locales.map((l) => (
          <SelectItem key={l.code} value={l.code} className="font-sans">
            {l.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
