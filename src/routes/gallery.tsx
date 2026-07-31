import { createFileRoute } from "@tanstack/react-router";
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
  { src: hero, alt: "Amba Vilas Palace at sunset", caption: "Amba Vilas (Mysore Palace), completed 1912", credit: "Interpretive rendering" },
  { src: hoysala, alt: "Hoysala soapstone carving", caption: "Hoysala soapstone figures, 12th–13th century", credit: "Interpretive rendering" },
  { src: chamundi, alt: "Chamundeshwari temple on Chamundi Hill", caption: "Chamundeshwari temple, Chamundi Hill", credit: "Interpretive rendering" },
  { src: dasara, alt: "Dasara procession elephant with golden howdah", caption: "Jamboo Savari, Mysore Dasara", credit: "Interpretive rendering" },
  { src: srirangapatna, alt: "Ramparts of Srirangapatna beside the Kaveri", caption: "Srirangapatna fort on the Kaveri", credit: "Interpretive rendering" },
  { src: colonial, alt: "Sepia street scene of colonial-era Mysore", caption: "The city under the Commission and after, c. 1890s", credit: "Interpretive rendering" },
];

function Gallery() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">Visual archive</p>
      <h1 className="mt-3 font-display text-5xl">Historical gallery</h1>
      <div className="rule-gold mt-4" />
      <p className="mt-6 max-w-2xl text-muted-foreground">
        Illustrative plates accompanying the chapters. These are interpretive renderings, not
        archival photographs; for documentary images consult the Archaeological Survey of India and
        the Karnataka Department of Archaeology, Museums and Heritage.
      </p>
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {plates.map((p) => (
          <figure key={p.caption} className="surface-card hover-lift overflow-hidden rounded-lg">
            <div className="aspect-[4/3]">
              <img src={p.src} alt={p.alt} loading="lazy" width={1024} height={768} className="size-full object-cover" />
            </div>
            <figcaption className="p-4 font-sans text-sm">
              {p.caption}
              <span className="mt-1 block text-xs text-muted-foreground">{p.credit}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}
