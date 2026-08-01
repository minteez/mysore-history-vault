/**
 * English is the source dictionary. Every other locale file must export the
 * same key set (missing keys fall back to English automatically).
 *
 * Long-form chapter prose lives in `src/data/*` and is served in English;
 * translated locales override every short string (titles, summaries, UI,
 * captions, quiz, glossary, metadata) through the keys below.
 */
export const en = {
  // ---- Site identity -------------------------------------------------
  "site.title": "The Complete History of Mysore",
  "site.tagline": "Mysuru · Karnataka · An illustrated archive",

  // ---- Navigation ----------------------------------------------------
  "nav.chapters": "Chapters",
  "nav.timeline": "Timeline",
  "nav.gallery": "Gallery",
  "nav.maps": "Maps",
  "nav.genealogy": "Genealogy",
  "nav.glossary": "Glossary",
  "nav.quiz": "Quiz",
  "nav.references": "References",
  "header.navigate": "Navigate",

  // ---- Accessibility labels -----------------------------------------
  "a11y.skip": "Skip to content",
  "a11y.primaryNav": "Primary",
  "a11y.mobileNav": "Mobile",
  "a11y.footerNav": "Footer sections",
  "a11y.breadcrumb": "Breadcrumb",
  "a11y.chapterNav": "Chapter navigation",
  "a11y.search": "Search the archive",
  "a11y.openMenu": "Open navigation menu",
  "a11y.themeLight": "Switch to light theme",
  "a11y.themeDark": "Switch to dark theme",
  "a11y.footnote": "Footnote {n}",
  "a11y.mapOf": "Map of {name}",

  // ---- Language selector ---------------------------------------------
  "lang.label": "Language",
  "lang.select": "Select a language",

  // ---- Search ---------------------------------------------------------
  "search.placeholder": "Search chapters, events, glossary…",
  "search.empty": "No matching entry in the archive.",
  "search.chapters": "Chapters",
  "search.events": "Timeline events",
  "search.glossary": "Glossary",

  // ---- Home -----------------------------------------------------------
  "home.eyebrow": "Mysuru · Karnataka · India",
  "home.titlePre": "The Complete History of",
  "home.titleHighlight": "Mysore",
  "home.lede":
    "From Neolithic ash mounds and Ganga copper plates to Hoysala soapstone, the Wadiyar durbar, Tipu Sultan's rockets and the modern heritage city — twenty-five chapters, each with numbered footnotes and a full bibliography.",
  "home.ctaRead": "Begin reading",
  "home.ctaTimeline": "Explore the timeline",
  "home.quickNav": "Quick navigation",
  "home.quick.timeline": "Timeline",
  "home.quick.timelineNote": "33 dated events",
  "home.quick.gallery": "Historical gallery",
  "home.quick.galleryNote": "Visual archive",
  "home.quick.maps": "Interactive maps",
  "home.quick.mapsNote": "Sites & dominions",
  "home.quick.bibliography": "Bibliography",
  "home.quick.bibliographyNote": "Sources & footnotes",
  "home.featuredEyebrow": "Featured timeline",
  "home.featuredTitle": "Four turning points",
  "home.readChapter": "Read the chapter",
  "home.periodsEyebrow": "Historical periods",
  "home.periodsTitle": "Chapters by era",
  "home.archiveEyebrow": "The archive",
  "home.archiveTitle": "{count} chapters, every claim footnoted",
  "home.archiveBody":
    "Wikipedia is used only as a starting point. Substantive statements are anchored to B. L. Rice's Epigraphia Carnatica, S. Srikanta Sastri, Burton Stein, Karnataka State Gazetteers, the Archaeological Survey of India and Government of Karnataka records.",
  "home.archiveCta": "View the bibliography",
  "home.alt.hero": "Amba Vilas, the Mysore Palace, at sunset with Chamundi Hill behind",
  "home.alt.hoysala": "Hoysala soapstone carving",
  "home.alt.dasara": "Dasara procession elephant with golden howdah",
  "home.alt.srirangapatna": "Ramparts of Srirangapatna at dawn",

  // ---- Chapters --------------------------------------------------------
  "chapters.eyebrow": "Contents",
  "chapters.title": "All chapters",
  "chapters.cardMeta": "Chapter {n} · {period}",
  "chapter.meta": "Chapter {n} · {period}",
  "chapter.references": "References and footnotes",
  "chapter.previous": "Previous",
  "chapter.next": "Next",
  "chapter.link": "Link",
  "chapter.translationNotice":
    "Chapter headings, summaries and the interface are translated. The full scholarly text and citations are presented in English to preserve the wording of the cited sources.",

  // ---- Timeline ---------------------------------------------------------
  "timeline.eyebrow": "Chronology",
  "timeline.title": "Timeline",
  "timeline.all": "All",
  "timeline.readMore": "Read more",

  // ---- Gallery -----------------------------------------------------------
  "gallery.eyebrow": "Visual archive",
  "gallery.title": "Historical gallery",
  "gallery.intro":
    "Illustrative plates accompanying the chapters. These are interpretive renderings, not archival photographs; for documentary images consult the Archaeological Survey of India and the Karnataka Department of Archaeology, Museums and Heritage.",
  "gallery.credit": "Interpretive rendering",

  // ---- Glossary ------------------------------------------------------------
  "glossary.eyebrow": "Reference",
  "glossary.title": "Glossary",
  "glossary.filterLabel": "Filter terms",
  "glossary.filterPlaceholder": "e.g. dewan, gopura, ryotwari",
  "glossary.empty": "No terms match that filter.",

  // ---- Quiz -----------------------------------------------------------------
  "quiz.eyebrow": "Learning",
  "quiz.title": "Knowledge quiz",
  "quiz.progress": "Answered {answered} of {total} · Score {score}",

  // ---- Genealogy -------------------------------------------------------------
  "genealogy.eyebrow": "Succession",
  "genealogy.title": "Wadiyar genealogy",
  "genealogy.intro":
    "A summary succession list. Early reigns before the sixteenth century rest largely on dynastic tradition; dates thereafter follow the Mysore Gazetteer and standard reference works.",
  "genealogy.interregnum": "Non-dynastic rule",

  // ---- Maps --------------------------------------------------------------------
  "maps.eyebrow": "Geography",
  "maps.title": "Interactive maps",

  // ---- References ----------------------------------------------------------------
  "references.eyebrow": "Sourcing",
  "references.title": "References and bibliography",
  "references.link": "Link",

  // ---- Footer -----------------------------------------------------------------------
  "footer.about":
    "An open, citation-led archive of the land, dynasties, culture and institutions of Mysuru, Karnataka — from Neolithic ash mounds to the modern city.",
  "footer.sections": "Sections",
  "footer.link.chapters": "All chapters",
  "footer.link.timeline": "Timeline",
  "footer.link.gallery": "Historical gallery",
  "footer.link.maps": "Interactive maps",
  "footer.link.genealogy": "Wadiyar genealogy",
  "footer.link.glossary": "Glossary",
  "footer.link.quiz": "Knowledge quiz",
  "footer.link.references": "References & bibliography",
  "footer.sourcing": "Sourcing",
  "footer.sourcingBody":
    "Built on Wikipedia as a starting point, paired with B. L. Rice, S. Srikanta Sastri, Burton Stein, Karnataka State Gazetteers, the Archaeological Survey of India and Government of Karnataka resources. Every chapter carries numbered footnotes.",
  "footer.note": "Educational, non-commercial project. Illustrations are interpretive renderings.",
  "footer.copyright": "© 2026 The Complete History of Mysore. All rights reserved.",
  "footer.creditsPre": "Designed and developed by",
  "footer.creditsPost":
    "in collaboration with Lovable. This website is an educational and research-focused digital archive dedicated to preserving and sharing the rich history, culture, and heritage of Mysore through reliable historical sources and scholarly references.",
  "footer.developer": "About the Developer",

  // ---- Errors ------------------------------------------------------------------------
  "notFound.body": "This page is not part of the archive.",
  "notFound.home": "Return to the homepage",
  "error.title": "This page didn't load",
  "error.retry": "Try again",

  // ---- Metadata -------------------------------------------------------------------------
  "meta.home.title": "The Complete History of Mysore — Mysuru, Karnataka",
  "meta.home.description":
    "A research-led, illustrated history of Mysuru: geography, the Gangas, Hoysalas, Vijayanagara, the Wadiyars, Tipu Sultan, the princely state and the modern city — fully cited.",
  "meta.chapters.title": "All Chapters — The Complete History of Mysore",
  "meta.chapters.description":
    "Twenty-five cited chapters on the history of Mysuru: geography, dynasties, the Wadiyars, colonial rule, culture, architecture and the modern city.",
  "meta.timeline.title": "Timeline of Mysore — 3000 BCE to today",
  "meta.timeline.description":
    "A dated timeline of Mysuru's history: Neolithic settlement, the Gangas, Hoysalas, Vijayanagara, the Wadiyars, Tipu Sultan, the Rendition, unification and the modern city.",
  "meta.gallery.title": "Historical Gallery — The Complete History of Mysore",
  "meta.gallery.description":
    "A visual archive of Mysuru: Amba Vilas Palace, Hoysala carving, Chamundi Hill, the Dasara procession, Srirangapatna and the colonial city.",
  "meta.maps.title": "Interactive Maps — Historical Sites of Mysore",
  "meta.maps.description":
    "An interactive map of historic sites around Mysuru: the palace, Chamundi Hill, Srirangapatna, Somanathapura, Talakadu, Nanjangud and Shravanabelagola.",
  "meta.genealogy.title": "Wadiyar Genealogy — Rulers of Mysore, 1399–1950",
  "meta.genealogy.description":
    "A succession list of the Wadiyar dynasty of Mysore from Yaduraya in 1399 to Jayachamarajendra Wadiyar in 1950, including the Hyder Ali and Tipu Sultan interregnum.",
  "meta.glossary.title": "Glossary of Mysore History Terms",
  "meta.glossary.description":
    "Definitions of terms used across the Mysore archive: dalavayi, dewan, gangavadi, jagati, nada habba, ryotwari, vachana and more.",
  "meta.quiz.title": "Mysore History Quiz — Test Your Knowledge",
  "meta.quiz.description":
    "Ten questions on the history of Mysuru, from the Western Gangas and Hoysalas to Tipu Sultan, the Rendition and the renaming of Karnataka.",
  "meta.references.title": "References and Bibliography — The Complete History of Mysore",
  "meta.references.description":
    "The full bibliography behind the archive: epigraphy, gazetteers, academic histories and government sources.",
};

export type Dictionary = Record<keyof typeof en | (string & {}), string>;
