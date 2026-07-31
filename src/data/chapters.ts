export type Reference = {
  id: number;
  citation: string;
  url?: string;
};

export type Section = {
  heading: string;
  paragraphs: string[];
};

export type Chapter = {
  slug: string;
  number: number;
  title: string;
  part: string;
  period: string;
  summary: string;
  keywords: string[];
  sections: Section[];
  references: Reference[];
};

const wiki = (title: string, path: string): Reference["url"] =>
  `https://en.wikipedia.org/wiki/${path}` + (title ? "" : "");

export const PARTS = [
  "I · Land and Origins",
  "II · Ancient and Medieval Dynasties",
  "III · The Kingdom and Its Contests",
  "IV · Colonial and Modern Era",
  "V · Culture and Society",
  "VI · Built Heritage",
  "VII · Economy and Institutions",
] as const;

export const chapters: Chapter[] = [
  {
    slug: "geography",
    number: 1,
    title: "Geography and Setting",
    part: PARTS[0],
    period: "Deep time – present",
    summary:
      "The Deccan plateau, the Kaveri basin and Chamundi Hill shaped every settlement, dynasty and irrigation economy that followed in the Mysore region.",
    keywords: ["Deccan", "Kaveri", "Chamundi Hill", "plateau", "monsoon"],
    sections: [
      {
        heading: "A plateau between two rivers",
        paragraphs: [
          "Mysuru sits at roughly 770 metres above sea level on the southern Deccan plateau, in the rain-shadow interior of Karnataka, some 145 km south-west of Bengaluru.[1] The district is bounded by the Western Ghats to the west and drained principally by the Kaveri (Cauvery) and its tributaries — the Kabini, Lakshmana Tirtha and Hemavati — which converge to form the fertile southern Maidan.[2]",
          "This position, between the wet Malnad hills and the drier eastern plains, gave the region a dual economy: forested uplands supplying timber, sandalwood, elephants and pepper; and irrigated riverine tracts supplying paddy, sugarcane and revenue. Every polity that ruled here, from the Western Gangas to the Wadiyars, organised itself around control of the Kaveri's water.[3]",
        ],
      },
      {
        heading: "Chamundi Hill and the sacred landscape",
        paragraphs: [
          "Chamundi Hill rises about 1,065 metres above sea level on the south-eastern edge of the city and is crowned by the Chamundeshwari temple, whose seven-storey gopura was substantially built in the 17th–18th centuries with later Wadiyar patronage.[4] The hill supplies the city's founding legend: the goddess Chamundeshwari's slaying of the demon Mahishasura, from whom the name Mahishuru — 'the town of Mahisha' — is derived.[1]",
          "The island fortress of Srirangapatna, 15 km north, was formed where the Kaveri divides, and repeatedly served as the military capital of the region because of its natural moat.[5]",
        ],
      },
      {
        heading: "Climate, soils and vegetation",
        paragraphs: [
          "The climate is tropical savanna, with a mild dry season, temperatures generally between 15 °C and 35 °C, and annual rainfall of roughly 800 mm delivered chiefly by the south-west monsoon between June and September.[1] Red loamy and lateritic soils predominate on the uplands, while black cotton and alluvial soils occupy the river valleys.",
          "To the south and west, the Nagarhole and Bandipur forests — today national parks within the Nilgiri Biosphere Reserve — preserve the deciduous woodland that once produced the sandalwood and elephants for which Mysore kings were famous across South Asia.[2]",
        ],
      },
    ],
    references: [
      { id: 1, citation: "\"Mysore\", Wikipedia.", url: "https://en.wikipedia.org/wiki/Mysore" },
      {
        id: 2,
        citation:
          "Karnataka State Gazetteer: Mysore District, Government of Karnataka, Bangalore (rev. edn.), chapters on physical features and forests.",
        url: "https://gazetteer.karnataka.gov.in/",
      },
      {
        id: 3,
        citation:
          "Burton Stein, Peasant State and Society in Medieval South India, Oxford University Press, Delhi, 1980, on nadu, irrigation and agrarian order.",
      },
      {
        id: 4,
        citation: "\"Chamundeshwari Temple\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Chamundeshwari_Temple",
      },
      {
        id: 5,
        citation: "\"Srirangapatna\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Srirangapatna",
      },
    ],
  },
  {
    slug: "early-settlements",
    number: 2,
    title: "Early Settlements and Prehistory",
    part: PARTS[0],
    period: "c. 3000 BCE – 300 CE",
    summary:
      "Neolithic ash mounds, megalithic burials, Ashokan edicts and early Tamil-Kannada contact form the earliest documented human record of the Mysore country.",
    keywords: ["Neolithic", "megalith", "Ashoka", "Brahmagiri", "Iron Age", "Satavahana"],
    sections: [
      {
        heading: "Neolithic and Iron Age foundations",
        paragraphs: [
          "The southern Deccan holds one of India's most distinctive Neolithic complexes, dated from roughly the third millennium BCE and characterised by ash mounds, cattle pastoralism and granite-hill habitation sites.[1] Excavations at Brahmagiri, Maski, Piklihal and Hallur in present-day Karnataka established the stratigraphic sequence from Neolithic to Iron Age (megalithic) to early historic occupation that historians still use for the region.[2]",
          "From about 1200 BCE the megalithic tradition — cists, dolmens, stone circles and urn burials with iron implements and black-and-red ware — spread widely through the Kaveri basin, including sites in the Mysore and Chamarajanagar districts. These communities were the first to work the region's iron and to build the small tank-irrigated settlements that later became recognisable villages.[3]",
        ],
      },
      {
        heading: "The Mauryan horizon",
        paragraphs: [
          "The presence of Ashokan minor rock edicts at Brahmagiri, Siddapura, Jatinga-Rameshwara (Chitradurga district) and Maski shows that the northern part of Karnataka lay within or adjacent to the Mauryan sphere in the third century BCE, administered from Suvarnagiri.[4] The Mysore country to the south is best understood as a frontier zone between Mauryan influence and the early chiefdoms described in Tamil Sangam literature.",
          "B. L. Rice, who first systematically edited the region's inscriptions in the Epigraphia Carnatica, argued that this epigraphic frontier is where the documented history of Karnataka properly begins.[5]",
        ],
      },
      {
        heading: "Satavahanas, Kadambas and the making of a Kannada country",
        paragraphs: [
          "After the Mauryas, the Satavahanas exercised loose suzerainty over much of the Deccan. Their decline in the early third century CE opened space for indigenous dynasties: the Kadambas of Banavasi from about 345 CE, whose Halmidi inscription (c. 450 CE) is the earliest known Kannada-language record, and the Western Gangas in the Mysore–Kolar tract.[6]",
          "By the fourth century the region therefore had all the elements of a settled polity: an agrarian base fed by tanks and river channels, Jain, Buddhist and Brahmanical religious institutions, and a literate administration recording land grants in stone and copper.",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"South Indian Neolithic\" and \"Ash mound\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Ashmound",
      },
      {
        id: 2,
        citation:
          "R. E. M. Wheeler, \"Brahmagiri and Chandravalli 1947\", Ancient India, No. 4, Archaeological Survey of India, 1948.",
        url: "https://asi.nic.in/",
      },
      {
        id: 3,
        citation: "\"Megalithic monuments of South India\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/South_Indian_megalith",
      },
      {
        id: 4,
        citation: "\"Minor Rock Edicts\" / \"Maski\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Minor_Rock_Edicts",
      },
      {
        id: 5,
        citation:
          "B. L. Rice, Epigraphia Carnatica (12 vols.), Mysore Government Central Press, 1886–1904; and Mysore: A Gazetteer Compiled for Government, 1897.",
      },
      {
        id: 6,
        citation: "\"Kadamba dynasty\" and \"Halmidi inscription\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Halmidi_inscription",
      },
    ],
  },
  {
    slug: "gangas",
    number: 3,
    title: "The Western Gangas",
    part: PARTS[1],
    period: "c. 350 – 1000 CE",
    summary:
      "From Kolar and Talakadu the Western Gangas ruled southern Karnataka for six centuries, patronised Jainism and raised the colossus of Shravanabelagola.",
    keywords: ["Western Ganga", "Talakadu", "Jainism", "Gommateshwara", "Chavundaraya"],
    sections: [
      {
        heading: "A dynasty of the Gangavadi",
        paragraphs: [
          "The Western Ganga dynasty ruled the region called Gangavadi — broadly the modern Mysore, Mandya, Hassan, Tumakuru, Kolar and Bengaluru districts — from about 350 to 1000 CE, first from Kolar and then from Talakadu on the Kaveri.[1] Traditional accounts credit the founding to Konganivarma Madhava, while historians rely on the dynasty's very large corpus of Kannada and Sanskrit inscriptions for its verifiable outline.[2]",
          "The Gangas were usually feudatories of larger powers — the Badami Chalukyas, then the Rashtrakutas — while retaining substantial autonomy. Durvinita (c. 529–579), the best-known early ruler, is remembered as a scholar-king associated with Sanskrit and Kannada letters.[1]",
        ],
      },
      {
        heading: "Jainism and Shravanabelagola",
        paragraphs: [
          "Ganga patronage made southern Karnataka a heartland of Digambara Jainism. In 981 CE the Ganga minister and general Chavundaraya commissioned the 17.5-metre monolithic statue of Bahubali (Gommateshwara) at Shravanabelagola, still among the world's largest free-standing monolithic sculptures and the focus of the Mahamastakabhisheka anointing held roughly every twelve years.[3]",
          "Ganga basadis, hero-stones and inscriptions across the region document a society in which Jain merchant and warrior patronage coexisted with Shaiva and Vaishnava temple building.",
        ],
      },
      {
        heading: "Decline and legacy",
        paragraphs: [
          "Chola expansion under Rajaraja I and Rajendra I broke Ganga power around 1004 CE, and Gangavadi passed into Chola administration for most of the eleventh century, until the Hoysalas expelled them.[1] The Ganga centuries nevertheless fixed the administrative geography — nadu and vishaya divisions, tank irrigation, agrahara settlements — that later dynasties inherited.",
          "Talakadu itself, once a great Ganga capital, was progressively buried under river sand; its excavated temples, now protected by the Archaeological Survey of India, are the most tangible remains of the dynasty in the Mysore district.[4]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Western Ganga dynasty\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Western_Ganga_dynasty",
      },
      {
        id: 2,
        citation:
          "B. L. Rice, Epigraphia Carnatica, esp. vols. II–IV covering Shravanabelagola, Mysore and Hassan taluks.",
      },
      {
        id: 3,
        citation: "\"Gommateshwara statue\" / \"Shravanabelagola\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Gommateshwara_statue",
      },
      {
        id: 4,
        citation:
          "Archaeological Survey of India, Bengaluru Circle: protected monuments at Talakadu.",
        url: "https://asi.nic.in/",
      },
    ],
  },
  {
    slug: "chalukyas",
    number: 4,
    title: "Chalukyas, Rashtrakutas and Cholas",
    part: PARTS[1],
    period: "c. 543 – 1116 CE",
    summary:
      "Imperial powers of the Deccan repeatedly contested southern Karnataka, leaving temple architecture, Kannada literature and a durable administrative template.",
    keywords: ["Badami Chalukya", "Rashtrakuta", "Kalyani Chalukya", "Chola", "Deccan"],
    sections: [
      {
        heading: "The Badami Chalukyas",
        paragraphs: [
          "The Chalukyas of Badami (c. 543–753) unified much of the Deccan and asserted overlordship over the Gangas of Gangavadi. Pulakeshin II (r. 610–642) checked Harshavardhana on the Narmada and campaigned deep into the Tamil country; his reign is documented by the Aihole inscription of 634 CE.[1]",
          "Their patronage produced the rock-cut and structural temples of Badami, Aihole and Pattadakal — a UNESCO World Heritage Site — where the Dravida and Nagara idioms were experimentally combined, a synthesis that later shaped Hoysala and Vijayanagara building in the Mysore region.[2]",
        ],
      },
      {
        heading: "Rashtrakutas and the Kalyani Chalukyas",
        paragraphs: [
          "The Rashtrakutas (753–973), described by the Arab traveller Sulaiman as one of the great empires of the world, ruled the Deccan from Manyakheta and continued Ganga subordination while patronising Kannada literature; the Kavirajamarga (c. 850) is the earliest extant work of Kannada literary criticism.[3]",
          "The Western (Kalyani) Chalukyas restored Chalukya rule from 973 to 1189 and fought the Cholas along the Tungabhadra for over a century. Their era produced the Vachana movement's precursors, Basava's Lingayat reform in the twelfth century, and a distinctive temple style at Lakkundi and Itagi.[4]",
        ],
      },
      {
        heading: "Chola interlude in Gangavadi",
        paragraphs: [
          "Between roughly 1004 and 1116 the Cholas held Gangavadi, garrisoning Talakadu and renaming it Rajarajapura. Chola inscriptions in the Mysore region record temple endowments and revenue arrangements, and Chola administrative vocabulary entered local usage.[5]",
          "Chola rule ended when the Hoysala general and king Vishnuvardhana captured Talakadu in about 1116 — a victory commemorated in his title Talakadugonda and one of the founding events of Hoysala power in the south.[6]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Chalukya dynasty\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Chalukya_dynasty",
      },
      {
        id: 2,
        citation: "UNESCO World Heritage Centre, \"Group of Monuments at Pattadakal\".",
        url: "https://whc.unesco.org/en/list/239/",
      },
      {
        id: 3,
        citation: "\"Rashtrakuta dynasty\" and \"Kavirajamarga\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Rashtrakuta_dynasty",
      },
      {
        id: 4,
        citation: "\"Western Chalukya Empire\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Western_Chalukya_Empire",
      },
      {
        id: 5,
        citation:
          "Burton Stein, Peasant State and Society in Medieval South India, on Chola provincial arrangements.",
      },
      {
        id: 6,
        citation: "\"Vishnuvardhana (Hoysala)\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Vishnuvardhana",
      },
    ],
  },
  {
    slug: "hoysalas",
    number: 5,
    title: "The Hoysalas",
    part: PARTS[1],
    period: "c. 1026 – 1343 CE",
    summary:
      "From Belur, Halebidu and later Srirangapatna's hinterland, the Hoysalas created the most ornate temple architecture in southern India.",
    keywords: ["Hoysala", "Belur", "Halebidu", "Somanathapura", "soapstone", "Vishnuvardhana"],
    sections: [
      {
        heading: "Hill chiefs to imperial power",
        paragraphs: [
          "The Hoysalas emerged from the Malnad hills around Sosevur and rose under Chalukya overlordship before asserting independence in the twelfth century. Vishnuvardhana (r. c. 1108–1152) expelled the Cholas from Gangavadi, and Veera Ballala II (r. 1173–1220) made the Hoysalas a sovereign imperial power after the collapse of the Kalyani Chalukyas.[1]",
          "Their capitals were Belur and then Dwarasamudra (Halebidu). In the thirteenth century the dynasty extended into the Tamil country, ruling briefly from Kannanur Kuppam near Srirangam.",
        ],
      },
      {
        heading: "The temple achievement",
        paragraphs: [
          "Hoysala temples — the Chennakeshava at Belur (begun 1117), the Hoysaleswara at Halebidu, and the Chennakesava at Somanathapura in Mysore district (1268, built by Somanatha Dandanayaka) — are built of chloritic schist (soapstone) on stellate plans raised on a jagati platform, with horizontal friezes of elephants, horsemen, epic narrative and foliage of extraordinary density.[2]",
          "In 2023 the 'Sacred Ensembles of the Hoysalas' — Belur, Halebidu and Somanathapura — were inscribed on the UNESCO World Heritage List, and the monuments are maintained by the Archaeological Survey of India.[3]",
        ],
      },
      {
        heading: "Fall of the dynasty",
        paragraphs: [
          "Halebidu was sacked by the forces of the Delhi Sultanate under Malik Kafur in 1311 and again in 1327. Veera Ballala III fought the Madurai Sultanate for decades and was killed near Madurai in 1343; his death effectively ended Hoysala rule.[1]",
          "The vacuum was filled almost immediately by the new Sangama brothers' state on the Tungabhadra — Vijayanagara — which inherited much of the Hoysala domain, including the Mysore country.",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Hoysala Empire\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Hoysala_Empire",
      },
      {
        id: 2,
        citation:
          "\"Hoysala architecture\" and \"Chennakesava Temple, Somanathapura\", Wikipedia; see also Adam Hardy, Indian Temple Architecture: Form and Transformation, 1995.",
        url: "https://en.wikipedia.org/wiki/Hoysala_architecture",
      },
      {
        id: 3,
        citation: "UNESCO World Heritage Centre, \"Sacred Ensembles of the Hoysalas\" (2023).",
        url: "https://whc.unesco.org/en/list/1670/",
      },
    ],
  },
  {
    slug: "vijayanagara-empire",
    number: 6,
    title: "The Vijayanagara Empire",
    part: PARTS[1],
    period: "1336 – 1646",
    summary:
      "Under Vijayanagara's nayaka system the small chiefdom of Mysore first appears in the record — and inherits sovereignty when the empire collapses.",
    keywords: ["Vijayanagara", "Hampi", "nayaka", "Krishnadevaraya", "Talikota", "Srirangapatna"],
    sections: [
      {
        heading: "An empire on the Tungabhadra",
        paragraphs: [
          "Founded in 1336 by Harihara I and Bukka Raya I, the Vijayanagara Empire grew into the dominant power of peninsular India, reaching its height under Krishnadevaraya (r. 1509–1529). Its capital at Hampi, described admiringly by Persian and Portuguese visitors such as Abdur Razzaq and Domingo Paes, is now a UNESCO World Heritage Site.[1]",
          "Historians including Burton Stein have analysed Vijayanagara as a segmentary and increasingly militarised state, in which the amara-nayaka system assigned revenue-bearing territory to warrior chiefs in return for troops — the mechanism by which local lineages such as the Wadiyars of Mysore acquired legitimate authority.[2]",
        ],
      },
      {
        heading: "Mysore as a Vijayanagara dependency",
        paragraphs: [
          "The Mysore chiefdom traditionally dates its founding to 1399, and its early rulers governed a small territory around Mysore town as feudatories of Vijayanagara.[3] Srirangapatna, ruled by a Vijayanagara viceroy (the Srirangaraya line), was the principal regional administrative seat.",
          "The empire's authority in the south was broken by the defeat at Talikota (Rakkasagi–Tangadagi) in 1565 against a coalition of Deccan sultanates, after which Hampi was sacked. Rump Vijayanagara rule continued from Penukonda and Chandragiri until 1646.[1]",
        ],
      },
      {
        heading: "The transfer of 1610",
        paragraphs: [
          "In 1610 Raja Wadiyar I took Srirangapatna from the Vijayanagara viceroy Tirumalaraja and moved the Mysore capital there — the decisive step from feudatory chiefdom to independent kingdom.[3] Raja Wadiyar also formalised the celebration of the Navaratri Dasara court festival at Srirangapatna, consciously continuing the Mahanavami observance of the Vijayanagara emperors.[4]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Vijayanagara Empire\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Vijayanagara_Empire",
      },
      {
        id: 2,
        citation:
          "Burton Stein, Vijayanagara (The New Cambridge History of India I.2), Cambridge University Press, 1989.",
      },
      {
        id: 3,
        citation: "\"Kingdom of Mysore\" and \"Raja Wodeyar I\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Kingdom_of_Mysore",
      },
      {
        id: 4,
        citation: "\"Mysore Dasara\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_Dasara",
      },
    ],
  },
  {
    slug: "wadiyar-dynasty",
    number: 7,
    title: "The Wadiyar Dynasty",
    part: PARTS[2],
    period: "1399 – 1950",
    summary:
      "Twenty-five rulers across five and a half centuries — from a village chiefdom, through eclipse and restoration, to a modern constitutional monarchy.",
    keywords: ["Wadiyar", "Wodeyar", "Yaduraya", "Raja Wadiyar", "Chikka Devaraja", "dynasty"],
    sections: [
      {
        heading: "Origins and early rulers",
        paragraphs: [
          "Wadiyar tradition traces the dynasty to Yaduraya Wadiyar, who is said to have established the line at Mysore in 1399. The historical record becomes firm in the sixteenth century, and the dynasty's rise is best documented from Raja Wadiyar I (r. 1578–1617), who captured Srirangapatna in 1610.[1]",
          "The name 'Wadiyar' (also spelt Wodeyar, from odeya, 'lord') was a title of local chiefship before it became a dynastic surname.",
        ],
      },
      {
        heading: "Consolidation under Kanthirava and Chikka Devaraja",
        paragraphs: [
          "Kanthirava Narasaraja I (r. 1638–1659) repelled Bijapur's invasions, issued the kanthirayi fanam coinage and expanded the kingdom's frontiers. Chikka Devaraja Wadiyar (r. 1673–1704) is regarded as the greatest administrator of the line: he reorganised revenue into eighteen departments (the chavadi system), established a postal service, and negotiated with both the Marathas and the Mughals, receiving recognition from Aurangzeb.[1][2]",
          "By 1700 Mysore was among the strongest states in the peninsula, with revenues that supported a standing army and an active court culture of Kannada and Sanskrit literature and Carnatic music.",
        ],
      },
      {
        heading: "Eclipse, restoration and modern monarchy",
        paragraphs: [
          "After 1734 real power passed to the dalavayis (commanders-in-chief) and then, from 1761, to Hyder Ali, who ruled in the king's name. Wadiyar authority was restored by the British in 1799 after Tipu Sultan's death, when the five-year-old Krishnaraja Wadiyar III was installed.[1]",
          "The last rulers — Chamaraja Wadiyar X, Krishnaraja Wadiyar IV (r. 1902–1940) and Jayachamarajendra Wadiyar (r. 1940–1950) — presided over the state's transformation into a model of administrative reform, industrial investment and public education before accession to the Indian Union.[3]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Kingdom of Mysore\" and \"Wadiyar dynasty\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Wadiyar_dynasty",
      },
      {
        id: 2,
        citation:
          "S. Srikanta Sastri, Sources of Karnataka History, University of Mysore, 1940; and B. L. Rice, Mysore: A Gazetteer Compiled for Government, 1897, vol. I.",
      },
      {
        id: 3,
        citation: "\"Krishnaraja Wadiyar IV\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Krishnaraja_Wadiyar_IV",
      },
    ],
  },
  {
    slug: "hyder-ali",
    number: 8,
    title: "Hyder Ali",
    part: PARTS[2],
    period: "1721 – 1782",
    summary:
      "A cavalry officer who became de facto ruler of Mysore, built a European-drilled army and fought the English East India Company to a standstill.",
    keywords: ["Hyder Ali", "Anglo-Mysore War", "Srirangapatna", "Pollilur", "dalavayi"],
    sections: [
      {
        heading: "Rise to power",
        paragraphs: [
          "Hyder Ali (c. 1720/21–1782) entered Mysore service as a soldier, distinguished himself in the Carnatic campaigns, and used control of the army and the Dindigul revenues to displace the dalavayi faction. By 1761 he was the effective ruler of Mysore, governing in the name of the Wadiyar king.[1]",
          "He reorganised the army on European lines with French assistance, developing disciplined infantry, an effective artillery arm, and the rocket corps for which Mysore became internationally known.[2]",
        ],
      },
      {
        heading: "Wars with the Company",
        paragraphs: [
          "In the First Anglo-Mysore War (1767–1769) Hyder outmanoeuvred the East India Company and dictated peace at the gates of Madras with the Treaty of Madras. In 1780 he invaded the Carnatic again, and his forces under his son Tipu destroyed a British detachment at Pollilur — one of the Company's worst defeats in India — opening the Second Anglo-Mysore War.[1]",
          "Hyder died of cancer at Chittoor in December 1782 while the war continued; Tipu succeeded him and concluded the Treaty of Mangalore in 1784.",
        ],
      },
      {
        heading: "Administration and assessment",
        paragraphs: [
          "Hyder expanded state control over revenue, promoted irrigation and commerce, and maintained a religiously plural administration in which Hindu officials such as Purnaiah held senior office.[3] Contemporary British writing cast him as an usurper and tyrant; modern historians emphasise his state-building capacity and the fiscal-military modernisation that made Mysore the Company's most formidable Indian opponent.[4]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Hyder Ali\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Hyder_Ali",
      },
      {
        id: 2,
        citation: "\"Mysorean rockets\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysorean_rockets",
      },
      {
        id: 3,
        citation:
          "Mark Wilks, Historical Sketches of the South of India, in an Attempt to Trace the History of Mysoor, London, 1810–1817 (a partisan but foundational source).",
      },
      {
        id: 4,
        citation:
          "Burton Stein, \"State Formation and Economy Reconsidered\", Modern Asian Studies 19 (1985); and A History of India, Blackwell, 1998.",
      },
    ],
  },
  {
    slug: "tipu-sultan",
    number: 9,
    title: "Tipu Sultan",
    part: PARTS[2],
    period: "1750 – 1799",
    summary:
      "The 'Tiger of Mysore': innovator in rocketry and revenue, diplomat to France and the Ottomans, and the last ruler to fight the Company on equal terms.",
    keywords: ["Tipu Sultan", "Srirangapatna", "1799", "rockets", "Wellesley", "sericulture"],
    sections: [
      {
        heading: "Reign and reforms",
        paragraphs: [
          "Tipu Sultan (1751–1799) succeeded Hyder Ali in 1782. He restructured the revenue and coinage systems, promoted state trading houses, introduced or expanded sericulture in Mysore — an industry that survives as a mainstay of the regional economy — and corresponded with France, the Ottoman Empire, Persia and Afghanistan in search of allies against the British.[1]",
          "He developed the iron-cased Mysorean rockets into a mass battlefield weapon; captured specimens taken to Britain influenced William Congreve's rocket designs.[2]",
        ],
      },
      {
        heading: "The Third and Fourth Anglo-Mysore Wars",
        paragraphs: [
          "The Third Anglo-Mysore War (1790–1792) ended with the Treaty of Seringapatam, under which Tipu ceded about half his territory and surrendered two sons as hostages.[1] In 1799 Governor-General Richard Wellesley launched the Fourth Anglo-Mysore War; Srirangapatna was stormed on 4 May 1799 and Tipu was killed defending the breach.",
          "The kingdom was partitioned between the Company, the Nizam and the Marathas; a reduced Mysore was restored to the Wadiyars under a subsidiary alliance.[3]",
        ],
      },
      {
        heading: "Contested memory",
        paragraphs: [
          "Tipu remains one of the most debated figures in Indian history. He is remembered as an early and effective opponent of colonial expansion and as a patron of temples such as Sringeri and Srirangapatna's Ranganathaswamy; he is also criticised for coercive campaigns and conversions in Coorg, Malabar and Mangalore, documented in both colonial and Indian sources.[1][4]",
          "Historians caution that much of the surviving evidence is British war propaganda or later polemic, and that the reign must be read against the fiscal and military pressures of the period.[5]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Tipu Sultan\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Tipu_Sultan",
      },
      {
        id: 2,
        citation: "\"Mysorean rockets\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysorean_rockets",
      },
      {
        id: 3,
        citation: "\"Siege of Seringapatam (1799)\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Siege_of_Seringapatam_(1799)",
      },
      {
        id: 4,
        citation:
          "Kate Brittlebank, Tipu Sultan's Search for Legitimacy: Islam and Kingship in a Hindu Domain, Oxford University Press, 1997.",
      },
      {
        id: 5,
        citation:
          "Irfan Habib (ed.), Confronting Colonialism: Resistance and Modernization under Haidar Ali and Tipu Sultan, Tulika, 1999.",
      },
    ],
  },
  {
    slug: "british-period",
    number: 10,
    title: "The British Period",
    part: PARTS[3],
    period: "1799 – 1947",
    summary:
      "Subsidiary alliance, the Commission of 1831–1881, the Rendition, and a princely state that became a byword for progressive administration.",
    keywords: ["subsidiary alliance", "Commission", "Rendition", "Mark Cubbon", "1831"],
    sections: [
      {
        heading: "Subsidiary alliance and Purnaiah's regency",
        paragraphs: [
          "After 1799 Mysore became a princely state in subsidiary alliance with the East India Company: it surrendered external relations and maintained a Company garrison, in return for internal autonomy under Krishnaraja Wadiyar III. Dewan Purnaiah governed as regent until 1811, restoring finances and irrigation works.[1]",
        ],
      },
      {
        heading: "The Commission, 1831–1881",
        paragraphs: [
          "Citing misgovernment and the Nagar (Nagara) peasant insurrection of 1830–31, the British assumed direct administration of Mysore in 1831. For fifty years the state was run by Commissioners, of whom Mark Cubbon (1834–1861) and Lewin Bowring were the most consequential; the capital of administration shifted to Bangalore.[2]",
          "The Commission period brought survey and settlement of land revenue, the beginnings of a road and rail network, English-medium schools, and the compilation of gazetteers and inscription volumes — including B. L. Rice's Epigraphia Carnatica, a monument of Indian epigraphy.[3]",
        ],
      },
      {
        heading: "The Rendition of 1881",
        paragraphs: [
          "Sustained petitioning, and the adoption of Chamarajendra Wadiyar X, led to the Rendition of Mysore on 25 March 1881: rule was returned to the Wadiyar dynasty under an Instrument of Transfer, with a British Resident and an annual subsidy.[1]",
          "The restored state moved rapidly to institutionalise consultative government: the Mysore Representative Assembly, established in 1881, is generally described as the first legislative body of its kind in India.[4]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Kingdom of Mysore\" and \"Mysore State\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Kingdom_of_Mysore",
      },
      {
        id: 2,
        citation: "\"Mark Cubbon\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mark_Cubbon",
      },
      {
        id: 3,
        citation:
          "B. L. Rice, Mysore: A Gazetteer Compiled for Government, 2 vols., Westminster, 1897.",
      },
      {
        id: 4,
        citation: "\"Mysore Representative Assembly\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_Legislative_Assembly",
      },
    ],
  },
  {
    slug: "kingdom-of-mysore",
    number: 11,
    title: "The Kingdom of Mysore",
    part: PARTS[2],
    period: "1399 – 1947",
    summary:
      "An institutional portrait of the kingdom: revenue, army, court, coinage, dewans and the machinery that outlasted every dynasty change.",
    keywords: ["dewan", "revenue", "coinage", "administration", "Purnaiah", "Seshadri Iyer"],
    sections: [
      {
        heading: "The office of dewan",
        paragraphs: [
          "The dewan (chief minister) was the pivot of Mysore's administration. The line runs from Purnaiah (1799–1811) through C. Rangacharlu, who convened the Representative Assembly; K. Seshadri Iyer (1883–1901), who oversaw the Kolar Gold Fields and the Shivanasamudra hydroelectric scheme; Sir M. Visvesvaraya (1912–1918); and Sir Mirza Ismail (1926–1941).[1]",
          "Under these administrations Mysore acquired a reputation as India's best-governed princely state, and was described in that period as a 'model state'.[2]",
        ],
      },
      {
        heading: "Revenue and the agrarian order",
        paragraphs: [
          "Revenue rested on ryotwari settlement after the nineteenth-century surveys, replacing earlier farming of revenue to intermediaries. Tanks (kere) remained the backbone of irrigation until the Krishnaraja Sagar dam across the Kaveri, completed in 1932 to Visvesvaraya's design, transformed the Mandya–Mysore tract into a sugarcane and paddy belt.[3]",
        ],
      },
      {
        heading: "Court, army and symbols",
        paragraphs: [
          "The kingdom minted its own coinage from Kanthirava Narasaraja I's kanthirayi fanams onward, kept a household cavalry and, after 1799, a small state force alongside the subsidiary British garrison. The royal insignia — the Gandabherunda, a two-headed mythical bird — was inherited from Vijayanagara usage and remains the emblem of the Government of Karnataka.[4]",
          "The annual Dasara durbar, in which the maharaja held court on the golden throne, functioned as the kingdom's central political ritual, binding chiefs, officials and subjects to the crown.[5]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Dewan of Mysore\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Diwan_of_Mysore",
      },
      {
        id: 2,
        citation:
          "Karnataka State Gazetteer, Government of Karnataka; and Mysore Economic Conference proceedings (state records).",
        url: "https://gazetteer.karnataka.gov.in/",
      },
      {
        id: 3,
        citation: "\"Krishna Raja Sagara\" and \"M. Visvesvaraya\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Krishna_Raja_Sagara",
      },
      {
        id: 4,
        citation: "\"Gandaberunda\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Gandaberunda",
      },
      {
        id: 5,
        citation: "\"Mysore Dasara\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_Dasara",
      },
    ],
  },
  {
    slug: "princely-state",
    number: 12,
    title: "The Princely State and Accession",
    part: PARTS[3],
    period: "1881 – 1950",
    summary:
      "Krishnaraja Wadiyar IV's reformist reign, the freedom movement inside the state, and the accession of Mysore to the Indian Union.",
    keywords: ["Krishnaraja Wadiyar IV", "Mirza Ismail", "accession", "1947", "Rajpramukh"],
    sections: [
      {
        heading: "The reign of Krishnaraja Wadiyar IV",
        paragraphs: [
          "Krishnaraja Wadiyar IV ruled from 1902 (assuming full powers on attaining majority) to 1940. His government founded the University of Mysore in 1916 — the first university in India established outside British-administered presidency towns — the Bank of Mysore (1913), the Mysore Iron and Steel Works at Bhadravati, and the Kannambadi (Krishnaraja Sagar) dam.[1]",
          "Social legislation included measures against child marriage, the removal of some caste disabilities in public institutions, and the Miller Committee (1918) recommendations on reservations in public employment for non-Brahmin communities — an early landmark in Indian affirmative action.[2]",
        ],
      },
      {
        heading: "Politics inside the state",
        paragraphs: [
          "Mysore's own nationalist politics grew through the Mysore Congress, the Praja Paksha and the Mysore Chalo agitation of 1947, which demanded responsible government. The 'Mysore state Congress' movement pressed for full democratic transfer even as the state administration remained comparatively liberal.[3]",
        ],
      },
      {
        heading: "Accession and after",
        paragraphs: [
          "Jayachamarajendra Wadiyar signed the Instrument of Accession to India in 1947. Mysore became a Part B state in 1950 and the maharaja served as Rajpramukh until 1956, later as Governor of Mysore and of Madras.[4]",
          "Privy purses and princely titles were abolished by the Twenty-sixth Amendment to the Constitution in 1971, ending the formal political role of the dynasty.",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Krishnaraja Wadiyar IV\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Krishnaraja_Wadiyar_IV",
      },
      {
        id: 2,
        citation: "\"Miller Committee (Mysore)\", Wikipedia; Mysore Government records, 1918–1921.",
        url: "https://en.wikipedia.org/wiki/Miller_Committee",
      },
      {
        id: 3,
        citation: "\"Mysore State\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_State",
      },
      {
        id: 4,
        citation: "\"Jayachamarajendra Wadiyar\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Jayachamarajendra_Wadiyar",
      },
    ],
  },
  {
    slug: "unification-of-karnataka",
    number: 13,
    title: "The Unification of Karnataka",
    part: PARTS[3],
    period: "1905 – 1973",
    summary:
      "The Ekikarana movement gathered Kannada-speaking districts scattered across four administrations into one state — renamed Karnataka in 1973.",
    keywords: ["Ekikarana", "States Reorganisation", "1956", "Aluru Venkata Rao", "1973"],
    sections: [
      {
        heading: "A language divided",
        paragraphs: [
          "At the start of the twentieth century Kannada speakers were split between the princely state of Mysore, the Bombay and Madras presidencies, the Nizam's Hyderabad, and Coorg. The unification (Ekikarana) movement, articulated by Aluru Venkata Rao — later called Karnataka Kulapurohita — and organisations such as the Karnataka Sabha and the Kannada Sahitya Parishat (founded 1915), argued for a single Kannada-speaking province.[1]",
        ],
      },
      {
        heading: "Reorganisation, 1956",
        paragraphs: [
          "After independence, the Dhar Committee and the JVP Committee were cautious about linguistic states, but the Fazl Ali Commission (States Reorganisation Commission, 1955) recommended consolidation. The States Reorganisation Act came into force on 1 November 1956, merging the Kannada-speaking areas of Bombay, Hyderabad, Madras and Coorg with the old Mysore State to form an enlarged Mysore State.[2]",
        ],
      },
      {
        heading: "Renaming, 1973",
        paragraphs: [
          "Because 'Mysore' named only the historic southern core, northern districts pressed for a name that represented the whole. On 1 November 1973, under Chief Minister Devaraj Urs, the state was renamed Karnataka; the date is observed annually as Kannada Rajyotsava.[3]",
          "In 2014 the Government of Karnataka officially changed the anglicised spellings of several cities, so that Mysore became Mysuru with effect from 1 November of that year.[4]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Unification of Karnataka\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Unification_of_Karnataka",
      },
      {
        id: 2,
        citation: "\"States Reorganisation Act, 1956\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/States_Reorganisation_Act,_1956",
      },
      {
        id: 3,
        citation: "\"Karnataka Rajyotsava\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Karnataka_Rajyotsava",
      },
      {
        id: 4,
        citation:
          "Government of Karnataka notification on renaming of cities, 2014; see \"Mysore\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore",
      },
    ],
  },
  {
    slug: "modern-mysuru",
    number: 14,
    title: "Modern Mysuru",
    part: PARTS[3],
    period: "1956 – present",
    summary:
      "A heritage city that became a university town, an IT and tourism hub, and a repeated winner of India's cleanest-city rankings.",
    keywords: ["Mysuru", "Swachh Survekshan", "smart city", "urbanisation", "yoga"],
    sections: [
      {
        heading: "Growth of the city",
        paragraphs: [
          "Mysuru is Karnataka's second- or third-largest urban centre depending on the measure used, with a metropolitan population of roughly a million recorded in the 2011 census and administered by the Mysuru City Corporation.[1] Planned layouts inherited from the princely period — wide avenues, parks, civic buildings — gave the city an unusually legible urban form that later master plans largely respected.",
        ],
      },
      {
        heading: "Civic reputation",
        paragraphs: [
          "Mysuru was ranked the cleanest city in India in the Government of India's Swachh Survekshan surveys of 2015 and 2016 and has consistently placed near the top since; it was also included in the Smart Cities Mission.[2] The city hosts the annual International Day of Yoga events at scale and is a centre for Ashtanga yoga instruction with a global student following.",
        ],
      },
      {
        heading: "Economy today",
        paragraphs: [
          "Contemporary Mysuru combines tourism, education, and manufacturing and IT services — including a large Infosys campus, aerospace and industrial units, and the long-established silk and sandalwood-oil industries run by state enterprises such as KSIC and Karnataka Soaps and Detergents Ltd (maker of Mysore Sandal Soap, produced since 1916).[3]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "Census of India 2011, Karnataka; \"Mysore\", Wikipedia.",
        url: "https://censusindia.gov.in/",
      },
      {
        id: 2,
        citation:
          "Ministry of Housing and Urban Affairs, Swachh Survekshan results, 2015 and 2016.",
        url: "https://swachhsurvekshan.org/",
      },
      {
        id: 3,
        citation: "\"Mysore Sandal Soap\" and \"Karnataka Silk Industries Corporation\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_Sandal_Soap",
      },
    ],
  },
  {
    slug: "culture",
    number: 15,
    title: "Culture and the Arts",
    part: PARTS[4],
    period: "16th century – present",
    summary:
      "Mysore's court sustained a distinct school of painting, a lineage of Carnatic composers, and traditions of scholarship still identified with the city.",
    keywords: ["Mysore painting", "Carnatic music", "veena", "court culture", "Ganjifa"],
    sections: [
      {
        heading: "Mysore painting",
        paragraphs: [
          "The Mysore school of painting descends from Vijayanagara traditions and was reconstituted under Wadiyar patronage, particularly by Krishnaraja Wadiyar III, who also authored the Sritattvanidhi, an illustrated compendium that served as an iconographic manual for artists.[1] The style is characterised by delicate line, muted colour and gesso work covered in thin gold leaf.",
        ],
      },
      {
        heading: "Music at court",
        paragraphs: [
          "Mysore developed a recognised bani (stylistic lineage) within Carnatic music. Court composers and performers include Veene Sheshanna, Mysore Vasudevacharya, and the ruler-composer Jayachamarajendra Wadiyar, who composed Sanskrit kritis and sponsored recordings of Nikolai Medtner's music.[2] The Mysore veena tradition remains a distinct performance lineage.",
        ],
      },
      {
        heading: "Crafts and letters",
        paragraphs: [
          "Craft traditions include sandalwood carving, rosewood inlay, Ganjifa playing cards and Mysore silk weaving with zari borders; several carry Geographical Indication protection.[3] In literature, the city's university and Kannada institutions nurtured writers of national standing, among them Kuvempu, R. K. Narayan and U. R. Ananthamurthy.[4]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Mysore painting\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_painting",
      },
      {
        id: 2,
        citation: "\"Mysore Vasudevacharya\" and \"Veene Sheshanna\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_Vasudevachar",
      },
      {
        id: 3,
        citation:
          "Geographical Indications Registry, Government of India: Mysore Silk, Mysore Sandalwood Oil, Mysore Rosewood Inlay, Mysore Traditional Paintings.",
        url: "https://ipindia.gov.in/",
      },
      {
        id: 4,
        citation: "\"Kannada literature\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Kannada_literature",
      },
    ],
  },
  {
    slug: "festivals",
    number: 16,
    title: "Festivals and Dasara",
    part: PARTS[4],
    period: "1610 – present",
    summary:
      "Nada Habba — the state festival — descends directly from Vijayanagara's Mahanavami and remains the defining public ritual of the city.",
    keywords: ["Dasara", "Navaratri", "Jamboo Savari", "Nada Habba", "Ugadi"],
    sections: [
      {
        heading: "Mysore Dasara",
        paragraphs: [
          "Dasara has been celebrated at Mysore since Raja Wadiyar I revived the Vijayanagara Mahanavami at Srirangapatna in 1610. It is now the Nada Habba (state festival) of Karnataka, running for ten days in the lunar month of Ashvina and culminating on Vijayadashami.[1]",
          "The climax is the Jamboo Savari, a procession in which a decorated elephant carries the golden howdah bearing the idol of Chamundeshwari from the palace to the Bannimantap grounds, followed by the torchlight parade.[1] The palace is illuminated with roughly one hundred thousand lights during the festival.",
        ],
      },
      {
        heading: "The wider festival calendar",
        paragraphs: [
          "Other major observances include Ugadi (the Kannada new year), Chamundeshwari Jayanti and the Chamundi Hill fairs, Ganesha Chaturthi, Deepavali, Sankranti, Ramzan and Christmas in a city with long-standing Muslim and Christian communities, and the Karnataka Rajyotsava on 1 November.[2]",
        ],
      },
      {
        heading: "Dasara as institution",
        paragraphs: [
          "Since 1970 the festival has been organised by the state government rather than the palace, with exhibitions, film and food festivals, wrestling, air shows and a poets' meet added to the ritual core; the private royal durbar continues separately within the palace.[1]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Mysore Dasara\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_Dasara",
      },
      {
        id: 2,
        citation:
          "Department of Tourism, Government of Karnataka: Mysuru Dasara and festivals calendar.",
        url: "https://karnatakatourism.org/",
      },
    ],
  },
  {
    slug: "language",
    number: 17,
    title: "Language and Literature",
    part: PARTS[4],
    period: "5th century – present",
    summary:
      "Kannada, a classical Dravidian language with a 1,500-year literary record, and the Mysore dialect that became its modern standard.",
    keywords: ["Kannada", "Halmidi", "Jnanpith", "classical language", "Kuvempu"],
    sections: [
      {
        heading: "A classical language",
        paragraphs: [
          "Kannada belongs to the Dravidian family and is written in a script derived from Kadamba and Old Kannada forms. The Halmidi inscription of about 450 CE is the earliest full Kannada-language inscription, and the Kavirajamarga (c. 850) is the earliest surviving literary work. The Government of India designated Kannada a classical language in 2008.[1]",
        ],
      },
      {
        heading: "Literary tradition",
        paragraphs: [
          "The tradition runs from the Jain 'three gems' Pampa, Ponna and Ranna, through the Vachana poets of the twelfth-century Lingayat movement (Basava, Akka Mahadevi, Allama Prabhu), the Haridasa devotional poets Purandara Dasa and Kanaka Dasa, and into the modern Navodaya and Navya movements.[2]",
          "Kannada has received eight Jnanpith Awards — more than any other Indian language as of recent counts — including those to Kuvempu, D. R. Bendre, Shivaram Karanth, Masti Venkatesha Iyengar, V. K. Gokak, U. R. Ananthamurthy, Girish Karnad and Chandrashekhara Kambara.[3]",
        ],
      },
      {
        heading: "Mysore and the standard dialect",
        paragraphs: [
          "The southern (Mysore) dialect became the base of modern standard Kannada, reinforced by the University of Mysore's Kannada department, the Kannada Sahitya Parishat and the state's textbook and broadcasting institutions.[2] Urdu, Tamil, Telugu, Malayalam and Konkani are also spoken in the district, reflecting long migration along the Kaveri and Ghat routes.",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Kannada\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Kannada",
      },
      {
        id: 2,
        citation: "\"Kannada literature\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Kannada_literature",
      },
      {
        id: 3,
        citation: "\"Jnanpith Award\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Jnanpith_Award",
      },
    ],
  },
  {
    slug: "cuisine",
    number: 18,
    title: "Cuisine",
    part: PARTS[4],
    period: "17th century – present",
    summary:
      "Palace kitchens, Brahmin vegetarian traditions and the invention of Mysore pak and the Mysore masala dosa.",
    keywords: ["Mysore pak", "masala dosa", "bisi bele bath", "Mylari", "palace kitchen"],
    sections: [
      {
        heading: "The palace table",
        paragraphs: [
          "Mysore pak — a rich confection of gram flour, ghee and sugar — is traditionally said to have been created in the palace kitchens of Krishnaraja Wadiyar IV by the cook Kakasura Madappa, whose family later founded the Guru Sweet Mart in the city.[1]",
        ],
      },
      {
        heading: "Everyday dishes",
        paragraphs: [
          "The regional repertoire includes bisi bele bath (a spiced rice-lentil dish associated with the Mysore court), ragi mudde with soppu saaru in the rural south, chitranna, obbattu/holige, kesari bath, and the buttery Mysore masala dosa served with red chutney — the Mylari-style dosa of Mysuru being a distinct local form.[2]",
        ],
      },
      {
        heading: "Coffee, filter and street",
        paragraphs: [
          "South Indian filter coffee, using beans grown in the neighbouring Kodagu and Chikkamagaluru hills, is central to the city's daily rhythm, and long-running establishments around Devaraja Market and the palace precinct anchor a street-food culture of chats, mangalore bajji and seasonal mango and jackfruit preparations.[3]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Mysore pak\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_pak",
      },
      {
        id: 2,
        citation: "\"Karnataka cuisine\" and \"Masala dosa\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Karnataka_cuisine",
      },
      {
        id: 3,
        citation: "Karnataka Tourism, Mysuru food guide.",
        url: "https://karnatakatourism.org/",
      },
    ],
  },
  {
    slug: "architecture",
    number: 19,
    title: "Architecture",
    part: PARTS[5],
    period: "9th century – 20th century",
    summary:
      "Dravida temple form, Hoysala ornament, Indo-Saracenic public buildings and the planned civic architecture of the princely capital.",
    keywords: ["Indo-Saracenic", "Dravida", "Hoysala", "Henry Irwin", "civic architecture"],
    sections: [
      {
        heading: "Temple idioms",
        paragraphs: [
          "The region's temple architecture moves from restrained Ganga-period Dravida shrines at Talakadu, through the stellate, soapstone-carved Hoysala mode at Somanathapura, to the tall granite gopuras and pillared mandapas of the Vijayanagara and Nayaka periods visible at Srirangapatna and on Chamundi Hill.[1]",
        ],
      },
      {
        heading: "Indo-Saracenic Mysore",
        paragraphs: [
          "From the late nineteenth century the state commissioned public buildings in the Indo-Saracenic manner, fusing Islamic domes and arcades with Hindu and Gothic detail. Amba Vilas (Mysore Palace, 1897–1912) by Henry Irwin is the best-known example; others include the Lansdowne Building, Devaraja Market, the Oriental Research Institute, Crawford Hall and the Mysore Medical College.[2]",
        ],
      },
      {
        heading: "Planned civic form",
        paragraphs: [
          "Under dewans Seshadri Iyer, Visvesvaraya and Mirza Ismail the city received boulevards, circles, parks, drainage and electric lighting — Mysore was among the first Indian cities lit by hydroelectric power from Shivanasamudra in 1905 — producing the low-rise, tree-lined heritage core that conservation plans now protect.[3]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Hoysala architecture\" and \"Dravidian architecture\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Dravidian_architecture",
      },
      {
        id: 2,
        citation: "\"Indo-Saracenic architecture\" and \"Mysore Palace\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Indo-Saracenic_architecture",
      },
      {
        id: 3,
        citation:
          "Karnataka State Gazetteer: Mysore District; Mysuru Heritage Conservation Committee documents.",
        url: "https://gazetteer.karnataka.gov.in/",
      },
    ],
  },
  {
    slug: "palaces",
    number: 20,
    title: "Palaces of Mysore",
    part: PARTS[5],
    period: "14th century – 1945",
    summary:
      "Amba Vilas and six other royal residences make Mysuru the 'City of Palaces'; each records a different phase of Wadiyar rule.",
    keywords: ["Amba Vilas", "Jaganmohan", "Lalitha Mahal", "Jayalakshmi Vilas", "Rajendra Vilas"],
    sections: [
      {
        heading: "Amba Vilas (Mysore Palace)",
        paragraphs: [
          "The present Mysore Palace was built between 1897 and 1912 to designs by the British architect Henry Irwin after fire destroyed the earlier wooden palace during a royal wedding in 1897. It is a three-storey grey granite structure with deep pink marble domes, a 44-metre five-storey tower, the Kalyana Mantapa with its stained-glass peacock ceiling, and the Durbar Hall housing the golden throne.[1]",
          "It is among the most visited monuments in India, receiving several million visitors a year, and is administered by the Mysore Palace Board.[2]",
        ],
      },
      {
        heading: "The other palaces",
        paragraphs: [
          "Jaganmohan Palace (1861) served as the royal residence while Amba Vilas was rebuilt and now houses the Jayachamarajendra Art Gallery, including works by Raja Ravi Varma. Jayalakshmi Vilas (1905) belongs to the University of Mysore and holds a folklore museum. Lalitha Mahal (1921), built for the Viceroy's visits, is now a hotel; Rajendra Vilas crowns Chamundi Hill; Cheluvamba Mansion houses the CSIR-Central Food Technological Research Institute; and the Karanji and Lokaranjan mahals complete the group.[3]",
        ],
      },
      {
        heading: "Srirangapatna's palaces",
        paragraphs: [
          "At Srirangapatna the Daria Daulat Bagh (1784), Tipu Sultan's summer palace, survives with its celebrated murals of the battle of Pollilur, while the Gumbaz mausoleum holds the tombs of Hyder Ali, Fakhr-un-Nisa and Tipu Sultan; both are ASI-protected monuments.[4]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Mysore Palace\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_Palace",
      },
      {
        id: 2,
        citation: "Mysore Palace Board, Government of Karnataka.",
        url: "https://mysorepalace.gov.in/",
      },
      {
        id: 3,
        citation: "\"Jaganmohan Palace\", \"Lalitha Mahal\", \"Jayalakshmi Vilas Mansion\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Jaganmohan_Palace",
      },
      {
        id: 4,
        citation:
          "Archaeological Survey of India, Bengaluru Circle; \"Daria Daulat Bagh\" and \"Gumbaz\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Daria_Daulat_Bagh",
      },
    ],
  },
  {
    slug: "temples",
    number: 21,
    title: "Temples and Sacred Sites",
    part: PARTS[5],
    period: "9th century – present",
    summary:
      "Chamundeshwari, Somanathapura, Talakadu's buried shrines, Srirangapatna's Ranganathaswamy and the Jain centre of Shravanabelagola.",
    keywords: ["Chamundeshwari", "Somanathapura", "Ranganathaswamy", "Talakadu", "Nanjangud"],
    sections: [
      {
        heading: "Chamundeshwari on the hill",
        paragraphs: [
          "The Chamundeshwari temple, the tutelary shrine of the Wadiyars, stands atop Chamundi Hill. Its seven-tier gopura dates chiefly to the eighteenth century, with the temple's earlier fabric considerably older and repeated royal endowments recorded through the medieval and modern periods; Krishnaraja Wadiyar III presented the temple's simhavahana and other ornaments.[1] A monolithic Nandi of about 4.9 metres, carved in 1659, stands on the hill road.",
        ],
      },
      {
        heading: "Riverine shrines",
        paragraphs: [
          "The Ranganathaswamy temple at Srirangapatna is the first of the three Ranga kshetras on the Kaveri, with Ganga-period origins and later Hoysala and Vijayanagara additions.[2] At Talakadu the Panchalinga shrines — Vaidyeshvara, Pathaleshwara, Maruleshwara, Arkeshwara and Mallikarjuna — are periodically excavated from encroaching sand and are the focus of the Panchalinga Darshana held roughly every twelve years.[3]",
          "Nanjangud's Srikanteshwara temple, on the Kabini, is among the largest in Karnataka and received substantial Wadiyar and, notably, Tipu Sultan patronage — the famous emerald linga is traditionally attributed to his gift.[4]",
        ],
      },
      {
        heading: "Jain and other traditions",
        paragraphs: [
          "Shravanabelagola in neighbouring Hassan district remains the principal Digambara Jain pilgrimage centre of the south. Within the city, St Philomena's Cathedral (consecrated 1956, Neo-Gothic, modelled on Cologne Cathedral) and the Jama Masjid at Srirangapatna record the region's Christian and Muslim histories.[5]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Chamundeshwari Temple\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Chamundeshwari_Temple",
      },
      {
        id: 2,
        citation: "\"Ranganathaswamy Temple, Srirangapatna\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Ranganathaswamy_Temple,_Srirangapatna",
      },
      {
        id: 3,
        citation: "\"Talakadu\", Wikipedia; Archaeological Survey of India excavation reports.",
        url: "https://en.wikipedia.org/wiki/Talakad",
      },
      {
        id: 4,
        citation: "\"Sri Srikanteshwara Temple, Nanjangud\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Srikanteshwara_Temple,_Nanjangud",
      },
      {
        id: 5,
        citation: "\"St. Philomena's Cathedral, Mysore\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/St._Philomena%27s_Cathedral,_Mysore",
      },
    ],
  },
  {
    slug: "economy",
    number: 22,
    title: "Economy and Industry",
    part: PARTS[6],
    period: "1799 – present",
    summary:
      "Sandalwood, silk, gold, hydroelectricity and steel: the princely state's industrial policy created much of Karnataka's modern economic base.",
    keywords: ["silk", "sandalwood", "KGF", "Bhadravati", "hydroelectric", "Infosys"],
    sections: [
      {
        heading: "State-led industrialisation",
        paragraphs: [
          "From the 1880s the Mysore government actively promoted industry: the Kolar Gold Fields were developed from 1880 and for decades supplied most of India's gold; the Shivanasamudra hydroelectric station (1902–1905) was among Asia's earliest and first powered the KGF mines and then Bangalore and Mysore; the Mysore Iron Works at Bhadravati opened in 1923.[1]",
          "Sir M. Visvesvaraya's Mysore Economic Conference (from 1911) institutionalised planning, and the Bank of Mysore (1913), the University of Mysore (1916) and Krishnaraja Sagar (1932) all belong to this programme.[2]",
        ],
      },
      {
        heading: "Silk and sandalwood",
        paragraphs: [
          "Sericulture, expanded under Tipu Sultan and revived with Japanese technical help in the twentieth century, remains a defining industry; Karnataka is India's largest silk producer and Mysore Silk carries a Geographical Indication.[3] Sandalwood oil distillation, begun as a state enterprise during the First World War when exports were blocked, produced Mysore Sandal Soap in 1916, still manufactured by Karnataka Soaps and Detergents Ltd.[4]",
        ],
      },
      {
        heading: "The contemporary mix",
        paragraphs: [
          "Today the Mysuru economy rests on tourism, education and health services, IT and BPO (with a major Infosys development centre), industrial estates at Hebbal, Hootagalli and Nanjangud, and agro-processing built on the Kaveri command area's sugarcane, paddy, and horticulture.[5]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"Kolar Gold Fields\", \"Shivanasamudra Falls\", \"Visvesvaraya Iron and Steel Plant\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Kolar_Gold_Fields",
      },
      {
        id: 2,
        citation: "\"M. Visvesvaraya\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/M._Visvesvaraya",
      },
      {
        id: 3,
        citation: "\"Mysore silk\", Wikipedia; Central Silk Board, Government of India.",
        url: "https://en.wikipedia.org/wiki/Mysore_silk",
      },
      {
        id: 4,
        citation: "\"Mysore Sandal Soap\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_Sandal_Soap",
      },
      {
        id: 5,
        citation:
          "District Statistical Handbook, Mysuru; Department of Industries and Commerce, Government of Karnataka.",
        url: "https://mysore.nic.in/",
      },
    ],
  },
  {
    slug: "education",
    number: 23,
    title: "Education and Research",
    part: PARTS[6],
    period: "1833 – present",
    summary:
      "From the Maharaja's College to CFTRI and the Oriental Research Institute, Mysuru has been a research city for more than a century.",
    keywords: ["University of Mysore", "CFTRI", "ORI", "Maharaja's College", "CIIL"],
    sections: [
      {
        heading: "Foundations",
        paragraphs: [
          "Public education in Mysore expanded under the Commission and after the Rendition; the Maharaja's College traces its origins to a school founded in 1833. In 1916 the University of Mysore was established — the sixth university in India and the first in a princely state — with Kannada as a medium of instruction alongside English.[1]",
        ],
      },
      {
        heading: "Research institutions",
        paragraphs: [
          "The Oriental Research Institute, founded in 1891, houses tens of thousands of palm-leaf manuscripts, and is where the manuscript of Kautilya's Arthashastra was identified and published by R. Shamasastry in 1909 — a discovery that reshaped the study of ancient Indian statecraft.[2]",
          "Later foundations include the CSIR-Central Food Technological Research Institute (1950), the Central Institute of Indian Languages (1969), the Defence Food Research Laboratory, the All India Institute of Speech and Hearing, JSS institutions and the National Institute of Engineering.[3]",
        ],
      },
      {
        heading: "Scholarship on Mysore's past",
        paragraphs: [
          "The state's own scholarship is central to the historiography of Karnataka: B. L. Rice's Epigraphia Carnatica and Gazetteer, the Mysore Archaeological Department's annual reports, and the work of S. Srikanta Sastri at the University of Mysore remain standard references.[4]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"University of Mysore\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/University_of_Mysore",
      },
      {
        id: 2,
        citation: "\"Oriental Research Institute Mysore\" and \"R. Shamasastry\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Oriental_Research_Institute_Mysore",
      },
      {
        id: 3,
        citation: "\"Central Food Technological Research Institute\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Central_Food_Technological_Research_Institute",
      },
      {
        id: 4,
        citation:
          "S. Srikanta Sastri, Sources of Karnataka History, vol. I, University of Mysore, 1940.",
        url: "https://www.srikanta-sastri.org/",
      },
    ],
  },
  {
    slug: "tourism",
    number: 24,
    title: "Tourism and Heritage Management",
    part: PARTS[6],
    period: "20th century – present",
    summary:
      "Palaces, parks, wildlife reserves and World Heritage sites — and the conservation pressures that come with several million annual visitors.",
    keywords: ["tourism", "Brindavan Gardens", "Nagarhole", "heritage", "conservation"],
    sections: [
      {
        heading: "The visitor circuit",
        paragraphs: [
          "The core circuit comprises Mysore Palace, Chamundi Hill, St Philomena's Cathedral, the Mysore Zoo (Sri Chamarajendra Zoological Gardens, established 1892 and among the oldest zoos in India), Karanji and Kukkarahalli lakes, and the Brindavan Gardens below Krishnaraja Sagar.[1]",
          "Day excursions reach Srirangapatna, Somanathapura, Talakadu, Shivanasamudra, Nanjangud, Bandipur and Nagarhole national parks, and the Ranganathittu bird sanctuary.[2]",
        ],
      },
      {
        heading: "Heritage protection",
        paragraphs: [
          "Monuments are protected at three levels: centrally by the Archaeological Survey of India (Bengaluru Circle), by the Karnataka Department of Archaeology, Museums and Heritage, and locally by the Mysuru heritage conservation framework applied through the city corporation and development authority.[3]",
          "The Hoysala ensemble at Somanathapura joined the UNESCO World Heritage List in 2023, adding international obligations for buffer-zone management.[4]",
        ],
      },
      {
        heading: "Pressures",
        paragraphs: [
          "Visitor volumes concentrated around Dasara, traffic in the heritage core, groundwater and lake health, and unregulated construction near protected monuments are the recurring conservation issues identified in state and civic planning documents.[3]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "Karnataka Tourism, Mysuru destination pages.",
        url: "https://karnatakatourism.org/destinations/mysuru/",
      },
      {
        id: 2,
        citation: "\"Mysore Zoo\", \"Brindavan Gardens\", \"Ranganathittu Bird Sanctuary\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mysore_Zoo",
      },
      {
        id: 3,
        citation:
          "Archaeological Survey of India, Bengaluru Circle; Karnataka Department of Archaeology, Museums and Heritage.",
        url: "https://asi.nic.in/",
      },
      {
        id: 4,
        citation: "UNESCO World Heritage Centre, \"Sacred Ensembles of the Hoysalas\".",
        url: "https://whc.unesco.org/en/list/1670/",
      },
    ],
  },
  {
    slug: "famous-personalities",
    number: 25,
    title: "Famous Personalities",
    part: PARTS[6],
    period: "17th century – present",
    summary:
      "Rulers, engineers, scholars, musicians and writers whose work is inseparable from the history of Mysore.",
    keywords: ["Visvesvaraya", "Kuvempu", "R. K. Narayan", "Shamasastry", "Purnaiah"],
    sections: [
      {
        heading: "Statesmen and administrators",
        paragraphs: [
          "Sir M. Visvesvaraya (1861–1962), born at Muddenahalli and Dewan of Mysore 1912–1918, was an engineer of the Krishnaraja Sagar dam and the automatic sluice gate, recipient of the Bharat Ratna in 1955; his birthday, 15 September, is India's Engineer's Day.[1] Dewan Purnaiah, K. Seshadri Iyer and Sir Mirza Ismail shaped successive phases of state modernisation.[2]",
        ],
      },
      {
        heading: "Scholars and scientists",
        paragraphs: [
          "R. Shamasastry (1868–1944) discovered and edited the Arthashastra manuscript at the Oriental Research Institute. B. L. Rice (1837–1927) compiled the Epigraphia Carnatica and the Mysore Gazetteer. S. Srikanta Sastri (1904–1974) of the University of Mysore wrote extensively on Karnataka's sources and Indian cultural history.[3]",
        ],
      },
      {
        heading: "Arts and letters",
        paragraphs: [
          "Kuvempu (K. V. Puttappa), the first Kannada Jnanpith laureate and author of the state anthem, taught at Mysore and served as its vice-chancellor. R. K. Narayan set his fictional Malgudi in a landscape drawn from Mysore. Veene Sheshanna and Mysore Vasudevacharya defined the city's musical lineage, and Raja Ravi Varma worked for the Mysore court, with major canvases in the Jaganmohan gallery.[4]",
        ],
      },
    ],
    references: [
      {
        id: 1,
        citation: "\"M. Visvesvaraya\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/M._Visvesvaraya",
      },
      {
        id: 2,
        citation: "\"Mirza Ismail\" and \"Diwan of Mysore\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Mirza_Ismail",
      },
      {
        id: 3,
        citation: "\"R. Shamasastry\", \"Benjamin Lewis Rice\", \"S. Srikanta Sastri\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Benjamin_Lewis_Rice",
      },
      {
        id: 4,
        citation: "\"Kuvempu\" and \"R. K. Narayan\", Wikipedia.",
        url: "https://en.wikipedia.org/wiki/Kuvempu",
      },
    ],
  },
];

export const getChapter = (slug: string) => chapters.find((c) => c.slug === slug);

export const chaptersByPart = PARTS.map((part) => ({
  part,
  items: chapters.filter((c) => c.part === part),
}));

export { wiki };
