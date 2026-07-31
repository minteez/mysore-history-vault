export type Bibliography = {
  category: string;
  entries: { text: string; url?: string }[];
};

export const bibliography: Bibliography[] = [
  {
    category: "Primary sources and epigraphy",
    entries: [
      {
        text: "B. L. Rice, Epigraphia Carnatica, 12 vols., Mysore Government Central Press, 1886–1904.",
      },
      {
        text: "B. L. Rice, Mysore: A Gazetteer Compiled for Government, 2 vols., Archibald Constable, Westminster, 1897.",
      },
      {
        text: "Annual Reports of the Mysore Archaeological Department, Government of Mysore, 1906–1956.",
      },
      {
        text: "R. Shamasastry (ed. and trans.), Kautilya's Arthashastra, Oriental Research Institute, Mysore, 1909.",
      },
      {
        text: "Mark Wilks, Historical Sketches of the South of India, in an Attempt to Trace the History of Mysoor, 3 vols., London, 1810–1817.",
      },
    ],
  },
  {
    category: "Scholarly monographs",
    entries: [
      {
        text: "S. Srikanta Sastri, Sources of Karnataka History, vol. I, University of Mysore, 1940.",
        url: "https://www.srikanta-sastri.org/",
      },
      {
        text: "Burton Stein, Peasant State and Society in Medieval South India, Oxford University Press, Delhi, 1980.",
      },
      {
        text: "Burton Stein, Vijayanagara (The New Cambridge History of India I.2), Cambridge University Press, 1989.",
      },
      {
        text: "Kate Brittlebank, Tipu Sultan's Search for Legitimacy: Islam and Kingship in a Hindu Domain, Oxford University Press, 1997.",
      },
      {
        text: "Irfan Habib (ed.), Confronting Colonialism: Resistance and Modernization under Haidar Ali and Tipu Sultan, Tulika, 1999.",
      },
      { text: "Adam Hardy, Indian Temple Architecture: Form and Transformation, IGNCA/Abhinav, 1995." },
      {
        text: "Janaki Nair, Mysore Modern: Rethinking the Region under Princely Rule, University of Minnesota Press, 2011.",
      },
    ],
  },
  {
    category: "Government and institutional sources",
    entries: [
      {
        text: "Karnataka State Gazetteer: Mysore District, Government of Karnataka.",
        url: "https://gazetteer.karnataka.gov.in/",
      },
      {
        text: "Archaeological Survey of India, Bengaluru Circle — list of centrally protected monuments.",
        url: "https://asi.nic.in/",
      },
      {
        text: "Karnataka Department of Archaeology, Museums and Heritage.",
        url: "https://karnataka.gov.in/",
      },
      { text: "Mysore Palace Board, Government of Karnataka.", url: "https://mysorepalace.gov.in/" },
      { text: "Karnataka Tourism — Mysuru destinations and Dasara.", url: "https://karnatakatourism.org/" },
      { text: "Census of India 2011, Karnataka tables.", url: "https://censusindia.gov.in/" },
      {
        text: "UNESCO World Heritage Centre — Sacred Ensembles of the Hoysalas (2023); Group of Monuments at Hampi.",
        url: "https://whc.unesco.org/en/list/1670/",
      },
    ],
  },
  {
    category: "Encyclopaedic starting points",
    entries: [
      { text: "\"Mysore\", Wikipedia.", url: "https://en.wikipedia.org/wiki/Mysore" },
      {
        text: "\"Kingdom of Mysore\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Kingdom_of_Mysore",
      },
      { text: "\"Hoysala Empire\", Wikipedia.", url: "https://en.wikipedia.org/wiki/Hoysala_Empire" },
      {
        text: "\"Western Ganga dynasty\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Western_Ganga_dynasty",
      },
      { text: "\"Tipu Sultan\", Wikipedia.", url: "https://en.wikipedia.org/wiki/Tipu_Sultan" },
      {
        text: "\"Unification of Karnataka\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Unification_of_Karnataka",
      },
    ],
  },
];

export const editorialNote =
  "This site is a research-oriented synthesis. Wikipedia articles are used as an entry point and are always paired with the underlying scholarly, epigraphic or governmental source wherever a claim is substantive. Dates before c. 1000 CE follow the conventional epigraphic chronology and should be read as approximate. Corrections and additional citations are welcome.";
