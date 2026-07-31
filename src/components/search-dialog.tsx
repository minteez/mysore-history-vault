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
import { sortedTimeline } from "@/data/timeline";

export function SearchDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const navigate = useNavigate();

  const go = (to: string) => {
    onOpenChange(false);
    navigate({ to });
  };

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search chapters, events, glossary…" />
      <CommandList>
        <CommandEmpty>No matching entry in the archive.</CommandEmpty>
        <CommandGroup heading="Chapters">
          {chapters.map((c) => (
            <CommandItem
              key={c.slug}
              value={`${c.title} ${c.period} ${c.keywords.join(" ")} ${c.summary}`}
              onSelect={() => go(`/chapters/${c.slug}`)}
            >
              <span className="font-medium">{c.title}</span>
              <span className="ml-2 text-xs text-muted-foreground">{c.period}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Timeline events">
          {sortedTimeline.map((e) => (
            <CommandItem
              key={e.title}
              value={`${e.year} ${e.title} ${e.description}`}
              onSelect={() => go(e.chapter ? `/chapters/${e.chapter}` : "/timeline")}
            >
              <span className="w-28 shrink-0 font-sans text-xs text-muted-foreground">{e.year}</span>
              <span className="truncate">{e.title}</span>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Glossary">
          {glossary.map((g) => (
            <CommandItem
              key={g.term}
              value={`${g.term} ${g.definition}`}
              onSelect={() => go("/glossary")}
            >
              <span className="font-medium">{g.term}</span>
              <span className="ml-2 truncate text-xs text-muted-foreground">{g.definition}</span>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
