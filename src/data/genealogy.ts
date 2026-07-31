export type Ruler = {
  name: string;
  reign: string;
  note: string;
  house: "Wadiyar" | "Interregnum";
};

export const rulers: Ruler[] = [
  {
    name: "Yaduraya Wadiyar",
    reign: "1399–1423",
    note: "Traditional founder of the dynasty at Mysore, as a Vijayanagara feudatory.",
    house: "Wadiyar",
  },
  {
    name: "Chamaraja Wadiyar I – IV",
    reign: "1423–1578",
    note: "A century and a half of small chiefly rule around Mysore town, sparsely documented.",
    house: "Wadiyar",
  },
  {
    name: "Raja Wadiyar I",
    reign: "1578–1617",
    note: "Captured Srirangapatna in 1610 and instituted the Dasara durbar.",
    house: "Wadiyar",
  },
  {
    name: "Kanthirava Narasaraja I",
    reign: "1638–1659",
    note: "Repelled Bijapur invasions; issued the kanthirayi fanam coinage.",
    house: "Wadiyar",
  },
  {
    name: "Chikka Devaraja Wadiyar",
    reign: "1673–1704",
    note: "The kingdom's greatest administrator; eighteen revenue departments and a postal service.",
    house: "Wadiyar",
  },
  {
    name: "Krishnaraja Wadiyar I – II",
    reign: "1714–1766",
    note: "Period of dalavayi ascendancy; royal authority progressively eclipsed.",
    house: "Wadiyar",
  },
  {
    name: "Hyder Ali (de facto ruler)",
    reign: "1761–1782",
    note: "Governed in the king's name; fought the first two Anglo-Mysore Wars.",
    house: "Interregnum",
  },
  {
    name: "Tipu Sultan",
    reign: "1782–1799",
    note: "Assumed sovereign title; killed at the fall of Srirangapatna on 4 May 1799.",
    house: "Interregnum",
  },
  {
    name: "Krishnaraja Wadiyar III",
    reign: "1799–1868",
    note: "Restored as a child under subsidiary alliance; scholar-king and patron of Mysore painting.",
    house: "Wadiyar",
  },
  {
    name: "Chamarajendra Wadiyar X",
    reign: "1868–1894",
    note: "Rule returned to him at the Rendition of 1881; convened the Representative Assembly.",
    house: "Wadiyar",
  },
  {
    name: "Krishnaraja Wadiyar IV",
    reign: "1894/1902–1940",
    note: "Reformer king: University of Mysore, Krishnaraja Sagar, Bank of Mysore, Miller Committee.",
    house: "Wadiyar",
  },
  {
    name: "Jayachamarajendra Wadiyar",
    reign: "1940–1950",
    note: "Last ruling maharaja; signed the Instrument of Accession and served as Rajpramukh.",
    house: "Wadiyar",
  },
];
