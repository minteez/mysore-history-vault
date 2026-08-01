import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/maps")({
  head: () => ({
    meta: [
      { title: "Interactive Maps — Historical Sites of Mysore" },
      {
        name: "description",
        content:
          "An interactive map of historic sites around Mysuru: the palace, Chamundi Hill, Srirangapatna, Somanathapura, Talakadu, Nanjangud and Shravanabelagola.",
      },
      { property: "og:title", content: "Interactive Maps of Historical Mysore" },
      { property: "og:description", content: "Locate the key monuments and battlefields of the Mysore country." },
      { property: "og:url", content: "/maps" },
    ],
    links: [{ rel: "canonical", href: "/maps" }],
  }),
  component: Maps,
});

const places = [
  { name: "Mysore Palace (Amba Vilas)", period: "1897–1912", note: "Indo-Saracenic palace by Henry Irwin.", q: "Mysore Palace, Mysuru" },
  { name: "Chamundi Hill", period: "Ancient – present", note: "Chamundeshwari temple and the 1659 Nandi.", q: "Chamundi Hills, Mysuru" },
  { name: "Srirangapatna", period: "1610–1799", note: "Island capital of Mysore; fall of Tipu Sultan, 1799.", q: "Srirangapatna, Karnataka" },
  { name: "Somanathapura", period: "1268", note: "Hoysala Chennakesava temple, UNESCO 2023.", q: "Somanathapura, Karnataka" },
  { name: "Talakadu", period: "c. 350–1116", note: "Western Ganga capital, buried in river sand.", q: "Talakadu, Karnataka" },
  { name: "Nanjangud", period: "Medieval – modern", note: "Srikanteshwara temple on the Kabini.", q: "Nanjangud, Karnataka" },
  { name: "Shravanabelagola", period: "981", note: "Gommateshwara monolith of Bahubali.", q: "Shravanabelagola, Karnataka" },
  { name: "Krishnaraja Sagar", period: "1932", note: "Kaveri reservoir and Brindavan Gardens.", q: "Krishna Raja Sagara Dam, Karnataka" },
];

function Maps() {
  const [active, setActive] = useState(places[0]!);

  return (
    <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <p className="eyebrow text-primary">Geography</p>
      <h1 className="mt-3 font-display text-5xl">Interactive maps</h1>
      <div className="rule-gold mt-4" />
      <div className="mt-10 grid gap-8 lg:grid-cols-[320px_1fr]">
        <ul className="space-y-2">
          {places.map((p) => (
            <li key={p.name}>
              <button
                onClick={() => setActive(p)}
                aria-pressed={active.name === p.name}
                className={`w-full rounded-lg border border-border p-4 text-left transition-colors ${
                  active.name === p.name ? "bg-accent text-accent-foreground" : "bg-card"
                }`}
              >
                <span className="block font-display text-xl">{p.name}</span>
                <span className="mt-1 block font-sans text-xs text-muted-foreground">{p.period}</span>
              </button>
            </li>
          ))}
        </ul>
        <div className="surface-card overflow-hidden rounded-lg">
          <iframe
            key={active.q}
            title={`Map of ${active.name}`}
            src={`https://www.google.com/maps?q=${encodeURIComponent(active.q)}&output=embed`}
            loading="lazy"
            className="h-[420px] w-full border-0 sm:h-[560px]"
          />
          <div className="p-5">
            <h2 className="font-display text-2xl">{active.name}</h2>
            <p className="mt-1 text-muted-foreground">{active.note}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
