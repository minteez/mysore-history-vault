import { useNavigate } from "@tanstack/react-router";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { chapters } from "@/data/chapters";
import { glossary } from "@/data/glossary";
import { sortedTimeline, timeline } from "@/data/timeline";
import { useI18n } from "@/i18n";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();
  const { t, tc } = useI18n();

  const go = (to: string) => {
    onOpenChange(false);
    navigate({ to });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder={t("search.placeholder")} />
      <CommandList>
        <CommandEmpty>{t("search.empty")}</CommandEmpty>
        <CommandGroup heading={t("search.chapters")}>
          {chapters.map((c) => (
            <CommandItem
              key={c.slug}
              value={`${c.title} ${tc(`content.chapter.${c.slug}.title`, "")} ${c.period} ${c.keywords.join(" ")} ${c.summary}`}
              onSelect={() => go(`/chapters/${c.slug}`)}
            >
              <span className="font-medium">{tc(`content.chapter.${c.slug}.title`, c.title)}</span>
              <span className="ml-2 text-xs text-muted-foreground">{tc(`content.chapter.${c.slug}.period`, c.period)}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading={t("search.events")}>
          {sortedTimeline.map((e) => (
            <CommandItem
              key={e.title}
              value={`${e.year} ${e.title} ${tc(`content.timeline.${timeline.indexOf(e)}.title`, "")} ${e.description}`}
              onSelect={() => go(e.chapter ? `/chapters/${e.chapter}` : "/timeline")}
            >
              <span className="w-28 shrink-0 font-sans text-xs text-muted-foreground">{e.year}</span>
              <span className="truncate">{tc(`content.timeline.${timeline.indexOf(e)}.title`, e.title)}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading={t("search.glossary")}>
          {glossary.map((g) => (
            <CommandItem
              key={g.term}
              value={`${g.term} ${tc(`content.glossary.${g.term}.term`, "")} ${g.definition}`}
              onSelect={() => go("/glossary")}
            >
              <span className="font-medium">{tc(`content.glossary.${g.term}.term`, g.term)}</span>
              <span className="ml-2 truncate text-xs text-muted-foreground">{tc(`content.glossary.${g.term}.definition`, g.definition)}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
