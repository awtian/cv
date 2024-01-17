import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Awtian Akbar",
  initials: "AA",
  location: "Surabaya, East Java, Indonesia",
  locationLink: "https://www.google.com/maps/place/surabaya",
  about:
    "A witty problem solver first, Full Stack Engineer afterward, i love building useful products",
  summary:
    "A Full Stack Software Engineer with 5 years of experiences. I've worked as an engineer on many different industries including but not limited to Education, Fintech, and FnB. I'm a natural problem solver and have short experience leading an engineering team.",
  avatarUrl: "https://avatars.githubusercontent.com/u/33123999?v=4",
  personalWebsiteUrl: "https://awtian.com",
  contact: {
    email: "me@awtian.com",
    tel: "+6281330078999",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/awtian",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/awtian/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/awtian",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Hacktiv8 Indonesia",
      degree: "Fullstack Javascript Bootcamp Graduates",
      start: "2017",
      end: "2018",
    },
    {
      school: "Airlangga University",
      degree: "Bachelor's Degree in Management",
      start: "2012",
      end: "2017",
    },
  ],
  work: [
    {
      company: "Wallex",
      link: "https://wallex.asia",
      badges: ["Remote"],
      title: "Senior Full Stack Developer",
      start: "2023",
      end: "Present",
      description:
        "I'm working as a Senior Full-stack Engineer at Wallex. Its a company that ease the process of doing an international transfer. I'm working mostly on the Collection Request feature - which is a feature for our clients to be able to send an payable invoice to our customer. For now, our clients for this product is mostly foreign hospitals receiving payments from Indonesian customers. I code both on the backend and the frontend. It's ExpressJS on the backend and ReactJS on the frontend",
    },
    {
      company: "BowerBird",
      link: "https://www.bowerbird.io/",
      badges: ["Remote"],
      title: "Senior Frontend Engineer",
      start: "2023",
      end: "2023",
      description:
        `I was working as a Senior Front-end Engineer on BowerBird, which is an Australian startup which connect architects with publisher because architect does not advertise.
        The tech stack i was using on BowerBird was VueJS most of the times. My responsibility was including the Kit Feature (user submission) and also the Chat Feature (user chats and chat groups)`,
    },
    {
      company: "UltraVoucher",
      link: "https://ultravoucher.co.id/",
      badges: ["Remote"],
      title: "Frontend Engineer → Acting Tech Lead", 
      start: "2021",
      end: "2023",
      description:
        "I started off my career on UltraVoucher as a frontend engineer working with various tools ranging from VueJS with Quasar framework to some React Typescript project. I accomplished a unique requirement to hide api calls using SSR, which propel me into be trusted to be the lead of KFC Voucher Management System (VMS), I contribute on the VMS as a full-stack engineer which include VueJS and ExpressJS.",
    },
    {
      company: "Frik.co",
      link: "https://frik.co",
      badges: ["Self-employed"],
      title: "Everything Officer",
      start: "2019",
      end: "present",
      description: "Self branding for a software house and as a way to recieve projects",
    },
    {
      company: "Hacktiv8 Indonesia",
      link: "https://www.hacktiv8.com",
      badges: [],
      title: "Fullstack Javascript Instructor",
      start: "2018",
      end: "2019",
      description: "I worked as a Full-stack Javascript Instructor and successfully assisted 100+ students to be employed as a Junior Engineer during my time on Hacktiv8 Indonesia.",
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React/Next.js",
    "Vue.js",
    "Node.js",
    "Nest.js",
    "SQL/NoSQL",
  ],
  projects: [
    {
      title: "Graha Sampurna Indah",
      techStack: [
        "Side Project",
        "JavaScript",
        "Next.js",
      ],
      description: "A platform to build a customizable house from ground up!",
      link: {
        label: "https://gsi.frik.co/build",
        href: "https://gsi.frik.co/build",
      },
    },
    {
      title: "Levi's Band Hunt 2018",
      techStack: ["Side Project", "Laravel", "Vue.js"],
      description:
        "Was a part of the team to create Indonesian Levi's band hunt site and system on 2018",
      link: {
        label: "lbh2018.frik.co",
        href: "https://lbh2018.frik.co/",
      },
    },
    {
      title: "awtian.com",
      techStack: ["Side-project", "Next.js", "CV"],
      description:
        "My personal website, created with Jarocki's CV template",
      link: {
        label: "awtian.com",
        href: "https://awtian.com/",
      },
    },
    {
      title: "Levi's Asian Game Campaign",
      techStack: ["Side Project", "Vue.js"],
      description:
        "A simple game for Indonesian Levi's asian game campaign, click 'main disini' button to try the game!",
      link: {
        label: "levi's asian game",
        href: "https://levistee.awtian.com/",
      },
    },
    {
      title: "ITS IE Fair 2021",
      techStack: ["Side Project", "Gatsby.js", "Google Cloud Function"],
      description:
        "Responsible on creating the landing page for IE Fair 2021, and handling the backend request using google cloud function",
      link: {
        label: "itsiefair.com",
        href: "https://iefair2021.frik.co/",
      },
    },
    {
      title: "ITS IE Fair 2022",
      techStack: ["Side Project", "Next.js", "Google Cloud Function"],
      description:
        "Responsible on creating the landing page for IE Fair 2022, and handling the backend request using google cloud function",
      link: {
        label: "itsiefair.com",
        href: "https://iefair22.frik.co/",
      },
    },
    {
      title: "Wallex",
      techStack: ["Senior Fullstack Developer", "NodeJS", "Typescript", "Express", "React"],
      description:
        "Global Payments Solutions to Accelerate Business Growth. Pay the world with Wallex.",
      link: {
        label: "wallex.asia",
        href: "https://wallex.asia/",
      },
    },
    {
      title: "UltraVoucher",
      techStack: [
        "Acting Team Lead",
        "Fullstack Developer",
        "TypeScript",
        "React/Vue",
        "Node.js"
      ],
      description:
        "Use single app to buy any kind of vouchers",
      link: {
        label: "ultravoucher.co.id/",
        href: "https://ultravoucher.co.id/",
      },
    },
    {
      title: "BowerBird",
      techStack: [
        "Senior Frontend Developer",
        "TypeScript",
        "VueJs",
      ],
      description:
        "Creative collaboration platform that combines video conferencing and HD media streaming",
      logo: EvercastLogo,
      link: {
        label: "evercast.us",
        href: "https://www.evercast.us/",
      },
    },
  ],
} as const;
