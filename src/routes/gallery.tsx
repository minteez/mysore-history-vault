import { createFileRoute } from "@tanstack/react-router";
import { useI18n, useLocalizedMeta } from "@/i18n";
import hero from "@/assets/hero-mysore-palace.jpg";
import hoysala from "@/assets/gallery-hoysala.jpg";
import chamundi from "@/assets/gallery-chamundi.jpg";
import dasara from "@/assets/gallery-dasara.jpg";
import srirangapatna from "@/assets/gallery-srirangapatna.jpg";
import colonial from "@/assets/gallery-colonial.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Historical Gallery — The Complete History of Mysore" },
      {
        name: "description",
        content:
          "A visual archive of Mysuru: Amba Vilas Palace, Hoysala carving, Chamundi Hill, the Dasara procession, Srirangapatna and the colonial city.",
      },
      { property: "og:title", content: "Historical Gallery of Mysuru" },
      { property: "og:description", content: "Images of the palaces, temples, festivals and forts of Mysore." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

const plates = [
  { src: hero, alt: "Amba Vilas Palace at sunset", caption: "Amba Vilas (Mysore Palace), completed 1912" },
  { src: hoysala, alt: "Hoysala soapstone carving", caption: "Hoysala soapstone figures, 12th–13th century" },
  { src: chamundi, alt: "Chamundeshwari temple on Chamundi Hill", caption: "Chamundeshwari temple, Chamundi Hill" },
  { src: dasara, alt: "Dasara procession elephant with golden howdah", caption: "Jamboo Savari, Mysore Dasara" },
  { src: srirangapatna, alt: "Ramparts of Srirangapatna beside the Kaveri", caption: "Srirangapatna fort on the Kaveri" },
  { src: colonial, alt: "Sepia street scene of colonial-era Mysore", caption: "The city under the Commission and after, c. 1890s" },
];

function Gallery() {
  const { t, tc } = useI18n();
  useLocalizedMeta("meta.gallery.title", "meta.gallery.description");
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">{t("gallery.eyebrow")}</p>
      <h1 className="mt-3 font-display text-5xl">{t("gallery.title")}</h1>
      <div className="rule-gold mt-4" />
      <p className="mt-6 max-w-2xl text-muted-foreground">{t("gallery.intro")}</p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plates.map((p, i) => (
          <figure key={p.caption} className="surface-card hover-lift overflow-hidden rounded-lg">
            <div className="aspect-[4/3]">
              <img src={p.src} alt={tc(`content.gallery.${i}.alt`, p.alt)} loading="lazy" width={1024} height={768} className="size-full object-cover" />
            </div>
            <figcaption className="p-4 font-sans text-sm">
              {tc(`content.gallery.${i}.caption`, p.caption)}
              <span className="mt-1 block text-xs text-muted-foreground">{t("gallery.credit")}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
