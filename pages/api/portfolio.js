const portfolio = [
  {
    projectName: "Education Times",
    image: "card-images/et.png",
    description:
      "Part of Times of India focused on education platform for articles, exams, counsellors, colleges, study abroad, coaching, Q&A and events. - Educationtimes.com",
    technologiesUsed: [
      "Next.js",
      "Javascript",
      "React.js",
      "Tailwind css ",
      "html/css",
      "DOM Manipulation",
      "Redux",
      "git",
      "Next Outh",
    ],
    url: "https://www.educationtimes.com/",
  },
  {
    projectName: "Times Ascent",
    image: "card-images/ta.png",
    description:
      "Times Ascent, a part of The Times of India, is focused on career enhancement, jobs, upskill courses, latest events, trending news, remote work, human resource, free resume maker, psychometric tests, interview tips- timesascent.com",
    technologiesUsed: [
      "Next.js",
      "Javascript",
      "React.js",
      "Tailwind css ",
      "html/css",
      "DOM Manipulation",
      "Redux",
      "git",
      "Next Outh",
    ],
    url: "https://timesascent.com/",
  },
  {
    projectName: "Education Times Admin Panel",
    image: "card-images/etAdmin.png",
    description:
      "Designed and developed many sections of admin panel for educationTimes for efficient management of content and data  entries, implementing CRUD (Create, Update, Delete) operations . ",
    technologiesUsed: [
      "Next.js",
      "Javascript",
      "React.js",
      "Tailwind css ",
      "html/css",
      "DOM Manipulation",
      "Redux",
      "git",
      "Next Outh",
    ],
    url: "https://etadmin.onecorp.co.in/",
  },
  {
    projectName: "Times Ascent Admin Panel ",
    image: "card-images/taAdmin.png",
    description:
      "Designed and developed many  sections of admin panel for timesAscent for efficient management of content and data entries, implementing CRUD(Create, Update, Delete) ",
    technologiesUsed: [
      "Next.js",
      "Javascript",
      "React.js",
      "Tailwind css ",
      "html/css",
      "DOM Manipulation",
      "Redux",
      "git",
      "Next Outh",
    ],
    url: "https://timesbi.onecorp.co.in/",
  },
];
export default function handler(req, res) {
  res.status(200).json(portfolio);
}
