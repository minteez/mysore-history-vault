export type QuizQuestion = {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

export const quiz: QuizQuestion[] = [
  {
    question: "From which capital did the Western Gangas rule Gangavadi after leaving Kolar?",
    options: ["Halebidu", "Talakadu", "Banavasi", "Srirangapatna"],
    answer: 1,
    explanation:
      "Talakadu on the Kaveri was the principal Western Ganga capital until Chola conquest in 1004 CE.",
  },
  {
    question: "Who commissioned the Gommateshwara monolith at Shravanabelagola in 981 CE?",
    options: ["Vishnuvardhana", "Chavundaraya", "Durvinita", "Krishnadevaraya"],
    answer: 1,
    explanation: "The Ganga minister and general Chavundaraya commissioned the 17.5 m statue of Bahubali.",
  },
  {
    question: "Which Hoysala temple stands in Mysore district and was consecrated in 1268?",
    options: [
      "Chennakeshava, Belur",
      "Hoysaleswara, Halebidu",
      "Chennakesava, Somanathapura",
      "Srikanteshwara, Nanjangud",
    ],
    answer: 2,
    explanation:
      "Somanathapura's Chennakesava temple was built by Somanatha Dandanayaka and inscribed by UNESCO in 2023.",
  },
  {
    question: "In which year did Raja Wadiyar I take Srirangapatna?",
    options: ["1565", "1610", "1673", "1399"],
    answer: 1,
    explanation:
      "The capture of Srirangapatna in 1610 marked Mysore's transition from Vijayanagara feudatory to independent kingdom.",
  },
  {
    question: "What military innovation is Mysore under Hyder Ali and Tipu Sultan best known for?",
    options: ["Iron-cased rockets", "Naval mines", "Repeating rifles", "Armoured elephants"],
    answer: 0,
    explanation:
      "Mysorean iron-cased rockets influenced later British Congreve rocket designs after 1799.",
  },
  {
    question: "What event of 25 March 1881 restored Wadiyar rule?",
    options: ["The Rendition", "The Treaty of Mangalore", "The Instrument of Accession", "The Rajyotsava"],
    answer: 0,
    explanation: "The Rendition ended fifty years of direct British Commission administration.",
  },
  {
    question: "Who designed the present Amba Vilas (Mysore Palace), completed in 1912?",
    options: ["Edwin Lutyens", "Henry Irwin", "M. Visvesvaraya", "Robert Chisholm"],
    answer: 1,
    explanation:
      "Henry Irwin's Indo-Saracenic design replaced the wooden palace destroyed by fire in 1897.",
  },
  {
    question: "In which year was Mysore State renamed Karnataka?",
    options: ["1956", "1947", "1973", "2014"],
    answer: 2,
    explanation: "The renaming took effect on 1 November 1973, now observed as Kannada Rajyotsava.",
  },
  {
    question: "Which manuscript did R. Shamasastry identify at Mysore's Oriental Research Institute?",
    options: ["Kavirajamarga", "Arthashastra", "Sritattvanidhi", "Rajatarangini"],
    answer: 1,
    explanation: "Shamasastry published Kautilya's Arthashastra in 1909, transforming the study of ancient statecraft.",
  },
  {
    question: "Which scholar compiled the Epigraphia Carnatica?",
    options: ["Burton Stein", "B. L. Rice", "S. Srikanta Sastri", "Mark Wilks"],
    answer: 1,
    explanation:
      "Benjamin Lewis Rice edited the twelve-volume Epigraphia Carnatica between 1886 and 1904.",
  },
];
