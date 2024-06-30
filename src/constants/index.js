import {
  benefitIcon1,
  benefitIcon2,
  benefitIcon3,
  benefitIcon4,
  benefitIcon5,
  benefitIcon6,
  benefitImage2,
  chromecast,
  disc02,
  discord,
  discordBlack,
  facebook,
  figma,
  file02,
  homeSmile,
  instagram,
  notification2,
  notification3,
  notification4,
  plusSquare,
  recording01,
  recording03,
  roadmap1,
  roadmap2,
  roadmap3,
  roadmap4,
  searchMd,
  sliders04,
  telegram,
  twitter,
  yourlogo,
  noah,
  david,
  lina,
  konrad,
  chris,
  nils,
  react,
  drive,
  illustrator,
  whatapp,
  git,
  ckockify
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Features",
    url: "#features",
  },
  {
    id: "1",
    title: "Possibilities",
    url: "#possibilities"
  },
  {
    id: "2",
    title: "About us",
    url: "#about-us",
  },
  {
    id: "3",
    title: "Our Tools",
    url: "#our-tools",
  },
];

export const heroIcons = [homeSmile, file02, searchMd, plusSquare];

export const notificationImages = [chris, david, noah, lina, nils, konrad];

export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];

export const brainwaveServices = [
  "Reliable Events",
  "Any Topic",
  "Fast Generation",
];

export const brainwaveServicesIcons = [
  recording03,
  recording01,
  disc02,
  chromecast,
  sliders04,
];

export const roadmap = [
  {
    id: "0",
    title: "Voice recognition",
    text: "Enable the chatbot to understand and respond to voice commands, making it easier for users to interact with the app hands-free.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap1,
    colorful: true,
  },
  {
    id: "1",
    title: "Gamification",
    text: "Add game-like elements, such as badges or leaderboards, to incentivize users to engage with the chatbot more frequently.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap2,
  },
  {
    id: "2",
    title: "Chatbot customization",
    text: "Allow users to customize the chatbot's appearance and behavior, making it more engaging and fun to interact with.",
    date: "May 2023",
    status: "done",
    imageUrl: roadmap3,
  },
  {
    id: "3",
    title: "Integration with APIs",
    text: "Allow the chatbot to access external data sources, such as weather APIs or news APIs, to provide more relevant recommendations.",
    date: "May 2023",
    status: "progress",
    imageUrl: roadmap4,
  },
];

export const collabText =
  "The tools we use ensure a smooth workflow and seamless teamwork. They enable effective communication, efficient task management, and automated processes, keeping us aligned and productive.";

export const collabContent = [
  {
    id: "0",
    title: "Seamless Integration",
  },
  {
    id: "1",
    title: "Effective Collaboration",
  },
  {
    id: "2",
    title: "Agile Methodologies",
  },
];

export const collabApps = [
  {
    id: "0",
    title: "Figma",
    icon: figma,
    width: 26,
    height: 36,
  },
  {
    id: "1",
    title: "Clockify",
    icon: ckockify,
    width: 34,
    height: 36,
  },
  {
    id: "2",
    title: "Discord",
    icon: discord,
    width: 36,
    height: 28,
  },
  {
    id: "3",
    title: "WhatsApp",
    icon: whatapp,
    width: 34,
    height: 35,
  },
  {
    id: "4",
    title: "Illustrator",
    icon: illustrator,
    width: 34,
    height: 34,
  },
  {
    id: "5",
    title: "Git",
    icon: git,
    width: 34,
    height: 34,
  },
  {
    id: "6",
    title: "React",
    icon: react,
    width: 26,
    height: 34,
  },
  {
    id: "7",
    title: "Drive",
    icon: drive,
    width: 38,
    height: 32,
  },
];

export const pricing = [
  {
    id: "0",
    title: "Angelina Eder",
    description: "",
    image: lina,
    features: [
      "Team Leader",
      "Documentation",
      "Head of Sprint Planning"
    ],
  },
  {
    id: "1",
    title: "Nils Heck",
    description: "",
    image: nils,
    features: [
      "Co Leader",
      "Development",
      "Quality Assurance",
    ],
  },
  {
    id: "2",
    title: "Noah Richardt",
    description: "",
    image: noah,
    features: [
      "Head of Development",
      "Head of Code Documentation",
      "Quality Assurance",
    ],
  },
  {
    id: "3",
    title: "David Werner",
    description: "",
    image: david,
    features: [
        "Client Interaction",
        "Software Engineer",
        "Development",
    ]
  },
  {
    id: "4",
    title: "Christoph Stickl",
    description: "",
    image: chris,
    features: [
        "Head of Client Interaction",
        "Development",
        "Quality Assurance",
    ]
  },
  {
    id: "5",
    title: "Konrad Krauth",
    description: "",
    image: konrad,
    features: [
        "Head of Quality Assurance",
        "Development",
        "Documentation"
    ]
  }
];

export const benefits = [
  {
    id: "0",
    title: "Ask anything",
    text: "Lets users quickly find answers to their questions without having to search through multiple sources.",
    backgroundUrl: "./src/assets/benefits/card-1.svg",
    iconUrl: benefitIcon1,
    imageUrl: benefitImage2,
  },
  {
    id: "1",
    title: "Generate Events",
    text: "The system uses event generation algorithms to create customized and relevant events based on user preferences and requirements.",
    backgroundUrl: "./src/assets/benefits/card-2.svg",
    iconUrl: benefitIcon2,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "2",
    title: "Improve your Experience",
    text: "Ask the AI Assistant for help and get Information on your systems shortcomings",
    backgroundUrl: "./src/assets/benefits/card-3.svg",
    iconUrl: benefitIcon3,
    imageUrl: benefitImage2,
  },
  {
    id: "3",
    title: "Fast responding",
    text: "Ensures a quick and efficient workflow in an Event Storming scenario.",
    backgroundUrl: "./src/assets/benefits/card-4.svg",
    iconUrl: benefitIcon4,
    imageUrl: benefitImage2,
    light: true,
  },
  {
    id: "4",
    title: "Create Features from scratch",
    text: "Lets inexperienced users generate test features from a simple idea.",
    backgroundUrl: "./src/assets/benefits/card-5.svg",
    iconUrl: benefitIcon5,
    imageUrl: benefitImage2,
  },
  {
    id: "5",
    title: "Find the next step",
    text: "Use the AI companion to guide you through the Event Storming process.",
    backgroundUrl: "./src/assets/benefits/card-6.svg",
    iconUrl: benefitIcon6,
    imageUrl: benefitImage2,
  },
];

export const socials = [
  {
    id: "0",
    title: "Discord",
    iconUrl: discordBlack,
    url: "https://discord.gg/gr98WTHeqU",
  },
];
